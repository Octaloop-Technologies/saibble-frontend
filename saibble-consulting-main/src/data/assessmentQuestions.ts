export interface AssessmentQuestion {
  section: string;
  sectionIcon: string;
  question: string;
  options: string[];
  type?: string;
}

export const assessmentQuestions: AssessmentQuestion[] = [
  // Section 1: Sales & Operational AI Readiness (Questions 0-4)
  {
    section: "🧩 Section 1: Sales & Operational AI Readiness",
    sectionIcon: "🧩",
    question: "How do you currently handle repetitive tasks in your business operations?",
    options: [
      "A: We manually handle most repetitive tasks with minimal automation",
      "B: We have some basic automation tools but they're not integrated",
      "C: We have automated several processes with integrated systems",
      "D: We have comprehensive automation across most operations"
    ]
  },
  {
    section: "🧩 Section 1: Sales & Operational AI Readiness",
    sectionIcon: "🧩",
    question: "What is your current approach to customer data analysis and insights?",
    options: [
      "A: We rely mainly on basic reports and manual analysis",
      "B: We use some analytics tools but insights are limited",
      "C: We have good analytics with actionable insights",
      "D: We have advanced predictive analytics driving decisions"
    ]
  },
  {
    section: "🧩 Section 1: Sales & Operational AI Readiness",
    sectionIcon: "🧩",
    question: "How does your team currently handle lead qualification and customer outreach?",
    options: [
      "A: Manual processes with basic CRM functionality",
      "B: Some automation for lead scoring but mostly manual follow-up",
      "C: Automated lead scoring with targeted outreach campaigns",
      "D: AI-driven lead qualification with personalized automation"
    ]
  },
  {
    section: "🧩 Section 1: Sales & Operational AI Readiness",
    sectionIcon: "🧩",
    question: "What level of process documentation do you have for your core business operations?",
    options: [
      "A: Minimal documentation, processes exist in people's heads",
      "B: Basic documentation for some key processes",
      "C: Well-documented processes with regular updates",
      "D: Comprehensive documentation with standardized workflows"
    ]
  },
  {
    section: "🧩 Section 1: Sales & Operational AI Readiness",
    sectionIcon: "🧩",
    question: "How do you currently measure and track business performance?",
    options: [
      "A: Basic metrics tracked manually or in simple spreadsheets",
      "B: Some KPIs tracked with basic dashboard tools",
      "C: Comprehensive metrics with automated reporting",
      "D: Real-time performance tracking with predictive insights"
    ]
  },

  // Section 2: Technical, Data & System Readiness (Questions 5-10)
  {
    section: "⚙️ Section 2: Technical, Data & System Readiness",
    sectionIcon: "⚙️",
    question: "What is the current state of your data storage and organization?",
    options: [
      "A: Data scattered across multiple systems with no central organization",
      "B: Some centralization but data quality and consistency issues",
      "C: Well-organized data with good quality controls",
      "D: Unified data architecture with high quality and accessibility"
    ]
  },
  {
    section: "⚙️ Section 2: Technical, Data & System Readiness",
    sectionIcon: "⚙️",
    question: "How integrated are your current business systems and tools?",
    options: [
      "A: Mostly standalone systems with manual data transfer",
      "B: Some basic integrations but many data silos remain",
      "C: Good integration between most core systems",
      "D: Seamless integration across all business systems"
    ]
  },
  {
    section: "⚙️ Section 2: Technical, Data & System Readiness",
    sectionIcon: "⚙️",
    question: "What is your team's technical capability for implementing and managing new systems?",
    options: [
      "A: Limited technical skills, rely heavily on external support",
      "B: Basic technical skills, can handle simple implementations",
      "C: Good technical team that can manage most implementations",
      "D: Strong technical team with advanced automation capabilities"
    ]
  },
  {
    section: "⚙️ Section 2: Technical, Data & System Readiness",
    sectionIcon: "⚙️",
    question: "How do you currently backup and protect your business data?",
    options: [
      "A: Basic or inconsistent backup procedures",
      "B: Regular backups but limited disaster recovery planning",
      "C: Comprehensive backup and recovery procedures",
      "D: Advanced backup, recovery, and business continuity systems"
    ]
  },
  {
    section: "⚙️ Section 2: Technical, Data & System Readiness",
    sectionIcon: "⚙️",
    question: "What is your current cloud infrastructure and scalability setup?",
    options: [
      "A: Primarily on-premises with limited cloud usage",
      "B: Basic cloud services for some applications",
      "C: Good cloud infrastructure with scalable systems",
      "D: Advanced cloud-native architecture with auto-scaling"
    ]
  },
  {
    section: "⚙️ Section 2: Technical, Data & System Readiness",
    sectionIcon: "⚙️",
    question: "How do you currently handle system monitoring and performance optimization?",
    options: [
      "A: Reactive monitoring when problems occur",
      "B: Basic monitoring with manual performance checks",
      "C: Proactive monitoring with automated alerts",
      "D: Comprehensive monitoring with predictive maintenance"
    ]
  },

  // Section 3: Security, Compliance & Organizational Readiness (Questions 11-14)
  {
    section: "🔒 Section 3: Security, Compliance & Organizational Readiness",
    sectionIcon: "🔒",
    question: "What cybersecurity measures do you currently have in place?",
    options: [
      "A: Basic antivirus and firewall protection",
      "B: Standard security tools with some best practices",
      "C: Comprehensive security framework with regular updates",
      "D: Advanced security posture with threat intelligence and monitoring"
    ]
  },
  {
    section: "🔒 Section 3: Security, Compliance & Organizational Readiness",
    sectionIcon: "🔒",
    question: "How does your organization handle access control and user permissions?",
    options: [
      "A: Basic password protection with limited access controls",
      "B: Role-based access with basic permission management",
      "C: Comprehensive access control with regular audits",
      "D: Advanced identity management with multi-factor authentication"
    ]
  },
  {
    section: "🔒 Section 3: Security, Compliance & Organizational Readiness",
    sectionIcon: "🔒",
    question: "What is your team's readiness for adopting new technologies and processes?",
    options: [
      "A: Significant resistance to change, prefer established methods",
      "B: Some openness to change but requires extensive training",
      "C: Generally adaptable with good change management",
      "D: Highly adaptable team that embraces new technologies"
    ]
  },
  {
    section: "🔒 Section 3: Security, Compliance & Organizational Readiness",
    sectionIcon: "🔒",
    question: "How do you currently handle compliance and regulatory requirements?",
    options: [
      "A: Basic compliance with minimal documentation",
      "B: Standard compliance procedures with some documentation",
      "C: Comprehensive compliance framework with regular audits",
      "D: Advanced compliance automation with continuous monitoring"
    ]
  },

  // Segmentation Questions (Questions 15-16)
  {
    section: "🎯 Additional Information",
    sectionIcon: "🎯",
    question: "Which AI area are you most interested in exploring for your business?",
    type: "radio",
    options: [
      "Sales and Marketing Automation",
      "Customer Service and Support",
      "Operations and Process Optimization",
      "Data Analytics and Business Intelligence",
      "Cybersecurity and Risk Management",
      "Financial and Administrative Automation"
    ]
  },
  {
    section: "🎯 Additional Information",
    sectionIcon: "🎯",
    question: "Which department would lead AI implementation in your organization?",
    type: "dropdown",
    options: [
      "Executive/Leadership Team",
      "Information Technology",
      "Operations",
      "Sales and Marketing",
      "Customer Service",
      "Finance and Administration",
      "Human Resources",
      "Other"
    ]
  }
];

export interface AssessmentScore {
  overall: number;
  salesOperational: number;
  technicalData: number;
  securityCompliance: number;
}

export interface SegmentationData {
  aiArea?: string;
  department?: string;
  otherDepartment?: string;
}