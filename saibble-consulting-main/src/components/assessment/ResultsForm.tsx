import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AssessmentScore, SegmentationData } from "@/data/assessmentQuestions";

interface ResultsFormProps {
  scores: AssessmentScore;
  segmentationData: SegmentationData;
}

const ResultsForm = ({ scores, segmentationData }: ResultsFormProps) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Form submission detection via postMessage API
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "form_submitted" || event.data === "form_submitted") {
        setIsFormSubmitted(true);
        setTimeout(() => {
          navigate("/thank-you");
        }, 1000);
      }
    };

    window.addEventListener("message", handleMessage);

    // Periodic URL checking for completion indicators
    const checkCompletion = setInterval(() => {
      const iframe = document.getElementById("assessment-form") as HTMLIFrameElement;
      if (iframe) {
        try {
          const iframeSrc = iframe.src;
          if (iframeSrc.includes("success") || iframeSrc.includes("thank") || iframeSrc.includes("complete")) {
            setIsFormSubmitted(true);
            setTimeout(() => {
              navigate("/thank-you");
            }, 1000);
          }
        } catch (error) {
          // Cross-origin restrictions prevent URL access
          console.log("Cannot access iframe URL due to cross-origin restrictions");
        }
      }
    }, 2000);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearInterval(checkCompletion);
    };
  }, [navigate]);

  const formUrl = `https://link.sparkdigitalinc.com/widget/form/6AES5goTidqyHTciD4hv?overall_score=${scores.overall}&sales_score=${scores.salesOperational}&technical_score=${scores.technicalData}&security_score=${scores.securityCompliance}&ai_area=${encodeURIComponent(segmentationData.aiArea || '')}&department=${encodeURIComponent(segmentationData.department || '')}&other_department=${encodeURIComponent(segmentationData.otherDepartment || '')}`;

  if (isFormSubmitted) {
    return (
      <Card className="card-glow">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-exo font-bold text-glow mb-2">
            Thank You!
          </h3>
          <p className="text-muted-foreground">
            Redirecting you to your confirmation page...
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-glow">
      <CardContent className="p-2">
        <div className="bg-gradient-to-br from-background to-card rounded-lg overflow-hidden">
          <iframe
            id="assessment-form"
            src={formUrl}
            width="100%"
            height="848"
            style={{
              border: "none",
              borderRadius: "0.5rem",
            }}
            title="AI Readiness Assessment Results Form"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsForm;