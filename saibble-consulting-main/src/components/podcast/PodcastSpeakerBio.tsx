import { User, Building2, Shield, Brain } from "lucide-react";

const PodcastSpeakerBio = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-background/95">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      <div className="container-max relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Host
              </span>
            </h2>
            <p className="text-lg text-foreground/80">
              Expert insights from decades of IT and cybersecurity leadership
            </p>
          </div>

          {/* Speaker Bio Card */}
          <div className="card-hover rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/10 p-8 lg:p-12">
            {/* Header with Avatar */}
            <div className="flex flex-col sm:flex-row items-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg shadow-primary/30">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Sara Sheikh
                  </span>
                </h3>
                <p className="text-lg text-foreground/80 font-medium">
                  AI & Cybersecurity Expert
                </p>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                With over <span className="font-semibold text-primary">30 years of experience in IT</span> and 
                <span className="font-semibold text-accent"> 15+ years specializing in cybersecurity</span>, Sara Sheikh 
                brings unparalleled expertise to the intersection of artificial intelligence and digital security.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">LeadLynqAI</h4>
                    <p className="text-sm text-foreground/80">
                      Founder of AI-powered business intelligence platform revolutionizing data-driven decision making
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Saibble
                      </span>
                    </h4>
                    <p className="text-sm text-foreground/80">
                      Leading cybersecurity consultancy specializing in AI-enhanced security frameworks
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Sara's expertise spans <span className="font-semibold text-primary">systems strategy</span>, 
                <span className="font-semibold text-accent"> AI consulting</span>, and 
                <span className="font-semibold text-primary"> advanced security implementations</span>. 
                Her unique approach combines human-first AI principles with infrastructure-level security, 
                ensuring that technological advancement never compromises organizational safety.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                <div className="flex items-center mb-3">
                  <Brain className="w-6 h-6 text-primary mr-3" />
                  <h4 className="font-semibold text-white">Value Proposition</h4>
                </div>
                <p className="text-foreground/90">
                  "Technology should amplify human potential, not replace it. My mission is to help organizations 
                  harness AI's power while building unbreachable security foundations that protect what matters most."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSpeakerBio;