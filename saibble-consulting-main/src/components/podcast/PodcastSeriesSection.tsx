import { Brain, Shield, Podcast, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PodcastSeriesSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-background/95">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />
        
        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container-max relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Podcast Series
            </span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Dive deep into the intersection of AI and cybersecurity with industry experts
          </p>
        </div>

        {/* Podcast Series Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* AI & Automation Systems */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer">
                <div className="card-hover p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">AI & Automation Systems</h3>
                      <p className="text-primary/80 font-medium">Advanced Intelligence</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Explore cutting-edge AI technologies, automation strategies, and their transformative impact on business operations and cybersecurity frameworks.
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors duration-300">
                    <span>Learn More</span>
                    <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-background/95 backdrop-blur-lg border-primary/20">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coming Soon!
                </DialogTitle>
                <DialogDescription className="text-foreground/80 text-lg">
                  AI & Automation Systems episodes are being prepared. Stay tuned for deep dives into artificial intelligence, machine learning, and automated security systems.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Cybersecurity & Resilience */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer">
                <div className="card-hover p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 shadow-xl shadow-accent/10 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Cybersecurity & Resilience</h3>
                      <p className="text-accent/80 font-medium">Digital Defense</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Discover advanced cybersecurity strategies, threat intelligence, and resilience frameworks that protect modern digital infrastructures.
                  </p>
                  <div className="flex items-center text-accent font-medium group-hover:text-primary transition-colors duration-300">
                    <span>Learn More</span>
                    <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-background/95 backdrop-blur-lg border-accent/20">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Coming Soon!
                </DialogTitle>
                <DialogDescription className="text-foreground/80 text-lg">
                  Cybersecurity & Resilience episodes are in production. Get ready for expert insights on threat detection, incident response, and building resilient systems.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
            <Podcast className="w-5 h-5 mr-3" />
            Listen to Latest Episodes
            <Zap className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSeriesSection;