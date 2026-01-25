import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Check,
  Search,
  Clock,
  FileText,
  MessageCircle,
  Calendar,
  Quote
} from "lucide-react";

const EvaluationProcessSection = () => {
  const adultSteps = [
    "One-hour comprehensive assessment with our licensed professional counselor",
    "Counselor extensively reviews findings with Dr. Shapiro (he takes detailed notes)",
    "One-hour meeting directly with Dr. Shapiro to review findings, clarify details, and discuss diagnosis",
    "All treatment options explained—you decide together what feels right",
    "Monthly follow-up appointments until you&apos;re dramatically better"
  ];

  const childSteps = [
    "One-hour meeting between parents and our licensed counselor",
    "Separate one-hour session where counselor meets with your child",
    "Rating scales collected from parents, teachers, and sometimes the child",
    "Counselor looks for everything: ADHD, anxiety, depression, OCD, mood disorders, learning differences",
    "Counselor extensively reviews all findings with Dr. Shapiro",
    "One-hour family meeting with Dr. Shapiro (parents AND child attend together)",
    "Child is included in treatment decisions",
    "Monthly follow-up appointments until your child is dramatically better"
  ];

  return (
    <section id="evaluation-process" className="py-20 bg-gradient-to-br from-primary/5 via-background to-healing/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Search className="w-4 h-4 mr-1" />
            How We&apos;re Different
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Finding the Complete Picture
          </h2>
          <p className="text-xl text-primary font-semibold mb-6">
            Our Thorough Evaluation Process
          </p>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            No matter what brings you to our practice—whether you think you have ADHD, anxiety, depression, 
            OCD, or you&apos;re not sure what&apos;s wrong—our evaluation process is the same. 
            <strong> We don&apos;t just look for what you think you might have. We evaluate for everything.</strong>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Why? Because many patients who come to us thinking they have one condition actually have two, three, 
            or more. Anxiety can look like ADHD. Depression can mask OCD. <em>Getting the complete picture 
            changes everything about your treatment.</em>
          </p>
        </div>

        {/* Two Column Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Adults Card */}
          <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-t-lg pb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-purple-700">For Adults</CardTitle>
                  <div className="flex items-center gap-2 text-purple-600 mt-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Approximately 2 Hours Total</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {adultSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-foreground" dangerouslySetInnerHTML={{ __html: step.replace(/&apos;/g, "'") }} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Children & Teenagers Card */}
          <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-t-lg pb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-blue-700">For Children & Teenagers</CardTitle>
                  <div className="flex items-center gap-2 text-blue-600 mt-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Approximately 3 Hours Total</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {childSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quote Callout Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-healing/10 border-2 border-primary/20 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-8">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <blockquote className="text-center pt-4">
              <p className="text-xl text-foreground italic leading-relaxed mb-4">
                &quot;We don&apos;t just treat symptoms—we find the real answers. Many patients who come to us 
                thinking they have one condition actually have two, three, or more. Getting the complete 
                picture changes everything.&quot;
              </p>
              <footer className="text-primary font-semibold text-lg">
                — Dr. Shapiro
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationProcessSection;
