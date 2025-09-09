import founderPhoto from "@/assets/founder-photo.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FounderSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-card/50 via-background to-card/50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Enhanced Geometric Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary/40 rounded-xl rotate-12" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg rotate-45" />
              
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl animate-[shadow-glow_4s_ease-in-out_infinite_alternate]">
                <img
                  src={founderPhoto}
                  alt="Sara, Founder & AI Consultant"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Enhanced Floating Stats */}
              <div className="absolute top-8 -right-4 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-lg p-4 animate-float delay-100 shadow-lg shadow-primary/20">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              
              <div className="absolute bottom-16 -left-4 bg-card/95 backdrop-blur-sm border border-accent/30 rounded-lg p-4 animate-float delay-300 shadow-lg shadow-accent/20">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Secure</div>
              </div>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-4xl sm:text-5xl font-exo font-bold mb-6"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
                viewport={{ once: true }}
              >
                <span className="text-foreground">MEET THE</span><br />
                <span className="text-glow">FOUNDER</span>
              </motion.h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                With <span className="text-accent font-semibold">30+ years of combined experience</span> in 
                IT, cybersecurity, and entrepreneurship, Sara helps growing teams automate smart—
                <span className="text-primary font-semibold"> without compromising security</span>.
              </p>
              
              <p className="text-muted-foreground">
                Her unique blend of technical depth and business acumen enables organizations to 
                implement AI solutions that deliver real results while maintaining the highest 
                standards of data protection and operational integrity.
              </p>
              
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Industries Served</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button className="relative bg-gradient-to-r from-accent to-accent-glow text-white font-medium px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-accent)] before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%] text-lg">
                  Schedule a Consultation
                </Button>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button className="btn-neon text-lg px-8 py-4 text-white font-medium">
                  View LinkedIn Profile
                </Button>
              </motion.div>
            </div>
            
            {/* Certifications */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Certifications & Expertise:</p>
              <div className="flex flex-wrap gap-2">
                {["AI/ML Strategy", "Cybersecurity", "Cloud Architecture", "Process Automation"].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;