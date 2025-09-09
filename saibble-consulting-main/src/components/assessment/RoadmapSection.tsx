import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, Shield } from "lucide-react";

interface RoadmapSectionProps {
  roadmapSteps: string[];
  expectedMetrics: { metric: string; value: string; timeframe: string }[];
  overallScore: number;
}

const RoadmapSection = ({ roadmapSteps, expectedMetrics, overallScore }: RoadmapSectionProps) => {
  const getStepDescription = (step: string, index: number) => {
    const descriptions = {
      // High Score Roadmap
      "Deploy": "Implement comprehensive AI solutions across key business processes",
      "Measure": "Track performance metrics and ROI from AI implementations",
      "Scale": "Expand successful AI solutions to additional departments and processes",
      "Optimize": "Fine-tune AI systems for maximum efficiency and performance",
      
      // Medium Score Roadmap
      "Automate": "Begin with targeted automation of repetitive tasks and workflows",
      "Unify": "Integrate data systems and create unified information architecture",
      "Train": "Educate teams on AI tools and establish best practices",
      "Monitor": "Implement monitoring systems for performance and security",
      
      // Low Score Roadmap
      "Clarify": "Define clear business objectives and AI implementation goals",
      "Clean": "Organize and standardize data across business systems",
      "Pilot": "Start with small-scale automation projects to build expertise",
      "Secure": "Establish security foundations and compliance frameworks"
    };
    
    return descriptions[step as keyof typeof descriptions] || `Step ${index + 1} in your AI journey`;
  };

  const getRoadmapColor = (overallScore: number) => {
    if (overallScore >= 46) return "from-accent to-accent-glow";
    if (overallScore >= 31) return "from-primary to-primary-glow";
    return "from-yellow-500 to-orange-500";
  };

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case "Revenue Growth": return TrendingUp;
      case "Time to ROI": return Clock;
      case "Team Efficiency": return Users;
      case "Security Readiness": return Shield;
      default: return TrendingUp;
    }
  };

  return (
    <div className="space-y-8">
      {/* Roadmap Header */}
      <Card className="card-glow">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-exo font-bold text-glow mb-4">
            Your Personalized AI Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your assessment, here's your recommended path to AI implementation success
          </p>
        </CardContent>
      </Card>

      {/* Roadmap Steps */}
      <div className="grid md:grid-cols-4 gap-6">
        {roadmapSteps.map((step, index) => (
          <Card key={index} className="card-hover relative">
            <CardContent className="p-6 text-center">
              {/* Step Number */}
              <div className={`w-12 h-12 bg-gradient-to-br ${getRoadmapColor(overallScore)} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold`}>
                {index + 1}
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-exo font-bold text-foreground mb-3">
                {step}
              </h3>
              
              {/* Step Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {getStepDescription(step, index)}
              </p>
              
              {/* Connection Line */}
              {index < roadmapSteps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Expected Metrics */}
      <Card className="card-glow">
        <CardContent className="p-8">
          <h3 className="text-2xl font-exo font-bold text-glow text-center mb-8">
            Expected Results & Metrics
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectedMetrics.map((metric, index) => {
              const Icon = getMetricIcon(metric.metric);
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-exo font-semibold text-foreground text-sm">
                      {metric.metric}
                    </h4>
                    <div className="text-2xl font-bold text-primary">
                      {metric.value}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {metric.timeframe}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 p-4 bg-card/50 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Note:</strong> These metrics are based on similar businesses at your readiness level. 
              Actual results may vary depending on implementation quality and organizational commitment.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoadmapSection;