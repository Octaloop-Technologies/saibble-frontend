import { Shield, Zap, Network, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Tailored AI Systems",
    description: "Custom automation solutions designed specifically for your business processes and growth goals.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of delivering measurable ROI through strategic AI implementation and process optimization.",
    gradient: "from-accent to-accent-glow"
  },
  {
    icon: Shield,
    title: "Cybersecurity-First Mindset",
    description: "Every AI system built with enterprise-grade security, compliance, and data protection at its core.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Network,
    title: "30+ Years Experience",
    description: "Deep expertise in IT, cybersecurity, and business automation across diverse industries and scales.",
    gradient: "from-accent to-primary"
  }
];

const WhyWorkWithUs = () => {
  return (
    <section className="section-padding pt-32 bg-geometric relative overflow-hidden">
      {/* Enhanced Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-card/40 to-background/80" />
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl font-exo font-bold mb-6"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            <span className="text-glow">WHY WORK</span>{" "}
            <span className="text-foreground">WITH US</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            We combine deep technical expertise with strategic business insight to deliver 
            AI solutions that actually move the needle.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card-hover group"
              style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07)' }}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + (index * 0.1),
                type: "spring",
                damping: 60,
                stiffness: 320
              }}
              viewport={{ once: true }}
            >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  {/* Enhanced Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-300`} />
                </div>
              
              {/* Content */}
              <h3 className="text-xl font-exo font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Accent Line */}
              <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;