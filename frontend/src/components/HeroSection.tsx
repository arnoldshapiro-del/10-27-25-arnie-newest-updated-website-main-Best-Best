import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Award, Heart, Users } from "lucide-react";
import happyFamilyImage from "@/assets/happy-family.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-calm overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Trust badges at top */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20">
                <Award className="w-4 h-4 mr-1" />
                35+ Years Experience
              </Badge>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Cincinnati's Trusted 
                <span className="text-primary"> Child & Adult Psychiatrist</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dr. Arnold Shapiro provides expert psychiatric care for ADHD, anxiety, depression, bipolar disorder, and OCD in Cincinnati, OH and Northern Kentucky. 
                Over 35 years of compassionate treatment with same-day response to your questions.
              </p>
            </div>

            {/* Key differentiators */}
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
                  <p className="text-muted-foreground">Treated exactly as I would treat my own family members</p>
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

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

          {/* Right column - Family Image */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img 
                src={happyFamilyImage} 
                alt="Happy family receiving compassionate psychiatric care from Dr. Arnold Shapiro in Cincinnati Ohio" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
