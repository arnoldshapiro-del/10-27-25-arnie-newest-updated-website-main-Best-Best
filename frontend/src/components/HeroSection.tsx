import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Award, Users } from "lucide-react";
import happyFamilyImage from "@/assets/happy-family.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-calm overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Arnold G. Shapiro MD
              </h1>
            </div>

            {/* Doctor portrait above credentials */}
            <div className="w-full flex justify-center mb-4">
              <img
                src="/doctor-arnold-shapiro.jpg"
                alt="Portrait of Dr. Arnold G. Shapiro"
                className="rounded-2xl shadow-md w-40 sm:w-48 md:w-64 h-auto object-cover"
                loading="eager"
                fetchpriority="high"
              />
            </div>

            {/* Credentials */}
            <div className="text-center lg:text-left">
              <p className="text-xl text-muted-foreground">
                Board Certified Psychiatrist
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20">
                <Award className="w-4 h-4 mr-1" />
                35+ Years Experience
              </Badge>
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                <Users className="w-4 h-4 mr-1" />
                8000 + Patients Helped
              </Badge>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Expert Psychiatry Care 
                <span className="text-primary"> With Compassion</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over 35 years of successful, caring treatment in Cincinnati and Fort Wright. 
                Every patient is treated with equal respect, warmth, and understanding. 
                We collaborate—exploring all options and deciding together on the best treatment plan.
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
                  <h3 className="font-semibold text-foreground">Same-Day Response</h3>
                  <p className="text-muted-foreground">Extremely accessible - we get back to you almost always the same day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Family Image */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img 
                src={happyFamilyImage} 
                alt="Happy loving family" 
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
