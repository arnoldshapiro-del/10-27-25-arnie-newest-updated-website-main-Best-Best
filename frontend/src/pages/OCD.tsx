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
  Star,
  Calendar,
  RefreshCw,
  Repeat,
  AlertTriangle,
  Target,
  Zap,
  HeartPulse,
  Scale,
  Home,
  XCircle,
  CheckCircle,
  Infinity,
  ShieldAlert,
  Droplets,
  Cross,
  HeartCrack,
  Syringe,
  Magnet,
  Building,
  Stethoscope as Surgery
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// OCD Page Schema
const ocdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "OCD Treatment in Cincinnati | Obsessive-Compulsive Disorder Psychiatrist",
    "description": "Expert OCD treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in obsessive-compulsive disorder treatment including ERP therapy and medication. 35+ years experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Obsessive-Compulsive Disorder",
      "alternateName": ["OCD", "Obsessive Compulsive Disorder"],
      "signOrSymptom": [
        "Intrusive unwanted thoughts",
        "Repetitive behaviors or rituals",
        "Excessive doubt and checking",
        "Fear of contamination",
        "Need for symmetry or order"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about OCD symptoms, diagnosis, and treatment options including ERP therapy and medication management"
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
        "name": "Does having violent/sexual intrusive thoughts mean I'm actually dangerous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. In fact, it means the opposite. People who act on violent or sexual impulses typically don't feel distressed by the thoughts—they feel drawn to them. If the thoughts horrify you, that's evidence of your values, not your danger."
        }
      },
      {
        "@type": "Question",
        "name": "Why does OCD require higher medication doses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OCD involves different brain circuits than depression, requiring higher serotonin receptor occupancy. Don't compare your dose to someone taking the same medication for depression—they're essentially treating different conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Can OCD be cured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OCD is a chronic condition, but most people achieve significant improvement—often 60-80% reduction in symptoms. Many people reach a point where OCD no longer controls their lives, even if occasional symptoms persist."
        }
      }
    ]
  }
];

