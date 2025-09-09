
import { Search, Lightbulb, Cog, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "ASSESS",
    subtitle: "Current State Analysis",
    description: "We dive deep into your existing processes, identify automation opportunities, and assess your technical infrastructure to create a comprehensive baseline.",
    icon: Search,
    features: ["Process Mapping", "Tech Stack Review", "ROI Assessment", "Risk Analysis"]
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Strategic Planning",
    description: "Custom AI strategy and architecture design tailored to your specific business needs, with detailed implementation roadmaps and success metrics.",
    icon: Lightbulb,
    features: ["Solution Architecture", "Integration Planning", "Security Framework", "Success Metrics"]
  },
  {
    number: "03",
    title: "IMPLEMENT",
    subtitle: "Secure Deployment",
    description: "Agile development and deployment of your AI solutions with continuous testing, security validation, and performance optimization throughout.",
    icon: Cog,
    features: ["Agile Development", "Security Testing", "Performance Tuning", "Quality Assurance"]
  },
  {
    number: "04",
    title: "EMPOWER",
    subtitle: "Team Training & Support",
    description: "Comprehensive training programs, documentation, and ongoing support to ensure your team can effectively manage and scale your AI systems.",
    icon: Zap,
    features: ["Team Training", "Documentation", "Ongoing Support", "Scaling Strategy"]
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card/50 to-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-accent/8 to-transparent rounded-full blur-3xl" />
      </div>
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
            <span className="text-kinetic">PROCESS</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            A proven methodology that ensures successful AI implementation from initial assessment 
            to full team empowerment.
          </motion.p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Enhanced Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
          
          <div className="grid grid-cols-4 gap-8 items-stretch">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="text-center flex flex-col"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1), type: "spring", damping: 60, stiffness: 320 }}
                viewport={{ once: true }}
              >
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/20 animate-pulse-glow">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    {step.number}
                  </div>
                </div>
                
                <div className="card-hover flex-1 flex flex-col" style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07)' }}>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-exo font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-4">
                      {step.subtitle}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1" style={{ textAlign: 'left' }}>
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 mt-auto">
                    {step.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex gap-6"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + (index * 0.1), type: "spring", damping: 60, stiffness: 320 }}
              viewport={{ once: true }}
            >
              {/* Left Side - Icon & Number */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-card border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    {step.number}
                  </div>
                </div>
                {/* Enhanced Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-accent opacity-50 mx-auto mt-4" />
                )}
              </div>
              
              {/* Right Side - Content */}
              <div className="flex-1 card-hover" style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07)' }}>
                <h3 className="text-xl font-exo font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <h4 className="text-primary font-semibold mb-3">
                  {step.subtitle}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed" style={{ textAlign: 'center' }}>
                  {step.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {step.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", damping: 60, stiffness: 320 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 rounded-2xl p-6 shadow-lg shadow-primary/10">
            <h3 className="text-2xl font-exo font-bold text-foreground mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our proven process can help you implement AI solutions 
              that drive real business results.
            </p>
            <Link to="/assessment">
              <button className="btn-neon text-lg px-8 py-4 text-white font-medium">
                Begin Your Assessment
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
