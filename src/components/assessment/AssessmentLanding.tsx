import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Target, TrendingUp, Clock, Users, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

interface AssessmentLandingProps {
  onStartAssessment: () => void;
}

const AssessmentLanding = ({ onStartAssessment }: AssessmentLandingProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const earthCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Converging points animation
    const points: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    const centerX = canvas.width / window.devicePixelRatio / 2;
    const centerY = canvas.height / window.devicePixelRatio / 2;

    // Create new points
    const createPoint = () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 400 + 200;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      const speed = Math.random() * 0.3 + 0.2;
      const dx = centerX - x;
      const dy = centerY - y;
      const length = Math.sqrt(dx * dx + dy * dy);
      
      points.push({
        x,
        y,
        vx: (dx / length) * speed,
        vy: (dy / length) * speed,
        size: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.3 + 0.7,
        life: 0,
        maxLife: Math.random() * 100 + 50
      });
    };

    const animate = () => {
      const time = Date.now() * 0.001;
      
      // Clear canvas completely
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // Create new points periodically
      if (Math.random() < 0.1) {
        createPoint();
      }

      // Update and draw points
      for (let i = points.length - 1; i >= 0; i--) {
        const point = points[i];
        
        // Update position
        point.x += point.vx;
        point.y += point.vy;
        point.life++;
        
        // Calculate distance to center
        const dx = centerX - point.x;
        const dy = centerY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Draw only the small point (no glow/tail)
        ctx.fillStyle = `rgba(255, 255, 255, ${point.opacity})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Remove points that reach the center
        if (distance < 3) {
          points.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Earth animation effect
  useEffect(() => {
    const earthCanvas = earthCanvasRef.current;
    if (!earthCanvas) return;

    const ctx = earthCanvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = earthCanvas.getBoundingClientRect();
      earthCanvas.width = rect.width * window.devicePixelRatio;
      earthCanvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawEarth = () => {
      const canvasWidth = earthCanvas.width / window.devicePixelRatio;
      const canvasHeight = earthCanvas.height / window.devicePixelRatio;
      const earthRadius = canvasWidth * 0.8;
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight + earthRadius * 0.8;

      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Set blur effect for glow
      ctx.filter = 'blur(8px)';

      // Draw multiple colored arcs for pole light effect
      const colors = [
        'rgba(255, 215, 0, 0.8)',    // Gold
        'rgba(255, 165, 0, 0.6)',    // Orange  
        'rgba(156, 102, 255, 0.5)',  // Purple
        'rgba(0, 255, 255, 0.4)',    // Cyan
        'rgba(255, 20, 147, 0.3)'    // Pink
      ];

      colors.forEach((color, index) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 20 - index * 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, earthRadius + index * 5, 0, Math.PI);
        ctx.stroke();
      });

      // Reset filter
      ctx.filter = 'none';

      // Draw sharp main arc
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, earthRadius, 0, Math.PI);
      ctx.stroke();
    };

    drawEarth();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const benefits = [
    {
      icon: Brain,
      title: "Personalized AI Roadmap",
      description: "Get a custom implementation plan based on your business's unique readiness level"
    },
    {
      icon: Shield,
      title: "Cybersecurity-First Approach",
      description: "Ensure your AI implementation prioritizes security and compliance from day one"
    },
    {
      icon: Target,
      title: "Precise Recommendations",
      description: "Receive specific next steps tailored to your current systems and capabilities"
    },
    {
      icon: TrendingUp,
      title: "Expected ROI Metrics",
      description: "Understand potential returns and timelines for your AI investment"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Complete Assessment",
      description: "Answer 17 questions about your business operations, technology, and security",
      duration: "5-7 minutes"
    },
    {
      number: "02",
      title: "Get Your Score",
      description: "Receive detailed scoring across Sales, Technical, and Security readiness",
      duration: "Instant results"
    },
    {
      number: "03",
      title: "Follow Your Roadmap",
      description: "Implement AI solutions using your personalized step-by-step guide",
      duration: "Ongoing guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-background bg-geometric">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container-max px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-exo font-semibold text-foreground">
              AI Readiness Assessment for SMBs
            </h1>
            <Link to="/">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

            {/* Hero Section */}
      <section className="section-padding relative" style={{ 
        background: `linear-gradient(135deg, rgba(156, 102, 255, 0.5) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(156, 102, 255, 0.3) 100%)`
      }}>
        {/* Converging Points Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <canvas 
            ref={canvasRef}
            className="w-full h-full"
            style={{ 
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </div>
        
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Expert-Led Assessment</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-exo font-bold text-kinetic mb-6">
                Discover Your AI Readiness
                <br />
                <span className="text-glow">Build Smarter Systems</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Take our comprehensive assessment to understand your business's AI readiness 
                and get a personalized roadmap for secure, scalable automation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={onStartAssessment}
                className="btn-neon text-lg px-8 py-4"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Takes 5-7 minutes
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                30+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                Cybersecurity-First
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Proven Results
              </div>
            </div>
          </div>
        </div>
        
        {/* Earth Element at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-32 overflow-hidden">
          <canvas 
            ref={earthCanvasRef}
            className="w-full h-full"
            style={{ 
              display: 'block'
            }}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-card/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-exo font-bold text-glow mb-4">
              Why Take This Assessment?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get clarity on your AI journey with actionable insights from cybersecurity and automation experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-exo font-semibold mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-exo font-bold text-glow mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to your AI readiness roadmap
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-x-1/2" />
                )}
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 font-exo font-bold text-primary-foreground text-lg">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-exo font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-2 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="text-sm text-accent font-medium">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="section-padding bg-card/20">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold text-kinetic mb-6">
              Ready to Accelerate Your AI Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have used our assessment to build 
              secure, scalable AI automation systems
            </p>
            
            <Button 
              onClick={onStartAssessment}
              className="btn-neon text-lg px-8 py-4"
            >
              Take Assessment Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-max">
          <Card className="card-glow max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-exo font-bold text-glow mb-6">
                Expert-Designed Assessment
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Created by <strong className="text-primary">Sara Sheikh</strong> and the Saibble team, 
                this assessment draws from over 30 years of enterprise IT experience and 15+ years 
                of cybersecurity expertise. Our methodology has helped businesses achieve an average 
                of 40% efficiency gains while maintaining enterprise-grade security standards.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-exo font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Years IT Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-exo font-bold text-accent mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Businesses Assessed</div>
                </div>
                <div>
                  <div className="text-3xl font-exo font-bold text-primary-glow mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Average Efficiency Gain</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 py-8">
        <div className="container-max px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Saibble. All rights reserved.</p>
            <p className="mt-2">
              Building secure, scalable AI automation systems for the modern enterprise.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AssessmentLanding;