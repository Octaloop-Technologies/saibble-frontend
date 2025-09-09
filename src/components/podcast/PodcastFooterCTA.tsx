import { Mail, Bell } from "lucide-react";

const PodcastFooterCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background/95 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/8 to-transparent rounded-full blur-3xl" />
        
        {/* Electric waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/3 right-1/5 w-16 h-16 border border-primary/30 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-1/5 w-20 h-20 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-max relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Bell className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Stay{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Connected
                </span>
              </h2>
            </div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Get notified about new episodes, expert insights, and exclusive cybersecurity AI content
            </p>
          </div>

          {/* Newsletter Signup Card */}
          <div className="card-hover rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/10 p-2">
            <div className="bg-background/50 rounded-xl p-6">
              <div className="flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Subscribe to Our Newsletter
                </h3>
              </div>
              
              {/* Embedded Form */}
              <div className="w-full">
                <iframe
                  src="https://link.sparkdigitalinc.com/widget/form/AgIk3JOXcymP1PQKQMcr"
                  className="w-full h-[350px] border-0 rounded-lg"
                  title="Newsletter Subscription Form"
                  style={{
                    background: 'transparent',
                    colorScheme: 'dark'
                  }}
                />
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-foreground/60">
                  Join our community of cybersecurity and AI professionals. 
                  No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-white mb-2">Episode Alerts</h4>
              <p className="text-sm text-foreground/70">Get notified when new episodes are released</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-white mb-2">Expert Insights</h4>
              <p className="text-sm text-foreground/70">Exclusive content from industry leaders</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Early Access</h4>
              <p className="text-sm text-foreground/70">Be the first to access premium content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastFooterCTA;