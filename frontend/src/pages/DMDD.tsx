import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Check, 
  Brain, 
  Heart, 
  Users, 
  Clock,
  Award,
  Stethoscope,
  MessageCircle,
  Phone,
  MapPin,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Pill,
  Calendar,
  AlertTriangle,
  Sparkles,
  Target,
  Activity,
  BookOpen,
  XCircle,
  CheckCircle,
  Layers,
  FileText,
  Clipboard,
  ArrowRight,
  Zap,
  Flame,
  Home,
  GraduationCap,
  ThermometerSun,
  HeartHandshake,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// DMDD Page Schema for SEO
const dmddSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "DMDD Treatment Cincinnati | Pediatric Mood Disorder Specialist",
    "description": "Expert treatment for Disruptive Mood Dysregulation Disorder in children and teens. Dr. Shapiro offers evidence-based therapy and medication management for severe irritability and temper outbursts.",
    "url": "https://arnoldshapiromd.com/dmdd",
    "lastReviewed": "2026-01-25",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Arnold Shapiro",
      "medicalSpecialty": "Psychiatry"
    },
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": "Disruptive Mood Dysregulation Disorder",
      "alternateName": ["DMDD", "Severe Mood Dysregulation"],
      "code": {
        "@type": "MedicalCode",
        "code": "F34.81",
        "codingSystem": "ICD-10"
      }
    }
  }
];

// Placeholder data structures - to be filled in Prompt 2
const quickFacts = [
  { icon: Activity, label: "Prevalence", value: "{QUICK_FACT_1}" },
  { icon: Calendar, label: "Age of Onset", value: "{QUICK_FACT_2}" },
  { icon: Target, label: "Key Feature", value: "{QUICK_FACT_3}" },
  { icon: CheckCircle, label: "Treatment Success", value: "{QUICK_FACT_4}" }
];

const symptomCategories = [
  {
    icon: Flame,
    title: "Temper Outbursts",
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    borderColor: "border-red-200 dark:border-red-800",
    symptoms: "{SYMPTOMS_OUTBURSTS}"
  },
  {
    icon: ThermometerSun,
    title: "Irritable Mood",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-200 dark:border-orange-800",
    symptoms: "{SYMPTOMS_MOOD}"
  },
  {
    icon: Brain,
    title: "Cognitive Signs",
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-200 dark:border-amber-800",
    symptoms: "{SYMPTOMS_COGNITIVE}"
  }
];

const faqItems = [
  {
    question: "{FAQ_Q1}",
    answer: "{FAQ_A1}"
  },
  {
    question: "{FAQ_Q2}",
    answer: "{FAQ_A2}"
  },
  {
    question: "{FAQ_Q3}",
    answer: "{FAQ_A3}"
  },
  {
    question: "{FAQ_Q4}",
    answer: "{FAQ_A4}"
  },
  {
    question: "{FAQ_Q5}",
    answer: "{FAQ_A5}"
  },
  {
    question: "{FAQ_Q6}",
    answer: "{FAQ_A6}"
  }
];

const warningSigns = [
  "{WARNING_SIGN_1}",
  "{WARNING_SIGN_2}",
  "{WARNING_SIGN_3}",
  "{WARNING_SIGN_4}",
  "{WARNING_SIGN_5}"
];

const DMDD = () => {
  const [activeTab, setActiveTab] = useState("therapy");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DMDD Treatment Cincinnati | Pediatric Mood Disorder Specialist</title>
        <meta name="description" content="Expert treatment for Disruptive Mood Dysregulation Disorder in children and teens. Dr. Shapiro offers evidence-based therapy and medication management for severe irritability and temper outbursts." />
        <meta name="keywords" content="DMDD, disruptive mood dysregulation disorder, pediatric mood disorder, child psychiatrist Cincinnati, severe irritability treatment, temper outbursts, childhood mood disorders" />
        <link rel="canonical" href="https://arnoldshapiromd.com/dmdd" />
        <script type="application/ld+json">
          {JSON.stringify(dmddSchema)}
        </script>
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-amber-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <Link 
            to="/disorders" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Conditions
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm">
                Pediatric Mood Disorder
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Disruptive Mood Dysregulation Disorder
                <span className="block text-amber-200 text-2xl md:text-3xl mt-2">(DMDD)</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {"{HERO_TAGLINE}"}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/50 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#understanding">
                    Learn More
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Flame className="w-8 h-8 text-amber-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Expert Care</h3>
                    <p className="text-white/70">35+ Years Experience</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>Board-Certified Child Psychiatrist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>Evidence-Based Treatment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>Family-Centered Approach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>School Collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="bg-orange-50 dark:bg-gray-800 py-8 border-b border-orange-100 dark:border-gray-700">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <fact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                  <p className="font-bold text-foreground">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-16">
        
        {/* Understanding Section */}
        <section id="understanding" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-300">
              <Brain className="w-4 h-4 mr-2" />
              Understanding DMDD
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is DMDD?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {"{UNDERSTANDING_INTRO}"}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                  Key Characteristics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  {"{UNDERSTANDING_CHARACTERISTICS}"}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                <CardTitle className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  DMDD vs. Other Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  {"{UNDERSTANDING_COMPARISON}"}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Symptoms Section */}
        <section id="symptoms" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-red-600 border-red-300">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Signs &amp; Symptoms
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognizing DMDD</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {"{SYMPTOMS_INTRO}"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {symptomCategories.map((category, index) => (
              <Card 
                key={index}
                className={`${category.bgColor} ${category.borderColor} border-2 shadow-lg hover:shadow-xl transition-shadow rounded-2xl`}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-full ${category.bgColor} flex items-center justify-center mb-4 border ${category.borderColor}`}>
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none text-sm">
                    {category.symptoms}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Causes Section */}
        <section id="causes" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-amber-600 border-amber-300">
              <Brain className="w-4 h-4 mr-2" />
              Neurobiology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Causes DMDD?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {"{CAUSES_INTRO}"}
            </p>
          </div>
          
          <Card className="border-amber-200 dark:border-amber-800 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-amber-500" />
                    Brain Factors
                  </h3>
                  <div className="prose dark:prose-invert max-w-none">
                    {"{CAUSES_BRAIN}"}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-500" />
                    Environmental Factors
                  </h3>
                  <div className="prose dark:prose-invert max-w-none">
                    {"{CAUSES_ENVIRONMENT}"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Diagnosis Section */}
        <section id="diagnosis" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-300">
              <Clipboard className="w-4 h-4 mr-2" />
              Diagnosis
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DSM-5 Criteria &amp; Evaluation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {"{DIAGNOSIS_INTRO}"}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-orange-500" />
                  DSM-5 Diagnostic Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  {"{DIAGNOSIS_CRITERIA}"}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
                <CardTitle className="flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-orange-500" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  {"{DIAGNOSIS_EXPECT}"}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Treatment Section */}
        <section id="treatment" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-300">
              <Heart className="w-4 h-4 mr-2" />
              Treatment Options
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Evidence-Based Treatment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {"{TREATMENT_INTRO}"}
            </p>
          </div>
          
          <Tabs defaultValue="therapy" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
              <TabsTrigger 
                value="therapy" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 dark:data-[state=active]:bg-orange-950 dark:data-[state=active]:text-orange-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Therapy</span>
              </TabsTrigger>
              <TabsTrigger 
                value="medication" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 dark:data-[state=active]:bg-orange-950 dark:data-[state=active]:text-orange-300"
              >
                <Pill className="w-4 h-4" />
                <span className="hidden sm:inline">Medication</span>
              </TabsTrigger>
              <TabsTrigger 
                value="support" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 dark:data-[state=active]:bg-orange-950 dark:data-[state=active]:text-orange-300"
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Family/School</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="therapy">
              <Card className="border-orange-200 dark:border-orange-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                  <CardTitle className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-orange-500" />
                    Therapy Approaches
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    {"{TREATMENT_THERAPY}"}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="medication">
              <Card className="border-orange-200 dark:border-orange-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                  <CardTitle className="flex items-center gap-3">
                    <Pill className="w-6 h-6 text-orange-500" />
                    Medication Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    {"{TREATMENT_MEDICATION}"}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support">
              <Card className="border-orange-200 dark:border-orange-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-orange-500" />
                    Family &amp; School Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    {"{TREATMENT_FAMILY_SCHOOL}"}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Living With Section */}
        <section id="living-with" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-teal-600 border-teal-300">
              <Home className="w-4 h-4 mr-2" />
              Daily Life
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Living with DMDD</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {"{LIVING_INTRO}"}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-teal-200 dark:border-teal-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-teal-500" />
                  Daily Management Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  {"{LIVING_DAILY}"}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-teal-200 dark:border-teal-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
                <CardTitle className="flex items-center gap-3">
                  <HeartHandshake className="w-6 h-6 text-teal-500" />
                  Family Impact &amp; Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  {"{LIVING_FAMILY}"}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* When to Seek Help Section */}
        <section className="mb-20 scroll-mt-20">
          <Card className="border-red-200 dark:border-red-800 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <AlertTriangle className="w-7 h-7 text-red-500" />
                When to Seek Help
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground mb-6">
                {"{SEEK_HELP_INTRO}"}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {warningSigns.map((sign, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-red-200 dark:border-red-800"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl border border-red-300 dark:border-red-700">
                <p className="font-semibold text-red-600 dark:text-red-400 mb-2">
                  🚨 Emergency Resources
                </p>
                <p className="text-muted-foreground">
                  If your child is in immediate danger or expressing thoughts of self-harm, call 911 or go to your nearest emergency room. 
                  You can also call the <strong>988 Suicide &amp; Crisis Lifeline</strong> (call or text 988) available 24/7.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-300">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about DMDD diagnosis and treatment
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card 
                key={index}
                className={`border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                  openFaq === index ? 'ring-2 ring-purple-300 dark:ring-purple-700' : ''
                }`}
                onClick={() => toggleFaq(index)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-sm font-bold">
                        {index + 1}
                      </span>
                      {item.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    )}
                  </CardTitle>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0 pb-6">
                    <div className="pl-11 prose dark:prose-invert max-w-none text-muted-foreground">
                      {item.answer}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

      </main>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white py-16 scroll-mt-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Help for Your Child Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            With over 35 years of experience treating pediatric mood disorders, Dr. Shapiro provides 
            compassionate, evidence-based care for children with DMDD and their families.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
              asChild
            >
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Appointment
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:513-831-8833">
                <Phone className="w-5 h-5 mr-2" />
                (513) 831-8833
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
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
      </section>

      <EmergencyDisclaimer />
      <Footer />
    </div>
  );
};

export default DMDD;
