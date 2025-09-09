import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

interface ReadinessStageSection {
  stage: string;
  stageDescription: {
    meaning: string;
    improvements: string[];
    nextSteps: string[];
  };
  weakAreas: string[];
}

const ReadinessStageSection = ({ stage, stageDescription, weakAreas }: ReadinessStageSection) => {
  const getStageColor = (stage: string) => {
    if (stage.includes("Scalable")) return "text-accent";
    if (stage.includes("Operational")) return "text-primary";
    return "text-yellow-500";
  };

  const getStageIcon = (stage: string) => {
    if (stage.includes("Scalable")) return "🚀";
    if (stage.includes("Operational")) return "⚡";
    return "📊";
  };

  return (
    <div className="space-y-8">
      {/* Stage Header */}
      <Card className="card-glow">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">{getStageIcon(stage)}</div>
          <h2 className="text-3xl font-exo font-bold mb-4">
            <span className={getStageColor(stage)}>{stage}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {stageDescription.meaning}
          </p>
        </CardContent>
      </Card>

      {/* Three Column Analysis */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* What This Stage Means */}
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-exo font-semibold text-foreground">
                What This Stage Means
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {stageDescription.meaning}
            </p>
          </CardContent>
        </Card>

        {/* What Needs Improvement */}
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              <h3 className="text-lg font-exo font-semibold text-foreground">
                Priority Improvements
              </h3>
            </div>
            <div className="space-y-3">
              {weakAreas.length > 0 ? (
                <>
                  <p className="text-sm text-muted-foreground mb-3">
                    Focus on these areas first:
                  </p>
                  {weakAreas.map((area, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{area}</span>
                    </div>
                  ))}
                </>
              ) : (
                <div className="space-y-2">
                  {stageDescription.improvements.map((improvement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{improvement}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-exo font-semibold text-foreground">
                Recommended Next Steps
              </h3>
            </div>
            <div className="space-y-3">
              {stageDescription.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-xs">{index + 1}</span>
                  </div>
                  <span className="text-sm text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReadinessStageSection;