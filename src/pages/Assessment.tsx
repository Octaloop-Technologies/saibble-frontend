import { useState } from "react";
import AssessmentLanding from "@/components/assessment/AssessmentLanding";
import AssessmentForm from "@/components/assessment/AssessmentForm";

const Assessment = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  const handleStartAssessment = () => {
    setShowAssessment(true);
    // Smooth scroll to top when switching to assessment
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    setShowAssessment(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {!showAssessment ? (
        <AssessmentLanding onStartAssessment={handleStartAssessment} />
      ) : (
        <AssessmentForm onBackToLanding={handleBackToLanding} />
      )}
    </div>
  );
};

export default Assessment;