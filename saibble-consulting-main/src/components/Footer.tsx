import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-card to-background border-t border-border">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-exo font-bold text-lg text-foreground">
                  AI + AUTOMATION
                </h3>
                <p className="text-sm text-primary">CONSULTING</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Secure AI solutions for high-growth businesses. 30+ years of expertise 
              in automation, cybersecurity, and strategic implementation.
            </p>
            <div className="flex flex-wrap gap-2">
              {["SOC2", "GDPR", "HIPAA"].map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-exo font-semibold text-foreground mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "AI Strategy & Roadmapping",
                "Automation Buildout",
                "LLM Agent Implementation",
                "Secure AI Deployments",
                "Cybersecurity for AI",
                "Training & Support"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm block py-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-exo font-semibold text-foreground mb-4 sm:mb-6">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Case Studies",
                "AI Readiness Assessment",
                "Security Frameworks",
                "Implementation Guide",
                "ROI Calculator",
                "Blog & Insights"
              ].map((resource) => (
                <li key={resource}>
                  <a
                    href={resource === "AI Readiness Assessment" ? "https://assess.leadlynq.ai/" : "#"}
                    target={resource === "AI Readiness Assessment" ? "_blank" : undefined}
                    rel={resource === "AI Readiness Assessment" ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm block py-1"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="font-exo font-semibold text-foreground mb-4 sm:mb-6">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:Sara@saibble.com"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm break-all sm:break-normal"
                >
                  Sara@saibble.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:214-228-0773"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  214-228-0773
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Remote & On-site Available
                </span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6 pt-6 border-t border-border">
              <h5 className="font-medium text-foreground mb-3 text-sm">AI Insights Newsletter</h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-lg sm:rounded-l-lg sm:rounded-r-none text-sm text-foreground placeholder-muted-foreground focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-primary-glow transition-colors duration-300 text-sm font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4 text-sm text-muted-foreground">
              <span className="text-center lg:text-left">© 2024 AI + Automation Consulting. All rights reserved.</span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <a href="#" className="hover:text-accent transition-colors duration-300 whitespace-nowrap">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-accent transition-colors duration-300 whitespace-nowrap">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-accent transition-colors duration-300 whitespace-nowrap">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 lg:mt-0">
              <Shield className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="whitespace-nowrap">Encrypted • Secure • Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;