import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import heroBackground from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#25104c' }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/60 to-accent/20" />
      
      {/* Electric Wave Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-electric-wave" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/80 to-transparent animate-electric-wave" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-electric-wave" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      

      {/* More Vibrant Floating Geometric Elements - Slower Speed */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-28 h-28 border-2 border-primary/50 rounded-lg" style={{ animation: 'float 12s ease-in-out infinite', animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-accent/50 rotate-45" style={{ animation: 'float 14s ease-in-out infinite', animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-primary/40 rounded-full" style={{ animation: 'float 13s ease-in-out infinite', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg" style={{ animation: 'float 15s ease-in-out infinite', animationDelay: '2s' }} />
      </div>
      
      {/* Header Content */}
      <div className="absolute top-4 left-0 right-0 z-50 border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-exo font-bold tracking-wide text-white relative group">
              <span className="relative z-10">S</span>
              <span className="relative z-10 text-accent">ai</span>
              <span className="relative z-10">bble</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-accent/20 to-white/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform scale-110" />
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h1>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/podcast"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    AI & Security Expert Podcast
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/assessment"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    AI Readiness Assessment
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact CTA */}
          <Button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-colors duration-300 text-sm font-medium whitespace-nowrap hidden sm:inline-flex"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-max section-padding pb-32 text-center pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-exo font-bold mb-6 leading-tight"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <span className="block text-kinetic">ADVANCED AI / AUTOMATION</span>
            <span className="block text-foreground">& SECURITY CONSULTING</span>
            <span className="block text-lg sm:text-xl lg:text-2xl font-inter font-normal mt-4 text-muted-foreground">
              For High-Growth Firms
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            From strategy through full implementation—so your team can 
            <span className="text-accent font-medium"> scale with confidence</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
            >
              <Button asChild className="relative bg-gradient-to-r from-accent to-accent-glow text-white font-medium px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-accent)] before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%] text-lg min-w-[280px]">
                <a href="https://link.sparkdigitalinc.com/widget/bookings/ini-dicovery" target="_blank" rel="noopener noreferrer">
                  Schedule a Discovery Call
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
            >
              <Button asChild className="btn-neon text-lg px-8 py-4 min-w-[280px] text-white font-medium">
                <Link to="/assessment">
                  Get Your AI Roadmap
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-circle" />
              <span>30+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-circle" />
              <span>Cybersecurity-First Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-circle" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;