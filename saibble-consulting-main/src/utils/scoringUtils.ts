import { AssessmentScore } from "@/data/assessmentQuestions";

export const calculateScores = (answers: Record<string, string>): AssessmentScore => {
  // Only questions 0-14 count toward scoring
  const scoredAnswers = Object.entries(answers)
    .filter(([key]) => parseInt(key) <= 14)
    .map(([_, value]) => {
      // Extract letter grade and convert to score (A=1, B=2, C=3, D=4)
      const letter = value.charAt(0);
      switch (letter) {
        case 'A': return 1;
        case 'B': return 2;
        case 'C': return 3;
        case 'D': return 4;
        default: return 0;
      }
    });

  // Calculate section scores
  const salesOperational = scoredAnswers.slice(0, 5).reduce((sum, score) => sum + score, 0); // Max 20
  const technicalData = scoredAnswers.slice(5, 11).reduce((sum, score) => sum + score, 0); // Max 24
  const securityCompliance = scoredAnswers.slice(11, 15).reduce((sum, score) => sum + score, 0); // Max 16
  
  const overall = salesOperational + technicalData + securityCompliance; // Max 60

  return {
    overall,
    salesOperational,
    technicalData,
    securityCompliance
  };
};

export const getReadinessStage = (overallScore: number): string => {
  if (overallScore >= 37) return "Scalable AI System Stage";
  if (overallScore >= 25) return "Operational Integration Stage";
  return "Strategy Alignment Stage";
};

export const getStageDescription = (stage: string): { meaning: string; improvements: string[]; nextSteps: string[] } => {
  switch (stage) {
    case "Scalable AI System Stage":
      return {
        meaning: "Your organization has strong foundational systems and is ready to implement comprehensive AI solutions that can scale across multiple departments and processes.",
        improvements: [
          "Advanced AI model optimization",
          "Cross-departmental automation",
          "Predictive analytics enhancement",
          "AI governance frameworks"
        ],
        nextSteps: [
          "Deploy enterprise AI solutions",
          "Implement AI governance policies",
          "Scale successful pilots organization-wide",
          "Develop AI-first business strategies"
        ]
      };
    
    case "Operational Integration Stage":
      return {
        meaning: "Your business has good foundations but needs to strengthen specific areas before implementing comprehensive AI solutions.",
        improvements: [
          "System integration improvements",
          "Data quality enhancement",
          "Security framework updates",
          "Process standardization"
        ],
        nextSteps: [
          "Automate key business processes",
          "Unify data across systems",
          "Train teams on AI tools",
          "Monitor and optimize performance"
        ]
      };
    
    default: // Strategy Alignment Stage
      return {
        meaning: "Your organization needs foundational improvements in systems, data, and processes before implementing AI solutions effectively.",
        improvements: [
          "Basic system integration",
          "Data organization and quality",
          "Security foundation building",
          "Process documentation"
        ],
        nextSteps: [
          "Clarify business objectives",
          "Clean and organize data",
          "Pilot small automation projects",
          "Secure foundational systems"
        ]
      };
  }
};

export const getRoadmapSteps = (overallScore: number): string[] => {
  if (overallScore >= 46) {
    return ["Deploy", "Measure", "Scale", "Optimize"];
  } else if (overallScore >= 31) {
    return ["Automate", "Unify", "Train", "Monitor"];
  } else {
    return ["Clarify", "Clean", "Pilot", "Secure"];
  }
};

export const getExpectedMetrics = (overallScore: number): { metric: string; value: string; timeframe: string }[] => {
  if (overallScore >= 46) {
    return [
      { metric: "Revenue Growth", value: "25-40%", timeframe: "12-18 months" },
      { metric: "Time to ROI", value: "6-9 months", timeframe: "Implementation" },
      { metric: "Team Efficiency", value: "40-60%", timeframe: "6-12 months" },
      { metric: "Security Readiness", value: "95%+", timeframe: "Ongoing" }
    ];
  } else if (overallScore >= 31) {
    return [
      { metric: "Revenue Growth", value: "15-25%", timeframe: "18-24 months" },
      { metric: "Time to ROI", value: "9-12 months", timeframe: "Implementation" },
      { metric: "Team Efficiency", value: "25-40%", timeframe: "12-18 months" },
      { metric: "Security Readiness", value: "85-95%", timeframe: "6-12 months" }
    ];
  } else {
    return [
      { metric: "Revenue Growth", value: "10-15%", timeframe: "24-36 months" },
      { metric: "Time to ROI", value: "12-18 months", timeframe: "Implementation" },
      { metric: "Team Efficiency", value: "15-25%", timeframe: "18-24 months" },
      { metric: "Security Readiness", value: "75-85%", timeframe: "12-18 months" }
    ];
  }
};

export const getWeakAreas = (scores: AssessmentScore): string[] => {
  const weakAreas: string[] = [];
  
  // Check each section against 50% of max score
  if (scores.salesOperational < 10) { // 50% of 20
    weakAreas.push("Sales & Operational Processes");
  }
  if (scores.technicalData < 12) { // 50% of 24
    weakAreas.push("Technical & Data Infrastructure");
  }
  if (scores.securityCompliance < 8) { // 50% of 16
    weakAreas.push("Security & Compliance Framework");
  }
  
  return weakAreas;
};