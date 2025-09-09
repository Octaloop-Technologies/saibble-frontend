import { useState } from "react";
import { assessmentQuestions, AssessmentScore, SegmentationData } from "@/data/assessmentQuestions";
import { calculateScores } from "@/utils/scoringUtils";
import AssessmentHeader from "./AssessmentHeader";
import SectionHeader from "./SectionHeader";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import SegmentationQuestion from "./SegmentationQuestion";
import AssessmentResults from "./AssessmentResults";
import { Button } from "@/components/ui/button";
import { ChevronLeft, SkipForward } from "lucide-react";

interface AssessmentFormProps {
  onBackToLanding: () => void;
}

const AssessmentForm = ({ onBackToLanding }: AssessmentFormProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [segmentationData, setSegmentationData] = useState<SegmentationData>({});
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState<AssessmentScore | null>(null);

  const totalQuestions = assessmentQuestions.length;
  const currentQuestionData = assessmentQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const isSegmentationQuestion = currentQuestion >= 15;

  // Determine if we should show section header
  const shouldShowSectionHeader = 
    currentQuestion === 0 || 
    currentQuestion === 5 || 
    currentQuestion === 11 || 
    currentQuestion === 15;

  const handleAnswer = (answer: string, otherValue?: string) => {
    if (isSegmentationQuestion) {
      if (currentQuestion === 15) {
        setSegmentationData(prev => ({ ...prev, aiArea: answer }));
      } else if (currentQuestion === 16) {
        setSegmentationData(prev => ({ 
          ...prev, 
          department: answer,
          otherDepartment: answer === "Other" ? otherValue : undefined
        }));
      }
    } else {
      setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    }

    if (isLastQuestion) {
      // Calculate scores and show results
      const calculatedScores = calculateScores(answers);
      setScores(calculatedScores);
      setShowResults(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    if (isLastQuestion) {
      const calculatedScores = calculateScores(answers);
      setScores(calculatedScores);
      setShowResults(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  if (showResults && scores) {
    return (
      <AssessmentResults 
        scores={scores}
        answers={answers}
        segmentationData={segmentationData}
        onBackToAssessment={() => setShowResults(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background bg-geometric">
      <AssessmentHeader 
        currentQuestion={currentQuestion + 1}
        totalQuestions={totalQuestions}
        onBack={currentQuestion === 0 ? onBackToLanding : handlePrevious}
      />

      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {shouldShowSectionHeader && (
            <SectionHeader 
              title={currentQuestionData.section}
              icon={currentQuestionData.sectionIcon}
            />
          )}

          <div className="space-y-8">
            {isSegmentationQuestion ? (
              <SegmentationQuestion
                question={currentQuestionData}
                onAnswer={handleAnswer}
                questionNumber={currentQuestion + 1}
              />
            ) : (
              <MultipleChoiceQuestion
                question={currentQuestionData}
                onAnswer={handleAnswer}
                questionNumber={currentQuestion + 1}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="btn-ghost flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              {isSegmentationQuestion && (
                <Button
                  variant="outline"
                  onClick={handleSkip}
                  className="btn-ghost flex items-center gap-2"
                >
                  <SkipForward className="w-4 h-4" />
                  Skip Optional
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentForm;