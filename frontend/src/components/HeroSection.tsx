import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Award, Users } from "lucide-react";
import happyFamilyImage from "@/assets/happy-family.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-calm overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Heading at top - centered */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Expert Psychiatry Care 
              <span className="text-primary"> With Compassion</span>
            </h2>
          </div>

          {/* Family Image - centered and larger */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-large w-full">
              <img 
                src={happyFamilyImage} 
                alt="Happy loving family" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Paragraph immediately below image */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over 35 years of successful, caring treatment in Cincinnati and Fort Wright. 
              Every patient is treated with equal respect, warmth, and understanding. 
              We collaborate—exploring all options and deciding together on the best treatment plan.
            </p>
          </div>

          {/* Key differentiators - Three bullet points */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-healing rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-healing-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Collaborative Treatment Approach</h3>
                <p className="text-muted-foreground">We discuss pros and cons of all treatment options and decide together</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-healing rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-healing-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Family-Like Environment</h3>
                <p className="text-muted-foreground">Caring setting as we work toward your long-term wellness</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-healing rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-healing-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Same-Day Response</h3>
                <p className="text-muted-foreground">Extremely accessible - we get back to you almost always the same day</p>
              </div>
            </div>
          </div>

          {/* Two buttons side by side */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Your Evaluation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6"
              onClick={() => window.location.href = '/services'}
            >
              Learn About Our Approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
