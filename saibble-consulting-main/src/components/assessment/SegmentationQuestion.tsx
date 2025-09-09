import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AssessmentQuestion } from "@/data/assessmentQuestions";

interface SegmentationQuestionProps {
  question: AssessmentQuestion;
  onAnswer: (answer: string, otherValue?: string) => void;
  questionNumber: number;
}

const SegmentationQuestion = ({ question, onAnswer, questionNumber }: SegmentationQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [otherValue, setOtherValue] = useState<string>("");

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption, otherValue);
    }
  };

  const isRadioType = question.type === "radio";
  const isDropdownType = question.type === "dropdown";
  const showOtherInput = selectedOption === "Other" && isDropdownType;

  return (
    <div className="space-y-8">
      {/* Question */}
      <Card className="card-glow">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-accent font-bold text-sm">{questionNumber}</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-exo font-semibold text-foreground leading-relaxed mb-2">
                {question.question}
              </h3>
              <p className="text-sm text-muted-foreground">
                This information helps us provide more targeted recommendations (optional)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Answer Options */}
      <div className="space-y-6">
        {isRadioType && (
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => setSelectedOption(option)}
                className={`card-hover text-left p-4 h-auto justify-start group relative overflow-hidden hover:border-primary/40 hover:bg-primary/5 ${
                  selectedOption === option ? 'border-primary bg-primary/10' : ''
                }`}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedOption === option ? 'border-primary bg-primary' : 'border-muted-foreground'
                  }`}>
                    {selectedOption === option && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-foreground">{option}</span>
                </div>
              </Button>
            ))}
          </div>
        )}

        {isDropdownType && (
          <div className="space-y-4">
            <Select value={selectedOption} onValueChange={setSelectedOption}>
              <SelectTrigger className="w-full p-4 text-left">
                <SelectValue placeholder="Select a department..." />
              </SelectTrigger>
              <SelectContent>
                {question.options.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {showOtherInput && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Please specify:
                </label>
                <Input
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                  placeholder="Enter your department..."
                  className="w-full"
                />
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button
            onClick={handleSubmit}
            disabled={!selectedOption || (showOtherInput && !otherValue.trim())}
            className="btn-neon px-8 py-3"
          >
            {questionNumber === 17 ? "Complete Assessment" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SegmentationQuestion;