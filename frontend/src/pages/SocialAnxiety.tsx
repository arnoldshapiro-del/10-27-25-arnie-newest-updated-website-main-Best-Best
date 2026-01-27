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
  MessageCircle,
  Phone,
  MapPin,
  AlertCircle,
  ChevronRight,
  Shield,
  Pill,
  Calendar,
  Eye,
  EyeOff,
  UserX,
  Mic,
  School,
  Building2,
  Coffee,
  PartyPopper,
  HandshakeIcon,
  Presentation,
  Thermometer,
  Droplets,
  HeartPulse,
  BrainCircuit,
  Target,
  XCircle,
  CheckCircle,
  TrendingDown,
  Sparkles,
  Zap,
  RefreshCw,
  UserCheck,
  ClipboardList,
  Lightbulb,
  Video,
  ArrowDown,
  Wine,
  GraduationCap,
  Baby,
  Puzzle,
  AlertTriangle,
  BookOpen,
  Stethoscope
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Social Anxiety Page Schema
const socialAnxietySchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Social Anxiety Treatment in Cincinnati | Social Phobia Psychiatrist",
    "description": "Expert social anxiety treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in social phobia treatment including CBT and medication. 35+ years experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Social Anxiety Disorder",
      "alternateName": ["Social Phobia", "Social Anxiety", "Performance Anxiety"],
      "signOrSymptom": [
        "Intense fear of social situations",
        "Fear of being judged or humiliated",
        "Avoidance of social interactions",
        "Physical symptoms in social settings",
        "Anticipatory anxiety before events"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about social anxiety symptoms, diagnosis, and treatment options including CBT and medication management"
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
        "name": "Is social anxiety the same as being introverted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Introversion (preferring quieter environments, recharging alone) is different from social anxiety (fear of judgment causing avoidance and distress). You can be introverted without social anxiety, or extroverted with social anxiety."
        }
      },
      {
        "@type": "Question",
        "name": "How long does social anxiety treatment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most people see significant improvement within 3-6 months of combined treatment. Medication typically takes 8-12 weeks at effective dose. CBT usually involves 12-16 sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Will I need medication forever for social anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many people can eventually taper off medication after 12-24 months of remission, especially if they've developed strong CBT skills. However, some people do better with long-term medication, and that's okay too."
        }
      }
    ]
  }
];

