import { Brain, Zap, ArrowLeft, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const PodcastHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-background/80 overflow-hidden">
      {/* Conic Gradient Background */}
      <div className="absolute inset-0" style={{ background: 'conic-gradient(from 0deg at 50% 0%, rgb(0, 0, 0) 90deg, rgba(156, 102, 255, 0.5) 181.299deg, rgb(0, 0, 0) 270deg)' }} />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
        
        {/* Electric Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary/30 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-max relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Link to="/">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Animated Badge */}
        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm font-medium backdrop-blur-sm mb-8">
            <Brain className="w-4 h-4 mr-2" />
            Expert-Led Podcast Series
            <Zap className="w-4 h-4 ml-2" />
          </Badge>
        </div>

        {/* Main Title */}
        <div className="animate-fade-in mb-6 relative" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Where{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                AI Meets
              </span>{" "}
              Cybersecurity
            </h1>
            <Mic className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-primary animate-pulse" />
          </div>
        </div>

        {/* Host Introduction */}
        <div className="animate-fade-in mb-8" style={{ animationDelay: '600ms' }}>
          <p className="text-xl text-foreground/90 mb-2">
            Hosted by{" "}
            <span className="font-semibold text-white bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 rounded-lg backdrop-blur-sm border border-primary/20">
              Sara Sheikh
            </span>
          </p>
          <p className="text-lg text-foreground/70 font-light">
            Smarter, safer, scalable systems
          </p>
        </div>

        {/* Podcast Cover Placeholder */}
        <div className="animate-fade-in relative" style={{ animationDelay: '800ms' }}>
          <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-white font-semibold text-lg">AI & Cyber</p>
                <p className="text-white/80 text-sm">Experts Podcast</p>
              </div>
            </div>
            
            {/* LIVE Badge */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              LIVE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PodcastHeroSection;