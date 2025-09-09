import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {

  return (
    <div className="min-h-screen bg-background bg-geometric">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-accent mx-auto animate-pulse-glow" />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-exo font-bold text-kinetic mb-4">
                Assessment Complete!
              </h1>
              <p className="text-xl text-muted-foreground">
                Your personalized AI readiness roadmap is being prepared
              </p>
            </div>

            {/* What You'll Receive */}
            <Card className="card-glow max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-exo font-semibold mb-6 text-glow">
                  What You'll Receive
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Personalized AI Readiness Score</strong> across Sales, Technical, and Security dimensions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Custom Roadmap</strong> with specific steps for your readiness stage
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Expected Metrics</strong> including ROI timeline and efficiency gains
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">
                      <strong>Priority Improvements</strong> based on your assessment responses
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Positioning */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-semibold">Saibble</span>, we help businesses navigate 
                their AI journey with cybersecurity-first automation systems that scale with confidence. 
                Your roadmap will include specific recommendations from our 30+ years of enterprise experience.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-neon flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Request Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[90vh] p-0 card-glow flex flex-col">
                  <DialogHeader className="p-2 pb-0 flex-shrink-0">
                    <DialogTitle className="text-glow text-lg">Book Your Consultation</DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 p-2 min-h-0">
                    <iframe 
                      src="https://www.leadlynq.ai/book" 
                      className="w-full h-full border-0 rounded-lg"
                      title="Book Consultation"
                      scrolling="yes"
                      allowFullScreen
                      loading="eager"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Button asChild variant="outline" className="btn-ghost flex items-center gap-2">
                <Link to="/">
                  <ArrowLeft className="w-5 h-5" />
                  Return to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;