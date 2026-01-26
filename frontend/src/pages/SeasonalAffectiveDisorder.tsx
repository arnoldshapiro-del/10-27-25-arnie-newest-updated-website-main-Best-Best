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
  Sun,
  Cloud,
  Moon,
  Zap,
  Activity,
  Lightbulb,
  ThermometerSun,
  Battery,
  BedDouble,
  Utensils,
  Scale,
  ArrowUpDown,
  Baby,
  AlertTriangle,
  Sparkles,
  Target,
  TreeDeciduous
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// SAD Page Schema
const sadSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Seasonal Affective Disorder Treatment in Cincinnati | Winter Depression Help",
    "description": "Expert seasonal affective disorder (SAD) treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in winter depression treatment including light therapy and medication. 35+ years experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Seasonal Affective Disorder",
      "alternateName": ["SAD", "Winter Depression", "Seasonal Depression", "Winter Blues"],
      "signOrSymptom": [
        "Depression during fall/winter months",
        "Low energy and fatigue",
        "Oversleeping",
        "Carbohydrate cravings",
        "Weight gain",
        "Social withdrawal"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about seasonal affective disorder symptoms, diagnosis, and treatment options including light therapy, medication, and CBT-SAD"
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
        "name": "When should I start light therapy for SAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start light therapy in early fall (September-October) before symptoms begin. This preventive approach is more effective than waiting until you're already depressed. Continue through early spring."
        }
      },
      {
        "@type": "Question",
        "name": "Is SAD the same as regular depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAD is a subtype of major depression with a seasonal pattern. The key difference is the timing—SAD follows a predictable seasonal cycle, typically starting in fall/winter and resolving in spring/summer."
        }
      },
      {
        "@type": "Question",
        "name": "Can children get SAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SAD can affect children and teenagers, though it's more common after puberty. Signs include declining grades in winter, increased irritability, social withdrawal, and changes in sleep and appetite."
        }
      }
    ]
  }
];

