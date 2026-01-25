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
  RefreshCw,
  Lock,
  Repeat,
  AlertTriangle,
  Sparkles,
  Target,
  Zap,
  Hand,
  Eye,
  HeartPulse,
  Scale,
  Home,
  Baby,
  XCircle,
  CheckCircle,
  Infinity,
  ShieldAlert,
  Flame,
  Droplets,
  Cross,
  HeartCrack,
  Activity,
  Syringe
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
        "name": "What's the difference between OCD and being a perfectionist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Perfectionism feels good—you take pride in being organized and thorough. OCD feels terrible—you're driven by fear and anxiety, not satisfaction. OCD rituals don't bring pleasure; they temporarily relieve unbearable anxiety."
        }
      },
      {
        "@type": "Question",
        "name": "Why does OCD require higher medication doses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OCD involves a different brain circuit than depression. The serotonin system in OCD is more resistant to change, so higher doses (often 2-3 times the typical antidepressant dose) are needed. This also means it takes longer to work—8-12 weeks rather than 4-6."
        }
      },
      {
        "@type": "Question",
        "name": "Can children have OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, OCD often begins in childhood or adolescence. About half of adults with OCD had symptoms before age 18. In children, symptoms may look different—they may not recognize their thoughts as irrational, and compulsions may involve parents (asking for reassurance, requiring parents to perform rituals)."
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
      description: "Fear of germs, dirt, chemicals, or 'contaminating' others. Compulsions often include excessive washing, cleaning, or avoidance of 'contaminated' objects or places.",
      examples: "Washing hands until raw, avoiding public restrooms, throwing away 'contaminated' items",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: ShieldAlert,
      title: "Harm OCD",
      description: "Intrusive thoughts about hurting yourself or others—despite having no desire to act on them. Often includes 'Pure O' where compulsions are mental (seeking reassurance, reviewing memories).",
      examples: "Fear of pushing someone off a ledge, stabbing a family member, causing an accident",
      color: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: AlertTriangle,
      title: "Sexual/Inappropriate Thought OCD",
      description: "Unwanted intrusive thoughts of a sexual nature, often involving taboo content. The person is horrified by these thoughts—that's what makes it OCD, not desire.",
      examples: "Intrusive thoughts about children, same-sex thoughts when heterosexual (or vice versa), incest fears",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Cross,
      title: "Religious/Scrupulosity OCD",
      description: "Obsessive fear of sinning, blasphemy, or offending God. Compulsions include excessive prayer, confession, or seeking reassurance from religious leaders.",
      examples: "Repeating prayers until 'perfect,' confessing minor 'sins' repeatedly, fear of unforgivable thoughts",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Scale,
      title: "Symmetry/'Just Right' OCD",
      description: "Intense need for things to be 'just right,' symmetrical, or in a specific order. Not about aesthetics—about relieving a sense of incompleteness or wrongness.",
      examples: "Arranging items until they 'feel right,' evening up touches, re-reading until it feels complete",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: HeartCrack,
      title: "Relationship OCD",
      description: "Obsessive doubt about your relationship or partner. Constant questioning: 'Do I really love them? Are they right for me? What if I'm attracted to someone else?'",
      examples: "Analyzing every interaction, comparing partner to others, seeking reassurance about feelings",
      color: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: HeartPulse,
      title: "Health Anxiety OCD",
      description: "Obsessive fear of having a serious illness despite medical reassurance. Compulsions include body checking, doctor visits, and internet searching.",
      examples: "Checking body for lumps repeatedly, researching symptoms for hours, multiple doctor visits",
      color: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  // OCD vs Being Particular
  const ocdVsParticular = [
    {
      feature: "How it feels",
      ocd: "Driven by fear, dread, and anxiety. Feels like you HAVE to do it or something terrible will happen.",
      particular: "Feels satisfying, enjoyable, or simply 'how I like things.'"
    },
    {
      feature: "Control",
      ocd: "Feels uncontrollable. You can't just 'stop.' Trying to resist causes intense distress.",
      particular: "You can skip it if needed without major distress."
    },
    {
      feature: "Time impact",
      ocd: "Takes up significant time (often 1+ hours daily) and interferes with life.",
      particular: "Takes minimal time and doesn't interfere with functioning."
    },
    {
      feature: "Thoughts",
      ocd: "Accompanied by intrusive, unwanted, disturbing thoughts you don't want to have.",
      particular: "Thoughts are in line with your values and personality."
    },
    {
      feature: "After completing",
      ocd: "Relief is temporary. Doubt returns quickly. 'Did I do it right?' Urge to repeat.",
      particular: "Feel satisfied and move on."
    }
  ];

  // Treatment options
  const medicationInfo = [
    {
      name: "SSRIs (First-Line)",
      drugs: "Prozac (fluoxetine), Luvox (fluvoxamine), Zoloft, Lexapro",
      description: "SSRIs are first-line treatment, but OCD requires HIGHER DOSES than depression—often 2-3 times higher. Prozac for depression might be 20mg; for OCD, we often need 60-80mg.",
      note: "Takes 8-12 weeks to see full effect (longer than depression)"
    },
    {
      name: "Clomipramine (Anafranil)",
      drugs: "Tricyclic antidepressant",
      description: "The oldest OCD medication and sometimes the most effective—but more side effects than SSRIs. Often reserved for when SSRIs don't work.",
      note: "Requires monitoring; more side effects but very effective"
    },
    {
      name: "Augmentation Strategies",
      drugs: "Low-dose antipsychotics (risperidone, aripiprazole)",
      description: "When SSRIs alone aren't enough, adding a low-dose antipsychotic can boost effectiveness. This doesn't mean you have psychosis—it's using a different mechanism.",
      note: "Used when SSRI response is partial"
    }
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
      description: "We look for everything—not just OCD, but anxiety, depression, ADHD, and other conditions that commonly co-occur."
    },
    {
      icon: Heart,
      title: "No Judgment",
      description: "We've heard it all. Whatever your intrusive thoughts, we won't be shocked. You can tell us the truth."
    }
  ];

  const faqs = [
    {
      question: "What's the difference between OCD and being a perfectionist?",
      answer: "Perfectionism feels good—you take pride in being organized and thorough. OCD feels terrible—you're driven by fear and anxiety, not satisfaction. OCD rituals don't bring pleasure; they temporarily relieve unbearable anxiety. When you can't do the ritual, a perfectionist feels annoyed; someone with OCD feels panicked."
    },
    {
      question: "I have terrible intrusive thoughts. Does that mean I'm a bad person?",
      answer: "Absolutely not. Intrusive thoughts in OCD are 'ego-dystonic'—they go AGAINST your values and desires. Having intrusive thoughts about harm means you're terrified of harm, not that you want to cause it. The very fact that these thoughts horrify you proves they don't represent who you are."
    },
    {
      question: "Why does OCD require higher medication doses?",
      answer: "OCD involves a different brain circuit than depression. The serotonin system in OCD is more resistant to change, so higher doses (often 2-3 times the typical antidepressant dose) are needed. This also means it takes longer to work—8-12 weeks rather than 4-6. Many people give up too soon or never receive an adequate dose."
    },
    {
      question: "Is ERP therapy really necessary? Can't medication alone work?",
      answer: "Medication alone helps about 40-60% of people. ERP alone helps about 50-60%. But combination treatment helps about 70-80%. More importantly, ERP teaches you skills that last after treatment ends—medication provides relief while you're taking it, but ERP can produce lasting change."
    },
    {
      question: "My child suddenly developed OCD after being sick. What happened?",
      answer: "This may be PANDAS (Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections). When strep throat triggers an autoimmune response affecting the brain, OCD and tics can appear suddenly. This requires specific evaluation and sometimes different treatment approaches."
    },
    {
      question: "How do I stop accommodating my family member's OCD?",
      answer: "Gradually, with their involvement and ideally with professional guidance. Suddenly stopping accommodation can feel cruel and damage your relationship. The goal is collaborative—you're on the same team against OCD, not against each other. We can help develop a plan."
    },
    {
      question: "Will I ever be 'cured' of OCD?",
      answer: "OCD is typically a chronic condition that's managed rather than cured. However, with proper treatment, most people achieve significant improvement—often 50-70% reduction in symptoms. Many people reach a point where OCD no longer controls their life, even if occasional thoughts still pop up."
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
        <meta name="keywords" content="OCD treatment Cincinnati, obsessive compulsive disorder Cincinnati, OCD psychiatrist Cincinnati, OCD medication, ERP therapy Cincinnati, intrusive thoughts treatment, OCD Northern Kentucky" />
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
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  You know the thoughts don&apos;t make sense. You know the rituals don&apos;t really protect you. 
                  But you can&apos;t stop. <strong>That&apos;s not weakness—that&apos;s OCD.</strong> And it&apos;s one of the most 
                  treatable conditions in psychiatry when you get the right help.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Comprehensive evaluation for OCD and related conditions</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Proper medication dosing (not underdosed)</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Coordination with ERP therapists</span>
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
                    Schedule an Evaluation
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
                      Maybe it starts with a thought that pops into your head—a horrible thought, something you&apos;d 
                      never want to think. Most people would brush it off. But your brain latches on. <strong>&quot;Why did 
                      I think that? What does it mean? What if I actually do it?&quot;</strong>
                    </p>
                    
                    <p>
                      Or maybe it&apos;s the doubt that won&apos;t go away. You checked the stove. You know you did. But 
                      what if you didn&apos;t? What if the house burns down? Better check again. And again. And again.
                    </p>
                    
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                      <p className="text-indigo-800">
                        <strong>Here&apos;s what nobody tells you about OCD:</strong> The thoughts themselves aren&apos;t the 
                        problem. Everyone has weird, disturbing thoughts sometimes. The problem is that your brain 
                        treats these thoughts as dangerous—as if thinking something could make it happen. And it 
                        demands certainty in a world where certainty doesn&apos;t exist.
                      </p>
                    </div>
                    
                    <p>
                      If this resonates, you&apos;re not crazy. You&apos;re not dangerous. You have a treatable brain 
                      condition. And you don&apos;t have to keep suffering.
                    </p>
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
                  Debunking Myths
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  What Is OCD Really?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-gradient-to-br from-red-50 to-background border-red-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      OCD Is NOT:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>Being organized or liking things clean</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>A personality quirk or preference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>Something you can &quot;just stop&quot; if you try hard enough</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>Rare (it affects 2-3% of the population)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>A sign that you&apos;re a bad person</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-background border-green-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      OCD IS:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>A neurobiological condition involving brain circuits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Characterized by UNWANTED thoughts and COMPELLED behaviors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Driven by anxiety, fear, and doubt—not preference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>One of the most treatable anxiety-related disorders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Something that responds to proper treatment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">The Two Parts of OCD:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="font-semibold text-indigo-800 mb-2">Obsessions</h4>
                      <p className="text-indigo-700 text-sm mb-2">
                        Intrusive, unwanted thoughts, images, or urges that cause significant anxiety or distress. 
                        You don&apos;t want these thoughts—they force themselves on you.
                      </p>
                      <p className="text-indigo-600 text-xs italic">
                        Examples: &quot;What if I hurt someone?&quot; &quot;What if I&apos;m contaminated?&quot; &quot;What if I left the door unlocked?&quot;
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Compulsions</h4>
                      <p className="text-purple-700 text-sm mb-2">
                        Repetitive behaviors or mental acts performed to reduce anxiety or prevent a feared outcome. 
                        They provide temporary relief but strengthen OCD long-term.
                      </p>
                      <p className="text-purple-600 text-xs italic">
                        Examples: Washing, checking, counting, seeking reassurance, mental reviewing, avoiding
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Callout Box */}
              <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-800 mb-2">OCD Is Not a Personality Quirk</h3>
                    <p className="text-indigo-700 leading-relaxed">
                      OCD is a neurobiological condition—your brain&apos;s &quot;error detection&quot; system is stuck in overdrive. 
                      It&apos;s not about being neat or organized. It&apos;s about being trapped in a loop of fear and doubt. 
                      With <strong>over 9,000 patients treated and 35+ years of experience</strong>, Dr. Shapiro provides 
                      comprehensive evaluation and evidence-based treatment that works.
                    </p>
                  </div>
                </div>
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
                OCD takes many forms. You might have one type or several. All are driven by the same underlying 
                mechanism—and all respond to the same treatments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {ocdSubtypes.map((subtype, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className={`w-12 h-12 ${subtype.color} rounded-full flex items-center justify-center mb-3`}>
                      <subtype.icon className={`w-6 h-6 ${subtype.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg">{subtype.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{subtype.description}</p>
                    <p className="text-xs text-foreground/70 italic">{subtype.examples}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto mt-8">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-800 mb-2">About &quot;Pure O&quot;</h4>
                <p className="text-amber-700 text-sm">
                  &quot;Pure O&quot; refers to OCD that seems to be &quot;purely obsessional&quot;—without visible compulsions. 
                  But compulsions are always present; they&apos;re just mental (reviewing memories, seeking mental 
                  reassurance, analyzing). Pure O often involves harm, sexual, or religious obsessions and can be 
                  especially isolating because sufferers are afraid to tell anyone their thoughts.
                </p>
              </div>
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
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Many people say &quot;I&apos;m so OCD&quot; when they mean they like things organized. Here&apos;s how to tell the difference.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Card className="bg-card border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Aspect</th>
                        <th className="px-6 py-4 text-left font-semibold text-indigo-700">OCD</th>
                        <th className="px-6 py-4 text-left font-semibold text-green-700">Being Particular</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ocdVsParticular.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                          <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                          <td className="px-6 py-4 text-muted-foreground text-sm">{row.ocd}</td>
                          <td className="px-6 py-4 text-muted-foreground text-sm">{row.particular}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
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
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-indigo-700">
                      <AlertCircle className="w-5 h-5" />
                      The Error Detection System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your brain has a built-in &quot;error detection&quot; system that alerts you when something might be 
                      wrong. In OCD, this system is hyperactive. It sends &quot;danger!&quot; signals even when there&apos;s 
                      no real threat. <strong>It&apos;s like a smoke alarm that goes off when you make toast.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-purple-700">
                      <Repeat className="w-5 h-5" />
                      The OCD Cycle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Obsession → Anxiety → Compulsion → Brief relief → Obsession returns stronger. 
                      <strong> Each time you do a compulsion, you teach your brain that the threat was real 
                      and the compulsion saved you.</strong> This strengthens the cycle.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-blue-700">
                      <Zap className="w-5 h-5" />
                      Brain Circuits Involved
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      OCD involves overactivity in the circuit connecting the orbitofrontal cortex (decision-making), 
                      caudate nucleus (habit formation), and thalamus (relay station). <strong>These areas get 
                      &quot;stuck&quot; in a loop, unable to let go of concerns.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-green-700">
                      <Target className="w-5 h-5" />
                      Why Compulsions Don&apos;t Work
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Compulsions provide temporary relief but prevent your brain from learning that the feared 
                      outcome won&apos;t happen. <strong>You never get to experience that the anxiety would have 
                      passed on its own.</strong> So the doubt keeps coming back.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800 text-center">
                  <strong>The good news:</strong> Brain imaging studies show that effective treatment (ERP and/or 
                  medication) actually normalizes these brain circuits. Your brain can change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment That Actually Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Treatment That Actually Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                OCD is highly treatable with the right approaches. Most people achieve significant improvement.
              </p>
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
                      <CardTitle className="text-2xl">ERP Therapy (The Gold Standard)</CardTitle>
                      <p className="text-muted-foreground">Exposure and Response Prevention</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground">
                    ERP is the most effective therapy for OCD—more effective than any other form of talk therapy. 
                    It works by gradually exposing you to feared situations while preventing the compulsive response.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">How It Works:</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Gradually face fears without doing compulsions</li>
                        <li>• Learn that anxiety decreases naturally over time</li>
                        <li>• Discover that feared outcomes don&apos;t happen</li>
                        <li>• Build tolerance for uncertainty</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Why It Works:</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Breaks the obsession-compulsion cycle</li>
                        <li>• Teaches your brain new associations</li>
                        <li>• Produces lasting change (not just while in treatment)</li>
                        <li>• You control the pace—it&apos;s collaborative</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Our Role:</strong> Dr. Shapiro can coordinate with ERP therapists in the Cincinnati 
                      area, manage medication alongside therapy, and help you find the right therapist. 
                      Combination treatment (ERP + medication) is often the most effective approach.
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
                    <div>
                      <CardTitle className="text-2xl">Medication (Why OCD Requires Higher Doses)</CardTitle>
                      <p className="text-muted-foreground">Often underdosed—we get it right</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground mb-4">
                    A critical fact many doctors miss: <strong>OCD requires higher medication doses and longer 
                    treatment duration than depression.</strong> Many people fail treatment simply because they 
                    never received an adequate dose.
                  </p>
                  
                  <div className="space-y-4">
                    {medicationInfo.map((med, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-blue-800">{med.name}</h4>
                        </div>
                        <p className="text-blue-700 text-sm mb-2">{med.drugs}</p>
                        <p className="text-blue-700 text-sm mb-2">{med.description}</p>
                        <p className="text-blue-600 text-xs italic">{med.note}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Treatment-Resistant Options */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl">When Standard Treatment Isn&apos;t Enough</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    About 20-30% of people don&apos;t respond adequately to first-line treatments. Options include:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Medication Strategies</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Switching to clomipramine</li>
                        <li>• Adding antipsychotic augmentation</li>
                        <li>• Combining SSRIs with clomipramine (carefully)</li>
                        <li>• IV ketamine (in specialized settings)</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Intensive Options</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Intensive outpatient ERP programs</li>
                        <li>• Residential OCD treatment</li>
                        <li>• TMS (Transcranial Magnetic Stimulation)</li>
                        <li>• Deep brain stimulation (rare, severe cases)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* OCD in Children & Teenagers */}
        <section className="py-16 bg-muted/30">
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
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>May not recognize thoughts as irrational (&quot;This is just how I have to do things&quot;)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Often involves parents in rituals (seeking reassurance, requiring parents to check things)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>May manifest as tantrums or meltdowns when rituals are interrupted</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>School avoidance common (OCD may be triggered by school situations)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Homework takes hours due to perfectionism or checking</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700">Treatment Approach for Kids</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>ERP adapted for children (often uses games, rewards, and family involvement)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Family training to reduce accommodation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>School consultation when needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Medication if ERP alone isn&apos;t enough (SSRIs are first-line)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-700 flex items-center gap-2">
                    <Syringe className="w-5 h-5" />
                    About PANDAS/PANS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800 mb-4">
                    <strong>PANDAS</strong> (Pediatric Autoimmune Neuropsychiatric Disorders Associated with 
                    Streptococcal Infections) occurs when strep throat triggers an autoimmune response affecting 
                    the brain, causing sudden-onset OCD and/or tics.
                  </p>
                  <div className="bg-amber-100 rounded-lg p-4">
                    <p className="text-amber-800 font-semibold mb-2">Signs that suggest PANDAS:</p>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>• Sudden, dramatic onset of OCD symptoms (almost overnight)</li>
                      <li>• Recent strep infection (or exposure)</li>
                      <li>• Accompanying symptoms: tics, anxiety, mood changes, regression, urinary symptoms</li>
                      <li>• Symptoms that wax and wane with infections</li>
                    </ul>
                  </div>
                  <p className="text-amber-700 text-sm mt-4">
                    PANDAS requires specific evaluation and may need different treatment approaches including 
                    antibiotics and sometimes immunotherapy. We can help evaluate and coordinate care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Family's Role */}
        <section className="py-16">
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
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Understanding &quot;Accommodation&quot;</h3>
                  <p className="text-foreground mb-4">
                    Families often get pulled into OCD without realizing it. This is called &quot;accommodation&quot;—when 
                    family members participate in rituals or change their behavior to reduce the person&apos;s anxiety.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Common Accommodations:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Providing reassurance (&quot;Yes, you locked the door&quot;)</li>
                        <li>• Doing things for them to avoid triggering OCD</li>
                        <li>• Participating in rituals (checking together)</li>
                        <li>• Changing family routines around OCD</li>
                        <li>• Avoiding topics or activities that trigger obsessions</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Why It&apos;s a Problem:</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Short-term relief, long-term worse</li>
                        <li>• Prevents the person from learning they can handle anxiety</li>
                        <li>• Reinforces OCD&apos;s belief that danger is real</li>
                        <li>• Can lead to family exhaustion and resentment</li>
                        <li>• Makes treatment harder</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">How to Help (The Right Way):</h4>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• <strong>Label it:</strong> &quot;That sounds like OCD talking&quot; (not &quot;You&apos;re being ridiculous&quot;)</li>
                      <li>• <strong>Express confidence:</strong> &quot;I know this is hard, but I believe you can handle the anxiety&quot;</li>
                      <li>• <strong>Reduce accommodation gradually:</strong> Work with a therapist on a plan</li>
                      <li>• <strong>Support treatment:</strong> Encourage ERP practice, attend family sessions</li>
                      <li>• <strong>Take care of yourself:</strong> Living with someone with OCD is exhausting</li>
                    </ul>
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
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-indigo-700">For Adults</CardTitle>
                      <p className="text-sm text-muted-foreground">Approximately 2 Hours</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Your evaluation begins with a <strong>one-hour session</strong> with our licensed professional counselor, 
                    followed by approximately <strong>one hour</strong> with Dr. Shapiro.
                  </p>
                  
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <p className="text-indigo-800 font-semibold mb-2">What We Assess:</p>
                    <ul className="text-indigo-700 text-sm space-y-1">
                      <li>• Detailed history of obsessions and compulsions</li>
                      <li>• Impact on daily functioning</li>
                      <li>• Co-occurring conditions (depression, anxiety, ADHD common)</li>
                      <li>• Previous treatment attempts</li>
                      <li>• Family history</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      <strong>You can tell us everything.</strong> We&apos;ve heard every type of intrusive thought. 
                      Whatever you&apos;re afraid to say, we won&apos;t judge. We need the full picture to help you.
                    </p>
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
                    with Dr. Shapiro.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-semibold mb-2">We Look For Everything:</p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• OCD symptoms (which may look different than adult OCD)</li>
                      <li>• PANDAS/PANS indicators</li>
                      <li>• Co-occurring ADHD, anxiety, learning issues</li>
                      <li>• Family accommodation patterns</li>
                      <li>• School impact</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-amber-800 text-sm">
                      <strong>Parents:</strong> Please bring any prior evaluations, school records, and notes about 
                      when symptoms started and what makes them better or worse.
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
