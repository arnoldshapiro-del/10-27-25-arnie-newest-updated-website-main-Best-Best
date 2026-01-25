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
  Calendar,
  CloudRain
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Anxiety Page Schema
const anxietySchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Anxiety Treatment in Cincinnati & Northern Kentucky",
    "description": "Comprehensive anxiety disorder diagnosis and treatment for children, adolescents, and adults. Expert care from board-certified psychiatrist Dr. Arnold Shapiro with 35+ years experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Generalized Anxiety Disorder (GAD)",
      "alternateName": ["Anxiety", "Anxiety Disorder", "Chronic Anxiety"],
      "signOrSymptom": [
        "Excessive worry",
        "Restlessness",
        "Difficulty concentrating",
        "Sleep problems",
        "Muscle tension",
        "Irritability"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about anxiety symptoms, diagnosis, and treatment options including medication management and therapy"
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
        "name": "What is Generalized Anxiety Disorder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generalized Anxiety Disorder (GAD) is characterized by persistent, excessive worry about various aspects of daily life that is difficult to control. It affects both children and adults and can significantly impact daily functioning, relationships, and quality of life."
        }
      },
      {
        "@type": "Question",
        "name": "How is anxiety diagnosed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anxiety diagnosis involves a comprehensive psychiatric evaluation including clinical interviews, symptom assessment, medical history review, and ruling out other conditions. Our practice uses a thorough three-part evaluation system to ensure accurate diagnosis."
        }
      },
      {
        "@type": "Question",
        "name": "What treatments are available for anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anxiety treatment typically includes medication management (SSRIs, SNRIs, and other options), cognitive behavioral therapy (CBT), relaxation techniques, and lifestyle modifications. Dr. Shapiro creates individualized treatment plans combining these approaches for optimal results."
        }
      },
      {
        "@type": "Question",
        "name": "Can children have anxiety disorders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, anxiety disorders are among the most common mental health conditions in children and teenagers. Symptoms may present differently than in adults. Our practice specializes in both pediatric and adult anxiety evaluation and treatment."
        }
      }
    ]
  }
];

export default function Anxiety() {
  // Anxiety Symptoms Data
  const childSymptoms = [
    "Excessive worry about school, friends, or family",
    "Frequent stomachaches or headaches with no medical cause",
    "Difficulty sleeping or frequent nightmares",
    "Refusing to go to school or avoiding social situations",
    "Constant need for reassurance from parents",
    "Crying or tantrums when separated from caregivers",
    "Fear of making mistakes or being judged",
    "Difficulty concentrating in class",
    "Irritability and restlessness",
    "Avoiding new activities or situations"
  ];

  const adultSymptoms = [
    "Persistent worry that feels uncontrollable",
    "Feeling restless, keyed up, or on edge",
    "Difficulty concentrating or mind going blank",
    "Sleep problems—trouble falling or staying asleep",
    "Muscle tension, especially in neck and shoulders",
    "Fatigue despite adequate rest",
    "Irritability over small things",
    "Avoiding situations that trigger anxiety",
    "Physical symptoms: racing heart, sweating, trembling",
    "Difficulty making decisions due to fear of wrong choice"
  ];

  const treatmentOptions = [
    {
      icon: Pill,
      title: "Medication Management",
      description: "When appropriate, medications can significantly reduce anxiety symptoms. We carefully select and monitor each patient&apos;s treatment, adjusting as needed for optimal results.",
      details: ["SSRIs (Lexapro, Zoloft, Prozac)", "SNRIs (Effexor, Cymbalta)", "Buspirone for chronic anxiety", "Short-term options when needed", "GeneSight genetic testing available"]
    },
    {
      icon: MessageCircle,
      title: "Therapy & Counseling",
      description: "Evidence-based therapeutic approaches help you understand anxiety triggers and develop effective coping strategies.",
      details: ["Cognitive Behavioral Therapy (CBT)", "Exposure therapy for specific fears", "Relaxation and mindfulness training", "Stress management techniques"]
    },
    {
      icon: BookOpen,
      title: "Patient Education",
      description: "Understanding anxiety is a powerful tool. We teach you about your condition so you can recognize patterns and take control.",
      details: ["Understanding the anxiety response", "Identifying triggers and patterns", "Lifestyle factors that affect anxiety", "Educational resources and slideshows"]
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Anxiety affects the whole family. We provide guidance for family members on how to help without enabling avoidance.",
      details: ["Family therapy sessions", "Parent coaching for child anxiety", "Communication strategies", "Supporting loved ones effectively"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has helped thousands of patients overcome anxiety, from children to adults, with proven, compassionate approaches."
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Evaluation",
      description: "Our unique three-part evaluation ensures accurate diagnosis and identifies any co-existing conditions that need treatment."
    },
    {
      icon: Heart,
      title: "Collaborative Approach",
      description: "We discuss all treatment options and their pros and cons. You decide together with Dr. Shapiro what feels right for you."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "We&apos;re extremely accessible—your questions are answered almost always the same day. Never feel alone in your treatment."
    },
    {
      icon: Shield,
      title: "Medication + Therapy",
      description: "Unlike many psychiatrists who only prescribe medication, we offer both therapy and medication management for comprehensive care."
    },
    {
      icon: GraduationCap,
      title: "Education Focus",
      description: "We empower patients with knowledge through educational resources and ongoing support to understand and manage their condition."
    }
  ];

  const faqs = [
    {
      question: "What&apos;s the difference between normal worry and an anxiety disorder?",
      answer: "Everyone worries sometimes—that&apos;s normal and even helpful. An anxiety disorder is different: the worry is excessive, hard to control, happens most days, and interferes with daily life. If anxiety is affecting your work, relationships, sleep, or quality of life, it may be time to seek help. Our evaluation will help determine whether your symptoms meet criteria for a disorder and what treatment would help."
    },
    {
      question: "Can anxiety be treated without medication?",
      answer: "Yes, many people improve significantly with therapy alone, especially Cognitive Behavioral Therapy (CBT). However, for moderate to severe anxiety, research shows combining medication with therapy often produces the best results. We&apos;ll discuss all your options and never pressure you into medication. The choice is always yours, and we&apos;ll support whatever approach you&apos;re comfortable with."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You&apos;ll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    },
    {
      question: "How quickly can I get an appointment?",
      answer: "We understand that when you&apos;re struggling with anxiety, waiting weeks for an appointment feels impossible. We do our best to schedule new patients as quickly as possible. Call our office at (859) 341-7453 and we&apos;ll work to find a time that works for you. We respond to all inquiries the same day."
    },
    {
      question: "Do you treat children with anxiety?",
      answer: "Yes, anxiety disorders are very common in children and teenagers, and Dr. Shapiro has extensive experience treating pediatric anxiety. Children often express anxiety differently than adults—through physical complaints, school avoidance, or behavioral changes. Our child evaluation process involves meeting with parents, the child, and gathering information from teachers when appropriate."
    },
    {
      question: "What if I have anxiety AND depression?",
      answer: "It&apos;s very common for anxiety and depression to occur together—we see this frequently. Our comprehensive evaluation looks for all conditions, not just one. If you have multiple diagnoses, Dr. Shapiro will create a treatment plan that addresses everything together. This is actually one of our strengths: we don&apos;t just treat one symptom in isolation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Anxiety Treatment Cincinnati | Expert GAD Treatment for Children & Adults | Dr. Shapiro</title>
        <meta name="description" content="Expert anxiety disorder diagnosis and treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in anxiety for children, teens, and adults. 35+ years experience. Same-day responses. Call (859) 341-7453." />
        <meta name="keywords" content="anxiety treatment Cincinnati, anxiety doctor Cincinnati, GAD treatment Northern Kentucky, generalized anxiety disorder, child anxiety psychiatrist, anxiety medication management, panic disorder treatment, social anxiety treatment" />
        <link rel="canonical" href={`${window.location.origin}/anxiety`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Anxiety Treatment in Cincinnati & Northern Kentucky | Dr. Arnold Shapiro" />
        <meta property="og:description" content="Comprehensive anxiety disorder diagnosis and treatment for children, teens, and adults from a board-certified psychiatrist with 35+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/anxiety`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(anxietySchema)}
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
                    <CloudRain className="w-4 h-4 mr-1" />
                    Anxiety Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Expert Anxiety Treatment in{" "}
                  <span className="text-primary">Cincinnati & Northern Kentucky</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Struggling with constant worry, fear, or panic? Dr. Arnold Shapiro provides comprehensive 
                  anxiety evaluation and personalized treatment for children, adolescents, and adults. With 35+ years 
                  of experience and a compassionate approach, we help patients find relief and reclaim their lives.
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
                    Schedule Anxiety Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    onClick={() => window.location.href = '/screening?assessment=gad7'}
                  >
                    Take Free Anxiety Screening
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/7176029/pexels-photo-7176029.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Professional anxiety consultation with psychiatrist Dr. Arnold Shapiro" 
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
                      <p className="font-bold text-foreground">8,000+ Patients</p>
                      <p className="text-sm text-muted-foreground">Successfully Treated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Anxiety Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Brain className="w-4 h-4 mr-1" />
                Understanding Anxiety
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What is an Anxiety Disorder?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Anxiety disorders go beyond normal worry. They involve persistent, excessive fear or anxiety 
                that interferes with daily activities. These conditions are among the most common mental health 
                disorders—and among the most treatable. With proper care, most people experience significant relief.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CloudRain className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Generalized Anxiety (GAD)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Persistent, excessive worry about everyday things—work, health, family, money—that&apos;s 
                    difficult to control and happens more days than not for at least 6 months.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Panic Disorder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Recurrent, unexpected panic attacks—sudden surges of intense fear with physical symptoms 
                    like racing heart, shortness of breath, and feeling of losing control.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Social Anxiety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Intense fear of social situations where you might be judged, embarrassed, or scrutinized. 
                    Often leads to avoiding social interactions that could otherwise be enjoyable.
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
                Anxiety Symptoms to Watch For
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Anxiety presents differently in children and adults. Recognizing these symptoms is the first step 
                toward getting proper help and finding relief.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Children & Teens Symptoms */}
              <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Anxiety in Children & Teens
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs that may indicate your child needs an anxiety evaluation
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
                    Anxiety in Adults
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs that you may benefit from professional anxiety treatment
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
                onClick={() => window.location.href = '/screening?assessment=gad7'}
              >
                Take Free Anxiety Self-Assessment
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
                    <CloudRain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">We Look for Everything—Not Just Anxiety</h3>
                    <p className="text-foreground leading-relaxed">
                      When you come to us thinking you have anxiety, we don&apos;t stop there—we evaluate for <em>everything</em>. 
                      Depression, ADHD, OCD, bipolar disorder, and other conditions often overlap with anxiety or can look just like it. 
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
                      We don&apos;t just look for what you think you might have. If you come to us saying &quot;I think I have anxiety,&quot; 
                      we evaluate for <em>everything</em>—depression, ADHD, OCD, and other conditions that can look like 
                      anxiety or co-exist with it. Many patients have 2, 3, or even 5 conditions that need to be addressed together.
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
                      Not just anxiety—ADHD, depression, OCD, mood disorders, learning differences—we evaluate comprehensively 
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
                Comprehensive Anxiety Treatment
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
                Why Patients Trust Dr. Shapiro for Anxiety Care
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over three decades of experience and a patient-centered approach, we&apos;ve helped 
                thousands of individuals overcome anxiety and reclaim their lives.
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
                  Learn More About Anxiety
                </h3>
                <p className="text-primary-foreground/80">
                  Explore our comprehensive educational slideshow to better understand anxiety disorders
                </p>
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.location.href = '/slideshows'}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Anxiety Education Slideshow
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
                Frequently Asked Questions About Anxiety
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground flex items-start gap-3">
                      <span className="text-primary font-bold">Q:</span>
                      <span dangerouslySetInnerHTML={{ __html: faq.question.replace(/&apos;/g, "'") }} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-7" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/&apos;/g, "'") }} />
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
                Ready to Find Relief from Anxiety?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don&apos;t let anxiety control your life. Schedule a comprehensive evaluation 
                with Dr. Shapiro and start your journey to peace of mind.
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
