import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  const achievements = [
    { icon: Award, title: "Board Certified", desc: "American Board of Psychiatry" },
    { icon: Users, title: "35+ Years", desc: "Clinical Experience" },
    { icon: Clock, title: "24/7 Support", desc: "Crisis Intervention" },
    { icon: Heart, title: "Compassionate Care", desc: "Patient-Centered Approach" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 text-base">About Our Practice</Badge>
          <h1 className="text-4xl font-bold mb-6">Arnold G. Shapiro MD</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing compassionate, evidence-based psychiatric care 
            to help you achieve mental wellness and live your best life.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Doctor Profile Section */}
        <div className="mb-16">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Meet Arnold G. Shapiro MD</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Dr. Arnold G. Shapiro is a board-certified psychiatrist with extensive experience 
              in treating a wide range of mental health conditions. He is committed to providing 
              compassionate, evidence-based psychiatric care to help patients achieve mental wellness.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Dr. Shapiro specializes in comprehensive psychiatric evaluation and treatment, 
              working with patients to develop personalized care plans that address their unique 
              needs and circumstances.
            </p>
            <div className="space-y-2 text-center">
              <p className="font-semibold"><strong>Practice Information:</strong></p>
              <ul className="text-muted-foreground space-y-1">
                <li><strong>• Board Certified Psychiatrist</strong></li>
                <li><strong>• Comprehensive Psychiatric Evaluation</strong></li>
                <li><strong>• Personalized Treatment Plans</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Doctor Image - Large and Centered */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-md md:max-w-lg">
            <img 
              src="/doctor-arnold-shapiro.jpg" 
              alt="Portrait of Dr. Arnold G. Shapiro" 
              className="w-full h-auto object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Philosophy</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p>
                Mental health is just as important as physical health. Every individual deserves 
                access to quality psychiatric care that respects their unique circumstances, 
                cultural background, and personal goals.
              </p>
              <p>
                We believe in the power of the therapeutic relationship and work collaboratively 
                with our patients to develop treatment plans that are both effective and sustainable. 
                Our approach integrates the latest research with time-tested therapeutic techniques.
              </p>
              <p>
                Recovery is possible, and hope is always within reach. We're here to support 
                you every step of the way on your journey to mental wellness.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;