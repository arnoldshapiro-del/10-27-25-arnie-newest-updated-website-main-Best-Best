import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Users, 
  MessageSquare, 
  Pill, 
  Clock,
  Shield,
  Sparkles,
  Stethoscope,
  BookOpen,
  Phone,
  Video
} from "lucide-react";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific needs and goals.",
      duration: "50 minutes",
      features: ["Cognitive Behavioral Therapy", "Psychodynamic Therapy", "Solution-Focused Therapy"]
    },
    {
      icon: MessageSquare,
      title: "Family Therapy",
      description: "Address family dynamics and improve communication patterns.",
      duration: "45-60 minutes",
      features: ["Family Systems Therapy", "Parent-Child Therapy", "Blended Family Support"]
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Expert psychiatric medication evaluation and ongoing monitoring.",
      duration: "30-45 minutes",
      features: ["Initial Assessment", "Medication Optimization", "Side Effect Management"]
    },
    {
      icon: Stethoscope,
      title: "Psychiatric Evaluation",
      description: "Comprehensive assessment to determine the best treatment approach.",
      duration: "For adults: 60 minutes with therapist, then 60 minutes with Dr. Shapiro (total 120 minutes). For children: 60 minutes parents with therapist, then 60 minutes child with therapist, then 60 minutes child and parents with Dr. Shapiro (total 180 minutes)",
      features: ["Diagnostic Assessment", "Treatment Planning", "Risk Assessment"]
    }
  ];

  const specialtyServices = [
    {
      icon: Shield,
      title: "Crisis Intervention",
      description: "Immediate support during mental health emergencies.",
      availability: "24/7 Crisis Line"
    },
    {
      icon: Video,
      title: "Teletherapy",
      description: "Secure online therapy sessions from the comfort of your home.",
      availability: "Flexible Scheduling"
    },
    {
      icon: BookOpen,
      title: "Psychological Testing",
      description: "Comprehensive assessments for ADHD, autism, and other conditions.",
      availability: "By Appointment"
    },
    {
      icon: Sparkles,
      title: "Wellness Programs",
      description: "Holistic approaches including mindfulness and stress management.",
      availability: "Group & Individual"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 text-base">Our Services</Badge>
          <h1 className="text-4xl font-bold mb-6">Comprehensive Mental Health Care</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a full range of psychiatric and psychological services to meet 
            your unique mental health needs.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-10 w-10 mb-3 text-primary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    <Clock className="h-3 w-3 mr-1" />
                    {service.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">What's Included:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Services */}
        <div className="text-center mb-16 p-6 bg-card rounded-lg">
          <p className="text-muted-foreground">
            For non-emergency concerns, call our office at (859) 341-7453. If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;