export default function SeasonalAffectiveDisorder() {
  // SAD Symptoms by category
  const sadSymptoms = {
    mood: [
      "Feeling depressed most of the day, nearly every day",
      "Losing interest in activities you used to enjoy",
      "Feeling hopeless, worthless, or guilty",
      "Irritability and low frustration tolerance",
      "Difficulty concentrating and making decisions",
      "Thoughts of death or suicide (seek help immediately)"
    ],
    energy: [
      "Feeling tired and sluggish even after plenty of sleep",
      "Heavy, 'leaden' feeling in arms or legs",
      "Difficulty getting out of bed in the morning",
      "Needing much more sleep than usual (hypersomnia)",
      "Decreased productivity at work or school",
      "Everything feels like it takes tremendous effort"
    ],
    appetite: [
      "Craving carbohydrates and comfort foods",
      "Increased appetite, especially for sweets and starches",
      "Weight gain (typically 5-15 pounds per winter)",
      "Eating more in the evening hours",
      "Loss of interest in healthy foods"
    ],
    social: [
      "Withdrawing from friends and family",
      "Canceling plans and avoiding social events",
      "Feeling like you want to 'hibernate'",
      "Decreased sex drive",
      "Relationship difficulties during winter months"
    ]
  };

  // SAD vs Regular Depression
  const sadVsDepression = [
    {
      feature: "Timing",
      sad: "Predictable seasonal pattern (usually fall/winter onset, spring/summer remission)",
      depression: "Can occur any time of year without seasonal pattern"
    },
    {
      feature: "Sleep",
      sad: "Typically oversleeping (hypersomnia)",
      depression: "Often insomnia (trouble sleeping)"
    },
    {
      feature: "Appetite",
      sad: "Increased appetite, carb cravings, weight gain",
      depression: "Often decreased appetite and weight loss"
    },
    {
      feature: "Energy Pattern",
      sad: "Heavy, leaden feeling; wanting to hibernate",
      depression: "Restless agitation or general fatigue"
    },
    {
      feature: "Duration",
      sad: "4-5 months per year, same time each year",
      depression: "Variable duration, not season-linked"
    }
  ];

  // Risk factors
  const riskFactors = [
    {
      icon: MapPin,
      title: "Geographic Location",
      description: "Living far from the equator increases risk. SAD affects about 1% of Floridians but 9% of Alaskans. Cincinnati's latitude (39°N) puts us in a moderate-high risk zone."
    },
    {
      icon: Users,
      title: "Gender",
      description: "Women are 4 times more likely than men to develop SAD. This may relate to hormonal factors and differences in how the brain processes serotonin."
    },
    {
      icon: Calendar,
      title: "Age",
      description: "SAD typically begins in young adulthood (20s-30s). It's rare in children under 10 and often improves after age 50."
    },
    {
      icon: Heart,
      title: "Family History",
      description: "If you have relatives with SAD or other forms of depression, your risk is higher. There's a genetic component to how your brain responds to light."
    },
    {
      icon: Brain,
      title: "Existing Depression or Bipolar",
      description: "If you already have major depression or bipolar disorder, you're more likely to experience seasonal worsening of symptoms."
    },
    {
      icon: Moon,
      title: "Work Environment",
      description: "Working in windowless environments, night shifts, or spending most daylight hours indoors increases risk."
    }
  ];

  // Treatment Options
  const lightTherapyTips = [
    "Use a 10,000 lux light box (not just any bright light)",
    "Sit 12-24 inches from the light for 20-30 minutes",
    "Use first thing in the morning, within an hour of waking",
    "Keep eyes open but don't stare directly at the light",
    "Be consistent—daily use is essential",
    "Start in early fall before symptoms begin"
  ];

  const medicationOptions = [
    {
      name: "Wellbutrin XL (bupropion)",
      description: "FDA-approved specifically for SAD prevention. Unique because it's the only antidepressant approved for preventing SAD episodes, not just treating them. Start in early fall, continue through early spring.",
      highlight: "FDA-approved for SAD prevention"
    },
    {
      name: "SSRIs (Prozac, Zoloft, Lexapro)",
      description: "Standard antidepressants that work well for SAD, especially when combined with light therapy. May be used year-round or seasonally.",
      highlight: "Effective especially with light therapy"
    },
    {
      name: "Vitamin D",
      description: "While not a treatment for SAD itself, vitamin D deficiency is common in winter and can worsen symptoms. We check your levels and supplement if needed.",
      highlight: "Addresses common deficiency"
    }
  ];

  const lifestyleStrategies = [
    {
      icon: Sun,
      title: "Maximize Natural Light",
      tips: ["Open blinds first thing in the morning", "Sit near windows during the day", "Take a walk during lunch hour (even on cloudy days)", "Trim bushes that block windows"]
    },
    {
      icon: Activity,
      title: "Stay Active",
      tips: ["Exercise regularly, especially outdoors", "Even a 10-minute walk helps", "Morning exercise may be most beneficial", "Don't wait until you 'feel like it'"]
    },
    {
      icon: Calendar,
      title: "Maintain Structure",
      tips: ["Keep a consistent sleep schedule", "Don't oversleep on weekends", "Plan enjoyable activities in advance", "Don't let yourself hibernate"]
    },
    {
      icon: Utensils,
      title: "Nutrition",
      tips: ["Limit simple carbs and sugar binges", "Eat protein with every meal", "Omega-3 fatty acids may help", "Stay hydrated"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has treated over 9,000 patients, with extensive experience managing seasonal mood disorders in the Cincinnati climate."
    },
    {
      icon: Brain,
      title: "Comprehensive Evaluation",
      description: "We look for everything—not just SAD, but bipolar disorder, thyroid problems, vitamin deficiencies, and other conditions that mimic or worsen seasonal depression."
    },
    {
      icon: Lightbulb,
      title: "Evidence-Based Treatment",
      description: "We use proven approaches: light therapy, FDA-approved medications, and CBT-SAD—tailored to your specific situation."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "Your questions are answered almost always the same day. When you're struggling, you won't wait days to hear back."
    },
    {
      icon: Shield,
      title: "Proactive Approach",
      description: "We focus on prevention—starting treatment before symptoms hit, so you can actually enjoy fall and winter."
    },
    {
      icon: Heart,
      title: "Collaborative Care",
      description: "We work with you to find the right combination of treatments. No cookie-cutter approaches."
    }
  ];

  const faqs = [
    {
      question: "When should I start light therapy for SAD?",
      answer: "Start light therapy in early fall (September-October) before symptoms begin. This preventive approach is more effective than waiting until you're already depressed. Continue through early spring, usually until daylight savings time changes in March."
    },
    {
      question: "Is SAD the same as regular depression?",
      answer: "SAD is a subtype of major depression with a seasonal pattern. The key difference is the timing—SAD follows a predictable seasonal cycle, typically starting in fall/winter and resolving in spring/summer. It also has characteristic symptoms like oversleeping and carbohydrate cravings that differ from typical depression."
    },
    {
      question: "Can light therapy cause problems?",
      answer: "Light therapy is very safe for most people. Some experience mild headache, eye strain, or nausea initially—these usually resolve within days. If you have bipolar disorder, light therapy can trigger mania, so we monitor carefully. People with certain eye conditions should consult an ophthalmologist first."
    },
    {
      question: "Do I need a prescription for a light box?",
      answer: "No, light boxes are available without prescription. However, not all light boxes are effective—you need one that provides 10,000 lux at the recommended distance. We can recommend specific products and show you how to use them properly."
    },
    {
      question: "Will I need treatment every year?",
      answer: "Most people with SAD benefit from yearly preventive treatment starting in early fall. Some find that light therapy alone is sufficient; others need medication. Over time, you'll learn what works best for you and can often manage independently with our guidance."
    },
    {
      question: "I feel better in summer. Should I stop medication?",
      answer: "It depends. For pure SAD (no depression at other times), we often taper medication in late spring. If you have year-round depression with seasonal worsening, continuous treatment may be better. We'll develop a personalized plan based on your pattern."
    },
    {
      question: "Can SAD affect my work performance?",
      answer: "Absolutely. Many people with SAD notice decreased productivity, difficulty concentrating, more sick days, and strained work relationships during winter months. Effective treatment can prevent these professional impacts."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You'll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Seasonal Affective Disorder Treatment in Cincinnati | Winter Depression Help | Dr. Shapiro</title>
        <meta name="description" content="Expert seasonal affective disorder (SAD) treatment in Cincinnati & Northern Kentucky. Light therapy, medication, and CBT-SAD for winter depression. Board-certified psychiatrist with 35+ years experience. Call (859) 341-7453." />
        <meta name="keywords" content="seasonal affective disorder Cincinnati, SAD treatment Cincinnati, winter depression treatment, light therapy Cincinnati, seasonal depression Northern Kentucky, winter blues treatment, SAD psychiatrist Cincinnati" />
        <link rel="canonical" href={`${window.location.origin}/seasonal-affective-disorder`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Seasonal Affective Disorder Treatment in Cincinnati | Winter Depression Help" />
        <meta property="og:description" content="Expert SAD treatment including light therapy, medication, and CBT-SAD. Board-certified psychiatrist with 35+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/seasonal-affective-disorder`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(sadSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50/50 via-background to-blue-50/30 py-16 lg:py-24">
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
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200">
                    <Sun className="w-4 h-4 mr-1" />
                    Seasonal Depression Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                    <Lightbulb className="w-4 h-4 mr-1" />
                    Light Therapy Experts
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Seasonal Affective Disorder (SAD) Treatment in{" "}
                  <span className="text-primary">Cincinnati</span>
                </h1>
                
                <p className="text-2xl text-amber-700 font-semibold">
                  When Winter Brings More Than Just Cold Weather
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every fall, it starts again—the fatigue, the carb cravings, the desire to crawl under the covers 
                  until spring. If this sounds familiar, you&apos;re not imagining it, and you&apos;re certainly not alone. 
                  <strong> Seasonal Affective Disorder is real, it&apos;s treatable, and you don&apos;t have to dread another winter.</strong>
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-amber-600" />
                    <span>Light therapy guidance and monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-amber-600" />
                    <span>FDA-approved medication for SAD prevention</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-amber-600" />
                    <span>Proactive treatment before symptoms start</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-amber-600" />
                    <span>Same-day responses to your questions</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-amber-600 hover:bg-amber-700 text-white shadow-medium text-lg px-8"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule an Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    onClick={() => window.location.href = '/screening?assessment=depression'}
                  >
                    Take Free Depression Screening
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Warm light therapy consultation for seasonal affective disorder treatment" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Is It Just the Winter Blues? */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Cloud className="w-4 h-4 mr-1" />
                  Understanding Your Experience
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Is It Just the Winter Blues?
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      Everyone feels a bit &quot;blah&quot; when the days get shorter and colder. But if you find yourself 
                      feeling genuinely depressed every winter—not just &quot;I wish it were summer&quot; but truly struggling 
                      to function—that&apos;s not normal. That&apos;s not weakness. <strong>That&apos;s a medical condition called 
                      Seasonal Affective Disorder.</strong>
                    </p>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                      <p className="text-amber-800">
                        <strong>Here&apos;s how to tell the difference:</strong> Winter blues means you&apos;d rather stay in 
                        than go out in the cold. SAD means you <em>can&apos;t</em> make yourself go out. Winter blues means 
                        you look forward to spring. SAD means you&apos;re not sure you can make it to spring.
                      </p>
                    </div>
                    
                    <p>
                      If you&apos;ve noticed the same pattern happening year after year—feeling fine in spring and summer, 
                      then sinking into depression as the days shorten—you likely have SAD. And the good news is: 
                      <strong> SAD is one of the most treatable forms of depression.</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Is SAD? */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  The Science
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  What Is Seasonal Affective Disorder?
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      Seasonal Affective Disorder is a type of depression that follows a seasonal pattern—typically 
                      starting in fall, deepening through winter, and lifting in spring. It&apos;s not a separate illness 
                      from depression; it&apos;s <strong>depression triggered by changes in light exposure</strong>.
                    </p>
                    
                    <p>
                      About 5% of Americans experience SAD, and it&apos;s much more common in northern states like Ohio. 
                      Women are four times more likely to be affected than men. Most people first develop SAD in their 
                      20s or 30s, though it can begin at any age.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Not Just Feeling Blah Callout */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Not Just &quot;Feeling Blah&quot;</h3>
                    <p className="text-amber-700 leading-relaxed">
                      SAD is a real medical condition involving your brain&apos;s response to reduced daylight. It&apos;s not 
                      laziness, weakness, or just &quot;hating winter.&quot; With <strong>over 9,000 patients treated and 35+ years 
                      of experience</strong>, Dr. Shapiro provides comprehensive evaluation and evidence-based treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signs You Might Have SAD */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Symptom Checklist
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Signs You Might Have SAD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                SAD symptoms typically begin in October-November and persist until March-April. 
                Do any of these sound familiar?
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Mood Symptoms */}
              <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Mood Symptoms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sadSymptoms.mood.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Energy Symptoms */}
              <Card className="bg-gradient-to-br from-amber-50 to-background border-amber-200">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center gap-2">
                    <Battery className="w-5 h-5" />
                    Energy & Sleep
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sadSymptoms.energy.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Appetite Symptoms */}
              <Card className="bg-gradient-to-br from-green-50 to-background border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                    <Utensils className="w-5 h-5" />
                    Appetite & Weight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sadSymptoms.appetite.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Social Symptoms */}
              <Card className="bg-gradient-to-br from-purple-50 to-background border-purple-200">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-700 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Social & Relationships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sadSymptoms.social.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{symptom}</span>
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
                onClick={() => window.location.href = '/screening?assessment=depression'}
              >
                Take Free Depression Screening
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* SAD vs Regular Depression */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <ArrowUpDown className="w-4 h-4 mr-1" />
                Key Differences
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                SAD vs. Regular Depression
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While both are forms of depression, SAD has distinctive features that affect how we treat it.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Card className="bg-card border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                        <th className="px-6 py-4 text-left font-semibold text-amber-700">Seasonal Affective Disorder</th>
                        <th className="px-6 py-4 text-left font-semibold text-blue-700">Major Depression</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sadVsDepression.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                          <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.sad}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.depression}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Winter Affects Your Brain */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  The Science
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Winter Affects Your Brain
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-amber-700">
                      <Moon className="w-5 h-5" />
                      Melatonin Overproduction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your brain produces melatonin (the &quot;sleep hormone&quot;) in response to darkness. In winter, 
                      with less daylight, melatonin production increases. <strong>This can make you feel drowsy, 
                      sluggish, and ready to hibernate—even during the day.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-blue-700">
                      <Zap className="w-5 h-5" />
                      Serotonin Drops
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sunlight helps regulate serotonin, the &quot;mood&quot; neurotransmitter. Less sunlight means less 
                      serotonin activity. <strong>This is why SAD responds well to both light therapy and 
                      antidepressants that boost serotonin.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-purple-700">
                      <Clock className="w-5 h-5" />
                      Circadian Rhythm Disruption
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your body&apos;s internal clock relies on light cues. When it&apos;s still dark at 7 AM, your 
                      brain thinks it should still be sleeping. <strong>This mismatch between your body clock 
                      and your life schedule causes profound fatigue.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-green-700">
                      <Sun className="w-5 h-5" />
                      Vitamin D Deficiency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We get most vitamin D from sunlight exposure. In Cincinnati&apos;s latitude, it&apos;s nearly 
                      impossible to make adequate vitamin D from October to March. <strong>Low vitamin D doesn&apos;t 
                      cause SAD, but it can worsen symptoms.</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800 text-center">
                  <strong>The bottom line:</strong> SAD isn&apos;t about attitude or willpower. It&apos;s about 
                  neurotransmitters, hormones, and circadian rhythms—biological processes that respond to treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Gets SAD? */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <Users className="w-4 h-4 mr-1" />
                Risk Factors
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Who Gets SAD?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Some people are more susceptible to seasonal depression than others.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {riskFactors.map((factor, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <factor.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">{factor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Treatment Options That Actually Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                SAD is highly treatable. Most people improve significantly with the right combination of approaches.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Light Therapy */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Light Therapy (The Gold Standard)</CardTitle>
                      <p className="text-muted-foreground">First-line treatment for SAD</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground">
                    Light therapy involves sitting in front of a special bright light box that mimics natural outdoor 
                    light. It works by resetting your circadian rhythm and suppressing melatonin production. 
                    <strong> About 50-80% of people with SAD respond to light therapy alone.</strong>
                  </p>
                  
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-3">How to Use Light Therapy Effectively:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {lightTherapyTips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-2 text-amber-700 text-sm">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Important:</strong> Not all light boxes work. Many &quot;happy lights&quot; sold online are too 
                      dim. We can recommend specific products that meet clinical standards and show you how to use 
                      them properly.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Medication */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Pill className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Medication Options</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground mb-4">
                    For moderate to severe SAD, or when light therapy alone isn&apos;t enough, medication can be very effective.
                  </p>
                  
                  <div className="space-y-4">
                    {medicationOptions.map((med, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-blue-800">{med.name}</h4>
                          <Badge className="bg-blue-100 text-blue-700 text-xs">{med.highlight}</Badge>
                        </div>
                        <p className="text-blue-700 text-sm">{med.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CBT-SAD */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl">Therapy Approaches (CBT-SAD)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Cognitive Behavioral Therapy adapted for SAD (CBT-SAD) helps you identify and change thought 
                    patterns and behaviors that worsen winter depression.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">What CBT-SAD Addresses:</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Negative thoughts about winter (&quot;I hate this. I can&apos;t cope.&quot;)</li>
                        <li>• Avoidance behaviors (canceling plans, hibernating)</li>
                        <li>• Disrupted routines and sleep schedules</li>
                        <li>• Unhelpful coping (comfort eating, oversleeping)</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Research Shows:</h4>
                      <p className="text-purple-700 text-sm">
                        CBT-SAD may have longer-lasting effects than light therapy alone. People who learn these 
                        skills often have less severe symptoms in future winters, even without continuing therapy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lifestyle Strategies */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">Lifestyle Strategies</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-6">
                    These aren&apos;t a substitute for treatment, but they can significantly improve your response to 
                    light therapy and medication.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {lifestyleStrategies.map((strategy, index) => (
                      <div key={index} className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <strategy.icon className="w-5 h-5 text-green-600" />
                          <h4 className="font-semibold text-green-800">{strategy.title}</h4>
                        </div>
                        <ul className="text-green-700 text-sm space-y-1">
                          {strategy.tips.map((tip, tipIndex) => (
                            <li key={tipIndex}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Situations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-red-100 text-red-600 border-red-200 mb-4">
                <AlertTriangle className="w-4 h-4 mr-1" />
                Special Considerations
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Special Situations
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-amber-700">
                    <Zap className="w-5 h-5" />
                    SAD with Bipolar Disorder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you have bipolar disorder, SAD treatment requires extra care. Light therapy can trigger 
                    mania in some people. Antidepressants carry similar risks.
                  </p>
                  <div className="bg-amber-50 rounded p-3">
                    <p className="text-amber-800 text-sm">
                      <strong>Our approach:</strong> We start light therapy very gradually and monitor closely. 
                      Mood stabilizers are often used alongside any antidepressant.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-pink-700">
                    <Baby className="w-5 h-5" />
                    SAD During Pregnancy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Light therapy is safe during pregnancy and is our first-line treatment. Some antidepressants 
                    are also safe; others should be avoided.
                  </p>
                  <div className="bg-pink-50 rounded p-3">
                    <p className="text-pink-800 text-sm">
                      <strong>Our approach:</strong> We individualize treatment based on symptom severity, 
                      trimester, and your comfort level with medication options.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-blue-700">
                    <GraduationCap className="w-5 h-5" />
                    SAD in Children & Teenagers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    SAD can affect children and teens, though it&apos;s more common after puberty. Signs include 
                    declining grades in winter, increased irritability, and social withdrawal.
                  </p>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Our approach:</strong> Light therapy is first-line. We also address sleep schedules, 
                      school accommodations, and family education.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Spring Transition */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                  <TreeDeciduous className="w-4 h-4 mr-1" />
                  Looking Ahead
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  The Spring Transition
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      As days lengthen, most people with SAD naturally start feeling better. But the transition 
                      isn&apos;t always smooth.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2">What to Expect:</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Gradual improvement starting in March</li>
                          <li>• Energy returns before mood fully lifts</li>
                          <li>• Sleep normalizes (less oversleeping)</li>
                          <li>• Appetite and cravings decrease</li>
                        </ul>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h4 className="font-semibold text-amber-800 mb-2">Watch Out For:</h4>
                        <ul className="text-amber-700 text-sm space-y-1">
                          <li>• &quot;Spring rebound&quot;—temporary worsening as you adjust</li>
                          <li>• Stopping treatment too quickly</li>
                          <li>• In bipolar: mania triggered by increased light</li>
                          <li>• Next fall: start treatment earlier!</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800">
                        <strong>Planning ahead:</strong> We&apos;ll work with you to create a &quot;fall action plan&quot;—knowing 
                        exactly when to restart light therapy and/or medication, so you can prevent symptoms rather 
                        than just react to them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Expect: Your Evaluation */}
        <section className="py-16 bg-gradient-calm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <FileText className="w-4 h-4 mr-1" />
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What to Expect: Your Evaluation
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-amber-700">For Adults</CardTitle>
                      <p className="text-sm text-muted-foreground">Approximately 2 Hours</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Your evaluation begins with a <strong>one-hour session</strong> with our licensed professional counselor, 
                    followed by approximately <strong>one hour</strong> with Dr. Shapiro.
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 font-semibold mb-2">What We Assess:</p>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>• Detailed history of your seasonal mood patterns</li>
                      <li>• Screening for bipolar disorder (critical for safe treatment)</li>
                      <li>• Thyroid function and vitamin D levels</li>
                      <li>• Other conditions that mimic or worsen SAD</li>
                      <li>• Your previous experiences with treatment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-blue-700">For Children & Teens</CardTitle>
                      <p className="text-sm text-muted-foreground">Approximately 3 Hours</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    We take extra care with young patients. Parent interview, child session, and family meeting 
                    with Dr. Shapiro—all designed to get the complete picture.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-semibold mb-2">We Look For Everything:</p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• SAD often co-occurs with ADHD, anxiety, and learning differences</li>
                      <li>• School performance patterns across the year</li>
                      <li>• Sleep schedule and light exposure habits</li>
                      <li>• Family history of mood disorders</li>
                    </ul>
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
                Why Patients Trust Dr. Shapiro for SAD Treatment
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-amber-600" />
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
                Frequently Asked Questions About SAD
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground flex items-start gap-3">
                      <span className="text-amber-600 font-bold">Q:</span>
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
        <section className="py-20 bg-gradient-to-br from-amber-50 via-background to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Don&apos;t Wait Until You&apos;re Struggling
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                The best time to start SAD treatment is <strong>before symptoms hit</strong>. If you&apos;ve struggled 
                with winter depression before, schedule your evaluation in late summer or early fall. With over 
                9,000 patients helped and 35+ years of experience, Dr. Shapiro can help you take back your winters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white shadow-medium text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule an Evaluation
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
