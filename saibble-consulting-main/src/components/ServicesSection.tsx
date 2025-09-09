import { Brain, Settings, Bot, Lock, Shield, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmapping",
    description: "Comprehensive assessment and strategic planning to identify the highest-impact AI opportunities for your business.",
    features: ["Current State Analysis", "ROI Modeling", "Implementation Timeline", "Risk Assessment"]
  },
  {
    icon: Settings,
    title: "Automation Buildout",
    description: "End-to-end development and deployment of custom automation solutions that integrate seamlessly with your existing systems.",
    features: ["Process Automation", "API Integration", "Workflow Optimization", "System Architecture"]
  },
  {
    icon: Bot,
    title: "LLM Agent Implementation",
    description: "Intelligent AI agents and chatbots designed to enhance customer experience and internal operations.",
    features: ["Custom LLM Training", "Multi-Modal Agents", "Conversation Design", "Performance Analytics"]
  },
  {
    icon: Lock,
    title: "Secure AI Deployments",
    description: "Enterprise-grade AI implementations with built-in security, compliance, and governance frameworks.",
    features: ["Data Encryption", "Access Controls", "Audit Trails", "Compliance Frameworks"]
  },
  {
    icon: Shield,
    title: "Cybersecurity for AI Systems",
    description: "Specialized security protocols and monitoring systems designed specifically for AI infrastructure protection.",
    features: ["Threat Detection", "Model Security", "Data Protection", "Incident Response"]
  },
  {
    icon: GraduationCap,
    title: "Training & Team Support",
    description: "Comprehensive training programs and ongoing support to ensure your team can effectively use and maintain AI systems.",
    features: ["Team Training", "Documentation", "Support Portal", "Best Practices"]
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-card/50 to-background relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl font-exo font-bold mb-6"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            <span className="text-foreground">OUR</span>{" "}
            <span className="text-kinetic">SERVICES</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            From initial strategy to full deployment, we provide comprehensive AI and automation 
            solutions tailored to your business needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-glow group cursor-pointer"
              style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07)' }}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 p-3 group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300">
                    <service.icon className="w-full h-full text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-exo font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;