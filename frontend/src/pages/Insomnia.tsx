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
  Coffee,
  BedDouble
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
      "alternateName": ["Sleep Disorder", "Sleeplessness", "Sleep Problems"],
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
      "description": "Information about insomnia symptoms, diagnosis, and treatment options including medication management, CBT-I, and sleep hygiene"
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
        "name": "What causes insomnia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Insomnia can be caused by many factors including stress, anxiety, depression, poor sleep habits, medical conditions, medications, and lifestyle factors. Often, multiple factors contribute to sleep problems."
        }
      },
      {
        "@type": "Question",
        "name": "How is insomnia treated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Insomnia treatment may include cognitive behavioral therapy for insomnia (CBT-I), sleep hygiene improvements, addressing underlying conditions like anxiety or depression, and when appropriate, sleep medications. The best approach depends on the cause and severity of your sleep problems."
        }
      },
      {
        "@type": "Question",
        "name": "When should I see a doctor for sleep problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should see a doctor if sleep problems persist for more than a few weeks, affect your daytime functioning, or are accompanied by other symptoms like loud snoring, gasping during sleep, or restless legs."
        }
      }
    ]
  }
];

export default function Insomnia() {
  // Sleep Disorder Symptoms Data
  const childSymptoms = [
    "Difficulty falling asleep at bedtime",
    "Resistance to going to bed or stalling tactics",
    "Frequent night wakings or nightmares",
    "Difficulty waking up in the morning",
    "Excessive daytime sleepiness or fatigue",
    "Behavioral problems or hyperactivity (can mimic ADHD)",
    "Difficulty concentrating in school",
    "Mood swings or irritability",
    "Snoring or breathing pauses during sleep"
  ];

  const adultSymptoms = [
    "Difficulty falling asleep despite being tired",
    "Waking up frequently during the night",
    "Waking up too early and unable to fall back asleep",
    "Daytime fatigue, sleepiness, or low energy",
    "Difficulty concentrating or remembering things",
    "Irritability, depression, or anxiety",
    "Increased errors or accidents",
    "Ongoing worries about sleep",
    "Relying on sleep aids or alcohol to fall asleep",
    "Snoring, gasping, or restless legs at night"
  ];

  const sleepDisorderTypes = [
    {
      icon: Moon,
      title: "Insomnia",
      description: "Difficulty falling asleep, staying asleep, or waking too early. The most common sleep disorder, affecting up to 30% of adults at some point.",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: AlertTriangle,
      title: "Sleep Apnea",
      description: "Breathing repeatedly stops and starts during sleep. Causes loud snoring, gasping, and daytime fatigue. Requires a sleep study for diagnosis.",
      color: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Zap,
      title: "Restless Leg Syndrome (RLS)",
      description: "Uncomfortable sensations in the legs with an irresistible urge to move them, especially at night. Can severely disrupt sleep.",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Sun,
      title: "Circadian Rhythm Disorders",
      description: "When your internal clock is out of sync with the external world. Common in shift workers, teens, and travelers (jet lag).",
      color: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Activity,
      title: "Hypersomnia",
      description: "Excessive daytime sleepiness despite adequate nighttime sleep. Includes conditions like narcolepsy.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  const treatmentOptions = [
    {
      icon: MessageCircle,
      title: "CBT-I (Cognitive Behavioral Therapy for Insomnia)",
      description: "The gold standard treatment for chronic insomnia. Addresses the thoughts and behaviors that perpetuate sleep problems without medication.",
      details: ["Sleep restriction therapy", "Stimulus control", "Cognitive restructuring", "Relaxation techniques", "Sleep hygiene education"]
    },
    {
      icon: Pill,
      title: "Medication Options",
      description: "When appropriate, sleep medications can provide short-term relief while addressing underlying causes. We carefully select and monitor all sleep medications.",
      details: ["Non-benzodiazepine sleep aids (Ambien, Lunesta)", "Low-dose trazodone", "Melatonin and melatonin agonists", "Treating underlying conditions (anxiety, depression)", "Avoiding habit-forming medications when possible"]
    },
    {
      icon: BedDouble,
      title: "Sleep Hygiene Optimization",
      description: "Simple changes to your sleep environment and habits can make a significant difference, especially when combined with other treatments.",
      details: ["Consistent sleep schedule", "Optimizing bedroom environment", "Managing light exposure", "Limiting caffeine and alcohol", "Pre-sleep routine development"]
    },
    {
      icon: Stethoscope,
      title: "Sleep Study Referral",
      description: "When sleep apnea or other medical sleep disorders are suspected, we coordinate with sleep medicine specialists for proper testing and treatment.",
      details: ["Home sleep tests", "In-lab polysomnography", "CPAP therapy coordination", "Ongoing follow-up care"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has helped thousands of patients overcome sleep problems, understanding the complex relationship between sleep and mental health."
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
      description: "We&apos;re extremely accessible—your questions are answered almost always the same day. Never feel alone in your treatment."
    },
    {
      icon: Shield,
      title: "Medication + Therapy",
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
      question: "What causes insomnia?",
      answer: "Insomnia can be caused by many factors including stress, anxiety, depression, poor sleep habits, medical conditions, medications, caffeine, alcohol, and lifestyle factors. Often, multiple factors contribute. That&apos;s why we do a comprehensive evaluation to understand YOUR specific situation."
    },
    {
      question: "Is insomnia connected to anxiety or depression?",
      answer: "Absolutely. Insomnia and mental health conditions have a bidirectional relationship—each can cause or worsen the other. Up to 80% of people with depression have insomnia, and chronic insomnia significantly increases the risk of developing depression and anxiety. Treating both together often produces the best results."
    },
    {
      question: "Do I need a sleep study?",
      answer: "Not everyone with sleep problems needs a sleep study. Sleep studies are primarily used to diagnose sleep apnea, restless leg syndrome, and other medical sleep disorders. If your symptoms suggest these conditions (loud snoring, gasping, leg movements), we&apos;ll coordinate a referral. Many cases of insomnia can be effectively treated without a sleep study."
    },
    {
      question: "Are sleep medications safe?",
      answer: "Sleep medications can be safe and effective when used appropriately. We prefer to use them short-term while addressing underlying causes. When medications are needed longer-term, we choose the safest options and monitor closely. Many patients eventually sleep well without medication after treating anxiety, depression, or learning CBT-I techniques."
    },
    {
      question: "What is CBT-I?",
      answer: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard treatment for chronic insomnia. It&apos;s a structured program that helps you identify and change thoughts and behaviors that cause or worsen sleep problems. Research shows CBT-I is as effective as sleep medication in the short term and MORE effective in the long term."
    },
    {
      question: "How long does it take to improve sleep?",
      answer: "Many people see improvement within 2-4 weeks of starting treatment, especially with CBT-I techniques. However, if underlying conditions like anxiety or depression are contributing, full improvement may take 6-8 weeks as we address those as well. Dr. Shapiro will work with you until you&apos;re sleeping dramatically better."
    },
    {
      question: "Do you treat children with sleep problems?",
      answer: "Yes. Sleep problems in children and teens are common and often connected to anxiety, ADHD, or other conditions. Interestingly, sleep deprivation in children often looks like HYPERACTIVITY rather than sleepiness. We evaluate comprehensively and involve the whole family in treatment."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You&apos;ll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Insomnia Treatment Cincinnati | Sleep Disorder Care for Children & Adults | Dr. Shapiro</title>
        <meta name="description" content="Expert insomnia and sleep disorder treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in sleep problems for children, teens, and adults. 35+ years experience. Same-day responses. Call (859) 341-7453." />
        <meta name="keywords" content="insomnia treatment Cincinnati, sleep disorder doctor Cincinnati, insomnia Northern Kentucky, sleep problems, child sleep specialist, CBT-I therapy, sleep medication management" />
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
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Struggling to fall asleep, stay asleep, or wake up feeling rested? Dr. Arnold Shapiro provides comprehensive 
                  sleep evaluation and personalized treatment for children, adolescents, and adults. With 35+ years 
                  of experience, we understand the deep connection between sleep and mental health.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Thorough evaluation for underlying causes</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>CBT-I and medication options available</span>
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
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Sleep Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    onClick={() => window.location.href = '/screening'}
                  >
                    Take Free Screening
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

        {/* Understanding Sleep Problems Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Brain className="w-4 h-4 mr-1" />
                Understanding Sleep Problems
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Can&apos;t I Sleep?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sleep problems are incredibly common—and incredibly frustrating. When you can&apos;t sleep, everything 
                suffers: your mood, your energy, your concentration, your relationships. But here&apos;s what most 
                people don&apos;t realize: <strong>insomnia is often a symptom, not just a condition.</strong> Anxiety, 
                depression, ADHD, stress, and other factors frequently drive sleep problems. Finding and treating 
                the root cause is the key to lasting improvement.
              </p>
            </div>
            
            {/* Types of Sleep Disorders Cards */}
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Recognize the Signs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Sleep Problem Symptoms to Watch For
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sleep problems present differently in children and adults. Recognizing the signs is the first step 
                toward getting proper help.
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
                    Signs that may indicate your child needs a sleep evaluation
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
                    Signs that you may benefit from professional sleep evaluation
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
              <p className="text-muted-foreground mb-4">
                Experiencing several of these symptoms? Take our free screening tools.
              </p>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => window.location.href = '/screening'}
              >
                Take Free Self-Assessment
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Science of Sleep */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  The Science
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Sleep Matters for Mental Health
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground">
                    <p className="text-lg leading-relaxed">
                      Sleep isn&apos;t just &quot;rest&quot;—it&apos;s an active process essential for brain health. During sleep, 
                      your brain consolidates memories, processes emotions, clears toxins, and restores itself. 
                      When sleep is disrupted, all of these functions suffer.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <h4 className="font-semibold text-indigo-800 mb-2">Sleep & Mood</h4>
                        <p className="text-sm text-indigo-700">
                          Just one night of poor sleep increases emotional reactivity and decreases your ability to 
                          regulate emotions. Chronic sleep deprivation significantly increases risk of depression and anxiety.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">Sleep & Thinking</h4>
                        <p className="text-sm text-purple-700">
                          Sleep deprivation impairs attention, concentration, problem-solving, and memory—the same 
                          functions affected by ADHD. Poor sleep can mimic or worsen ADHD symptoms.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Sleep & Stress</h4>
                        <p className="text-sm text-blue-700">
                          Poor sleep elevates cortisol (the stress hormone) and keeps your nervous system in 
                          &quot;fight or flight&quot; mode. This creates a vicious cycle: stress disrupts sleep, 
                          and poor sleep increases stress.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Sleep & Healing</h4>
                        <p className="text-sm text-green-700">
                          Good sleep accelerates recovery from mental health conditions. Many patients find their 
                          anxiety or depression improves significantly once sleep is addressed.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sleep-Mental Health Connection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                  <Heart className="w-4 h-4 mr-1" />
                  The Connection
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  The Sleep-Mental Health Connection
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Sleep problems rarely exist in isolation. Understanding these connections is key to effective treatment.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-purple-50 to-background border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-700 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Insomnia + Anxiety
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Racing thoughts keep you awake. The more you worry about not sleeping, the harder it becomes. 
                      Treating anxiety often dramatically improves sleep—and vice versa.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Insomnia + Depression
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Up to 80% of people with depression have insomnia. Poor sleep worsens depression, and 
                      depression disrupts sleep. Breaking this cycle often requires treating both together.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-background border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Insomnia + ADHD
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      ADHD brains have trouble &quot;turning off&quot; at night. Plus, sleep deprivation causes symptoms 
                      identical to ADHD. Sometimes what looks like ADHD is actually a sleep problem.
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

            {/* Condition-Specific Evaluation Callout */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-primary/30 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Moon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">We Look for Everything—Not Just Insomnia</h3>
                    <p className="text-foreground leading-relaxed">
                      When you come to us with sleep problems, we don&apos;t stop there—we evaluate for <em>everything</em>. 
                      Depression, anxiety, ADHD, and other conditions often cause or worsen insomnia. Many patients actually 
                      have two, three, or more conditions. <strong>Finding the complete picture changes everything about your treatment.</strong>
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

        {/* Treatment Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive Sleep Treatment
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We use evidence-based approaches to treat sleep problems, focusing on long-term solutions 
                rather than just quick fixes.
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
        <section className="py-16">
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
                Ready to Finally Sleep Better?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don&apos;t spend another night tossing and turning. With over 9,000 patients helped and 35+ years of experience, 
                Dr. Shapiro can help you find out what&apos;s really keeping you awake—and fix it.
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
