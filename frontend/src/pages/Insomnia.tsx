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
  ChevronRight,
  Shield,
  Pill,
  BookOpen,
  Star,
  Calendar,
  Moon,
  Sun,
  Zap,
  Activity,
  AlertTriangle,
  BedDouble,
  Sparkles,
  Baby,
  Ban,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Insomnia Page Schema
const insomniaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Insomnia & Sleep Disorder Treatment in Cincinnati & Northern Kentucky",
    "description": "Comprehensive insomnia and sleep disorder diagnosis and treatment for children, adolescents, and adults. Expert care from board-certified psychiatrist Dr. Arnold Shapiro with 35+ years experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Insomnia",
      "alternateName": ["Sleep Disorder", "Sleeplessness", "Sleep Problems", "Chronic Insomnia"],
      "signOrSymptom": [
        "Difficulty falling asleep",
        "Difficulty staying asleep",
        "Waking too early",
        "Daytime fatigue",
        "Irritability",
        "Difficulty concentrating"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about insomnia symptoms, diagnosis, and treatment options including CBT-I, medication management, and sleep hygiene"
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
        "name": "How long does it take to see improvement with insomnia treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With CBT-I, most people see significant improvement within 4-6 weeks. With medication, improvement often begins within the first week. We'll monitor closely and adjust as needed."
        }
      },
      {
        "@type": "Question",
        "name": "Will I need to take sleep medication forever?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually not. For many people, medication is a bridge while we address underlying issues and build better sleep habits. Some people do better with ongoing low-dose medication, especially if they have chronic conditions. We'll find what works for you."
        }
      },
      {
        "@type": "Question",
        "name": "Why won't you prescribe Xanax for sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Benzodiazepines help short-term but cause dependence, worsen sleep quality over time, increase fall risk (especially in older adults), and are associated with cognitive problems. We have much better options that work without these risks."
        }
      }
    ]
  }
];

export default function Insomnia() {
  // Sleep Disorder Types
  const sleepDisorderTypes = [
    {
      icon: Moon,
      title: "Chronic Insomnia",
      description: "Difficulty falling asleep or staying asleep at least 3 nights per week for 3 months or more. This isn't just 'bad sleep'—it's a medical condition that responds to treatment.",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: Clock,
      title: "Sleep Onset Insomnia",
      description: "You lie in bed for an hour or more before falling asleep. Your mind races, you watch the clock, and the harder you try to sleep, the more awake you become.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Activity,
      title: "Sleep Maintenance Insomnia",
      description: "You fall asleep fine but wake up at 2 or 3 AM and can't get back to sleep. Or you wake up repeatedly throughout the night and never feel rested.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Sun,
      title: "Circadian Rhythm Disorders",
      description: "Your internal clock is misaligned with the world. You might be a severe 'night owl' who can't fall asleep until 2 AM, or an 'early bird' who crashes at 7 PM and wakes at 3 AM.",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Heart,
      title: "Sleep Problems with Depression or Anxiety",
      description: "Sleep and mood are deeply connected. 90% of people with depression have sleep problems. Often, fixing the sleep helps fix the mood—and vice versa.",
      color: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Pill,
      title: "Medication-Related Sleep Problems",
      description: "Some medications (including certain antidepressants, ADHD medications, and steroids) can disrupt sleep. We'll review everything you're taking.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  // Child Symptoms
  const childSymptoms = [
    "Difficulty falling asleep (bedtime battles lasting over 30 minutes)",
    "Waking frequently during the night",
    "Difficulty waking up in the morning despite adequate time in bed",
    "Falling asleep in school or during homework",
    "Irritability, mood swings, or behavioral problems",
    "Hyperactivity (sleep-deprived kids often seem wired, not tired)",
    "Declining grades or concentration problems",
    "Excessive daytime sleepiness",
    "Snoring, mouth breathing, or pauses in breathing during sleep",
    "Restless legs or growing pains that interfere with sleep"
  ];

  // Adult Symptoms
  const adultSymptoms = [
    "Taking 30+ minutes to fall asleep regularly",
    "Waking up during the night and struggling to get back to sleep",
    "Waking up too early and being unable to return to sleep",
    "Not feeling refreshed despite spending enough time in bed",
    "Daytime fatigue, low energy, or difficulty concentrating",
    "Irritability, anxiety, or depression related to poor sleep",
    "Relying on alcohol or over-the-counter sleep aids",
    "Worry or dread about bedtime (\"I know I won't sleep tonight\")",
    "Sleep problems affecting your work, relationships, or quality of life"
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro understands the complex relationship between sleep and mental health, developed over 35+ years of practice."
    },
    {
      icon: Brain,
      title: "Sleep-Mental Health Expertise",
      description: "We understand that insomnia is often connected to anxiety, depression, or ADHD. We treat the whole picture, not just the symptom."
    },
    {
      icon: Heart,
      title: "Collaborative Approach",
      description: "We discuss all treatment options and their pros and cons. You decide together with Dr. Shapiro what feels right for you."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "We're extremely accessible—your questions are answered almost always the same day. Never feel alone in your treatment."
    },
    {
      icon: Shield,
      title: "Medication + CBT-I",
      description: "Unlike many psychiatrists who only prescribe sleep medications, we offer CBT-I and address underlying causes for lasting improvement."
    },
    {
      icon: GraduationCap,
      title: "Comprehensive Evaluation",
      description: "We look for everything that could be affecting your sleep—not just insomnia, but depression, anxiety, ADHD, and other conditions."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see improvement?",
      answer: "With CBT-I, most people see significant improvement within 4-6 weeks. With medication, improvement often begins within the first week. We'll monitor closely and adjust as needed."
    },
    {
      question: "Will I need to take sleep medication forever?",
      answer: "Usually not. For many people, medication is a bridge while we address underlying issues and build better sleep habits. Some people do better with ongoing low-dose medication, especially if they have chronic conditions. We'll find what works for you."
    },
    {
      question: "I've tried everything. Can you really help?",
      answer: "'Treatment-resistant insomnia' usually means the underlying cause wasn't found. We look for everything—depression, anxiety, ADHD, circadian rhythm problems, sleep apnea, restless legs, medication interactions. Once we find the real problem, treatment usually works."
    },
    {
      question: "Is CBT-I just 'sleep hygiene'?",
      answer: "No. Sleep hygiene (dark room, no caffeine, etc.) is basic advice that rarely fixes true insomnia. CBT-I is a structured, evidence-based treatment that actually retrains your brain. It's the most effective insomnia treatment we have."
    },
    {
      question: "Why won't you prescribe Xanax for sleep?",
      answer: "Benzodiazepines help short-term but cause dependence, worsen sleep quality over time, increase fall risk (especially in older adults), and are associated with cognitive problems. We have much better options that work without these risks."
    },
    {
      question: "My child can't fall asleep. Should they take melatonin?",
      answer: "Melatonin can help, but timing and dose matter. Many over-the-counter products are mislabeled or too strong. We'll evaluate whether melatonin is appropriate and, if so, recommend the right dose and timing."
    },
    {
      question: "I sleep 8 hours but still feel exhausted. What's wrong?",
      answer: "This suggests you may not be getting quality sleep. Sleep apnea, periodic limb movements, and other conditions can fragment your sleep without you knowing. We may recommend a sleep study to find out what's happening."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You'll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Insomnia Treatment Cincinnati | Sleep Disorder Care for Children & Adults | Dr. Shapiro</title>
        <meta name="description" content="Expert insomnia and sleep disorder treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in sleep problems for children, teens, and adults. 35+ years experience. Same-day responses. Call (859) 341-7453." />
        <meta name="keywords" content="insomnia treatment Cincinnati, sleep disorder doctor Cincinnati, insomnia Northern Kentucky, sleep problems, child sleep specialist, CBT-I therapy, sleep medication management, chronic insomnia treatment" />
        <link rel="canonical" href={`${window.location.origin}/insomnia`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Insomnia & Sleep Disorder Treatment in Cincinnati & Northern Kentucky | Dr. Arnold Shapiro" />
        <meta property="og:description" content="Comprehensive insomnia and sleep disorder diagnosis and treatment for children, teens, and adults from a board-certified psychiatrist with 35+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/insomnia`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(insomniaSchema)}
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
                    <Moon className="w-4 h-4 mr-1" />
                    Sleep Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Insomnia & Sleep Disorder Treatment in{" "}
                  <span className="text-primary">Cincinnati & Northern Kentucky</span>
                </h1>
                
                <p className="text-2xl text-primary font-semibold">
                  Finally Get the Rest You Deserve
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Sleep problems aren&apos;t just annoying—they affect everything. Your mood, your focus, your health, 
                  your relationships. The good news? <strong>Insomnia is one of the most treatable conditions in medicine.</strong> With 
                  the right approach, most people sleep dramatically better within weeks. You don&apos;t have to keep 
                  struggling through exhausted days.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Thorough evaluation for underlying causes</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>CBT-I (gold standard) and medication options</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Sleep-mental health connection expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Same-day responses to your questions</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                    onClick={() => window.location.href = '/schedule'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    onClick={() => window.location.href = '/screening?assessment=sleep'}
                  >
                    Take Free Insomnia Self-Assessment
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Peaceful sleep consultation with psychiatrist Dr. Arnold Shapiro" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Sleep Problems Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  Understanding Sleep Problems
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Can&apos;t I Sleep?
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      If you&apos;ve tried everything—the sleep apps, the white noise, the &quot;sleep hygiene&quot; tips—and 
                      you&apos;re still staring at the ceiling at 3 AM, you&apos;re not alone. <strong>And it&apos;s not your fault.</strong>
                    </p>
                    
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                      <p className="text-indigo-800">
                        Your brain has a &quot;sleep switch&quot; that&apos;s supposed to turn off wakefulness when it&apos;s time to rest. 
                        <strong> In insomnia, this switch gets stuck.</strong> Your brain stays in &quot;alert mode&quot; even when you&apos;re 
                        exhausted. It&apos;s like a car with the engine running even after you&apos;ve turned off the ignition.
                      </p>
                    </div>
                    
                    <p>
                      The older approach to sleep medication was to force the brain into unconsciousness (like general anesthesia). 
                      <strong> Modern treatments work differently</strong>—they gently flip the switch back to its &quot;off&quot; position, 
                      allowing natural, restorative sleep.
                    </p>
                    
                    <p className="text-primary font-medium">
                      This is why the right treatment makes such a difference. We&apos;re not just knocking you out—we&apos;re 
                      helping your brain remember how to sleep properly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Sleep Disorders */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <FileText className="w-4 h-4 mr-1" />
                Types of Sleep Disorders
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Different Sleep Problems, Different Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Understanding which type of sleep problem you have helps guide the most effective treatment approach.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sleepDisorderTypes.map((type, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className={`w-14 h-14 ${type.color} rounded-full flex items-center justify-center mb-4`}>
                      <type.icon className={`w-7 h-7 ${type.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Recognize the Signs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Symptoms to Watch For
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sleep problems look different across the lifespan. Here&apos;s what to watch for.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Children & Teens Symptoms */}
              <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Sleep Problems in Children & Teens
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs that your child may need a sleep evaluation
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
              <Card className="bg-gradient-to-br from-indigo-50 to-background border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-indigo-700 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6" />
                    Sleep Problems in Adults
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs you may benefit from professional evaluation
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {adultSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => window.location.href = '/screening?assessment=sleep'}
              >
                Take Free Insomnia Self-Assessment
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Science of Sleep */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  The Science
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Sleep Matters More Than You Think
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Sleep isn&apos;t just &quot;rest&quot;—it&apos;s when your brain does critical maintenance work.
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-purple-50 to-background border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Brain Cleaning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      During deep sleep, your brain activates its &quot;cleaning system&quot; (called the glymphatic system), 
                      flushing out toxic proteins that accumulate during the day. This includes the proteins linked 
                      to Alzheimer&apos;s disease. <strong>Chronic poor sleep means this cleaning doesn&apos;t happen properly.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Memory Consolidation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      What you learned today gets permanently stored tonight. Sleep deprivation doesn&apos;t just make 
                      you foggy—it <strong>prevents new memories from forming properly</strong>.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-background border-green-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Emotional Regulation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sleep deprivation makes your emotional brain (the amygdala) hyperactive while shutting down 
                      your rational brain (prefrontal cortex). <strong>This is why everything feels harder after a bad night.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-red-50 to-background border-red-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Physical Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Poor sleep increases risk for heart disease, diabetes, obesity, and weakened immunity. 
                      <strong> Treating insomnia isn&apos;t a luxury—it&apos;s protecting your brain, your body, and your future.</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sleep-Mental Health Connection */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                  <Heart className="w-4 h-4 mr-1" />
                  The Connection
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Sleep Problems Rarely Travel Alone
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  If you have insomnia, there&apos;s a very high chance something else is going on too.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Depression
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      90% of people with depression have sleep problems. But here&apos;s what&apos;s interesting—<strong>treating 
                      insomnia often helps depression improve</strong>, sometimes as much as antidepressants alone.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-50 to-background border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-700 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Anxiety
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Racing thoughts keeping you awake? Anxiety and insomnia fuel each other. The less you sleep, 
                      the more anxious you become. The more anxious you are, the harder it is to sleep.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-background border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      ADHD
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Adults with ADHD often have significant sleep problems—difficulty &quot;shutting off&quot; the brain at night, 
                      delayed sleep phase (can&apos;t fall asleep until very late), and unrefreshing sleep.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-amber-50 to-background border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-700 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Bipolar Disorder
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Sleep disruption can trigger mood episodes. <strong>Protecting sleep is a critical part 
                      of bipolar management.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-red-50 to-background border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      PTSD
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Nightmares and hypervigilance make sleep feel unsafe. We have specific treatments 
                      for trauma-related sleep problems.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-lg text-foreground font-medium">
                  This is why we evaluate for everything when you come in with sleep problems. 
                  <span className="text-primary"> Finding and treating the underlying conditions often transforms sleep.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* We Look for Everything Callout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-primary/30 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Moon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">We Look for Everything—Not Just Insomnia</h3>
                    <p className="text-foreground leading-relaxed">
                      When you come to us with sleep problems, we don&apos;t stop there—we evaluate for <em>everything</em>. 
                      Depression, anxiety, ADHD, bipolar disorder, and other conditions often cause or worsen insomnia. 
                      Many patients actually have two, three, or more conditions. <strong>Finding the complete picture 
                      changes everything about your treatment.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Evidence-Based Insomnia Treatment
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                There&apos;s no one-size-fits-all approach. The right treatment depends on your specific sleep pattern, 
                underlying conditions, and preferences. Dr. Shapiro will work with you to find what works.
              </p>
            </div>

            {/* CBT-I Section */}
            <div className="max-w-5xl mx-auto mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Behavioral Treatment - CBT-I</CardTitle>
                      <p className="text-muted-foreground">The Gold Standard</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground">
                    <strong>Cognitive Behavioral Therapy for Insomnia (CBT-I)</strong> is the gold standard treatment 
                    recommended by every major medical organization. It&apos;s not &quot;talk therapy&quot;—it&apos;s a structured 
                    program that retrains your brain to sleep.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-2">Sleep Restriction</h5>
                      <p className="text-green-700 text-sm">
                        Sounds counterintuitive, but temporarily limiting your time in bed builds up your &quot;sleep hunger.&quot; 
                        When you finally get in bed, your brain is so desperate for sleep that you fall asleep quickly and stay asleep.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">Stimulus Control</h5>
                      <p className="text-blue-700 text-sm">
                        If you&apos;ve spent months lying awake in bed, your brain has learned that Bed = Wakefulness. 
                        We break this association by having you get out of bed if you&apos;re not sleeping.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">Cognitive Restructuring</h5>
                      <p className="text-purple-700 text-sm">
                        Changing the anxious thoughts about sleep that keep you awake. &quot;If I don&apos;t sleep tonight, 
                        tomorrow will be ruined&quot; becomes &quot;I&apos;ve survived bad nights before.&quot;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 font-semibold">
                      CBT-I typically works within 4-6 weeks and has long-lasting results—often better than medication alone.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Medication Section */}
            <div className="max-w-5xl mx-auto mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Pill className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Medication Options</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground">
                    When medication is needed, we now have much better options than the old sleeping pills.
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">Newer Medications (Orexin Blockers)</h4>
                    <p className="text-muted-foreground mb-4">
                      These work by blocking the brain&apos;s &quot;wakefulness signal&quot; rather than forcing sedation.
                    </p>
                    <div className="bg-indigo-50 rounded-lg p-4 space-y-2">
                      <p className="text-indigo-800"><strong>Dayvigo (lemborexant)</strong> – Our preferred choice for most patients. Works for both falling asleep and staying asleep. Minimal next-day grogginess.</p>
                      <p className="text-indigo-800"><strong>Quviviq (daridorexant)</strong> – Shorter-acting, excellent for people worried about morning drowsiness.</p>
                      <p className="text-indigo-800"><strong>Belsomra (suvorexant)</strong> – Good for sleep maintenance.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">Traditional Sleep Medications (for short-term use)</h4>
                    <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                      <p className="text-blue-800"><strong>Ambien (zolpidem)</strong> – Fast-acting, best for occasional use (not long-term).</p>
                      <p className="text-blue-800"><strong>Lunesta (eszopiclone)</strong> – Longer-acting, can be used longer than other &quot;Z-drugs.&quot;</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">Medications for Specific Situations</h4>
                    <div className="bg-green-50 rounded-lg p-4 space-y-2">
                      <p className="text-green-800"><strong>Trazodone</strong> – Low doses help with sleep; also treats depression. Good for PTSD-related sleep problems.</p>
                      <p className="text-green-800"><strong>Remeron (mirtazapine)</strong> – Helpful when depression, poor appetite, and insomnia occur together.</p>
                      <p className="text-green-800"><strong>Rozerem (ramelteon)</strong> – Works on melatonin receptors; good for circadian rhythm problems.</p>
                      <p className="text-green-800"><strong>Low-dose Silenor (doxepin)</strong> – Safe for elderly patients; helps with staying asleep.</p>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-2">What We Avoid (and Why)</h5>
                    <p className="text-red-700 text-sm">
                      We generally don&apos;t prescribe benzodiazepines (Xanax, Ativan, Klonopin) for insomnia. While they 
                      help short-term, they cause dependence, disrupt sleep architecture, and increase fall risk—especially 
                      in older adults. There are better options.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Other Treatments */}
            <div className="max-w-5xl mx-auto mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-2xl">Other Sleep Treatments</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-amber-50 rounded-lg p-4">
                      <h5 className="font-semibold text-amber-800 mb-2">Light Therapy</h5>
                      <p className="text-amber-700 text-sm">
                        Morning bright light helps reset your internal clock, especially for &quot;night owls&quot; or seasonal sleep problems.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">Melatonin</h5>
                      <p className="text-purple-700 text-sm">
                        Low doses (0.5-3mg) taken at the right time can help with circadian rhythm issues. Timing matters more than dose.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-2">Treating Underlying Conditions</h5>
                      <p className="text-green-700 text-sm">
                        Sometimes the best insomnia treatment is treating the depression, anxiety, or ADHD driving it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* When We Refer for Sleep Studies */}
            <div className="max-w-5xl mx-auto">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-2xl">When We Refer for Sleep Studies</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Not all sleep problems are insomnia. We&apos;ll refer you for a sleep study if we suspect:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h5 className="font-semibold text-red-800 mb-2">Sleep Apnea</h5>
                      <p className="text-red-700 text-sm">
                        Especially if you snore, gasp, or stop breathing during sleep, or if you&apos;re overweight and tired despite &quot;enough&quot; sleep.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">Restless Legs Syndrome</h5>
                      <p className="text-blue-700 text-sm">
                        Uncomfortable sensations in your legs that make you need to move them.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">Periodic Limb Movements</h5>
                      <p className="text-purple-700 text-sm">
                        Leg jerks during sleep that you may not even know about.
                      </p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4">
                      <h5 className="font-semibold text-amber-800 mb-2">Narcolepsy</h5>
                      <p className="text-amber-700 text-sm">
                        If you have excessive daytime sleepiness despite adequate sleep.
                      </p>
                    </div>
                  </div>
                  <p className="text-primary font-medium">
                    These conditions require different treatments, and missing them is a common reason insomnia treatment &quot;doesn&apos;t work.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Considerations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <Users className="w-4 h-4 mr-1" />
                Special Considerations
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Different Situations, Different Approaches
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                    Sleep Problems in Older Adults
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sleep changes with age—lighter sleep, earlier bedtimes, more awakenings. But significant insomnia 
                    isn&apos;t &quot;normal aging.&quot; We&apos;re careful to avoid medications that increase fall risk or confusion. 
                    Certain newer medications (like daridorexant and low-dose doxepin) are specifically studied and safe for older adults.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Sleep Problems in Children & Teens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pediatric sleep issues often respond well to behavioral approaches. We use age-appropriate strategies 
                    and avoid adult sleep medications when possible. For teens, delayed sleep phase (&quot;can&apos;t fall asleep 
                    until 2 AM&quot;) is extremely common and very treatable with light therapy and properly-timed melatonin.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Baby className="w-5 h-5 text-pink-600" />
                    Pregnancy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most sleep medications aren&apos;t safe during pregnancy. CBT-I is the treatment of choice. If medication 
                    is absolutely necessary, we discuss the safest options for each trimester.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Getting Off Long-Term Sleep Medications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you&apos;ve been taking Ambien, Xanax, or other sleep medications for years and want to stop, we can help. 
                    Gradual tapering with a &quot;bridge&quot; medication and CBT-I can help you sleep naturally again.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Doesn't Work */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-red-100 text-red-600 border-red-200 mb-4">
                  <Ban className="w-4 h-4 mr-1" />
                  Common Myths
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  What Doesn&apos;t Work (Despite What You&apos;ve Heard)
                </h2>
              </div>
              
              <div className="space-y-4">
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-red-800 mb-2">Benadryl (diphenhydramine)</h4>
                    <p className="text-red-700">
                      Over-the-counter, but not safe for regular use. Causes tolerance within days, morning grogginess, 
                      and is linked to increased dementia risk with chronic use. We never recommend this for ongoing insomnia.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-red-800 mb-2">Alcohol</h4>
                    <p className="text-red-700">
                      Helps you fall asleep but destroys sleep quality. You wake up more often, get less deep sleep, and feel unrefreshed.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-red-800 mb-2">Most CBD/Cannabis Products</h4>
                    <p className="text-red-700">
                      Despite marketing claims, research doesn&apos;t support cannabis for long-term sleep. THC disrupts REM sleep 
                      and causes dependence. Some CBD products may help anxiety but aren&apos;t effective sleep aids.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-red-800 mb-2">Generic &quot;Sleep Hygiene&quot; Alone</h4>
                    <p className="text-red-700">
                      Yes, a dark room and avoiding screens helps, but if you have true insomnia, these tips alone won&apos;t fix it. 
                      You need actual treatment.
                    </p>
                  </CardContent>
                </Card>
              </div>
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
                  
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4">
                    <p className="text-indigo-800 font-semibold mb-2">Here&apos;s what makes us different:</p>
                    <p className="text-indigo-700 text-sm">
                      We don&apos;t just prescribe a sleep medication and send you on your way. We look for the underlying 
                      causes of your insomnia—anxiety, depression, ADHD, stress, habits—and address them comprehensively.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-amber-800 font-semibold text-sm">Dr. Shapiro&apos;s Guidance:</p>
                    <p className="text-amber-700 italic">&quot;If you&apos;re uncomfortable with a medication for 2-3 days, stop it and call us.&quot;</p>
                  </div>
                  
                  <p className="text-foreground mt-4">
                    You&apos;ll continue with <strong>monthly appointments</strong> until you&apos;re sleeping dramatically better.
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
                    counselor meets with your child or teenager.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                    <p className="text-blue-800 font-semibold mb-2">Our counselor is trained to look for everything:</p>
                    <p className="text-blue-700 text-sm">
                      Not just sleep problems—anxiety, ADHD, depression, learning differences—we evaluate comprehensively 
                      because these conditions often affect sleep and proper diagnosis changes everything.
                    </p>
                  </div>
                  
                  <p className="text-foreground">
                    After the counselor extensively reviews all findings with Dr. Shapiro, you&apos;ll 
                    have a <strong>one-hour family meeting</strong> with Dr. Shapiro. Parents AND the child attend together.
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
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <Star className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Patients Trust Dr. Shapiro for Sleep Care
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over three decades of experience and a patient-centered approach, we&apos;ve helped 
                thousands of individuals finally get the sleep they deserve.
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

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <MessageCircle className="w-4 h-4 mr-1" />
                Common Questions
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions About Sleep Problems
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground flex items-start gap-3">
                      <span className="text-primary font-bold">Q:</span>
                      <span>{faq.question}</span>
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
                Ready to Finally Sleep?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Good sleep changes everything—your mood, your energy, your health, your life. With
                35+ years of experience, Dr. Shapiro has the expertise to find what&apos;s really keeping 
                you awake and get you the rest you deserve.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                  onClick={() => window.location.href = '/schedule'}
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
