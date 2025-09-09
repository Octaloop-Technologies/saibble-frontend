import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AssessmentScore, SegmentationData } from "@/data/assessmentQuestions";
import { 
  getReadinessStage, 
  getStageDescription, 
  getRoadmapSteps, 
  getExpectedMetrics, 
  getWeakAreas 
} from "@/utils/scoringUtils";
import ScoreSection from "./ScoreSection";
import ReadinessStageSection from "./ReadinessStageSection";
import RoadmapSection from "./RoadmapSection";
import ResultsForm from "./ResultsForm";
import { ArrowLeft, Download } from "lucide-react";

interface AssessmentResultsProps {
  scores: AssessmentScore;
  answers: Record<string, string>;
  segmentationData: SegmentationData;
  onBackToAssessment: () => void;
}

const AssessmentResults = ({ 
  scores, 
  answers, 
  segmentationData, 
  onBackToAssessment 
}: AssessmentResultsProps) => {
  const stage = getReadinessStage(scores.overall);
  const stageDescription = getStageDescription(stage);
  const roadmapSteps = getRoadmapSteps(scores.overall);
  const expectedMetrics = getExpectedMetrics(scores.overall);
  const weakAreas = getWeakAreas(scores);

  return (
    <div className="min-h-screen bg-background bg-geometric">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container-max px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={onBackToAssessment}
              className="btn-ghost flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Assessment
            </Button>
            
            <div className="text-sm text-muted-foreground">
              AI Readiness Results
            </div>
          </div>
        </div>
      </header>

      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Results Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-exo font-bold text-kinetic mb-4">
              Your AI Readiness Results
            </h1>
            <p className="text-xl text-muted-foreground">
              Personalized insights and recommendations for your business
            </p>
          </div>

          {/* Score Section */}
          <ScoreSection scores={scores} />

          {/* Readiness Stage Section */}
          <ReadinessStageSection 
            stage={stage}
            stageDescription={stageDescription}
            weakAreas={weakAreas}
          />

          {/* Roadmap Section */}
          <RoadmapSection 
            roadmapSteps={roadmapSteps}
            expectedMetrics={expectedMetrics}
            overallScore={scores.overall}
          />

          {/* Get Your Detailed Roadmap */}
          <Card className="card-glow">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-exo font-bold text-glow mb-4">
                Get Your Detailed Roadmap
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Enter your information below to receive a comprehensive PDF roadmap with 
                specific implementation steps, timelines, and ROI projections tailored to your assessment results.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-accent" />
                  Detailed PDF Report
                </div>
                <div>•</div>
                <div>Implementation Timeline</div>
                <div>•</div>
                <div>ROI Projections</div>
              </div>
            </CardContent>
          </Card>

          {/* Form Section */}
          <ResultsForm scores={scores} segmentationData={segmentationData} />
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;