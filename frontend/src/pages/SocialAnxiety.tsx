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
  CircleAlert,
  Thermometer,
  Droplets,
  HeartPulse,
  BrainCircuit,
  Target,
  XCircle,
  CheckCircle,
  ArrowDownCircle,
  TrendingDown,
  Sparkles,
  Zap,
  RefreshCw,
  UserCheck,
  ClipboardList,
  Lightbulb
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
          "text": "No. Introversion is a personality trait—introverts prefer quieter environments and need alone time to recharge. Social anxiety is a disorder characterized by fear and avoidance. Introverts can enjoy social situations; people with social anxiety fear them."
        }
      },
      {
        "@type": "Question",
        "name": "Can social anxiety be cured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many people achieve significant and lasting improvement with proper treatment. CBT and medication can reduce symptoms by 50-80%. While some may always have a tendency toward social sensitivity, it doesn't have to control your life."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I blush so easily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Blushing is caused by the sympathetic nervous system dilating blood vessels in the face when you feel self-conscious. It's involuntary and common in social anxiety. The fear of blushing often makes it worse. Treatment focuses on reducing this fear rather than stopping the blush."
        }
      }
    ]
  }
];

export default function SocialAnxiety() {
  // Physical symptoms
  const physicalSymptoms = [
    { symptom: "Blushing", description: "Face turning red when feeling observed or embarrassed" },
    { symptom: "Sweating", description: "Excessive perspiration, especially palms, underarms, face" },
    { symptom: "Trembling", description: "Shaking hands, voice, or body when anxious" },
    { symptom: "Racing heart", description: "Palpitations, pounding, or rapid heartbeat" },
    { symptom: "Nausea", description: "Upset stomach, feeling like you might vomit" },
    { symptom: "Dry mouth", description: "Difficulty speaking or swallowing" },
    { symptom: "Muscle tension", description: "Tight shoulders, jaw clenching, stiffness" },
    { symptom: "Dizziness", description: "Lightheadedness or feeling faint" }
  ];

  // Cognitive symptoms
  const cognitiveSymptoms = [
    { symptom: "Mind going blank", description: "Forgetting what you were saying mid-sentence" },
    { symptom: "Negative predictions", description: "'They'll think I'm stupid,' 'I'll embarrass myself'" },
    { symptom: "Post-event rumination", description: "Replaying conversations, analyzing every word for hours or days" },
    { symptom: "Catastrophizing", description: "Assuming the worst possible outcome will happen" },
    { symptom: "Mind-reading", description: "Believing you know others are judging you negatively" },
    { symptom: "Spotlight effect", description: "Feeling like everyone is watching and noticing your flaws" }
  ];

  // Behavioral symptoms
  const behavioralSymptoms = [
    { symptom: "Avoidance", description: "Skipping events, declining invitations, calling in sick" },
    { symptom: "Escape", description: "Leaving situations early, hiding in bathrooms" },
    { symptom: "Safety behaviors", description: "Drinking to cope, over-preparing, staying quiet" },
    { symptom: "Limited eye contact", description: "Looking away, staring at phone or ground" },
    { symptom: "Speaking softly", description: "Mumbling, trailing off, one-word answers" },
    { symptom: "Physical barriers", description: "Crossing arms, standing in corners, wearing sunglasses" }
  ];

  // Feared situations
  const fearedSituations = [
    { icon: Presentation, situation: "Public speaking", description: "Presentations, meetings, speaking in class" },
    { icon: Coffee, situation: "Small talk", description: "Casual conversations, making chitchat" },
    { icon: PartyPopper, situation: "Parties", description: "Social gatherings, networking events" },
    { icon: HandshakeIcon, situation: "Meeting new people", description: "Introductions, first impressions" },
    { icon: Phone, situation: "Phone calls", description: "Making or receiving calls, especially unexpected ones" },
    { icon: Users, situation: "Being observed", description: "Eating, writing, or performing while others watch" },
    { icon: Building2, situation: "Authority figures", description: "Talking to bosses, doctors, teachers" },
    { icon: Eye, situation: "Being the center of attention", description: "Birthdays, being called on, entering late" }
  ];

  // Subtypes
  const subtypes = [
    {
      title: "Generalized Social Anxiety",
      description: "Fear across most social situations",
      examples: ["Conversations", "Parties", "Work meetings", "Dating", "Making phone calls"],
      severity: "More pervasive impact on daily life",
      color: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Performance-Only Social Anxiety",
      description: "Fear limited to performance situations",
      examples: ["Public speaking", "Presentations", "Musical performances", "Sports in front of others"],
      severity: "Can often manage other social situations well",
      color: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  // Avoidance trap cycle
  const avoidanceCycle = [
    { step: "Fear", description: "Anticipate social situation → anxiety rises" },
    { step: "Avoidance", description: "Skip the event → immediate relief" },
    { step: "Reinforcement", description: "Brain learns avoidance = safety" },
    { step: "Weakening", description: "Confidence decreases, fear increases" },
    { step: "Spreading", description: "More situations become threatening" }
  ];

  // Treatment approaches
  const treatments = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      subtitle: "The Gold Standard",
      icon: Brain,
      description: "CBT is the most effective psychological treatment for social anxiety. It addresses both the distorted thoughts and avoidance behaviors that maintain the disorder.",
      components: [
        "Cognitive restructuring: Identifying and challenging negative thought patterns",
        "Behavioral experiments: Testing whether feared outcomes actually happen",
        "Exposure therapy: Gradually facing feared situations in a structured way",
        "Social skills training: Building confidence in specific situations (when needed)"
      ],
      effectiveness: "50-70% achieve significant improvement"
    },
    {
      title: "Medication Options",
      subtitle: "Evidence-Based Pharmacotherapy",
      icon: Pill,
      description: "Medications can significantly reduce social anxiety symptoms, especially when combined with therapy.",
      options: [
        { name: "SSRIs", detail: "First-line treatment (sertraline, paroxetine, escitalopram). Take 4-8 weeks for full effect." },
        { name: "SNRIs", detail: "Alternative first-line option (venlafaxine). Similar efficacy to SSRIs." },
        { name: "Beta-blockers", detail: "For performance anxiety only (propranolol). Reduces physical symptoms like trembling and racing heart." },
        { name: "Benzodiazepines", detail: "Short-term or as-needed use. Risk of dependence limits long-term use." }
      ]
    },
    {
      title: "Combination Treatment",
      subtitle: "Often Most Effective",
      icon: Sparkles,
      description: "Research shows that combining medication with CBT often produces better results than either alone, especially for moderate-to-severe social anxiety.",
      benefits: [
        "Medication reduces symptoms enough to engage in therapy",
        "Therapy provides lasting skills even after medication stops",
        "Combined approach shows highest response rates"
      ]
    }
  ];

  // Physical symptom management
  const physicalManagement = [
    {
      symptom: "Blushing",
      strategies: [
        "Accept it rather than fight it (fighting makes it worse)",
        "Cognitive restructuring: 'Blushing is normal, most people don't notice'",
        "Some respond to certain medications (beta-blockers, clonidine)",
        "ETS surgery is a last resort with significant side effects"
      ]
    },
    {
      symptom: "Sweating",
      strategies: [
        "Clinical-strength antiperspirants",
        "Wear breathable, dark-colored clothing",
        "Certain medications can help (glycopyrrolate)",
        "Address underlying anxiety to reduce trigger"
      ]
    },
    {
      symptom: "Trembling",
      strategies: [
        "Beta-blockers can be very effective for performance situations",
        "Deep breathing and muscle relaxation techniques",
        "Reduce caffeine intake",
        "Accept some trembling as normal under stress"
      ]
    }
  ];

  // Child/teen specific info
  const childTeenSigns = [
    "Refusing to go to school or frequent stomachaches on school days",
    "Extreme distress about presentations, reading aloud, or being called on",
    "Avoiding birthday parties, sleepovers, or extracurricular activities",
    "Difficulty making friends or speaking to peers",
    "Crying, tantrums, or freezing in social situations",
    "Excessive reliance on parents in social situations",
    "Fear of eating in the cafeteria or using school bathrooms"
  ];

  // Differential diagnosis
  const differentialDiagnosis = [
    {
      condition: "Autism Spectrum Disorder",
      overlap: "Social difficulties, may avoid social situations",
      difference: "ASD: Social challenges stem from difficulty reading social cues, not fear of judgment. May not desire more social connection.",
      key: "Social anxiety: Wants to connect but fears negative evaluation"
    },
    {
      condition: "Avoidant Personality Disorder",
      overlap: "Avoidance of social situations, fear of rejection",
      difference: "AvPD: More pervasive, affects all relationships, deep-seated feelings of inadequacy across life domains.",
      key: "Social anxiety: Often situational, person sees self as adequate in non-social areas"
    },
    {
      condition: "Panic Disorder",
      overlap: "Physical symptoms, avoidance",
      difference: "Panic disorder: Fears the panic attack itself and physical sensations, not social judgment.",
      key: "Social anxiety: Fears what others will think of them"
    },
    {
      condition: "Generalized Anxiety Disorder",
      overlap: "Chronic worry, physical symptoms",
      difference: "GAD: Worry spans many topics (health, finances, family). Not specifically about social evaluation.",
      key: "Social anxiety: Worry specifically centers on social situations"
    }
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has treated over 9,000 patients, with extensive experience in anxiety disorders including social phobia."
    },
    {
      icon: Brain,
      title: "Understands the Fear",
      description: "We know that 'just talk to people' isn't helpful advice. We understand the terror of being watched and judged."
    },
    {
      icon: Pill,
      title: "Evidence-Based Treatment",
      description: "We use proven approaches—CBT techniques and appropriate medications—not generic talk therapy."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "Your questions are answered almost always the same day. Anxiety doesn't wait, and neither should you."
    },
    {
      icon: Shield,
      title: "Comprehensive Evaluation",
      description: "We assess for everything—not just social anxiety, but depression, other anxiety disorders, and conditions that commonly co-occur."
    },
    {
      icon: Heart,
      title: "No Pressure",
      description: "We understand that talking to a psychiatrist is itself anxiety-provoking. We'll move at your pace."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "Is social anxiety the same as being shy or introverted?",
      answer: "No. Shyness is a personality trait—some people are naturally more reserved. Introversion means you recharge through alone time. Social anxiety is a disorder characterized by intense fear and avoidance that interferes with your life. You can be an extrovert with social anxiety (you WANT to be social but fear prevents it) or a shy introvert without social anxiety (you prefer quiet but don't fear judgment)."
    },
    {
      question: "I only get anxious about public speaking. Is that social anxiety?",
      answer: "Possibly. 'Performance-only' social anxiety is a recognized subtype where fear is limited to performance situations. It's extremely common—public speaking anxiety affects up to 75% of people to some degree. If it's significantly impacting your career or life, it's worth treating. Beta-blockers can be very effective for this subtype."
    },
    {
      question: "Can social anxiety be cured?",
      answer: "Many people achieve significant and lasting improvement. CBT produces 50-70% response rates, and combining therapy with medication often works even better. While you may always have some tendency toward social sensitivity, proper treatment can reduce it to a manageable level that doesn't control your life."
    },
    {
      question: "Why do I blush so easily? Can anything stop it?",
      answer: "Blushing is caused by the sympathetic nervous system dilating facial blood vessels when you feel self-conscious. Unfortunately, trying to stop blushing often makes it worse (the 'white bear' effect). Treatment focuses on reducing your fear of blushing rather than eliminating the blush itself. Some medications can help, and cognitive restructuring helps you care less about it."
    },
    {
      question: "Will medication make me a different person?",
      answer: "No. The goal of medication is to reduce the excessive fear response, not change your personality. Patients often describe feeling 'more like themselves'—able to do things they always wanted to do but couldn't because of anxiety. You won't become recklessly social; you'll just have a choice about how to respond."
    },
    {
      question: "I've avoided social situations my whole life. Is it too late?",
      answer: "Absolutely not. While early treatment is ideal, people of all ages respond to treatment for social anxiety. You may have more deeply ingrained avoidance patterns, which means treatment might take longer, but improvement is still very possible. Many patients in their 40s, 50s, and beyond find significant relief."
    },
    {
      question: "How is social anxiety different from autism?",
      answer: "While both can involve social difficulties, the core difference is WHY. In social anxiety, you understand social rules but fear being judged negatively. In autism, the challenge is more about understanding and processing social information. People with social anxiety usually want more social connection but fear prevents it; those with autism may or may not desire more connection."
    },
    {
      question: "Do I need therapy or can medication alone work?",
      answer: "Medication alone can help, but research consistently shows that combining medication with CBT produces the best outcomes. Medication reduces symptoms so you can engage in therapy; therapy gives you skills that last even after medication stops. For mild cases, therapy alone may be sufficient."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You'll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Social Anxiety Treatment in Cincinnati | Social Phobia Psychiatrist | Dr. Shapiro</title>
        <meta name="description" content="Expert social anxiety treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in social phobia including CBT and medication management. 35+ years experience. Call (859) 341-7453." />
        <meta name="keywords" content="social anxiety treatment Cincinnati, social phobia psychiatrist Cincinnati, social anxiety disorder treatment Ohio, social anxiety specialist Cincinnati, performance anxiety treatment, social anxiety medication, CBT for social anxiety, social anxiety doctor Fort Wright KY" />
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
                    Your heart pounds before every meeting. You rehearse conversations in your head—then replay them 
                    for hours afterward, cringing at every word. You&apos;ve declined invitations, avoided promotions, 
                    and structured your entire life around minimizing the terror of being watched and judged.
                  </p>
                  <p>
                    This isn&apos;t shyness. This isn&apos;t introversion. <strong>This is social anxiety disorder—and 
                    it&apos;s stealing your life one avoided opportunity at a time.</strong>
                  </p>
                  <p className="text-primary font-medium">
                    The good news: Social anxiety is highly treatable. With the right approach, most people 
                    achieve significant improvement.
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
                    onClick={() => window.location.href = '/screening?assessment=social-anxiety'}
                  >
                    Take Free Screening
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

        {/* Not a Character Flaw Callout */}
        <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Social Anxiety Is Not a Character Flaw
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed opacity-95">
                Social anxiety disorder is a neurobiological condition where your brain&apos;s threat-detection 
                system fires inappropriately during social situations. It&apos;s not weakness. It&apos;s not poor 
                social skills. It&apos;s a treatable medical condition. With over 9,000 patients treated and 
                35+ years of experience, Dr. Shapiro provides comprehensive evaluation and evidence-based 
                treatment that restores your ability to connect with the world.
              </p>
            </div>
          </div>
        </section>

        {/* More Than Just Shyness */}
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
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      People tell you to &quot;just relax&quot; or &quot;be yourself.&quot; They don&apos;t understand that for you, 
                      social situations feel genuinely threatening—like walking into a room full of people who 
                      are all silently evaluating and judging you.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Shyness:</h4>
                        <p className="text-green-700 text-sm">
                          Initial discomfort that fades once you warm up. Doesn&apos;t significantly impair your life. 
                          You might prefer smaller groups but can manage larger ones.
                        </p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-2">Social Anxiety Disorder:</h4>
                        <p className="text-red-700 text-sm">
                          Intense fear that doesn&apos;t fade. Leads to avoidance that limits your career, relationships, 
                          and quality of life. Physical symptoms like sweating, trembling, and racing heart.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                      <p className="text-amber-900 font-medium">
                        <strong>Key distinction:</strong> Social anxiety isn&apos;t about preferring alone time (introversion). 
                        Many people with social anxiety desperately WANT to connect—but fear prevents them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Is Social Anxiety Disorder */}
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
                  Social anxiety disorder (also called social phobia) is marked by intense, persistent fear 
                  of social situations where you might be scrutinized by others.
                </p>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">The Core Fear</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    At its heart, social anxiety is about fear of negative evaluation—worrying that others 
                    will judge you as:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {["Stupid or incompetent", "Awkward or weird", "Boring or uninteresting", 
                      "Weak or anxious", "Unlikeable", "A fraud"].map((fear, index) => (
                      <div key={index} className="flex items-center gap-2 text-foreground">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span>{fear}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Common Situations That Trigger Social Anxiety
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {fearedSituations.map((item, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{item.situation}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signs You Might Have Social Anxiety */}
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
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Physical Symptoms */}
                <Card className="bg-card border-border">
                  <CardHeader className="bg-gradient-to-r from-red-500/10 to-red-600/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <HeartPulse className="w-5 h-5 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">Physical Symptoms</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {physicalSymptoms.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Thermometer className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">{item.symptom}:</span>
                            <span className="text-muted-foreground text-sm ml-1">{item.description}</span>
                          </div>
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
                      <CardTitle className="text-xl">Cognitive Symptoms</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {cognitiveSymptoms.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Brain className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">{item.symptom}:</span>
                            <span className="text-muted-foreground text-sm ml-1">{item.description}</span>
                          </div>
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
                      <CardTitle className="text-xl">Behavioral Symptoms</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {behavioralSymptoms.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <UserX className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">{item.symptom}:</span>
                            <span className="text-muted-foreground text-sm ml-1">{item.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Generalized vs Performance-Only */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  <Target className="w-4 h-4 mr-1" />
                  Subtypes
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Generalized vs. Performance-Only
                </h2>
                <p className="text-lg text-muted-foreground">
                  Social anxiety exists on a spectrum. Understanding your subtype helps guide treatment.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {subtypes.map((subtype, index) => (
                  <Card key={index} className={`${subtype.color} ${subtype.borderColor} border-2`}>
                    <CardHeader>
                      <CardTitle className="text-xl">{subtype.title}</CardTitle>
                      <p className="text-muted-foreground">{subtype.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Affected Situations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {subtype.examples.map((example, idx) => (
                            <Badge key={idx} variant="outline" className="bg-white">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">{subtype.severity}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-2">Performance Anxiety Note:</h4>
                <p className="text-blue-800">
                  Performance-only social anxiety is extremely common—public speaking fear affects up to 75% 
                  of people to some degree. If yours is limited to specific performance situations, 
                  beta-blockers can be remarkably effective, often allowing you to manage without daily medication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Social Anxiety Affects Your Brain */}
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
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="bg-purple-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-purple-900 mb-4">The Threat Response System</h3>
                      <p className="text-purple-800 mb-4">
                        In social anxiety, your brain&apos;s threat detection center (the amygdala) is hyperactive. 
                        It treats social situations like physical dangers, triggering the same fight-or-flight 
                        response you&apos;d have facing a predator.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded p-4">
                          <h4 className="font-semibold text-purple-800 mb-2">What Should Happen:</h4>
                          <p className="text-sm text-purple-700">
                            Amygdala scans for threats → Social situation detected → Prefrontal cortex says 
                            &quot;not dangerous&quot; → You feel calm
                          </p>
                        </div>
                        <div className="bg-white rounded p-4">
                          <h4 className="font-semibold text-purple-800 mb-2">What Happens in Social Anxiety:</h4>
                          <p className="text-sm text-purple-700">
                            Amygdala scans for threats → Social situation detected → Amygdala overrides: 
                            &quot;DANGER!&quot; → Full stress response activates
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Key Brain Differences</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-purple-500 mt-1" />
                          <div>
                            <strong>Overactive amygdala:</strong> Fires more intensely to social cues, especially 
                            faces that might be judging
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-purple-500 mt-1" />
                          <div>
                            <strong>Weaker prefrontal regulation:</strong> The &quot;rational brain&quot; has trouble 
                            calming the fear response
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-purple-500 mt-1" />
                          <div>
                            <strong>Altered serotonin function:</strong> Why SSRIs often help—they modulate the 
                            fear circuitry
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800">
                        <strong>The Good News:</strong> These brain patterns are NOT fixed. Both therapy and 
                        medication have been shown to normalize amygdala activity over time. Your brain can change.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Avoidance Trap */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200 mb-4">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  The Vicious Cycle
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  The Avoidance Trap
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Why avoidance feels like the solution but actually makes social anxiety worse
                </p>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {avoidanceCycle.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-red-700 font-bold">{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-foreground">{item.step}</h4>
                          <p className="text-xs text-muted-foreground max-w-24">{item.description}</p>
                        </div>
                        {index < avoidanceCycle.length - 1 && (
                          <ChevronRight className="w-6 h-6 text-red-400 self-center hidden md:block" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <h4 className="font-bold text-red-900 mb-2">The Cruel Irony:</h4>
                    <p className="text-red-800">
                      Every time you avoid a social situation, you teach your brain that it WAS dangerous. 
                      The relief you feel reinforces the fear. Over time, your world gets smaller as more 
                      situations become &quot;too scary.&quot; The only way out is through—which is why exposure is 
                      central to treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment That Works */}
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
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Social anxiety is one of the most treatable anxiety disorders when approached correctly.
                </p>
              </div>
              
              <div className="space-y-8">
                {treatments.map((treatment, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader className="bg-gradient-to-r from-green-500/10 to-teal-500/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <treatment.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{treatment.title}</CardTitle>
                          <p className="text-green-700 font-medium">{treatment.subtitle}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">{treatment.description}</p>
                      
                      {treatment.components && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2">Key Components:</h4>
                          <ul className="space-y-2">
                            {treatment.components.map((component, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-foreground">{component}</span>
                              </li>
                            ))}
                          </ul>
                          {treatment.effectiveness && (
                            <p className="mt-3 text-green-700 font-medium">
                              Effectiveness: {treatment.effectiveness}
                            </p>
                          )}
                        </div>
                      )}
                      
                      {treatment.options && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {treatment.options.map((option, idx) => (
                            <div key={idx} className="bg-muted/50 rounded-lg p-3">
                              <h5 className="font-semibold text-foreground">{option.name}</h5>
                              <p className="text-sm text-muted-foreground">{option.detail}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {treatment.benefits && (
                        <ul className="space-y-2">
                          {treatment.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Sparkles className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Managing Physical Symptoms */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                  <Thermometer className="w-4 h-4 mr-1" />
                  Practical Solutions
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Managing Physical Symptoms
                </h2>
                <p className="text-lg text-muted-foreground">
                  The physical symptoms of social anxiety can feel as distressing as the anxiety itself.
                </p>
              </div>
              
              <div className="space-y-6">
                {physicalManagement.map((item, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-orange-500" />
                        {item.symptom}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.strategies.map((strategy, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Anxiety in Children & Teens */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-background to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  <School className="w-4 h-4 mr-1" />
                  Pediatric Focus
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Social Anxiety in Children & Teens
                </h2>
                <p className="text-lg text-muted-foreground">
                  Social anxiety often begins in childhood or adolescence and can be easily mistaken for shyness.
                </p>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Warning Signs in Young People</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {childTeenSigns.map((sign, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{sign}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-bold text-blue-900 mb-3">School Refusal & Presentations</h4>
                    <p className="text-blue-800 mb-3">
                      Social anxiety is one of the most common causes of school avoidance. Children may 
                      complain of stomachaches or headaches to avoid school, particularly on days with 
                      presentations, group work, or social activities.
                    </p>
                    <p className="text-blue-800">
                      <strong>Early intervention is crucial.</strong> Untreated social anxiety in childhood 
                      tends to worsen and can lead to depression, substance use, and long-term impairment 
                      in academic and social development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Anxiety vs Other Conditions */}
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
                  Accurate diagnosis matters because treatment approaches differ.
                </p>
              </div>
              
              <div className="space-y-6">
                {differentialDiagnosis.map((item, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.condition}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-amber-50 rounded-lg p-3">
                          <h4 className="font-semibold text-amber-800 text-sm mb-1">Overlap:</h4>
                          <p className="text-amber-700 text-sm">{item.overlap}</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="font-semibold text-red-800 text-sm mb-1">Key Difference:</h4>
                          <p className="text-red-700 text-sm">{item.difference}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-800 text-sm mb-1">Social Anxiety:</h4>
                          <p className="text-green-700 text-sm">{item.key}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect: Your Evaluation */}
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
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground">
                      We understand that coming to see a psychiatrist can itself trigger social anxiety. 
                      Here&apos;s what to expect so there are no surprises:
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        {
                          title: "Comprehensive History",
                          description: "We'll discuss when your social anxiety started, what situations trigger it, and how it's affecting your life. No judgment—we've heard it all."
                        },
                        {
                          title: "Symptom Assessment",
                          description: "We'll explore your specific symptoms—physical, cognitive, and behavioral—to understand your unique presentation."
                        },
                        {
                          title: "Rule Out Other Conditions",
                          description: "Social anxiety often co-occurs with depression, other anxiety disorders, or ADHD. We'll assess for everything to ensure complete care."
                        },
                        {
                          title: "Discussion of Options",
                          description: "We'll explain treatment options—therapy, medication, or both—and work together to create a plan you're comfortable with."
                        },
                        {
                          title: "No Pressure",
                          description: "You won't be pushed into anything. If you need time to think, that's fine. If you want to start slowly, we can do that."
                        }
                      ].map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-teal-700 font-bold text-sm">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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

        {/* FAQs */}
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
                Your Life Doesn&apos;t Have to Shrink Around Your Fear
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Social anxiety has probably already cost you opportunities—jobs you didn&apos;t apply for, 
                relationships you didn&apos;t pursue, experiences you avoided. <strong>It doesn&apos;t have to keep 
                taking from you.</strong> With proper treatment, most people achieve significant improvement. 
                The first step is the hardest—but you don&apos;t have to take it alone.
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
