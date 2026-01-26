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
  Home,
  School,
  UserX,
  Scale,
  Frown,
  HandMetal
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// ODD Page Schema
const oddSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Oppositional Defiant Disorder (ODD) Treatment in Cincinnati & Northern Kentucky",
    "description": "Expert diagnosis and treatment of Oppositional Defiant Disorder in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care with over 35 years of experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Oppositional Defiant Disorder",
      "alternateName": ["ODD", "Oppositional Disorder"],
      "signOrSymptom": [
        "Frequent temper outbursts",
        "Argumentative behavior",
        "Defiance of rules",
        "Deliberately annoying others",
        "Blaming others for mistakes",
        "Easily annoyed",
        "Angry and resentful",
        "Spiteful or vindictive behavior"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about ODD symptoms, diagnosis, and treatment options including parent training, therapy, and medication management when needed"
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
        "name": "What is Oppositional Defiant Disorder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ODD is a behavioral disorder characterized by a pattern of angry, irritable mood, argumentative/defiant behavior, and vindictiveness that significantly impacts functioning at home, school, or with peers."
        }
      },
      {
        "@type": "Question",
        "name": "How is ODD different from normal childhood defiance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While all children can be defiant at times, ODD involves a persistent pattern that lasts at least 6 months, occurs more frequently than typical for the child's age, and causes significant problems in daily functioning."
        }
      },
      {
        "@type": "Question",
        "name": "What treatments are available for ODD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Treatment typically includes parent management training, individual therapy for the child, family therapy, and sometimes medication to address co-occurring conditions like ADHD or anxiety."
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

// Symptom categories placeholder
const symptomCategories = [
  {
    title: "Angry/Irritable Mood",
    icon: Frown,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    symptoms: ["[Symptom placeholder 1]", "[Symptom placeholder 2]", "[Symptom placeholder 3]"]
  },
  {
    title: "Argumentative/Defiant Behavior",
    icon: UserX,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    symptoms: ["[Symptom placeholder 1]", "[Symptom placeholder 2]", "[Symptom placeholder 3]", "[Symptom placeholder 4]"]
  },
  {
    title: "Vindictiveness",
    icon: AlertTriangle,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    symptoms: ["[Symptom placeholder 1]", "[Symptom placeholder 2]"]
  }
];

// Co-occurring conditions placeholder
const coOccurringConditions = [
  {
    name: "ADHD",
    description: "[Placeholder - ADHD co-occurrence description]",
    icon: Zap
  },
  {
    name: "Anxiety Disorders",
    description: "[Placeholder - Anxiety co-occurrence description]",
    icon: AlertCircle
  },
  {
    name: "DMDD",
    description: "[Placeholder - DMDD co-occurrence description]",
    icon: Frown
  },
  {
    name: "Learning Disorders",
    description: "[Placeholder - Learning disorders co-occurrence description]",
    icon: BookOpen
  }
];

const ODD = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Oppositional Defiant Disorder (ODD) Treatment Cincinnati | Child Psychiatrist</title>
        <meta name="description" content="Expert diagnosis and treatment of Oppositional Defiant Disorder (ODD) in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care in Cincinnati and Northern Kentucky." />
        <meta name="keywords" content="oppositional defiant disorder, ODD treatment, child behavior problems, defiant child, child psychiatrist Cincinnati, behavior disorder treatment" />
        <link rel="canonical" href="https://arnoldshapiromd.com/oppositional-defiant-disorder" />
        <script type="application/ld+json">
          {JSON.stringify(oddSchema)}
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
                    Behavioral Disorder Specialist
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children &amp; Adolescents
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Oppositional Defiant Disorder Treatment in{" "}
                  <span className="text-primary">Cincinnati &amp; Northern Kentucky</span>
                </h1>
                
                <p className="text-lg text-muted-foreground italic">
                  [Placeholder - Tagline will be added in Prompt 2]
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  [Placeholder - Hero introduction content about ODD will be added in Prompt 2. This will describe 
                  Dr. Shapiro's approach to diagnosing and treating oppositional defiant disorder in children and adolescents.]
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
                    <span><strong>Comprehensive Evaluation</strong> – Finding What Others Miss</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span><strong>Family-Centered Approach</strong></span>
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
                    src="https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Compassionate psychiatric consultation for childhood behavioral disorders" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding ODD Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Brain className="w-4 h-4 mr-1" />
                Understanding the Condition
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Understanding Oppositional Defiant Disorder
              </h2>
              <p className="text-lg text-muted-foreground">
                [Placeholder - Clinical content about ODD will be added in Prompt 2. 
                This section will explain what the condition is, how it affects children, 
                and why proper diagnosis and treatment are important.]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    What is ODD?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Definition and explanation of ODD will be described here.]
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

        {/* ODD vs Normal Defiance Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <Scale className="w-4 h-4 mr-1" />
                Understanding the Difference
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ODD vs. Normal Childhood Defiance
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Introduction explaining how to tell the difference between normal defiance and ODD]
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-green-700">
                      <Check className="w-6 h-6" />
                      Normal Childhood Defiance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">[Placeholder - Normal behavior 1]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">[Placeholder - Normal behavior 2]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">[Placeholder - Normal behavior 3]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">[Placeholder - Normal behavior 4]</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 bg-red-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-700">
                      <AlertTriangle className="w-6 h-6" />
                      Signs of ODD
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">[Placeholder - ODD sign 1]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">[Placeholder - ODD sign 2]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">[Placeholder - ODD sign 3]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">[Placeholder - ODD sign 4]</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Signs &amp; Symptoms
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Recognizing ODD Symptoms
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

        {/* Symptoms by Setting Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                Where Symptoms Appear
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ODD Symptoms by Setting
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Home className="w-6 h-6 text-purple-600" />
                    At Home
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - How ODD presents at home]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <School className="w-6 h-6 text-purple-600" />
                    At School
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - How ODD presents at school]
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-purple-600" />
                    With Peers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - How ODD affects peer relationships]
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Co-occurring Conditions Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Target className="w-4 h-4 mr-1" />
                Related Conditions
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Conditions That Often Occur with ODD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Introduction about comorbidity]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {coOccurringConditions.map((condition, index) => (
                <Card key={index} className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <condition.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg text-center mb-2">{condition.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Approach Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Our Diagnostic Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Diagnose ODD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Overview of the evaluation and diagnostic process will be added in Prompt 2]
              </p>
            </div>
            
            {/* We Look for Everything Callout */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="border-healing/30 bg-gradient-to-r from-healing/10 to-trust/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-healing/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-healing" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        We Evaluate the Complete Picture—Not Just One Condition
                      </h3>
                      <p className="text-muted-foreground">
                        [Placeholder - Content about comprehensive evaluation, looking for ADHD, anxiety, 
                        DMDD, learning disorders, trauma, and other conditions that commonly occur with 
                        or mimic ODD. This callout emphasizes that many children have multiple conditions.]
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    <h3 className="font-bold text-lg mb-1">School and Collateral Information</h3>
                    <p className="text-muted-foreground">[Placeholder - School information gathering details]</p>
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Heart className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive Treatment for ODD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                [Placeholder - Dr. Shapiro's treatment philosophy and approach will be described here in Prompt 2]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Parent Training</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Parent management training description]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-healing/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-7 h-7 text-healing" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Individual Therapy</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Child therapy description]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Family Therapy</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Family therapy description]</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pill className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Medication (When Needed)</h3>
                  <p className="text-sm text-muted-foreground">[Placeholder - Medication approach for co-occurring conditions]</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Shapiro Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Award className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Dr. Shapiro for Your Child's ODD Treatment
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
                    Complex Cases Welcome
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    [Placeholder - Complex cases description]
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <HelpCircle className="w-4 h-4 mr-1" />
                FAQ
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions About ODD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Common questions about Oppositional Defiant Disorder diagnosis and treatment
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
                With over 35 years of experience treating behavioral disorders in children and adolescents, 
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

export default ODD;
