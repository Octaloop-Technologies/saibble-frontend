import { Button } from "@/components/ui/button";
import { Calendar, FileText, Map } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/8 via-accent/8 to-primary/8 relative overflow-hidden">
      {/* Enhanced Background Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/40 rounded-lg rotate-45 animate-float shadow-lg shadow-primary/20" />
      </div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-6xl font-exo font-bold mb-6"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            <span className="text-kinetic">READY TO AUTOMATE</span><br />
            <span className="text-foreground">SECURELY?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            Transform your business with AI that's designed for growth, built for security, 
            and delivered with the expertise you need to succeed.
          </motion.p>
        </div>
        
        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="card-hover text-center group"
            style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07)' }}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-exo font-semibold text-foreground mb-4">
              Book a Discovery Call
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              45-minute strategic consultation to assess your automation opportunities and discuss next steps.
            </p>
            <Button asChild className="btn-neon text-lg px-8 py-4 text-white font-medium w-full">
              <a href="https://link.sparkdigitalinc.com/widget/bookings/ini-dicovery" target="_blank" rel="noopener noreferrer">
                Schedule Now
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="card-hover text-center group"
            style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07)' }}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent to-accent-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-exo font-semibold text-foreground mb-4">
              Request Custom Quote
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Detailed proposal with timeline, investment, and expected ROI for your specific project.
            </p>
            <Button className="relative bg-gradient-to-r from-accent to-accent-glow text-white font-medium px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-accent)] before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%] text-lg w-full">
              Get Quote
            </Button>
          </motion.div>
          
          <motion.div 
            className="card-hover text-center group"
            style={{ boxShadow: 'inset 0 4px 1px 0px rgba(216, 231, 242, 0.07)' }}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", damping: 60, stiffness: 320 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Map className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-exo font-semibold text-foreground mb-4">
              Get Your AI Roadmap
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Comprehensive assessment and strategic roadmap for your AI automation journey.
            </p>
            <Button asChild className="btn-neon text-lg px-8 py-4 text-white font-medium w-full">
              <Link to="/assessment">
                Start Assessment
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Enhanced Contact Form */}
        <motion.div 
          id="contact"
          className="max-w-2xl mx-auto h-screen"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", damping: 60, stiffness: 320 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://link.sparkdigitalinc.com/widget/form/t2FPPOA1iNbEoT1YmfiM"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            className="rounded-lg"
            title="Contact Form"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;