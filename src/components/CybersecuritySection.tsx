import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data transmissions and storage use industry-standard encryption protocols."
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "24/7 threat detection and response systems protect your AI infrastructure."
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Built-in frameworks for GDPR, HIPAA, SOC2, and other regulatory requirements."
  },
  {
    icon: Shield,
    title: "Zero Trust Architecture",
    description: "Every access request is verified, never trusted by default."
  }
];

const CybersecuritySection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background to-primary/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Enhanced Particle Network */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-100 shadow-lg shadow-accent/50" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/80 rounded-full animate-pulse delay-200 shadow-lg shadow-primary/40" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-accent/80 rounded-full animate-pulse delay-300 shadow-lg shadow-accent/40" />
        
        {/* Enhanced Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <line x1="300" y1="200" x2="400" y2="150" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="400" y1="150" x2="600" y2="300" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="600" y1="300" x2="900" y2="250" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="200" y1="500" x2="400" y2="400" stroke="url(#gradient2)" strokeWidth="1" />
          <line x1="400" y1="400" x2="800" y2="550" stroke="url(#gradient2)" strokeWidth="1" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-4xl sm:text-5xl font-exo font-bold">
              <span className="text-foreground">BUILT WITH</span>{" "}
              <span className="text-glow">SECURITY</span>{" "}
              <span className="text-foreground">IN MIND</span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            Every AI system we implement follows enterprise-grade security protocols. 
            Your data stays protected, your compliance requirements are met, and your business 
            operates with complete confidence.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card-glow text-center"
              style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07)' }}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + (index * 0.1), type: "spring", damping: 60, stiffness: 320 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300 shadow-lg shadow-primary/20">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-exo font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Security Certifications */}
        <motion.div 
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center shadow-lg shadow-primary/10"
          style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07), 0 10px 25px -5px hsl(var(--primary) / 0.1)' }}
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", damping: 60, stiffness: 320 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-exo font-bold text-foreground mb-6">
            Security Standards & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["SOC 2 Ready", "GDPR Compliant", "HIPAA Aware", "ISO 27001"].map((cert, index) => (
              <motion.div 
                key={cert}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1), type: "spring", damping: 60, stiffness: 320 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary/15 border border-primary/30 rounded-lg p-4 hover:bg-primary/25 transition-all duration-300 shadow-sm shadow-primary/10">
                  <div className="text-primary font-semibold text-sm">{cert}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
              Our security-first approach ensures that every AI solution we implement meets or exceeds 
              industry standards for data protection, privacy, and regulatory compliance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CybersecuritySection;