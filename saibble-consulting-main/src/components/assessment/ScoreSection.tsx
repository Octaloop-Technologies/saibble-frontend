import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentScore } from "@/data/assessmentQuestions";
import { TrendingUp, Cog, Shield } from "lucide-react";

interface ScoreSectionProps {
  scores: AssessmentScore;
}

const ScoreSection = ({ scores }: ScoreSectionProps) => {
  const overallPercentage = Math.round((scores.overall / 60) * 100);
  const salesPercentage = Math.round((scores.salesOperational / 20) * 100);
  const technicalPercentage = Math.round((scores.technicalData / 24) * 100);
  const securityPercentage = Math.round((scores.securityCompliance / 16) * 100);

  const getSectionColor = (percentage: number) => {
    if (percentage >= 75) return "text-accent";
    if (percentage >= 50) return "text-primary";
    return "text-yellow-500";
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 75) return "bg-accent";
    if (percentage >= 50) return "bg-primary";
    return "bg-yellow-500";
  };

  return (
    <div className="space-y-8">
      {/* Overall Score */}
      <Card className="card-glow">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-exo font-bold text-glow mb-6">
            Overall AI Readiness Score
          </h2>
          
          <div className="mb-6">
            <div className="text-6xl font-exo font-bold text-kinetic mb-2">
              {scores.overall}<span className="text-2xl text-muted-foreground">/60</span>
            </div>
            <div className="text-xl text-muted-foreground">
              {overallPercentage}% Ready
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <Progress value={overallPercentage} className="h-3 mb-2" />
            <p className="text-sm text-muted-foreground">
              Your business shows <strong className={getSectionColor(overallPercentage)}>
                {overallPercentage >= 75 ? "excellent" : overallPercentage >= 50 ? "good" : "developing"}
              </strong> readiness for AI implementation
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Sales & Operational */}
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-exo font-semibold text-foreground">
                  Sales & Operational
                </h3>
                <p className="text-sm text-muted-foreground">Process readiness</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-foreground">
                  {scores.salesOperational}/20
                </span>
                <span className={`text-lg font-semibold ${getSectionColor(salesPercentage)}`}>
                  {salesPercentage}%
                </span>
              </div>
              <Progress value={salesPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Technical & Data */}
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Cog className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-exo font-semibold text-foreground">
                  Technical & Data
                </h3>
                <p className="text-sm text-muted-foreground">Infrastructure readiness</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-foreground">
                  {scores.technicalData}/24
                </span>
                <span className={`text-lg font-semibold ${getSectionColor(technicalPercentage)}`}>
                  {technicalPercentage}%
                </span>
              </div>
              <Progress value={technicalPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Security & Compliance */}
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-glow/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <h3 className="font-exo font-semibold text-foreground">
                  Security & Compliance
                </h3>
                <p className="text-sm text-muted-foreground">Safety readiness</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-foreground">
                  {scores.securityCompliance}/16
                </span>
                <span className={`text-lg font-semibold ${getSectionColor(securityPercentage)}`}>
                  {securityPercentage}%
                </span>
              </div>
              <Progress value={securityPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScoreSection;