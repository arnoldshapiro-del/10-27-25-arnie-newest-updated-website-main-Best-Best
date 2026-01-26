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
  HelpCircle,
  AlertTriangle,
  Activity,
  Eye,
  Volume2,
  Hand,
  Mic
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Tic Disorders Page Schema
const ticDisordersSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Tic Disorders & Tourette Syndrome Treatment in Cincinnati & Northern Kentucky",
    "description": "Expert diagnosis and treatment of Tic Disorders and Tourette Syndrome in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care with over 35 years of experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Tic Disorders",
      "alternateName": ["Tourette Syndrome", "Tourette's Disorder", "Chronic Tic Disorder", "Transient Tic Disorder"],
      "signOrSymptom": [
        "Motor tics",
        "Vocal tics",
        "Eye blinking",
        "Facial grimacing",
        "Throat clearing",
        "Sniffing",
        "Complex movements",
        "Coprolalia (rare)"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about tic disorders symptoms, diagnosis, and treatment options including CBIT, medication management, and lifestyle modifications"
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
        "name": "What is the difference between Tourette Syndrome and other tic disorders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tourette Syndrome requires both motor and vocal tics present for more than one year. Other tic disorders may involve only motor or only vocal tics, or tics lasting less than one year."
        }
      },
      {
        "@type": "Question",
        "name": "Do all people with Tourette Syndrome swear involuntarily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Coprolalia (involuntary swearing) affects only about 10-15% of people with Tourette Syndrome. This is a common misconception perpetuated by media portrayals."
        }
      },
      {
        "@type": "Question",
        "name": "Can tics be controlled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many people can suppress tics temporarily, but this often leads to a rebound effect where tics increase afterward. CBIT therapy teaches techniques to manage tic urges effectively."
        }
      }
    ]
  }
];

// FAQ Items - Placeholder
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
  },
  {
    question: "[FAQ Question 7 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  },
  {
    question: "[FAQ Question 8 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  },
  {
    question: "[FAQ Question 9 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  },
  {
    question: "[FAQ Question 10 - Placeholder]",
    answer: "[Clinical content to be added in Prompt 2]"
  }
];

// Tic types placeholder
const ticTypes = [
  {
    title: "Simple Motor Tics",
    icon: Eye,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    examples: ["[Placeholder - Eye blinking]", "[Placeholder - Facial grimacing]", "[Placeholder - Shoulder shrugging]"]
  },
  {
    title: "Complex Motor Tics",
    icon: Hand,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    examples: ["[Placeholder - Touching objects]", "[Placeholder - Jumping]", "[Placeholder - Obscene gestures]"]
  },
  {
    title: "Simple Vocal Tics",
    icon: Volume2,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    examples: ["[Placeholder - Throat clearing]", "[Placeholder - Sniffing]", "[Placeholder - Grunting]"]
  },
  {
    title: "Complex Vocal Tics",
    icon: Mic,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    examples: ["[Placeholder - Repeating words]", "[Placeholder - Echolalia]", "[Placeholder - Coprolalia (rare)]"]
  }
];

// Co-occurring conditions placeholder
const coOccurringConditions = [
  {
    name: "ADHD",
    percentage: "60-80%",
    description: "[Placeholder - ADHD co-occurrence description]",
    icon: Zap
  },
  {
    name: "OCD",
    percentage: "30-50%",
    description: "[Placeholder - OCD co-occurrence description]",
    icon: Target
  },
  {
    name: "Anxiety Disorders",
    percentage: "30-40%",
    description: "[Placeholder - Anxiety co-occurrence description]",
    icon: AlertCircle
  },
  {
    name: "Learning Disabilities",
    percentage: "20-30%",
    description: "[Placeholder - Learning disabilities co-occurrence description]",
    icon: BookOpen
  }
];

const TicDisorders = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tic Disorders & Tourette Syndrome Treatment Cincinnati | Child Psychiatrist</title>
        <meta name="description" content="Expert diagnosis and treatment of Tic Disorders and Tourette Syndrome in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care in Cincinnati and Northern Kentucky." />
        <meta name="keywords" content="tic disorders, Tourette syndrome, motor tics, vocal tics, CBIT therapy, child psychiatrist Cincinnati, tic treatment" />
        <link rel="canonical" href="https://arnoldshapiromd.com/tic-disorders" />
        <script type="application/ld+json">
          {JSON.stringify(ticDisordersSchema)}
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
                    Movement Disorder Specialist
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children &amp; Adolescents
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Tic Disorders &amp; Tourette Syndrome Treatment in{" "}
                  <span className="text-primary">Cincinnati &amp; Northern Kentucky</span>
                </h1>
                
                <p className="text-lg text-muted-foreground italic">
                  [Placeholder - Tagline will be added in Prompt 2]
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  [Placeholder - Hero introduction content about tic disorders and Tourette Syndrome will be added in Prompt 2. 
                  This will describe Dr. Shapiro's approach to diagnosing and treating these conditions in children and adolescents.]
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span><strong>Board-Certified Psychiatrist</strong> – Adult AND Child/Adolescent Psychiatry</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span><strong>35+ Years of Experience</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span><strong>Comprehensive Evaluation</strong> – Finding Co-occurring Conditions</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span><strong>Evidence-Based Treatment</strong> – CBIT, Medication, Lifestyle</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Child's Evaluation
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
                    src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Compassionate psychiatric consultation for tic disorders" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="py-8 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">[X%]</div>
                <div className="text-sm text-muted-foreground">[Placeholder stat 1]</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">[X%]</div>
                <div className="text-sm text-muted-foreground">[Placeholder stat 2]</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-healing">[X%]</div>
                <div className="text-sm text-muted-foreground">[Placeholder stat 3]</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">[X]</div>
                <div className="text-sm text-muted-foreground">[Placeholder stat 4]</div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Tic Disorders Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Brain className="w-4 h-4 mr-1" />
                Understanding the Condition
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Understanding Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground">
                [Placeholder - Clinical content about tic disorders will be added in Prompt 2. 
                This section will explain what tic disorders are, the difference between transient and chronic tics, 
                and how Tourette Syndrome fits into the spectrum.]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-primary" />
                    What Are Tics?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Definition and explanation of tics will be described here.]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    The Premonitory Urge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Information about the premonitory urge that often precedes tics 
                    will be added here.]
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Tics Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Activity className="w-4 h-4 mr-1" />
                Types of Tics
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Motor and Vocal Tics
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Introduction to the different types of tics]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {ticTypes.map((type, index) => (
                <Card key={index} className={`${type.bgColor} border-2 shadow-lg`}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${type.bgColor} flex items-center justify-center mb-3`}>
                      <type.icon className={`w-6 h-6 ${type.color}`} />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className={`w-4 h-4 ${type.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-muted-foreground">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tourette vs Other Tic Disorders Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Understanding the Spectrum
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tourette Syndrome vs. Other Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Introduction explaining the spectrum of tic disorders]
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-blue-200 shadow-lg">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg text-blue-700">Provisional Tic Disorder</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">
                      [Placeholder - Provisional/transient tic disorder description]
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200 shadow-lg">
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="text-lg text-purple-700">Persistent Tic Disorder</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">
                      [Placeholder - Persistent (chronic) tic disorder description]
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200 shadow-lg">
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="text-lg text-amber-700">Tourette Syndrome</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">
                      [Placeholder - Tourette Syndrome description and criteria]
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Co-occurring Conditions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <Target className="w-4 h-4 mr-1" />
                Related Conditions
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Conditions That Often Occur with Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Introduction about comorbidity with tic disorders]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {coOccurringConditions.map((condition, index) => (
                <Card key={index} className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <condition.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg text-center mb-1">{condition.name}</h3>
                    <p className="text-center text-primary font-semibold mb-2">{condition.percentage}</p>
                    <p className="text-sm text-muted-foreground text-center">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* We Look for Everything Callout */}
            <div className="max-w-4xl mx-auto mt-12">
              <Card className="border-healing/30 bg-gradient-to-r from-healing/10 to-trust/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-healing/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-healing" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        We Evaluate the Complete Picture—Not Just the Tics
                      </h3>
                      <p className="text-muted-foreground">
                        [Placeholder - Content about comprehensive evaluation, looking for ADHD (60-80%), 
                        OCD (30-50%), anxiety disorders, learning disabilities, and other conditions that 
                        commonly occur with tic disorders. Often the co-occurring conditions cause more 
                        impairment than the tics themselves.]
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnostic Approach Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Our Diagnostic Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Diagnose Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Overview of the evaluation and diagnostic process will be added in Prompt 2]
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Parent/Caregiver Interview</h3>
                    <p className="text-muted-foreground">[Placeholder - Parent interview details]</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Child/Teen Evaluation</h3>
                    <p className="text-muted-foreground">[Placeholder - Child evaluation details]</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Tic Assessment &amp; History</h3>
                    <p className="text-muted-foreground">[Placeholder - Tic assessment details including waxing/waning patterns]</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Family Meeting &amp; Treatment Plan</h3>
                    <p className="text-muted-foreground">[Placeholder - Family meeting and plan details]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Heart className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive Treatment for Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Dr. Shapiro's treatment philosophy and approach will be described here in Prompt 2]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">CBIT Therapy</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Comprehensive Behavioral Intervention for Tics description]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-healing/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pill className="w-7 h-7 text-healing" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Medication</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Medication options when needed]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Lifestyle Modifications</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Stress management, sleep, triggers]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Education &amp; Support</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Family education and school accommodations]</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Shapiro Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Award className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Dr. Shapiro for Your Child's Tic Disorder Treatment
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    35+ Years of Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Experience description]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Comprehensive Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Evaluation approach description]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Expert in Comorbidities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Expertise in treating co-occurring ADHD, OCD, anxiety]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    Family-Centered Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Family-centered approach description]
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <HelpCircle className="w-4 h-4 mr-1" />
                FAQ
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions About Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Common questions about tic disorders and Tourette Syndrome diagnosis and treatment
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
                With over 35 years of experience treating tic disorders and Tourette Syndrome in children and adolescents, 
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
                  <span>Fort Wright, KY (5 min from Cincinnati)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Comprehensive Evaluations</span>
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

export default TicDisorders;
