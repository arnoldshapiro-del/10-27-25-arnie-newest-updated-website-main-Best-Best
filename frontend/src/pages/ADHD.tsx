import React from "react";
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
  GraduationCap,
  MessageCircle,
  Phone,
  MapPin,
  AlertCircle,
  Lightbulb,
  Target,
  ChevronRight,
  Shield,
  Pill,
  BookOpen,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// ADHD Page Schema
const adhdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "ADHD Treatment in Cincinnati & Northern Kentucky",
    "description": "Comprehensive ADHD diagnosis and treatment for children, adolescents, and adults. Expert care from board-certified psychiatrist Dr. Arnold Shapiro with 35+ years experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Attention Deficit Hyperactivity Disorder (ADHD)",
      "alternateName": ["ADD", "Attention Deficit Disorder"],
      "signOrSymptom": [
        "Difficulty focusing",
        "Hyperactivity",
        "Impulsivity",
        "Disorganization",
        "Forgetfulness",
        "Difficulty completing tasks"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about ADHD symptoms, diagnosis, and treatment options including medication management and behavioral therapy"
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Psychiatry"
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
        "name": "What is ADHD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ADHD (Attention Deficit Hyperactivity Disorder) is a neurodevelopmental disorder that affects both children and adults. It is characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with daily functioning and development."
        }
      },
      {
        "@type": "Question",
        "name": "How is ADHD diagnosed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ADHD diagnosis involves a comprehensive psychiatric evaluation including clinical interviews, behavioral assessments, symptom checklists, medical history review, and sometimes psychological testing. Our practice uses a thorough three-part evaluation system to ensure accurate diagnosis."
        }
      },
      {
        "@type": "Question",
        "name": "What treatments are available for ADHD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ADHD treatment typically includes medication management (stimulant and non-stimulant options), behavioral therapy, cognitive behavioral therapy, parent training, school accommodations, and lifestyle modifications. Dr. Shapiro creates individualized treatment plans combining these approaches for optimal results."
        }
      },
      {
        "@type": "Question",
        "name": "Can adults have ADHD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ADHD commonly persists into adulthood. Many adults were never diagnosed as children. Adult ADHD can significantly impact work performance, relationships, and daily functioning. Our practice specializes in both adult and pediatric ADHD evaluation and treatment."
        }
      }
    ]
  }
];

export default function ADHD() {
  // ADHD Symptoms Data
  const childSymptoms = [
    "Difficulty paying attention in class or completing homework",
    "Frequently loses things needed for tasks (school supplies, toys)",
    "Easily distracted by external stimuli",
    "Difficulty following instructions or finishing tasks",
    "Avoids tasks requiring sustained mental effort",
    "Appears not to listen when spoken to directly",
    "Makes careless mistakes in schoolwork",
    "Fidgets, squirms, or can't stay seated",
    "Runs or climbs in inappropriate situations",
    "Talks excessively or blurts out answers"
  ];

  const adultSymptoms = [
    "Chronic lateness and poor time management",
    "Difficulty organizing tasks and priorities",
    "Frequently starting projects but not finishing",
    "Trouble concentrating during meetings or conversations",
    "Restlessness and difficulty relaxing",
    "Impulsive decision-making",
    "Difficulty managing finances or paperwork",
    "Relationship difficulties due to forgetfulness",
    "Underperformance at work despite being capable",
    "History of job changes or academic struggles"
  ];

  const treatmentOptions = [
    {
      icon: Pill,
      title: "Medication Management",
      description: "FDA-approved stimulant and non-stimulant medications carefully selected and monitored for each patient's unique needs. We use GeneSight genetic testing when appropriate to optimize medication selection.",
      details: ["Stimulant medications (Adderall, Ritalin, Vyvanse)", "Non-stimulant options (Strattera, Wellbutrin, Intuniv)", "Regular monitoring and dosage adjustments", "GeneSight genetic testing available"]
    },
    {
      icon: MessageCircle,
      title: "Behavioral Therapy",
      description: "Evidence-based therapeutic approaches to develop coping strategies, improve organizational skills, and address emotional challenges.",
      details: ["Cognitive Behavioral Therapy (CBT)", "Parent training and education", "Social skills training", "Academic/workplace accommodations guidance"]
    },
    {
      icon: BookOpen,
      title: "Patient Education",
      description: "Comprehensive education about ADHD helps patients and families understand the condition, reducing stigma and improving outcomes.",
      details: ["Understanding ADHD neurobiology", "Lifestyle modifications and routines", "Diet, exercise, and sleep optimization", "Educational slideshows and resources"]
    },
    {
      icon: Users,
      title: "Family Support",
      description: "ADHD affects the whole family. We provide support and strategies for parents, partners, and siblings.",
      details: ["Family therapy sessions", "Parent support and coaching", "Communication strategies", "School advocacy and IEP guidance"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has diagnosed and treated thousands of ADHD patients, from young children to adults, with proven, effective approaches."
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Evaluation",
      description: "Our unique three-part evaluation system ensures accurate diagnosis and rules out conditions that mimic ADHD symptoms."
    },
    {
      icon: Heart,
      title: "Collaborative Approach",
      description: "We discuss all treatment options, their pros and cons, and work together with you to find the best path forward."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "We're extremely accessible - your questions are answered almost always the same day. Never feel alone in your treatment."
    },
    {
      icon: Shield,
      title: "Medication + Therapy",
      description: "Unlike many psychiatrists who only prescribe medication, we offer both therapy and medication management for comprehensive care."
    },
    {
      icon: GraduationCap,
      title: "Education Focus",
      description: "We empower patients with knowledge through educational slideshows, resources, and ongoing support to understand their condition."
    }
  ];

  const faqs = [
    {
      question: "At what age can ADHD be diagnosed?",
      answer: "ADHD can be diagnosed as early as age 4, though symptoms may be noticeable earlier. Many people aren't diagnosed until adolescence or adulthood, especially if they have the primarily inattentive type. There's no upper age limit for diagnosis."
    },
    {
      question: "Is ADHD medication safe for children?",
      answer: "ADHD medications have been extensively studied and are considered safe when properly prescribed and monitored. Dr. Shapiro carefully evaluates each patient, starts with low doses, and monitors closely for side effects. We discuss all medication options and their risk/benefit profiles with families."
    },
    {
      question: "Do I really need medicine for ADHD?",
      answer: "You don't NEED medicine—but your life could be easier, better, more enjoyable. Medicine is a tool, not a crutch. And you're always in control. If we try a medication and you don't like how it makes you feel, give it 2-3 days. If you're still uncomfortable, stop it and call us. We'll figure out what happened and try something else. My commitment: We keep working together until you're dramatically better."
    },
    {
      question: "Can ADHD be treated without medication?",
      answer: "Yes! There's more than one way to solve problems in life. Medicine is one option. Therapy is another. Lifestyle changes, accommodations at work or school, family support—these all matter. We'll discuss ALL your options and decide together what makes sense for YOU. Dr. Shapiro will never push you toward something you're not comfortable with."
    },
    {
      question: "How long does ADHD treatment take?",
      answer: "ADHD is typically a lifelong condition that requires ongoing management. The good news is that with proper treatment, most people see significant improvement within weeks to months. Dr. Shapiro's goal isn't just to get you 'stable'—it's to get you dramatically better. Treatment plans evolve over time as needs change."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You'll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    },
    {
      question: "What's the difference between ADD and ADHD?",
      answer: "ADD (Attention Deficit Disorder) is an older term. Today, all attention disorders are classified as ADHD with three presentations: Predominantly Inattentive (formerly called ADD), Predominantly Hyperactive-Impulsive, and Combined Type. Dr. Shapiro diagnoses and treats all presentations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>ADHD Treatment Cincinnati | Expert ADHD Diagnosis for Children & Adults | Dr. Shapiro</title>
        <meta name="description" content="Expert ADHD diagnosis and treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in ADHD for children, teens, and adults. 35+ years experience. Same-day responses. Call (859) 341-7453." />
        <meta name="keywords" content="ADHD treatment Cincinnati, ADHD doctor Cincinnati, ADHD specialist Northern Kentucky, adult ADHD treatment, child ADHD psychiatrist, ADD treatment, attention deficit disorder, ADHD medication management" />
        <link rel="canonical" href={`${window.location.origin}/adhd`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="ADHD Treatment in Cincinnati & Northern Kentucky | Dr. Arnold Shapiro" />
        <meta property="og:description" content="Comprehensive ADHD diagnosis and treatment for children, teens, and adults from a board-certified psychiatrist with 35+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/adhd`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(adhdSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-healing/5 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20">
                    <Brain className="w-4 h-4 mr-1" />
                    ADHD Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Expert ADHD Treatment in{" "}
                  <span className="text-primary">Cincinnati & Northern Kentucky</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Struggling with focus, organization, or impulsivity? Dr. Arnold Shapiro provides comprehensive 
                  ADHD evaluation and personalized treatment for children, adolescents, and adults. With 35+ years 
                  of experience and a compassionate approach, we help patients thrive.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Thorough 3-part diagnostic evaluation</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Both medication management & therapy available</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Same-day responses to your questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Two convenient locations in OH & KY</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule ADHD Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    onClick={() => window.location.href = '/screening'}
                  >
                    Take Free ADHD Screening
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/7579190/pexels-photo-7579190.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Professional ADHD consultation with psychiatrist Dr. Arnold Shapiro" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-healing" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Over 9,000 Patients</p>
                      <p className="text-sm text-muted-foreground">Successfully Treated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is ADHD Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Brain className="w-4 h-4 mr-1" />
                Understanding ADHD
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is ADHD?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects millions 
                of children and adults. It impacts the brain&apos;s executive functions—the mental skills that help us plan, 
                focus, remember instructions, and manage multiple tasks. ADHD is not a character flaw or lack of 
                intelligence; it&apos;s a medical condition that responds well to proper treatment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Inattentive Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Difficulty sustaining attention, easily distracted, appears not to listen, avoids tasks requiring 
                    sustained effort, frequently loses things, forgetful in daily activities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Hyperactive-Impulsive Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Fidgets or squirms, leaves seat when remaining seated is expected, runs or climbs inappropriately, 
                    talks excessively, blurts out answers, difficulty waiting turn.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Combined Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    The most common presentation, featuring a mix of both inattentive and hyperactive-impulsive symptoms. 
                    Symptoms may change over time as a person grows and develops.
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
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Recognize the Signs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ADHD Symptoms to Watch For
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ADHD presents differently in children and adults. Recognizing these symptoms is the first step 
                toward getting proper help and improving quality of life.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Children & Teens Symptoms */}
              <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    ADHD in Children & Teens
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs that may indicate your child needs an ADHD evaluation
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {childSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Adult Symptoms */}
              <Card className="bg-gradient-to-br from-purple-50 to-background border-purple-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-700 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6" />
                    ADHD in Adults
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs that may indicate you have undiagnosed adult ADHD
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {adultSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Experiencing several of these symptoms? Take our free screening tool.
              </p>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => window.location.href = '/screening?assessment=adhd'}
              >
                Take Free ADHD Self-Assessment
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Thorough Evaluation Process */}
        <section className="py-16 bg-gradient-calm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <FileText className="w-4 h-4 mr-1" />
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Thorough Evaluation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive Assessment That Finds Real Answers
              </p>
            </div>

            {/* Condition-Specific Evaluation Callout */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary/30 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">We Look for Everything—Not Just ADHD</h3>
                    <p className="text-foreground leading-relaxed">
                      When you come to us thinking you have ADHD, we don&apos;t just test for ADHD—we evaluate for <em>everything</em>. 
                      Anxiety, depression, OCD, mood disorders, and learning differences can all look like ADHD or coexist with it. 
                      Many patients actually have two, three, or more conditions. <strong>Finding the complete picture changes everything 
                      about your treatment.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Adults Section */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-purple-700">For Adults</CardTitle>
                      <p className="text-sm text-muted-foreground">Approximately 2 Hours Total</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Your evaluation begins with a <strong>one-hour session</strong> with our licensed professional counselor, 
                    who conducts a comprehensive assessment. She then extensively reviews her findings with Dr. Shapiro, 
                    who takes detailed notes.
                  </p>
                  <p className="text-foreground">
                    You&apos;ll then meet directly with Dr. Shapiro for approximately <strong>one hour</strong>. He&apos;ll share 
                    what he&apos;s learned, ask you to clarify anything important, and discuss his diagnostic findings.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                    <p className="text-blue-800 font-semibold mb-2">Here&apos;s what makes us different:</p>
                    <p className="text-blue-700 text-sm">
                      We don&apos;t just look for what you think you might have. If you come to us saying &quot;I think I have ADHD,&quot; 
                      we evaluate for <em>everything</em>—mood disorders, anxiety, OCD, and other conditions that can look like 
                      ADHD or co-exist with it. Many patients have 2, 3, or even 5 conditions that need to be addressed together.
                    </p>
                  </div>
                  
                  <p className="text-foreground">
                    Dr. Shapiro will explain all your treatment options—because there&apos;s more than one way to address these 
                    challenges. You&apos;ll decide together what feels right for you. If medication is part of your plan, he&apos;ll 
                    explain exactly how it works, what side effects to watch for, and how to handle them.
                  </p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-amber-800 font-semibold text-sm">Dr. Shapiro&apos;s Guidance:</p>
                    <p className="text-amber-700 italic">&quot;If you&apos;re uncomfortable with a medication for 2-3 days, stop it and call us.&quot;</p>
                  </div>
                  
                  <p className="text-foreground mt-4">
                    You&apos;ll continue with <strong>monthly appointments</strong> until you&apos;re dramatically better—not just 
                    &quot;stable,&quot; but <em>thriving</em>.
                  </p>
                </CardContent>
              </Card>

              {/* Children & Teenagers Section */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-blue-700">For Children & Teenagers</CardTitle>
                      <p className="text-sm text-muted-foreground">Approximately 3 Hours Total</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    We take extra care with young patients. The process begins with a <strong>one-hour meeting</strong> between 
                    parents and our licensed counselor, followed by a separate <strong>one-hour session</strong> where the 
                    counselor meets with your child or teenager. Rating scales are collected from parents, teachers, and 
                    sometimes the child.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                    <p className="text-blue-800 font-semibold mb-2">Our counselor is trained to look for everything:</p>
                    <p className="text-blue-700 text-sm">
                      Not just ADHD—anxiety, depression, OCD, mood disorders, learning differences—we evaluate comprehensively 
                      because conditions often overlap and proper diagnosis changes everything.
                    </p>
                  </div>
                  
                  <p className="text-foreground">
                    After the counselor extensively reviews all findings with Dr. Shapiro (he takes pages of notes), you&apos;ll 
                    have a <strong>one-hour family meeting</strong> with Dr. Shapiro. Parents AND the child attend together.
                  </p>
                  
                  <p className="text-foreground">
                    Dr. Shapiro shares his findings, asks clarifying questions, and explains any diagnoses—sometimes one 
                    condition, sometimes several. He&apos;ll discuss all treatment options, always emphasizing: 
                    <em>&quot;There&apos;s more than one way to solve problems in life.&quot;</em>
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                    <p className="text-green-800 font-semibold mb-1">Your child is included in these decisions.</p>
                    <p className="text-green-700 text-sm">
                      We only move forward with what the whole family is comfortable with.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-amber-800 font-semibold text-sm">Dr. Shapiro&apos;s Guidance:</p>
                    <p className="text-amber-700 italic">&quot;If the medicine makes you uncomfortable for 2-3 days, stop it and call us.&quot;</p>
                  </div>
                  
                  <p className="text-foreground mt-4">
                    <strong>Monthly appointments</strong> continue until your child is dramatically better.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive ADHD Treatment
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We create individualized treatment plans using proven approaches. Unlike many practices, 
                we offer both medication management and therapy for complete care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {treatmentOptions.map((option, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{option.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {option.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-healing flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <Star className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Patients Trust Dr. Shapiro for ADHD Care
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over three decades of experience and a patient-centered approach, we&apos;ve helped 
                thousands of individuals with ADHD achieve their full potential.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-healing" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Resources Banner */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Learn More About ADHD
                </h3>
                <p className="text-primary-foreground/80">
                  Explore our comprehensive educational slideshow to better understand ADHD
                </p>
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.location.href = '/slideshows'}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View ADHD Education Slideshow
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <MessageCircle className="w-4 h-4 mr-1" />
                Common Questions
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions About ADHD
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground flex items-start gap-3">
                      <span className="text-primary font-bold">Q:</span>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-7">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-gradient-calm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                Our Locations
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Two Convenient Locations
              </h2>
              <p className="text-lg text-muted-foreground">
                Serving Cincinnati, Ohio and Northern Kentucky
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Cincinnati, Ohio
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">8280 Montgomery Road, Suite 304</p>
                  <p className="text-foreground">Cincinnati, OH 45236</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Thu: 9am-5pm | Fri: 9am-12pm</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Fort Wright, Kentucky
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">1717 Dixie Highway, Suite 200</p>
                  <p className="text-foreground">Fort Wright, KY 41011</p>
                  <p className="text-primary text-sm font-medium">Just 5 minutes from downtown Cincinnati</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Thu: 9am-5pm | Fri: 9am-12pm</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-healing/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Take Control of Your ADHD?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don&apos;t let ADHD hold you or your child back. Schedule a comprehensive evaluation 
                with Dr. Shapiro and start your journey to better focus, organization, and success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Evaluation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                  asChild
                >
                  <a href="tel:+18593417453">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (859) 341-7453
                  </a>
                </Button>
              </div>
              
              <p className="text-muted-foreground text-sm">
                Same-day response to your questions • Accepting new patients • Out-of-network provider
              </p>
            </div>
          </div>
        </section>
      </main>

      <EmergencyDisclaimer />
      <Footer />
    </>
  );
}