export default function OCD() {
  // OCD Subtypes
  const ocdSubtypes = [
    {
      icon: Droplets,
      title: "Contamination OCD",
      obsessions: "Fear of germs, illness, bodily fluids, chemicals, or 'contaminating' others.",
      compulsions: "Excessive hand washing (often until skin cracks and bleeds), avoiding 'contaminated' places/people, elaborate cleaning rituals, asking others if something is clean.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: ShieldAlert,
      title: "Harm OCD",
      obsessions: "Intrusive thoughts about hurting yourself or others—often violent images of stabbing, pushing, or attacking loved ones.",
      compulsions: "Avoiding knives, hiding sharp objects, staying away from vulnerable people (children, elderly), constant mental review ('Am I a monster?'), seeking reassurance.",
      critical: "People with Harm OCD are NOT dangerous. They're horrified by these thoughts precisely BECAUSE they don't want to act on them. Someone planning actual violence doesn't feel distressed by the thought.",
      color: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Brain,
      title: "'Pure O' (Primarily Obsessional OCD)",
      obsessions: "The myth: Some people have obsessions without compulsions.",
      compulsions: "The reality: The compulsions are mental—reviewing, analyzing, checking feelings, seeking internal reassurance, mental praying, or 'testing' reactions. These are invisible but just as time-consuming.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: AlertTriangle,
      title: "Sexual/Inappropriate Thought OCD",
      obsessions: "Unwanted sexual thoughts about children, family members, same-sex partners (in straight individuals), or opposite-sex partners (in gay individuals). Fear of being a pedophile or 'secret' deviant.",
      compulsions: "Avoiding children, checking groin sensations, mentally reviewing past interactions, seeking reassurance about identity.",
      critical: "This is NOT the same as sexual orientation questioning. People with this OCD are distressed BY the thoughts, not curious about them.",
      color: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Cross,
      title: "Religious/Scrupulosity OCD",
      obsessions: "Fear of blasphemy, sinning, going to hell, or offending God. Intrusive blasphemous images or urges.",
      compulsions: "Excessive praying, confession, seeking reassurance from clergy, mental reviewing of actions for sins.",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Scale,
      title: "Symmetry/'Just Right' OCD",
      obsessions: "Things must be even, symmetrical, or 'just right.' Intense discomfort when things are 'off.'",
      compulsions: "Arranging, ordering, evening things out, redoing actions until they feel 'right.'",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: HeartCrack,
      title: "Relationship OCD (ROCD)",
      obsessions: "Constant doubt about whether you love your partner, whether they're 'the one,' whether you're attracted enough.",
      compulsions: "Comparing partner to others, checking feelings, seeking reassurance, mentally reviewing relationship history.",
      color: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: HeartPulse,
      title: "Health Anxiety OCD",
      obsessions: "Fear of having or getting a serious illness (cancer, ALS, etc.) despite no evidence.",
      compulsions: "Body checking, Googling symptoms, seeking medical reassurance, avoiding health-related information.",
      color: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  // OCD vs Being Particular
  const ocdVsParticular = [
    { ocd: "Driven by fear and anxiety", particular: "Driven by preference" },
    { ocd: "Feels like you HAVE to do it", particular: "Feels like you WANT to do it" },
    { ocd: "Provides temporary relief, then anxiety returns", particular: "Provides satisfaction" },
    { ocd: "Takes hours from your day", particular: "Takes reasonable time" },
    { ocd: "You know it's excessive", particular: "It seems proportionate" },
    { ocd: "Interferes with functioning", particular: "Enhances functioning" },
    { ocd: "Causes distress", particular: "Causes pleasure or comfort" }
  ];

  // Child warning signs
  const childWarningSigns = [
    "Excessive hand washing or bathroom time",
    "Repeated questions ('Are you sure?' 'What if...?')",
    "Homework taking hours due to erasing/rewriting",
    "Avoidance of certain activities or places",
    "Needing things 'just right' with meltdowns if disturbed",
    "Unusual fears about contamination, harm, or religious themes"
  ];

  // PANDAS features
  const pandasFeatures = [
    "Dramatic, sudden onset of severe OCD and/or tics",
    "Often accompanied by urinary symptoms, personality change, sleep problems",
    "Typically age 3-12"
  ];

  // Accommodation examples
  const accommodationExamples = [
    "Answering reassurance questions ('Yes, the door is locked')",
    "Washing clothes separately because they're 'contaminated'",
    "Avoiding certain topics, foods, or places",
    "Waiting while they complete rituals",
    "Doing things for them to prevent their distress"
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has treated over 9,000 patients, with extensive experience in OCD and anxiety disorders."
    },
    {
      icon: Brain,
      title: "Understands OCD Deeply",
      description: "We know that OCD is not about being neat. We understand the terror of intrusive thoughts and the exhaustion of compulsions."
    },
    {
      icon: Pill,
      title: "Proper Medication Dosing",
      description: "Many doctors underdose OCD medications. We use evidence-based doses and give them time to work."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "Your questions are answered almost always the same day. When you're struggling, you won't wait days to hear back."
    },
    {
      icon: Shield,
      title: "Comprehensive Evaluation",
      description: "We look for everything—not just OCD, but anxiety, depression, tics, ADHD, and other conditions that commonly co-occur."
    },
    {
      icon: Heart,
      title: "No Judgment",
      description: "We've heard it all. Whatever your intrusive thoughts, we won't be shocked. You can tell us the truth."
    }
  ];

  const faqs = [
    {
      question: "Does having violent/sexual intrusive thoughts mean I'm actually dangerous?",
      answer: "No. In fact, it means the opposite. People who act on violent or sexual impulses typically don't feel distressed by the thoughts—they feel drawn to them. If the thoughts horrify you, that's evidence of your values, not your danger."
    },
    {
      question: "Can OCD be cured?",
      answer: "OCD is a chronic condition, but most people achieve significant improvement—often 60-80% reduction in symptoms. Many people reach a point where OCD no longer controls their lives, even if occasional symptoms persist. The skills learned in ERP last a lifetime."
    },
    {
      question: "Why do I need such high doses of medication?",
      answer: "OCD involves different brain circuits than depression, requiring higher serotonin receptor occupancy. Don't compare your dose to someone taking the same medication for depression—they're essentially treating different conditions."
    },
    {
      question: "How long will I need to take medication?",
      answer: "Most guidelines recommend at least 12-24 months of medication after achieving remission. Stopping too early leads to high relapse rates (up to 90% without ongoing therapy skills). Many patients stay on medication long-term, which is safe."
    },
    {
      question: "My child's OCD demands we follow certain rules or they melt down. Should we comply?",
      answer: "This is accommodation, and while it feels compassionate, it feeds the OCD. We'll work together on a structured plan to gradually reduce accommodation while supporting your child through the transition."
    },
    {
      question: "I've tried therapy before and it didn't work. Why would this be different?",
      answer: "Most general therapists aren't trained in ERP. Talk therapy, insight-oriented therapy, and general CBT don't work for OCD. We need to specifically address the obsession-compulsion cycle. If you've never done proper ERP with a trained specialist, you haven't actually tried the treatment that works."
    },
    {
      question: "I only have the thoughts, not the physical rituals. Is it still OCD?",
      answer: "Yes—this is sometimes called 'Pure O,' but it's a misnomer. You likely have mental compulsions: reviewing, analyzing, seeking internal reassurance, mentally 'checking' your reactions. These invisible rituals are still compulsions and still need treatment."
    },
    {
      question: "Will you tell me my thoughts are irrational and I should just stop?",
      answer: "No. You already know the thoughts are irrational—that's part of what makes OCD so frustrating. Telling you to 'just stop' would be useless. Instead, we work on changing your RELATIONSHIP with the thoughts, not arguing about their content."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You'll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>OCD Treatment in Cincinnati | Obsessive-Compulsive Disorder Psychiatrist | Dr. Shapiro</title>
        <meta name="description" content="Expert OCD treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in obsessive-compulsive disorder including ERP therapy coordination and medication management. 35+ years experience. Call (859) 341-7453." />
        <meta name="keywords" content="OCD treatment Cincinnati, OCD psychiatrist Cincinnati, obsessive compulsive disorder treatment Ohio, OCD specialist Cincinnati, Pure O treatment, OCD medication management, ERP therapy Cincinnati, OCD doctor Fort Wright KY, intrusive thoughts treatment" />
        <link rel="canonical" href={`${window.location.origin}/ocd`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="OCD Treatment in Cincinnati | Obsessive-Compulsive Disorder Psychiatrist" />
        <meta property="og:description" content="Expert OCD treatment including medication management and ERP therapy coordination. Board-certified psychiatrist with 35+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/ocd`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(ocdSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-indigo-50/50 py-16 lg:py-24">
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
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 border-indigo-200">
                    <RefreshCw className="w-4 h-4 mr-1" />
                    OCD Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  OCD Treatment in{" "}
                  <span className="text-primary">Cincinnati</span>
                </h1>
                
                <p className="text-2xl text-indigo-700 font-semibold">
                  When Your Brain Won&apos;t Let Go
                </p>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    You know the thought doesn&apos;t make sense. You <em>KNOW</em> the door is locked. You <em>KNOW</em> your 
                    hands are clean. You <em>KNOW</em> you didn&apos;t hit anyone with your car. But knowing doesn&apos;t help. 
                    The doubt creeps back. The urge to check, wash, or mentally review becomes unbearable. You do 
                    the ritual—and feel relief for maybe five minutes. Then it starts again.
                  </p>
                  <p>
                    This isn&apos;t being careful. This isn&apos;t being thorough. <strong>This is OCD—and you&apos;re exhausted 
                    from fighting your own brain.</strong>
                  </p>
                  <p className="text-primary font-medium">
                    The good news: OCD is one of the most treatable psychiatric conditions when approached correctly. 
                    The key word is &quot;correctly.&quot;
                  </p>
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
                    onClick={() => window.location.href = '/screening?assessment=ocd'}
                  >
                    Take Free OCD Screening
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Supportive OCD treatment consultation with psychiatrist Dr. Arnold Shapiro" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Thoughts You Can't Stop */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  Understanding Your Experience
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  The Thoughts You Can&apos;t Stop
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      Everyone has weird thoughts sometimes. The difference with OCD is what happens next.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Without OCD:</h4>
                        <p className="text-green-700 text-sm">
                          A strange thought pops in (&quot;What if I swerved into traffic?&quot;), you dismiss it as 
                          random brain noise, and move on.
                        </p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-2">With OCD:</h4>
                        <p className="text-red-700 text-sm">
                          The thought triggers alarm. Your brain flags it as meaningful and dangerous. You feel 
                          compelled to &quot;do something&quot; about it—check, avoid, seek reassurance, mentally review, 
                          pray, or neutralize. The ritual temporarily reduces anxiety... which teaches your brain 
                          that the thought WAS dangerous, making it come back stronger.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                      <p className="text-indigo-800 font-semibold mb-2">This is the OCD trap:</p>
                      <p className="text-indigo-700">
                        The things you do to feel better are exactly what make OCD worse.
                      </p>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-800">
                        <strong>The cruel irony:</strong> People with OCD often have the <em>OPPOSITE</em> values 
                        from their obsessions. The person terrified of harming a child is usually exceptionally gentle. 
                        The person with blasphemous thoughts is often deeply religious. <strong>OCD attacks what 
                        you care about most.</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Is OCD Really? */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 border-indigo-200 mb-4">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  The Truth About OCD
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  What Is OCD Really?
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground mb-6">OCD has two components:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-indigo-50 rounded-lg p-5">
                      <h4 className="font-bold text-indigo-800 text-lg mb-3">Obsessions</h4>
                      <p className="text-indigo-700">
                        Intrusive, unwanted thoughts, images, or urges that cause significant distress. These are 
                        NOT the same as worries. They&apos;re often bizarre, violent, sexual, or blasphemous—and 
                        completely out of character for the person experiencing them.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-5">
                      <h4 className="font-bold text-purple-800 text-lg mb-3">Compulsions</h4>
                      <p className="text-purple-700">
                        Repetitive behaviors or mental acts performed to reduce the anxiety caused by obsessions. 
                        These can be visible (hand washing, checking, arranging) or invisible (mental reviewing, 
                        counting, praying, seeking reassurance).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-gradient-to-br from-red-50 to-background border-red-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      What OCD is NOT:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>Being neat, organized, or particular (that&apos;s a personality preference, not a disorder)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>Enjoying cleaning or symmetry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>Double-checking things occasionally</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>Having high standards</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-background border-green-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      What OCD IS:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Spending hours per day on rituals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Knowing the behavior is excessive but being unable to stop</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Significant interference with work, relationships, or daily functioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Distress, not pleasure, driving the behaviors</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
                <p className="text-amber-800 text-lg">
                  People often say &quot;I&apos;m so OCD&quot; about being organized. <strong>Real OCD isn&apos;t quirky—it&apos;s torture.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of OCD */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <Infinity className="w-4 h-4 mr-1" />
                Many Forms
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Types of OCD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                OCD can attach to almost any theme. Here are the most common presentations:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {ocdSubtypes.map((subtype, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${subtype.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <subtype.icon className={`w-6 h-6 ${subtype.iconColor}`} />
                      </div>
                      <CardTitle className="text-lg">{subtype.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Obsessions:</p>
                      <p className="text-muted-foreground text-sm">{subtype.obsessions}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Compulsions:</p>
                      <p className="text-muted-foreground text-sm">{subtype.compulsions}</p>
                    </div>
                    {subtype.critical && (
                      <div className="bg-amber-50 border border-amber-200 rounded p-3 mt-2">
                        <p className="text-amber-800 text-xs font-medium">{subtype.critical}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* OCD vs Being Particular */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Scale className="w-4 h-4 mr-1" />
                Key Differences
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                OCD vs. Being &quot;Particular&quot;
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card border-border overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-6 py-4 text-left font-semibold text-indigo-700">OCD</th>
                        <th className="px-6 py-4 text-left font-semibold text-green-700">Being Particular/Organized</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ocdVsParticular.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                          <td className="px-6 py-4 text-muted-foreground">{row.ocd}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.particular}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 text-center">
                <p className="text-indigo-800 text-lg">
                  The person who &quot;just likes things neat&quot; doesn&apos;t have a panic attack when something is moved. 
                  <strong> The person with OCD might.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How OCD Hijacks Your Brain */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  The Science
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  How OCD Hijacks Your Brain
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground mb-6">Think of your brain as having two systems:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">The Alarm System (Amygdala)</h4>
                      <p className="text-red-700 text-sm">Detects threats and triggers fear responses.</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">The Brake System (Prefrontal Cortex)</h4>
                      <p className="text-green-700 text-sm">Evaluates whether the alarm is legitimate and decides whether to act.</p>
                    </div>
                  </div>
                  
                  <p className="text-foreground mb-4">
                    In OCD, there&apos;s a malfunction in the circuit connecting these systems—specifically involving 
                    the orbitofrontal cortex, striatum (caudate nucleus), and thalamus.
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-red-700">
                      <AlertCircle className="w-5 h-5" />
                      What Goes Wrong
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
                      <li>Your brain&apos;s &quot;error detection&quot; system fires constantly, screaming &quot;Something is wrong! Check again!&quot;</li>
                      <li>The filtering system (striatum) that should dismiss false alarms fails to do its job</li>
                      <li>The signal loops back, getting louder each time</li>
                      <li>You&apos;re stuck in a neurological feedback loop of doubt</li>
                    </ol>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-blue-700">
                      <Zap className="w-5 h-5" />
                      The Chemistry
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li><strong>Serotonin</strong> is low in key brain regions—which is why medications targeting serotonin help</li>
                      <li><strong>Glutamate</strong> (an excitatory neurotransmitter) is overactive, keeping the alarm &quot;hot&quot;</li>
                      <li><strong>Dopamine</strong> in the reward pathway reinforces the ritual behavior</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">What this means for treatment:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• This is <strong>biology, not weakness</strong></li>
                  <li>• The brain CAN change (neuroplasticity)</li>
                  <li>• But it requires both medication (to lower the &quot;volume&quot; of the alarm) AND behavioral work (to retrain the circuits)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Box */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-800 mb-2">OCD Is Not a Personality Quirk</h3>
                    <p className="text-indigo-700 leading-relaxed mb-4">
                      OCD is a neurobiological condition—your brain&apos;s &quot;error detection&quot; system is stuck in 
                      overdrive, sending constant false alarms. It&apos;s not about being neat or organized. It&apos;s 
                      not a character flaw. It&apos;s not something you can just &quot;decide&quot; to stop.
                    </p>
                    <p className="text-indigo-700 leading-relaxed mb-4">
                      With proper treatment—specifically ERP therapy combined with appropriate medication—most 
                      people with OCD improve dramatically. The key is getting the <strong>RIGHT</strong> treatment. 
                      Standard talk therapy doesn&apos;t work. Low-dose antidepressants don&apos;t work. OCD requires 
                      specialized approaches.
                    </p>
                    <p className="text-indigo-800 font-medium">
                      With <strong>over 9,000 patients treated and 35+ years of experience</strong>, Dr. Shapiro 
                      provides comprehensive evaluation and evidence-based treatment. You don&apos;t have to keep 
                      living in this loop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment That Actually Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Treatment That Actually Works
              </h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* ERP Therapy */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">ERP Therapy: The Gold Standard</CardTitle>
                      <p className="text-muted-foreground">Exposure and Response Prevention</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground">
                    <strong>What it is:</strong> Exposure and Response Prevention (ERP) is the most effective 
                    therapy for OCD—backed by decades of research. It involves gradually facing your fears 
                    (exposure) while NOT performing rituals (response prevention).
                  </p>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-3">How it works:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded p-3">
                        <p className="text-red-800 text-sm">
                          <strong>Your OCD teaches you:</strong><br />
                          &quot;That thought is dangerous → Do the ritual → Feel safe.&quot;
                        </p>
                      </div>
                      <div className="bg-green-100 rounded p-3">
                        <p className="text-green-800 text-sm">
                          <strong>ERP teaches your brain:</strong><br />
                          &quot;I can handle the thought → I didn&apos;t do the ritual → Nothing bad happened → The thought isn&apos;t actually dangerous.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Example (Contamination OCD):</h4>
                    <p className="text-blue-700 text-sm">
                      Touch a doorknob → Don&apos;t wash for two hours → Notice that nothing terrible happened → 
                      Brain learns the doorknob wasn&apos;t actually dangerous.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">The Modern Approach (Inhibitory Learning Model):</h4>
                    <p className="text-purple-700 text-sm">
                      We no longer just wait for anxiety to decrease. Instead, we focus on &quot;expectancy violation&quot;—proving 
                      your feared prediction wrong. Did you touch the doorknob and NOT get sick? Did you NOT check 
                      the stove and your house didn&apos;t burn down? That&apos;s the learning we&apos;re after.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">What we DON&apos;T do:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• &quot;Thought stopping&quot; (doesn&apos;t work)</li>
                      <li>• Simple talk therapy about feelings (doesn&apos;t work for OCD)</li>
                      <li>• Reassurance (&quot;Don&apos;t worry, you&apos;d never hurt anyone&quot;)—this is actually a compulsion and makes OCD worse</li>
                    </ul>
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
                    <div>
                      <CardTitle className="text-2xl">Medication: Why OCD Requires Higher Doses</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground">
                    OCD is unique in psychiatry: it requires <strong>MUCH higher doses</strong> of medication 
                    than depression or anxiety.
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Why?</h4>
                    <p className="text-amber-700 text-sm">
                      The serotonin receptors involved in OCD (particularly in the striatum) require higher 
                      occupancy rates to see anti-obsessional effects. A dose that works for depression often 
                      does nothing for OCD.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-3">What this looks like:</h4>
                    <ul className="text-blue-700 text-sm space-y-2">
                      <li><strong>Sertraline:</strong> Depression dose is 50-150mg. OCD often requires 200-400mg.</li>
                      <li><strong>Fluoxetine:</strong> Depression dose is 20-40mg. OCD often requires 60-120mg.</li>
                      <li><strong>Fluvoxamine:</strong> Specifically effective for OCD. Doses up to 300-450mg may be needed.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Timeline:</h4>
                    <p className="text-purple-700 text-sm">
                      Unlike depression (2-4 weeks), OCD medications often take <strong>8-12 weeks</strong> at 
                      full dose to show significant effect. Patience is essential.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">If SSRIs don&apos;t work:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• <strong>Clomipramine (Anafranil):</strong> An older tricyclic that&apos;s often more effective than SSRIs for OCD, though with more side effects</li>
                      <li>• <strong>Augmentation</strong> with low-dose antipsychotics (aripiprazole, risperidone)</li>
                      <li>• <strong>Glutamate modulators</strong> (memantine) for treatment-resistant cases</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Combination Treatment */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Repeat className="w-6 h-6 text-purple-600" />
                    Combination Treatment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    Research consistently shows that <strong>medication PLUS ERP works better than either alone</strong>, 
                    especially for moderate to severe OCD. Medication turns down the &quot;volume&quot; of obsessions, 
                    making it possible to do the hard work of ERP.
                  </p>
                </CardContent>
              </Card>

              {/* Treatment-Resistant Options */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-2xl">Treatment-Resistant Options</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    For the approximately 30% who don&apos;t respond adequately to medication and therapy:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Magnet className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-blue-800">Deep TMS</h4>
                      </div>
                      <p className="text-blue-700 text-sm">
                        FDA-approved for OCD. Uses magnetic pulses to modulate the overactive circuits.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">Intensive Outpatient</h4>
                      </div>
                      <p className="text-green-700 text-sm">
                        Structured daily ERP for severe cases.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="w-5 h-5 text-purple-600" />
                        <h4 className="font-semibold text-purple-800">Residential Treatment</h4>
                      </div>
                      <p className="text-purple-700 text-sm">
                        Programs like McLean (Boston) or Rogers Memorial for severe, disabling OCD.
                      </p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Surgery className="w-5 h-5 text-amber-600" />
                        <h4 className="font-semibold text-amber-800">Neurosurgical Options</h4>
                      </div>
                      <p className="text-amber-700 text-sm">
                        For truly refractory cases—Deep Brain Stimulation (DBS) or focused ultrasound. Rarely needed but available.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* OCD in Children & Teenagers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  <Users className="w-4 h-4 mr-1" />
                  Pediatric OCD
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  OCD in Children & Teenagers
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">How It Looks Different</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>May not recognize thoughts as &quot;excessive&quot;—they just feel real</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Rituals often involve parents (demanding reassurance, requiring family to follow rules)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>May look like defiance, tantrums, or school refusal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Often hides symptoms due to shame</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-700">Warning Signs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-foreground text-sm">
                      {childWarningSigns.map((sign, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center gap-2">
                    <Syringe className="w-5 h-5" />
                    PANDAS/PANS: When OCD Appears Overnight
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-amber-800">
                    In some children, OCD symptoms explode suddenly—literally overnight—following an infection 
                    (strep throat, flu, COVID).
                  </p>
                  
                  <div className="bg-amber-100 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">PANDAS/PANS features:</h4>
                    <ul className="text-amber-700 text-sm space-y-1">
                      {pandasFeatures.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">What&apos;s happening:</h4>
                    <p className="text-amber-700 text-sm">
                      An autoimmune reaction where the body&apos;s antibodies attack the basal ganglia 
                      (the brain region involved in OCD).
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Treatment:</h4>
                    <p className="text-amber-700 text-sm">
                      Antibiotics (if active infection), anti-inflammatory approaches, and sometimes IVIG 
                      (intravenous immunoglobulin) for severe cases. Plus standard OCD treatment.
                    </p>
                  </div>
                  
                  <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                    <p className="text-red-800 font-semibold text-sm">
                      If your child&apos;s OCD appeared suddenly after an illness, tell us immediately—it 
                      changes the treatment approach.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Family's Role */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-pink-100 text-pink-700 border-pink-200 mb-4">
                  <Home className="w-4 h-4 mr-1" />
                  Family Support
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  The Family&apos;s Role
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">The Accommodation Trap</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    When you love someone with OCD, you naturally want to help reduce their distress. 
                    The problem: <strong>most &quot;help&quot; actually makes OCD worse.</strong>
                  </p>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Examples of accommodation:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      {accommodationExamples.map((example, index) => (
                        <li key={index}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800">
                      <strong>Why this backfires:</strong> Every time you participate in a ritual or provide 
                      reassurance, you confirm to the OCD brain that the fear was legitimate. You become 
                      part of the OCD system.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">How to Actually Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-1">The 2-Minute Rule:</h4>
                      <p className="text-green-700 text-sm">
                        &quot;I love you, but I can&apos;t answer that OCD question. I&apos;ll listen to how you&apos;re feeling 
                        for 2 minutes, then we need to move on.&quot;
                      </p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-1">Stop participating:</h4>
                      <p className="text-green-700 text-sm">
                        You may need to stop providing reassurance cold turkey. It will be hard. Your loved one 
                        may be angry. But it&apos;s necessary.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-1">Be a coach, not a rescuer:</h4>
                      <p className="text-green-700 text-sm">
                        &quot;I know this is hard. Your OCD is lying to you. I believe in your ability to handle 
                        this uncertainty.&quot;
                      </p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-1">Support treatment:</h4>
                      <p className="text-green-700 text-sm">
                        ERP requires practice at home. You may need to participate in exposure exercises.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-1">Get your own support:</h4>
                      <p className="text-green-700 text-sm">
                        Caring for someone with severe OCD is exhausting. Family therapy or support groups help.
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
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Initial Appointment (60-90 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">We&apos;ll discuss:</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-healing mt-0.5 flex-shrink-0" />
                        <span>Your specific obsessions and compulsions in detail</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-healing mt-0.5 flex-shrink-0" />
                        <span>How much time OCD takes from your day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-healing mt-0.5 flex-shrink-0" />
                        <span>When symptoms started and how they&apos;ve evolved</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-healing mt-0.5 flex-shrink-0" />
                        <span>Previous treatment attempts and what worked/didn&apos;t work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-healing mt-0.5 flex-shrink-0" />
                        <span>Family history of OCD, tics, or anxiety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-healing mt-0.5 flex-shrink-0" />
                        <span>Screening for tics (often co-occur) and other conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-healing mt-0.5 flex-shrink-0" />
                        <span>Impact on work, relationships, and daily functioning</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Assessments we may use:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• <strong>Yale-Brown Obsessive-Compulsive Scale (Y-BOCS):</strong> The gold standard for measuring OCD severity</li>
                      <li>• Screening for related conditions (depression, tics, ADHD)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">What we determine together:</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Confirmation of diagnosis (OCD vs. generalized anxiety vs. other conditions)</li>
                      <li>• Severity level (mild/moderate/severe/extreme)</li>
                      <li>• Your specific OCD subtype(s)</li>
                      <li>• Whether medication, therapy, or both is appropriate</li>
                      <li>• Treatment plan with realistic timelines</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-semibold">
                      Important: I need to know the REAL thoughts, even if they&apos;re embarrassing. I&apos;ve heard every 
                      type of intrusive thought imaginable. Nothing shocks me, and keeping secrets makes treatment 
                      less effective.
                    </p>
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
                Why Patients Trust Dr. Shapiro for OCD Treatment
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-indigo-600" />
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
                Frequently Asked Questions About OCD
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground flex items-start gap-3">
                      <span className="text-indigo-600 font-bold">Q:</span>
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
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-background to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                You Don&apos;t Have to Keep Fighting Alone
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                OCD is exhausting. The constant thoughts, the endless rituals, the feeling that no one could 
                possibly understand. <strong>But OCD is treatable.</strong> With over 9,000 patients helped and 
                35+ years of experience, Dr. Shapiro can help you break free from the loop.
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
