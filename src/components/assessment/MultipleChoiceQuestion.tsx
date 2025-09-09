import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AssessmentQuestion } from "@/data/assessmentQuestions";

interface MultipleChoiceQuestionProps {
  question: AssessmentQuestion;
  onAnswer: (answer: string) => void;
  questionNumber: number;
}

const MultipleChoiceQuestion = ({ question, onAnswer, questionNumber }: MultipleChoiceQuestionProps) => {
  return (
    <div className="space-y-8">
      {/* Question */}
      <Card className="card-glow">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-primary font-bold text-sm">{questionNumber}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-exo font-semibold text-foreground leading-relaxed">
              {question.question}
            </h3>
          </div>
        </CardContent>
      </Card>

      {/* Answer Options */}
      <div className="grid gap-4">
        {question.options.map((option, index) => {
          const letter = option.charAt(0);
          const text = option.substring(3); // Remove "A: " prefix
          
          return (
            <Button
              key={index}
              variant="outline"
              onClick={() => onAnswer(option)}
              className="card-hover text-left p-6 h-auto justify-start group relative overflow-hidden"
            >
              <div className="flex items-start gap-4 w-full">
                <div className="w-8 h-8 bg-primary/10 group-hover:bg-primary/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <span className="text-primary font-bold">{letter}</span>
                </div>
                <div className="text-foreground group-hover:text-primary transition-colors">
                  {text}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;