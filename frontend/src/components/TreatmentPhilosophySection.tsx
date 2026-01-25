import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Pill, 
  Lightbulb,
  Quote,
  Target,
  Shield
} from "lucide-react";

const TreatmentPhilosophySection = () => {
  return (
    <section id="treatment-philosophy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
            <Heart className="w-4 h-4 mr-1" />
            What Makes Us Different
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Promise to Every Patient
          </h2>
        </div>

        {/* Main Promise Quote */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-primary/5 to-healing/5 border-l-4 border-primary rounded-r-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-primary mb-4 italic">
                  &quot;My goal isn&apos;t to get you &apos;stable&apos; or &apos;managing.&apos; My goal is to get you dramatically better.&quot;
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  &quot;I treat every patient the way I would treat my own wife, my own children. That means I take the time 
                  to find out what&apos;s really going on. I explain everything clearly. And I never rush you into a decision 
                  you&apos;re not comfortable with.&quot;
                </p>
                <p className="text-primary font-semibold mt-4">— Dr. Arnold Shapiro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Philosophy Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Do I Really Need Medicine Card */}
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Pill className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">&quot;Do I Really Need Medicine?&quot;</h3>
              </div>
              
              <div className="space-y-4 text-foreground">
                <p className="text-muted-foreground italic">
                  &quot;This is one of the most common questions I hear—especially from men who were raised to &apos;tough it out.&apos;&quot;
                </p>
                
                <p>
                  Here&apos;s what I tell them: <strong>You don&apos;t NEED medicine.</strong> But your life could be easier, 
                  better, more enjoyable. Medicine is a tool, not a crutch. And you&apos;re always in control of whether to use it.
                </p>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 font-semibold mb-2">My Rule for Medications:</p>
                  <p className="text-amber-700 text-sm">
                    If we try a medication and you don&apos;t like how it makes you feel, give it 2-3 days. 
                    If you&apos;re still uncomfortable, <strong>stop it and call us</strong>. We&apos;ll figure out what 
                    happened and try something else.
                  </p>
                </div>
                
                <p className="font-medium text-primary">
                  My commitment is simple: We keep working together until you&apos;re dramatically better with no problems. 
                  If one approach doesn&apos;t work, we try another. There&apos;s always another option.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* More Than One Way Card */}
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">&quot;More Than One Way to Solve Problems&quot;</h3>
              </div>
              
              <div className="space-y-4 text-foreground">
                <p className="text-muted-foreground italic">
                  &quot;I always tell my patients: There&apos;s more than one way to solve problems in life.&quot;
                </p>
                
                <p>
                  Medicine is one option. Therapy is another. Lifestyle changes, accommodations at work or school, 
                  family support—these all matter.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-semibold mb-2">Our Collaborative Approach:</p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• We&apos;ll discuss ALL your options together</li>
                    <li>• You decide what makes sense for YOU</li>
                    <li>• I&apos;ll never push you toward something you&apos;re not comfortable with</li>
                    <li>• If one path isn&apos;t working, we&apos;ll adjust</li>
                  </ul>
                </div>
                
                <p className="font-medium text-primary">
                  The goal is always the same: <strong>Get you dramatically better.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>35+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="w-5 h-5 text-healing" />
            <span>Over 9,000 Patients Helped</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Quote className="w-5 h-5 text-warm-accent" />
            <span>Same-Day Responses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentPhilosophySection;
