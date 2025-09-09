import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";

interface AssessmentHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  onBack: () => void;
}

const AssessmentHeader = ({ currentQuestion, totalQuestions, onBack }: AssessmentHeaderProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
      <div className="container-max px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="btn-ghost flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Question {currentQuestion} of {totalQuestions}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground font-medium">Progress</span>
            <span className="text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default AssessmentHeader;