import { Brain, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuestInvitationSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background/95 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl" />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/3 w-20 h-20 border border-primary/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-max relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Be Our Next{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Expert Guest
            </span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Share your expertise with our global audience of AI and cybersecurity professionals
          </p>
        </div>

        {/* Booking Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* AI & Automation Guest Spot */}
          <div className="group">
            <div className="card-hover p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI & Automation</h3>
                  <p className="text-primary/80 font-medium">Guest Expert Spot</p>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Join us to discuss AI innovations, automation strategies, machine learning applications, and the future of intelligent systems in cybersecurity.
              </p>
              
              <a 
                href="https://link.sparkdigitalinc.com/widget/bookings/ai-expert-podcast" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
                  Book Your AI Guest Spot
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>

          {/* Cybersecurity Guest Spot */}
          <div className="group">
            <div className="card-hover p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 shadow-xl shadow-accent/10 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Cybersecurity</h3>
                  <p className="text-accent/80 font-medium">Guest Expert Spot</p>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Share your cybersecurity expertise, discuss threat landscapes, security frameworks, incident response, and resilience strategies.
              </p>
              
              <a 
                href="https://link.sparkdigitalinc.com/widget/bookings/cybersecurity-expert-podcast" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 group-hover:scale-105">
                  Book Your Cybersecurity Guest Spot
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestInvitationSection;