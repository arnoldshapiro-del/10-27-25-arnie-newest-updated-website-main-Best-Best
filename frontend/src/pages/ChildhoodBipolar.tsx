import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Check, 
  Brain, 
  Heart, 
  Users, 
  Clock,
  FileText,
  Award,
  Stethoscope,
  MessageCircle,
  Phone,
  MapPin,
  AlertCircle,
  Lightbulb,
  Target,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Pill,
  BookOpen,
  Star,
  Calendar,
  Zap,
  Moon,
  Sun,
  Activity,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Childhood Bipolar Page Schema
const childhoodBipolarSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Childhood Bipolar Disorder Treatment in Cincinnati & Northern Kentucky",
    "description": "Expert diagnosis and treatment of bipolar disorder in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care with over 35 years of experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Pediatric Bipolar Disorder",
      "alternateName": ["Childhood Bipolar Disorder", "Early-Onset Bipolar Disorder"],
      "signOrSymptom": [
        "Severe mood swings",
        "Manic episodes",
        "Depressive episodes",
        "Irritability",
        "Sleep disturbances",
        "Rapid cycling"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about childhood bipolar disorder symptoms, diagnosis, and treatment options including medication management and family therapy"
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Child and Adolescent Psychiatry"
    },
    "provider": {
      "@type": "Physician",
      "name": "Dr. Arnold G. Shapiro, MD",
      "medicalSpecialty": ["Psychiatry", "Child and Adolescent Psychiatry"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can children have bipolar disorder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, bipolar disorder can occur in children and adolescents, though it often presents differently than in adults. Accurate diagnosis requires careful evaluation by an experienced child psychiatrist."
        }
      },
      {
        "@type": "Question",
        "name": "How is childhood bipolar disorder different from ADHD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While both conditions can involve hyperactivity and impulsivity, bipolar disorder is characterized by distinct mood episodes. A thorough psychiatric evaluation is essential for accurate diagnosis."
        }
      },
      {
        "@type": "Question",
        "name": "What treatments are available for childhood bipolar disorder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Treatment typically includes mood stabilizing medications, psychotherapy, family education, and ongoing monitoring. Dr. Shapiro creates individualized treatment plans for each child and family."
        }
      }
    ]
  }
];

// FAQ Items
const faqItems = [
  {
    question: "[FAQ Question 1 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  },
  {
    question: "[FAQ Question 2 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  },
  {
    question: "[FAQ Question 3 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  },
  {
    question: "[FAQ Question 4 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  },
  {
    question: "[FAQ Question 5 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  },
  {
    question: "[FAQ Question 6 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  }
];

// Symptoms placeholder data
const symptomCategories = [
  {
    title: "Manic Symptoms",
    icon: Sun,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    symptoms: ["[Symptom placeholder 1]", "[Symptom placeholder 2]", "[Symptom placeholder 3]"]
  },
  {
    title: "Depressive Symptoms",
    icon: Moon,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    symptoms: ["[Symptom placeholder 1]", "[Symptom placeholder 2]", "[Symptom placeholder 3]"]
  },
  {
    title: "Mixed/Other Symptoms",
    icon: Activity,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    symptoms: ["[Symptom placeholder 1]", "[Symptom placeholder 2]", "[Symptom placeholder 3]"]
  }
];

const ChildhoodBipolar = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Childhood Bipolar Disorder Treatment Cincinnati | Pediatric Psychiatrist</title>
        <meta name="description" content="Expert diagnosis and treatment of bipolar disorder in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care in Cincinnati and Northern Kentucky." />
        <meta name="keywords" content="childhood bipolar disorder, pediatric bipolar, early-onset bipolar, child psychiatrist Cincinnati, mood disorders children, bipolar treatment kids" />
        <link rel="canonical" href="https://arnoldshapiromd.com/childhood-bipolar" />
        <script type="application/ld+json">
          {JSON.stringify(childhoodBipolarSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-healing/5 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/disorders">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Conditions
                </Button>
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20">
                    <Brain className="w-4 h-4 mr-1" />
                    Mood Disorder Specialist
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children &amp; Adolescents
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Childhood Bipolar Disorder Treatment in{" "}
                  <span className="text-primary">Cincinnati &amp; Northern Kentucky</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  [Placeholder - Hero subtitle content will be added in Prompt 2. This will describe Dr. Shapiro&apos;s 
                  approach to diagnosing and treating bipolar disorder in children and adolescents.]
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Comprehensive diagnostic evaluation</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Evidence-based treatment protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Family-centered approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Over 35 years of experience</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    asChild
                  >
                    <a href="tel:859-341-7453">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (859) 341-7453
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/7579190/pexels-photo-7579190.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Compassionate psychiatric consultation for childhood bipolar disorder" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Brain className="w-4 h-4 mr-1" />
                Understanding the Condition
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is Childhood Bipolar Disorder?
              </h2>
              <p className="text-lg text-muted-foreground">
                [Placeholder - Clinical content about childhood bipolar disorder will be added in Prompt 2. 
                This section will explain what the condition is, how it differs from adult bipolar disorder, 
                and why early diagnosis and treatment are important.]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    Key Characteristics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Key characteristics of childhood bipolar disorder will be described here. 
                    This includes how mood episodes present in children and adolescents.]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    Why Early Treatment Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Information about the importance of early diagnosis and treatment 
                    will be added here.]
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <Activity className="w-4 h-4 mr-1" />
                Signs &amp; Symptoms
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Recognizing Childhood Bipolar Disorder
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Introduction to symptoms will be added in Prompt 2]
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {symptomCategories.map((category, index) => (
                <Card key={index} className={`${category.bgColor} border-2 shadow-lg`}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center mb-3`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className={`w-4 h-4 ${category.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Approach Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Heart className="w-4 h-4 mr-1" />
                Our Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive Treatment for Your Child
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Dr. Shapiro&apos;s treatment philosophy and approach will be described here in Prompt 2]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Thorough Evaluation</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Evaluation process description]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-healing/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pill className="w-7 h-7 text-healing" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Medication Management</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Medication approach description]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Family Therapy</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Family therapy description]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Ongoing care description]</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <FileText className="w-4 h-4 mr-1" />
                What to Expect
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Your Child&apos;s Evaluation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Overview of the evaluation and treatment process will be added in Prompt 2]
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Initial Consultation</h3>
                    <p className="text-muted-foreground">[Placeholder - Initial consultation details]</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Comprehensive Assessment</h3>
                    <p className="text-muted-foreground">[Placeholder - Assessment details]</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Personalized Treatment Plan</h3>
                    <p className="text-muted-foreground">[Placeholder - Treatment plan details]</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ongoing Care &amp; Monitoring</h3>
                    <p className="text-muted-foreground">[Placeholder - Ongoing care details]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <HelpCircle className="w-4 h-4 mr-1" />
                FAQ
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Common questions about childhood bipolar disorder diagnosis and treatment
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <Card 
                  key={index}
                  className={`border-purple-200 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                    openFaq === index ? 'ring-2 ring-purple-300' : ''
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span className="flex items-center gap-3 text-left">
                        <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        {item.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent className="pt-0 pb-6">
                      <div className="pl-11 text-muted-foreground">
                        {item.answer}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Get Help for Your Child Today
              </h2>
              <p className="text-xl text-white/90 mb-8">
                With over 35 years of experience treating mood disorders in children and adolescents, 
                Dr. Shapiro provides compassionate, expert care for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Evaluation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8"
                  asChild
                >
                  <a href="tel:859-341-7453">
                    <Phone className="w-5 h-5 mr-2" />
                    (859) 341-7453
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Cincinnati &amp; Northern Kentucky</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>35+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EmergencyDisclaimer />
      <Footer />
    </div>
  );
};

export default ChildhoodBipolar;
