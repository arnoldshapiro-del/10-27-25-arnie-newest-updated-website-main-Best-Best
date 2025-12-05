import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Cincinnati Office */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Cincinnati Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:513-794-8777" className="text-foreground hover:text-primary transition-colors">
                    (513) 794-8777
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p>8280 Montgomery Road, Suite 304</p>
                  <p>Cincinnati, OH 45236</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fort Wright Office */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Fort Wright Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:859-341-7453" className="text-foreground hover:text-primary transition-colors">
                    (859) 341-7453
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p>1717 Dixie Highway, Suite 200</p>
                  <p>Fort Wright, KY 41011</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Practice Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Arnold G. Shapiro MD</p>
              <p>Board Certified Psychiatrist</p>
              <p className="pt-2 text-xs">
                Office Hours: Monday - Friday<br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="border-t border-border pt-8 space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Arnold G. Shapiro MD. All rights reserved. | Cincinnati, OH & Fort Wright, KY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