export default function SocialAnxiety() {
  // Common trigger situations
  const triggerSituations = [
    "Public speaking or presentations",
    "Meeting new people",
    "Being the center of attention",
    "Eating or drinking in front of others",
    "Making phone calls",
    "Expressing opinions in groups",
    "Attending parties or social gatherings",
    "Dating or romantic interactions",
    "Being watched while working",
    "Talking to authority figures"
  ];

  // Physical symptoms
  const physicalSymptoms = [
    { symptom: "Blushing or flushing", detail: "(and fear of blushing)" },
    { symptom: "Excessive sweating", detail: "(especially palms, underarms)" },
    { symptom: "Trembling or shaking", detail: "(hands, voice)" },
    { symptom: "Racing heart or palpitations", detail: "" },
    { symptom: "Shortness of breath or tight chest", detail: "" },
    { symptom: "Nausea or stomach upset", detail: "" },
    { symptom: "Dry mouth or difficulty swallowing", detail: "" },
    { symptom: "Muscle tension", detail: "" },
    { symptom: "Mind going blank", detail: "" }
  ];

  // Cognitive symptoms
  const cognitiveSymptoms = [
    { symptom: "Negative predictions", detail: "(\"I'll say something stupid\")" },
    { symptom: "Mind-reading", detail: "(\"They think I'm boring\")" },
    { symptom: "Fortune-telling", detail: "(\"This will be a disaster\")" },
    { symptom: "Spotlight effect", detail: "(\"Everyone is watching me\")" },
    { symptom: "All-or-nothing thinking", detail: "(\"If I blush, I'm ruined\")" },
    { symptom: "Post-event rumination", detail: "(replaying conversations for hours/days)" }
  ];

  // Avoidance behaviors
  const avoidanceBehaviors = [
    "Declining invitations",
    "Choosing careers that minimize social exposure",
    "Not asking questions in meetings",
    "Arriving late/leaving early to avoid small talk",
    "Using alcohol to \"loosen up\""
  ];

  // Safety behaviors
  const safetyBehaviors = [
    "Rehearsing what you'll say",
    "Gripping objects tightly to hide trembling",
    "Avoiding eye contact",
    "Speaking quickly to \"get it over with\"",
    "Standing near exits",
    "Wearing makeup/clothing to hide blushing",
    "Bringing a \"safe person\" to social events",
    "Staying on your phone to avoid interaction"
  ];

  // Vicious cycle steps
  const viciousCycle = [
    { step: "1", title: "Anticipate", description: "Anticipate a social situation → Experience dread and anxiety" },
    { step: "2", title: "Respond", description: "Either avoid entirely (reinforcing fear) OR enter with high anxiety" },
    { step: "3", title: "Cope", description: "Use \"safety behaviors\" (avoid eye contact, rehearse scripts, grip glass)" },
    { step: "4", title: "Ruminate", description: "Engage in \"post-event processing\"—replaying every moment looking for mistakes" },
    { step: "5", title: "Conclude", description: "Conclude you \"failed\" → Dread the next situation even more" }
  ];

  // Normal vs Social Anxiety comparison
  const normalVsSocialAnxiety = {
    normal: [
      "Temporary discomfort that passes once you settle in",
      "Doesn't significantly interfere with your life",
      "You push through and feel fine afterward",
      "Occasional, situation-specific"
    ],
    socialAnxiety: [
      "Intense fear that feels overwhelming, not just \"butterflies\"",
      "Causes significant avoidance of social situations",
      "Leads to hours of anticipatory dread beforehand and rumination afterward",
      "Interferes with career, relationships, or daily functioning",
      "Persistent pattern lasting months or years"
    ]
  };

  // Medication options
  const medications = [
    { name: "Sertraline (Zoloft)", dose: "100-200mg (up to 300mg)", notes: "Good all-around choice" },
    { name: "Escitalopram (Lexapro)", dose: "20mg (up to 30-40mg)", notes: "Very clean side effect profile" },
    { name: "Venlafaxine XR (Effexor)", dose: "150-225mg", notes: "Adds norepinephrine effect; helpful for low energy/motivation" },
    { name: "Paroxetine (Paxil)", dose: "40-60mg", notes: "Effective but harder to stop" }
  ];

  // CBT components
  const cbtComponents = [
    {
      title: "Identify safety behaviors",
      description: "What are you doing to \"stay safe\"? Rehearsing? Avoiding eye contact? These must go."
    },
    {
      title: "Shift attention outward",
      description: "Social anxiety creates intense self-focus (\"How do I look? What are they thinking?\"). We train you to focus externally."
    },
    {
      title: "Behavioral experiments",
      description: "Not just \"exposure\" but testing specific predictions. Prediction: \"If I pause while speaking, everyone will think I'm stupid.\" Experiment: Deliberately pause. Observe the actual reaction."
    },
    {
      title: "Video feedback",
      description: "One of the most powerful techniques. We record you giving a speech. You predict what you'll look like. Then we watch together. Nearly everyone is shocked that they look far more composed than they felt."
    },
    {
      title: "Drop the post-event rumination",
      description: "That mental replay session after every social interaction? It's a compulsion that maintains anxiety. We work on letting go without reviewing."
    }
  ];

  // School accommodations
  const schoolAccommodations = [
    "\"No cold-calling\" rule—student presents only with 24-hour notice",
    "\"Safe pass\" to leave class briefly without asking permission",
    "Option to give presentations to teacher privately or pre-recorded",
    "Designated \"safe person\" (counselor) to check in with"
  ];

  // FAQs
  const faqs = [
    {
      question: "I function at work but struggle in personal social situations. Is that still social anxiety?",
      answer: "Yes. Social anxiety can be situation-specific. Some people are fine in structured professional settings (where there are clear roles and scripts) but struggle with unstructured social situations (parties, dating) where \"rules\" are unclear. We can target treatment to your specific problem areas."
    },
    {
      question: "I've always been \"shy.\" Isn't this just my personality?",
      answer: "Introversion (preferring quieter environments, recharging alone) is different from social anxiety (fear of judgment causing avoidance and distress). You can be introverted without social anxiety, or extroverted with social anxiety. If your \"shyness\" causes significant distress or holds you back from things you want, it's worth evaluating."
    },
    {
      question: "Will medication make me feel \"drugged\" or change my personality?",
      answer: "The goal is to reduce the excessive anxiety, not to change who you are. Most patients report feeling \"more like themselves\"—able to engage without the constant internal alarm. If any medication makes you feel unlike yourself, we adjust."
    },
    {
      question: "I use alcohol to cope with social situations. Is that a problem?",
      answer: "Alcohol provides immediate relief (GABAergic effect), which is why ~20% of people with social anxiety self-medicate this way. But alcohol causes a glutamate rebound the next day—meaning your baseline anxiety is actually HIGHER the morning after drinking. We call it \"hangxiety.\" This creates a cycle that worsens both social anxiety and alcohol dependence. If alcohol is your coping mechanism, we address both issues together."
    },
    {
      question: "How long does treatment take?",
      answer: "Most people see significant improvement within 3-6 months of combined treatment. Medication typically takes 8-12 weeks at effective dose. CBT usually involves 12-16 sessions. But \"improvement\" doesn't mean \"cure\"—we aim for you to function fully even if some nervousness remains."
    },
    {
      question: "Will I need medication forever?",
      answer: "Many people can eventually taper off medication after 12-24 months of remission, especially if they've developed strong CBT skills. However, some people do better with long-term medication, and that's okay too. We make that decision together based on your response and preferences."
    },
    {
      question: "My child won't go to school. What do I do?",
      answer: "School refusal is a psychiatric emergency—every day of avoidance makes anxiety worse. Don't let the school put your child on \"homebound instruction\" (this reinforces avoidance). Instead, we work on graduated return with accommodations. Quick intervention is key."
    },
    {
      question: "I've tried therapy before and it didn't work.",
      answer: "Most general therapists aren't trained in the specific techniques that work for social anxiety. Generic \"talk therapy\" about your childhood or feelings doesn't address the behavioral maintenance of social anxiety. If you haven't done structured CBT with behavioral experiments, attention retraining, and video feedback from a specialist, you haven't tried what actually works."
    }
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has extensive experience in anxiety disorders including social phobia, developed over 35+ years of practice."
    },
    {
      icon: Brain,
      title: "Specialist Knowledge",
      description: "We use evidence-based protocols (Clark & Wells model) specifically designed for social anxiety—not generic anxiety treatment."
    },
    {
      icon: Pill,
      title: "Proper Medication Dosing",
      description: "Social anxiety often requires higher doses and longer timelines than depression. We know the evidence and dose accordingly."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "Your questions are answered almost always the same day. Anxiety doesn't wait, and neither should you."
    },
    {
      icon: Shield,
      title: "Comprehensive Evaluation",
      description: "We assess for everything—social anxiety, autism features, avoidant personality, depression—to ensure accurate diagnosis."
    },
    {
      icon: Heart,
      title: "We Understand the Irony",
      description: "Seeing a psychiatrist can trigger social anxiety. We get it. We'll move at your pace and never judge."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Social Anxiety Treatment in Cincinnati | Social Phobia Psychiatrist | Dr. Shapiro</title>
        <meta name="description" content="Expert social anxiety treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in social phobia including CBT and medication management. 35+ years experience. Call (859) 341-7453." />
        <meta name="keywords" content="social anxiety treatment Cincinnati, social anxiety psychiatrist Cincinnati, social phobia treatment Ohio, social anxiety disorder specialist, performance anxiety treatment, fear of public speaking Cincinnati, social anxiety medication, CBT for social anxiety Cincinnati, blushing treatment psychiatrist, social anxiety doctor Fort Wright KY" />
        <link rel="canonical" href={`${window.location.origin}/social-anxiety`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Social Anxiety Treatment in Cincinnati | Social Phobia Psychiatrist" />
        <meta property="og:description" content="Expert social anxiety treatment including CBT and medication management. Board-certified psychiatrist with 35+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/social-anxiety`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(socialAnxietySchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-cyan-50/50 py-16 lg:py-24">
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
                  <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 border-cyan-200">
                    <Users className="w-4 h-4 mr-1" />
                    Social Anxiety Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <UserCheck className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Social Anxiety Treatment in{" "}
                  <span className="text-primary">Cincinnati</span>
                </h1>
                
                <p className="text-2xl text-cyan-700 font-semibold">
                  When Being Around People Feels Like a Threat
                </p>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Your heart races before every meeting. Your mind goes blank when all eyes turn to you. 
                    You rehearse conversations obsessively, then replay every word afterward, searching for mistakes. 
                    You&apos;ve declined promotions because they required presentations. You&apos;ve turned down invitations 
                    because &quot;what if I have nothing to say?&quot;
                  </p>
                  <p>
                    You know it doesn&apos;t make logical sense. You know other people aren&apos;t analyzing your every move. 
                    But knowing doesn&apos;t stop the dread.
                  </p>
                  <p>
                    This isn&apos;t being &quot;shy.&quot; This isn&apos;t being &quot;introverted.&quot; <strong>This is Social Anxiety 
                    Disorder—and it&apos;s stealing opportunities you deserve.</strong>
                  </p>
                  <p className="text-primary font-medium">
                    The good news: social anxiety is highly treatable. With the right approach, most people 
                    achieve significant improvement and reclaim their ability to connect, perform, and live fully.
                  </p>
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
                    asChild
                  >
                    <a href="tel:+18593417453">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (859) 341-7453
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Supportive social anxiety treatment consultation" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Box - Social Anxiety Is Not a Character Flaw */}
        <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Social Anxiety Is Not a Character Flaw
              </h2>
              <div className="text-lg lg:text-xl leading-relaxed opacity-95 space-y-4">
                <p>
                  Social anxiety disorder is a neurobiological condition where your brain&apos;s threat-detection 
                  system fires inappropriately during social situations. The prefrontal cortex can&apos;t effectively 
                  tell the amygdala &quot;this isn&apos;t dangerous.&quot;
                </p>
                <p>
                  It&apos;s not weakness. It&apos;s not poor social skills. It&apos;s not a fundamental defect in who you are.
                </p>
                <p>
                  With proper treatment—structured CBT and appropriate medication—most people achieve dramatic 
                  improvement and can reclaim their lives from social anxiety.
                </p>
                <p className="font-semibold">
                  The tragedy of social anxiety isn&apos;t the disorder itself—it&apos;s the decades people lose to 
                  avoidance before seeking help.
                </p>
              </div>
              <Button 
                size="lg" 
                className="mt-6 bg-white text-cyan-700 hover:bg-gray-100"
                onClick={() => window.location.href = '/schedule'}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Your Evaluation
              </Button>
            </div>
          </div>
        </section>

        {/* Section 1: More Than Just Shyness */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Heart className="w-4 h-4 mr-1" />
                  Understanding Your Experience
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  More Than Just Shyness
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground leading-relaxed">
                    <p className="text-lg">
                      Everyone feels nervous sometimes—before a job interview, on a first date, when speaking to a 
                      large crowd. That&apos;s normal. Social anxiety disorder is something different.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Normal Nervousness
                        </h4>
                        <ul className="space-y-2">
                          {normalVsSocialAnxiety.normal.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-lg p-6">
                        <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          Social Anxiety Disorder
                        </h4>
                        <ul className="space-y-2">
                          {normalVsSocialAnxiety.socialAnxiety.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-red-700">
                              <XCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                      <p className="text-amber-900">
                        <strong>The difference isn&apos;t how &quot;outgoing&quot; you are.</strong> Many people with social 
                        anxiety appear confident on the surface—they&apos;ve just learned to hide the internal storm. 
                        Some are even performers or public figures. The defining feature is the degree of distress 
                        and interference, not your personality type.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 2: What Is Social Anxiety Disorder? */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 border-cyan-200 mb-4">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Clinical Definition
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  What Is Social Anxiety Disorder?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Social Anxiety Disorder (also called Social Phobia) is characterized by intense fear of 
                  social situations where you might be scrutinized, judged, or embarrassed.
                </p>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <div className="bg-red-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-red-900 mb-2">The Core Fear</h3>
                    <p className="text-red-800 text-lg">
                      That you will do or say something that reveals your inadequacy, and others will think less of you.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">Common Trigger Situations</h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-8">
                    {triggerSituations.map((situation, index) => (
                      <div key={index} className="flex items-center gap-2 text-foreground">
                        <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{situation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* The Vicious Cycle */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-red-500" />
                    The Vicious Cycle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {viciousCycle.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-red-700 font-bold">{item.step}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800">
                      <strong>This cycle is self-perpetuating.</strong> Each avoidance &quot;teaches&quot; your brain the 
                      situation was genuinely dangerous. Each use of a safety behavior prevents you from learning 
                      you&apos;d be okay without it.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Signs You Might Have Social Anxiety */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200 mb-4">
                  <ClipboardList className="w-4 h-4 mr-1" />
                  Recognize the Signs
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Signs You Might Have Social Anxiety
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {/* Physical Symptoms */}
                <Card className="bg-card border-border">
                  <CardHeader className="bg-gradient-to-r from-red-500/10 to-red-600/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <HeartPulse className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Physical Symptoms</CardTitle>
                        <p className="text-sm text-muted-foreground">The Body Alarm</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {physicalSymptoms.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Thermometer className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-foreground">
                            {item.symptom} <span className="text-muted-foreground text-sm">{item.detail}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Cognitive Symptoms */}
                <Card className="bg-card border-border">
                  <CardHeader className="bg-gradient-to-r from-purple-500/10 to-purple-600/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <BrainCircuit className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Cognitive Symptoms</CardTitle>
                        <p className="text-sm text-muted-foreground">The Mental Storm</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {cognitiveSymptoms.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Brain className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span className="text-foreground">
                            {item.symptom} <span className="text-muted-foreground text-sm">{item.detail}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Behavioral Symptoms */}
                <Card className="bg-card border-border">
                  <CardHeader className="bg-gradient-to-r from-orange-500/10 to-orange-600/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <EyeOff className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Behavioral Symptoms</CardTitle>
                        <p className="text-sm text-muted-foreground">The Escape Patterns</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-2">Avoidance:</h5>
                    <ul className="space-y-1 mb-4">
                      {avoidanceBehaviors.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <UserX className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <h5 className="font-semibold text-foreground mb-2">Safety Behaviors:</h5>
                    <ul className="space-y-1">
                      {safetyBehaviors.slice(0, 4).map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Shield className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Generalized vs. Performance-Only */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  <Target className="w-4 h-4 mr-1" />
                  Subtypes
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Generalized vs. Performance-Only Social Anxiety
                </h2>
                <p className="text-lg text-muted-foreground">
                  Social anxiety exists on a spectrum.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-blue-50 border-blue-200 border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">Generalized Social Anxiety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 mb-4">Fear extends to most social situations:</p>
                    <ul className="space-y-2 mb-4">
                      {["Conversations with acquaintances or strangers", "Social gatherings of any size", 
                        "Interactions at work, school, stores", "Dating and friendships", 
                        "Any situation where judgment might occur"].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-blue-700">
                          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-100 rounded p-3">
                      <p className="text-blue-900 text-sm">
                        <strong>Treatment approach:</strong> Requires comprehensive intervention—medication 
                        plus therapy targeting multiple situations.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200 border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-900">Performance-Only Social Anxiety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800 mb-4">Fear is limited to specific performance situations:</p>
                    <ul className="space-y-2 mb-4">
                      {["Public speaking", "Performing music or sports", "Giving presentations", "Leading meetings"].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-green-700">
                          <Presentation className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-green-700 text-sm mb-4">
                      Between performances, the person functions well socially. They can chat at parties 
                      but freeze when asked to give a toast.
                    </p>
                    <div className="bg-green-100 rounded p-3">
                      <p className="text-green-900 text-sm">
                        <strong>Treatment approach:</strong> Often responds well to <strong>beta-blockers</strong> (propranolol 10-40mg) 
                        taken 1 hour before the event—blocks physical symptoms without affecting thinking.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-bold text-amber-900 mb-2">Important Note on Beta-Blockers:</h4>
                <p className="text-amber-800">
                  Beta-blockers help the physical symptoms but don&apos;t address the underlying anxiety. 
                  If you also have generalized social anxiety, you&apos;ll need broader treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: How Social Anxiety Affects Your Brain */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-background to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                  <BrainCircuit className="w-4 h-4 mr-1" />
                  The Science
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  How Social Anxiety Affects Your Brain
                </h2>
                <p className="text-lg text-muted-foreground">
                  Your brain has two systems that should work in balance:
                </p>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-red-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        The Alarm System (Amygdala)
                      </h3>
                      <p className="text-red-800">
                        Detects threats and triggers the fight-or-flight response.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-green-900 mb-2 flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        The Rational System (Prefrontal Cortex)
                      </h3>
                      <p className="text-green-800">
                        Evaluates whether the threat is real and tells the alarm system to stand down.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">What Goes Wrong in Social Anxiety:</h3>
                  <ul className="space-y-4 mb-6">
                    {[
                      { title: "Hyperactive amygdala", detail: "Your brain's alarm fires at \"social threat\" signals that aren't actually dangerous—a glance, a pause in conversation, a facial expression" },
                      { title: "Weak top-down regulation", detail: "The prefrontal cortex (your \"rational brain\") can't effectively tell the amygdala to calm down" },
                      { title: "Glutamate/GABA imbalance", detail: "Too much excitatory signaling (glutamate) and not enough inhibitory signaling (GABA) keeps you in \"alert mode\"" },
                      { title: "Insula hyperactivity", detail: "This brain region monitors your body. In social anxiety, it's hypersensitive—you feel your heart pounding louder than it actually is" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">{item.title}:</strong>
                          <span className="text-muted-foreground ml-1">{item.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-2">What This Means:</h4>
                    <ul className="space-y-1 text-green-800">
                      <li>• This is biology, not weakness</li>
                      <li>• Your brain can change (neuroplasticity)</li>
                      <li>• Treatment works by rebalancing these systems—medication dampens the amygdala while therapy strengthens prefrontal control</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 6: The Avoidance Trap */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200 mb-4">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  The Hidden Trap
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  The Avoidance Trap
                </h2>
                <p className="text-lg text-muted-foreground">
                  Avoidance feels protective but is actually the fuel that keeps social anxiety burning.
                </p>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">The Logic Seems Sound:</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2 italic text-muted-foreground">
                      <p>&quot;If I don&apos;t go to the party, I can&apos;t embarrass myself.&quot;</p>
                      <p>&quot;If I decline the promotion, I won&apos;t have to give presentations.&quot;</p>
                      <p>&quot;If I stay quiet in meetings, no one can judge my ideas.&quot;</p>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-3">The Hidden Cost:</h3>
                    <p className="text-red-800 text-lg">
                      Every avoidance confirms to your brain that the situation was genuinely dangerous. 
                      You never get to learn that you could have handled it. <strong>Your world gets smaller and smaller.</strong>
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Safety Behaviors Are &quot;Hidden Avoidance&quot;:</h3>
                    <p className="text-muted-foreground mb-4">
                      Even when you DO enter social situations, safety behaviors prevent real learning:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "If you grip the glass tightly to hide trembling, you never learn that slight trembling doesn't cause rejection",
                        "If you rehearse every sentence, you never learn you can handle spontaneous conversation",
                        "If you avoid eye contact, you never learn that connection doesn't lead to judgment"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-foreground">
                          <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-2">The Treatment Implication:</h4>
                    <p className="text-green-800">
                      Effective therapy isn&apos;t just about reducing anxiety—it&apos;s about dropping the safety 
                      behaviors and learning that you can handle whatever happens. This is uncomfortable in 
                      the short term but liberating in the long term.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 7: Treatment That Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Evidence-Based Solutions
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Treatment That Works
                </h2>
              </div>
              
              {/* CBT Section */}
              <Card className="bg-card border-border mb-8">
                <CardHeader className="bg-gradient-to-r from-green-500/10 to-teal-500/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Cognitive Behavioral Therapy: The Gold Standard</CardTitle>
                      <p className="text-green-700">The Clark & Wells Model (superior to generic CBT for social anxiety)</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {cbtComponents.map((component, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-700 font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{component.title}</h4>
                          <p className="text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Medication Section */}
              <Card className="bg-card border-border mb-8">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Pill className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Medication Options</CardTitle>
                      <p className="text-blue-700">First-line: SSRIs/SNRIs</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-semibold text-foreground">Medication</th>
                          <th className="text-left py-2 font-semibold text-foreground">Target Dose</th>
                          <th className="text-left py-2 font-semibold text-foreground">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {medications.map((med, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 text-foreground font-medium">{med.name}</td>
                            <td className="py-3 text-muted-foreground">{med.dose}</td>
                            <td className="py-3 text-muted-foreground">{med.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <p className="text-amber-800">
                      <strong>Important:</strong> Unlike depression, social anxiety often requires 
                      <strong> higher doses</strong> and <strong>longer timelines</strong> (8-12 weeks at full dose) 
                      to see significant improvement.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">For Performance Anxiety:</h4>
                      <p className="text-green-800 text-sm">
                        <strong>Propranolol (10-40mg):</strong> Blocks physical symptoms. Take 1 hour before the event. 
                        Does not affect cognition.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Augmentation Options:</h4>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Pregabalin (Lyrica): Excellent for somatic symptoms</li>
                        <li>• Gabapentin: Similar mechanism</li>
                        <li>• Buspirone: Helps with the &quot;worry&quot; component</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Combination Treatment */}
              <Card className="bg-card border-border mb-8">
                <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Combination Treatment</CardTitle>
                      <p className="text-purple-700">Medication + CBT works better than either alone</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Research consistently shows: <strong>Medication + CBT works better than either alone.</strong>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-500 mt-0.5" />
                      <span>Medication turns down the volume of the alarm system, making it possible to do the behavioral work of therapy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-500 mt-0.5" />
                      <span>Therapy teaches skills that persist even if you eventually stop medication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Treatment-Resistant Options */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Treatment-Resistant Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For patients who don&apos;t respond adequately to standard treatment:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-amber-500 mt-0.5" />
                      <span><strong>rTMS (Transcranial Magnetic Stimulation):</strong> Non-invasive brain stimulation targeting overactive threat circuits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-amber-500 mt-0.5" />
                      <span><strong>Phenelzine (Nardil):</strong> An older MAOI that remains the most effective medication for severe social anxiety. Requires dietary restrictions but produces dramatic improvement when other options fail.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-amber-500 mt-0.5" />
                      <span><strong>Stellate ganglion block:</strong> An emerging option for severe physical symptoms (blushing, sweating) that don&apos;t respond to medication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 8: Managing Physical Symptoms */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                  <Thermometer className="w-4 h-4 mr-1" />
                  Targeted Solutions
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Managing Physical Symptoms
                </h2>
                <p className="text-lg text-muted-foreground">
                  For many people, the fear isn&apos;t the social situation itself—it&apos;s the fear that others 
                  will notice their physical symptoms. Treating the symptom can break the cycle.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Excessive Sweating */}
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      Excessive Sweating (Hyperhidrosis)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Topical Options:</h4>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li>• Aluminum chloride 20% (Drysol): Apply at night, wash off in morning</li>
                          <li>• Glycopyrronium wipes (Qbrexza): Single-use cloths for underarm sweating</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Oral Options:</h4>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li>• Glycopyrrolate (Robinul): Blocks nerve signal to sweat glands</li>
                          <li>• Doesn&apos;t affect thinking; must be taken on empty stomach</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Blushing */}
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <HeartPulse className="w-5 h-5 text-red-500" />
                      Blushing (Erythrophobia)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Beta-blockers (propranolol) usually don&apos;t help blushing—the mechanism is different.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">What Does Help:</h4>
                        <ul className="space-y-1 text-green-800 text-sm">
                          <li>• Clonidine or guanfacine: Alpha-2 agonists that reduce flushing</li>
                          <li>• Cognitive work: Accepting/announcing blushing often reduces it</li>
                          <li>• Green-tinted makeup primers can neutralize redness</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-2">What to Avoid:</h4>
                        <p className="text-red-800 text-sm">
                          <strong>ETS surgery:</strong> While it eliminates blushing, 50-80% of patients develop 
                          severe compensatory sweating elsewhere. The regret rate is very high.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trembling */}
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-500" />
                      Trembling/Shaking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-500 mt-1" />
                        <span><strong>Propranolol:</strong> Very effective for tremor, especially hands and voice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-500 mt-1" />
                        <span><strong>Gabapentin/Pregabalin:</strong> Calms nervous system without cognitive effects of benzodiazepines</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Social Anxiety in Children & Teenagers */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-background to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  <School className="w-4 h-4 mr-1" />
                  Pediatric Focus
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Social Anxiety in Children & Teenagers
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">How It Looks Different in Youth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "May not recognize the fear as excessive—it just feels \"real\"",
                      "Often appears as irritability rather than obvious anxiety",
                      "School refusal is common (\"My stomach hurts every Monday morning\")",
                      "May seem defiant when actually terrified",
                      "Avoids answering questions in class, joining activities, making friends",
                      "Can appear as selective mutism in younger children"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200 border-2 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    School Refusal: A Psychiatric Emergency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-800 mb-4 font-medium">
                    Every day of avoidance hardens the anxiety circuitry. Quick intervention is critical.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">The Approach:</h4>
                      <ol className="space-y-2 text-red-800">
                        <li><strong>1. Validate:</strong> &quot;I know you&apos;re scared. This is really hard.&quot;</li>
                        <li><strong>2. Externalize:</strong> &quot;The Anxiety Monster is lying to you. It says you can&apos;t handle this, but you can.&quot;</li>
                        <li><strong>3. Return to school</strong> with accommodations—NOT homebound instruction (which reinforces avoidance)</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Helpful School Accommodations (504 Plan)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {schoolAccommodations.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Medication for Children/Teens:</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Fluoxetine (Prozac) or sertraline: Best evidence in youth</li>
                      <li>• Start low, increase slowly</li>
                      <li>• Monitor for activation (restlessness, increased anxiety) in first 2-4 weeks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 10: Social Anxiety vs. Other Conditions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                  <Lightbulb className="w-4 h-4 mr-1" />
                  Differential Diagnosis
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Social Anxiety vs. Other Conditions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Getting the right diagnosis matters because treatment differs.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Social Anxiety vs Autism */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Social Anxiety vs. Autism Spectrum Disorder</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                            <th className="text-left py-2 font-semibold text-cyan-700">Social Anxiety</th>
                            <th className="text-left py-2 font-semibold text-purple-700">Autism Spectrum</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 font-medium">Core issue</td>
                            <td className="py-3 text-cyan-700">Fear of judgment</td>
                            <td className="py-3 text-purple-700">Difficulty reading social cues</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 font-medium">Social desire</td>
                            <td className="py-3 text-cyan-700">High—wants connection but fears it</td>
                            <td className="py-3 text-purple-700">Variable—may prefer solitude</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 font-medium">Eye contact</td>
                            <td className="py-3 text-cyan-700">Avoids to reduce anxiety</td>
                            <td className="py-3 text-purple-700">Avoids due to intensity/discomfort</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 font-medium">After socializing</td>
                            <td className="py-3 text-cyan-700">Replays interactions anxiously</td>
                            <td className="py-3 text-purple-700">Needs recovery from sensory/cognitive load</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-medium">Response to exposure</td>
                            <td className="py-3 text-cyan-700">Improves with practice</td>
                            <td className="py-3 text-purple-700">Often worsens (leads to burnout)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-800 text-sm">
                        <strong>The &quot;camouflaging&quot; trap:</strong> Some people (especially women) with undiagnosed 
                        autism have learned to mask—intellectually learning social scripts. They may appear socially 
                        anxious but describe social interaction as &quot;exhausting performance art&quot; rather than &quot;terrifying.&quot;
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Anxiety vs Avoidant Personality */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Social Anxiety vs. Avoidant Personality Disorder</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                            <th className="text-left py-2 font-semibold text-cyan-700">Social Anxiety</th>
                            <th className="text-left py-2 font-semibold text-red-700">Avoidant Personality</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 font-medium">Core belief</td>
                            <td className="py-3 text-cyan-700">&quot;I&apos;ll embarrass myself&quot;</td>
                            <td className="py-3 text-red-700">&quot;I am fundamentally defective/inferior&quot;</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 font-medium">Scope</td>
                            <td className="py-3 text-cyan-700">Situation-specific fears</td>
                            <td className="py-3 text-red-700">Pervasive sense of inadequacy</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 font-medium">Self-view</td>
                            <td className="py-3 text-cyan-700">&quot;I hate that I&apos;m anxious&quot; (ego-dystonic)</td>
                            <td className="py-3 text-red-700">&quot;This is who I am&quot; (ego-syntonic)</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-medium">Treatment response</td>
                            <td className="py-3 text-cyan-700">Responds well to CBT (12-16 weeks)</td>
                            <td className="py-3 text-red-700">Slower, requires longer-term schema therapy</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-4 text-muted-foreground text-sm">
                      Many people have elements of both. We assess for personality factors because they affect treatment planning.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: What to Expect: Your Evaluation */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200 mb-4">
                  <FileText className="w-4 h-4 mr-1" />
                  Your First Visit
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  What to Expect: Your Evaluation
                </h2>
                <p className="text-lg text-muted-foreground">Initial appointment: 60-90 minutes</p>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">We&apos;ll Discuss:</h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Your specific fears—which situations, what you're afraid will happen",
                      "History of social anxiety—when it started, how it evolved",
                      "Physical symptoms and which ones bother you most",
                      "Avoidance patterns and safety behaviors",
                      "Impact on work, relationships, and daily life",
                      "Previous treatment and what worked/didn't work",
                      "Family history of anxiety",
                      "Screening for related conditions (depression, substance use, autism features)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Assessment Tools:</h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Liebowitz Social Anxiety Scale (LSAS): Gold standard for measuring severity</li>
                        <li>• Thyroid panel: Hyperthyroidism can mimic anxiety</li>
                        <li>• Substance use screening: Alcohol commonly co-occurs</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">What We Determine Together:</h4>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Confirmation of diagnosis</li>
                        <li>• Severity level and subtype</li>
                        <li>• Whether medication, therapy, or both is appropriate</li>
                        <li>• Specific treatment plan with realistic timelines</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800">
                      <strong>Important:</strong> To help you effectively, I need to understand your specific fears 
                      and behaviors in detail. This can feel embarrassing to discuss, but nothing you describe will 
                      surprise me—I&apos;ve heard it all. The more specific you can be, the better I can help.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                  <Award className="w-4 h-4 mr-1" />
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Experience That Makes a Difference
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: FAQs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Common Questions
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold text-foreground flex items-start gap-2">
                        <span className="text-primary">Q:</span>
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-healing">A:</span> {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-background">
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
        <section className="py-20 bg-gradient-to-br from-cyan-50 via-background to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                You Don&apos;t Have to Keep Living Small
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Social anxiety has probably already cost you opportunities—jobs you didn&apos;t apply for, 
                relationships you didn&apos;t pursue, experiences you avoided. <strong>It doesn&apos;t have to keep 
                taking from you.</strong> With proper treatment, most people achieve significant improvement. 
                The first step is the hardest—reaching out. But you don&apos;t have to take it alone.
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
