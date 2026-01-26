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
  AlertTriangle,
  ChevronRight,
  Shield,
  Pill,
  BookOpen,
  Star,
  Calendar,
  Cloud,
  Zap,
  Activity,
  Sun,
  Moon,
  Dumbbell,
  Wine,
  Utensils,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Depression Page Schema
const depressionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Depression Treatment in Cincinnati & Northern Kentucky",
    "description": "Comprehensive depression diagnosis and treatment for children, adolescents, and adults. Expert care from board-certified psychiatrist Dr. Arnold Shapiro with 35+ years experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Major Depressive Disorder",
      "alternateName": ["Depression", "Clinical Depression", "MDD"],
      "signOrSymptom": [
        "Persistent sadness",
        "Loss of interest",
        "Fatigue",
        "Sleep problems",
        "Appetite changes",
        "Difficulty concentrating"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about depression symptoms, diagnosis, and treatment options including medication management and therapy"
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
        "name": "How do I know if I'm depressed or just going through a hard time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The difference is duration and impact. If you've felt this way for more than two weeks, and it's affecting your ability to work, maintain relationships, or enjoy life, it's worth getting evaluated. You don't have to figure this out alone."
        }
      },
      {
        "@type": "Question",
        "name": "Will I have to take medication forever?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Many people take antidepressants for 6-12 months after feeling better, then taper off successfully. Others benefit from longer-term treatment, especially if they've had multiple episodes."
        }
      },
      {
        "@type": "Question",
        "name": "What if antidepressants don't work for me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you haven't responded to two medications, we move to additional strategies: augmentation (adding a second medication), switching to a different class, or advanced treatments like Spravato or TMS. Dr. Shapiro has extensive experience with treatment-resistant depression."
        }
      }
    ]
  }
];

export default function Depression() {
  // Depression Symptoms Data
  const childSymptoms = [
    "Irritability or anger (more common than sadness in young people)",
    "Declining grades or loss of interest in school",
    "Withdrawal from friends and activities they used to enjoy",
    "Changes in sleep—sleeping too much or too little",
    "Changes in appetite or weight",
    "Complaints of headaches or stomachaches with no medical cause",
    "Talking about feeling worthless or being a burden",
    "Increased sensitivity to rejection or criticism",
    "Low energy or motivation (\"I don't care about anything\")"
  ];

  const adultSymptoms = [
    "Persistent sad, empty, or \"numb\" feeling",
    "Loss of interest or pleasure in activities you used to enjoy",
    "Fatigue and low energy, even after adequate sleep",
    "Difficulty concentrating, remembering, or making decisions",
    "Sleep problems—insomnia or sleeping too much",
    "Changes in appetite or weight (increase or decrease)",
    "Feelings of worthlessness, guilt, or hopelessness",
    "Irritability or restlessness",
    "Physical symptoms that don't respond to treatment (pain, digestive issues)",
    "Thoughts of death or suicide"
  ];

  const depressionTypes = [
    {
      icon: Cloud,
      title: "Major Depressive Disorder (MDD)",
      description: "The most common form of clinical depression. Symptoms last at least two weeks and significantly interfere with daily life. Episodes can happen once or recur throughout life.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Activity,
      title: "Persistent Depressive Disorder (Dysthymia)",
      description: "A chronic, lower-grade depression lasting two years or more. You might not feel 'severely' depressed, but you rarely feel good either. Many people don't realize this is treatable—they think it's just their personality.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Treatment-Resistant Depression (TRD)",
      description: "When standard treatments haven't worked. This doesn't mean you're hopeless—it means you need a more specialized approach. Dr. Shapiro has extensive experience with difficult-to-treat cases.",
      color: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Zap,
      title: "Situational Depression (Adjustment Disorder)",
      description: "Depression triggered by a specific life event—job loss, divorce, death of a loved one. While understandable, it still deserves treatment, especially if symptoms persist beyond a few months.",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: AlertCircle,
      title: "Depression with Anxiety",
      description: "Over half of people with depression also have significant anxiety. Both conditions need to be addressed for full recovery.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  const treatmentOptions = [
    {
      icon: Pill,
      title: "Medication Management",
      description: "When appropriate, antidepressant medications can significantly improve depression symptoms. We carefully select and monitor each patient's treatment for optimal results.",
      details: ["SSRIs (Lexapro, Zoloft, Prozac)", "SNRIs (Effexor, Cymbalta, Pristiq)", "Wellbutrin for fatigue and low motivation", "Augmentation strategies when needed", "GeneSight genetic testing available"]
    },
    {
      icon: MessageCircle,
      title: "Therapy & Counseling",
      description: "Evidence-based therapeutic approaches help you understand depression, develop coping strategies, and change negative thought patterns.",
      details: ["Cognitive Behavioral Therapy (CBT)", "Interpersonal Therapy (IPT)", "Behavioral Activation", "Supportive counseling"]
    },
    {
      icon: BookOpen,
      title: "Patient Education",
      description: "Understanding depression is empowering. We teach you about your condition so you can recognize patterns, identify triggers, and take control.",
      details: ["Understanding brain chemistry", "Recognizing warning signs", "Lifestyle factors that affect mood", "Educational resources and slideshows"]
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Depression affects the whole family. We provide guidance for family members on how to support their loved one effectively.",
      details: ["Family therapy sessions", "Education for family members", "Communication strategies", "Supporting recovery at home"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has helped thousands of patients overcome depression, from children to adults, with proven, compassionate approaches."
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
      description: "We're extremely accessible—your questions are answered almost always the same day. Never feel alone in your treatment."
    },
    {
      icon: Shield,
      title: "Medication + Therapy",
      description: "Unlike many psychiatrists who only prescribe medication, we offer both therapy and medication management for comprehensive care."
    },
    {
      icon: GraduationCap,
      title: "Treatment-Resistant Expertise",
      description: "If standard treatments haven't worked, Dr. Shapiro has extensive experience with advanced options including Spravato and augmentation strategies."
    }
  ];

  const faqs = [
    {
      question: "How do I know if I'm depressed or just going through a hard time?",
      answer: "The difference is duration and impact. If you've felt this way for more than two weeks, and it's affecting your ability to work, maintain relationships, or enjoy life, it's worth getting evaluated. You don't have to figure this out alone."
    },
    {
      question: "Will I have to take medication forever?",
      answer: "Not necessarily. Many people take antidepressants for 6-12 months after feeling better, then taper off successfully. Others benefit from longer-term treatment, especially if they've had multiple episodes. We'll discuss what makes sense for your situation."
    },
    {
      question: "I'm worried about side effects.",
      answer: "Most side effects are mild and temporary—often resolving within the first week or two. Dr. Shapiro's approach: start low, go slow, and if a medication doesn't agree with you, we stop it and try something else. The goal is for you to feel dramatically better with no problems."
    },
    {
      question: "What if antidepressants don't work for me?",
      answer: "If you haven't responded to two medications, we move to additional strategies: augmentation (adding a second medication), switching to a different class, or advanced treatments like Spravato or TMS. Dr. Shapiro has extensive experience with treatment-resistant depression."
    },
    {
      question: "Can children take antidepressants?",
      answer: "Yes, when appropriate. Fluoxetine (Prozac) and escitalopram (Lexapro) are FDA-approved for pediatric depression. The research shows that for moderate-to-severe depression in young people, medication plus therapy works better than either alone. We monitor closely and involve the whole family in treatment decisions."
    },
    {
      question: "Is depression genetic?",
      answer: "Depression runs in families, but it's not destiny. Having a parent with depression increases risk, but many people with family history never develop it, and many without family history do. Genes are one factor among many."
    },
    {
      question: "How is depression different from bipolar disorder?",
      answer: "In depression, mood goes down. In bipolar disorder, mood cycles between down and up (mania or hypomania). This matters because treatment is different. We screen carefully for bipolar features before starting treatment."
    },
    {
      question: "What about natural treatments like supplements?",
      answer: "Some supplements have modest evidence: Omega-3 fatty acids (fish oil), L-methylfolate, and SAMe. However, they're typically not strong enough for moderate-to-severe depression. They're sometimes useful as additions to medication, not replacements. Always tell us what supplements you're taking."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You'll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Depression Treatment Cincinnati | Expert Depression Care for Children & Adults | Dr. Shapiro</title>
        <meta name="description" content="Expert depression diagnosis and treatment in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in depression for children, teens, and adults. 35+ years experience. Same-day responses. Call (859) 341-7453." />
        <meta name="keywords" content="depression treatment Cincinnati, depression doctor Cincinnati, major depressive disorder treatment Northern Kentucky, clinical depression, child depression psychiatrist, antidepressant medication management, therapy for depression, treatment-resistant depression" />
        <link rel="canonical" href={`${window.location.origin}/depression`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Depression Treatment in Cincinnati & Northern Kentucky | Dr. Arnold Shapiro" />
        <meta property="og:description" content="Comprehensive depression diagnosis and treatment for children, teens, and adults from a board-certified psychiatrist with 35+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/depression`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(depressionSchema)}
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
                    <Heart className="w-4 h-4 mr-1" />
                    Depression Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Depression Treatment in{" "}
                  <span className="text-primary">Cincinnati & Northern Kentucky</span>
                </h1>
                
                <p className="text-2xl text-primary font-semibold">
                  Real Help When Life Feels Too Heavy
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Depression isn&apos;t just feeling sad. It&apos;s a medical condition that affects how your brain works—and 
                  it&apos;s one of the most treatable conditions in all of medicine. With the right diagnosis and treatment, 
                  most people feel dramatically better. <strong>You don&apos;t have to keep struggling.</strong>
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
                    <span>Treatment-resistant depression expertise</span>
                  </div>
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
                    onClick={() => window.location.href = '/screening?assessment=phq9'}
                  >
                    Take Free Depression Screening
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Professional depression consultation with psychiatrist Dr. Arnold Shapiro" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Depression Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  Understanding Depression
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  More Than Just Feeling Sad
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      Everyone feels sad sometimes. But <strong>clinical depression is different</strong>—it&apos;s a 
                      medical condition where the brain&apos;s chemistry and circuitry aren&apos;t working properly.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <p className="text-blue-800">
                        <strong>Think of it like a car with a faulty fuel system.</strong> The car looks fine from the outside, 
                        but it won&apos;t run right no matter how hard you try. Depression works the same way—your brain&apos;s 
                        &quot;fuel system&quot; (the chemicals that regulate mood, energy, and motivation) isn&apos;t delivering what you need.
                      </p>
                    </div>
                    
                    <p>
                      <strong>The good news?</strong> Unlike a broken car, your brain can heal. With proper treatment, 
                      the brain&apos;s chemistry rebalances and the circuits that control mood start working again. 
                      <span className="text-primary font-semibold"> Most people with depression respond well to treatment—many 
                      feel dramatically better within weeks.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Depression */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <FileText className="w-4 h-4 mr-1" />
                Types of Depression
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Depression Takes Many Forms
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Understanding which type of depression you have helps guide the most effective treatment approach.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {depressionTypes.map((type, index) => (
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
                Depression looks different in children and adults. Recognizing the signs is the first step toward getting help.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
              {/* Children & Teens Symptoms */}
              <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Depression in Children & Teens
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs that may indicate your child needs evaluation
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
                    Depression in Adults
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs that you may benefit from professional evaluation
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
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => window.location.href = '/screening?assessment=phq9'}
              >
                Take Free Depression Self-Assessment
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Science Behind Depression */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  The Science
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Does Depression Happen?
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    For decades, doctors talked about depression as a &quot;chemical imbalance&quot;—not enough serotonin 
                    in the brain. While that&apos;s part of the story, modern neuroscience reveals it&apos;s more complex.
                  </p>
                  <p className="text-xl font-semibold text-primary mb-6">
                    Depression involves three main systems:
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <CardTitle className="text-xl text-blue-700">Brain Chemistry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Several neurotransmitters are involved—<strong>serotonin</strong> (mood stability), 
                      <strong> norepinephrine</strong> (energy and alertness), and <strong>dopamine</strong> (motivation 
                      and pleasure). When these are out of balance, you feel it in every aspect of life.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-50 to-background border-purple-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-purple-600">2</span>
                    </div>
                    <CardTitle className="text-xl text-purple-700">Brain Circuitry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Depression affects how different parts of the brain communicate. The &quot;stuck&quot; feeling many 
                      people describe is literally visible on brain scans—certain circuits become <strong>overactive</strong> (rumination, 
                      self-criticism) while others become <strong>underactive</strong> (motivation, pleasure).
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-background border-green-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-green-600">3</span>
                    </div>
                    <CardTitle className="text-xl text-green-700">Neuroplasticity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Chronic stress and depression can actually change brain structure—weakening connections in areas 
                      that regulate mood. <strong>The exciting news?</strong> Treatment can reverse these changes. 
                      Medications and therapy help the brain grow new connections and heal.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-6 text-center">
                <p className="text-lg text-foreground font-medium">
                  <strong>The Bottom Line:</strong> Depression is a real medical condition with real biological changes. 
                  It&apos;s not weakness, laziness, or a character flaw. And because it&apos;s biological, 
                  <span className="text-primary"> it responds to biological treatment.</span>
                </p>
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
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary/30 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">We Look for Everything—Not Just Depression</h3>
                    <p className="text-foreground leading-relaxed">
                      When you come to us thinking you have depression, we don&apos;t stop there—we evaluate for <em>everything</em>. 
                      ADHD, anxiety, bipolar disorder, thyroid problems, sleep disorders, and other conditions can all look like 
                      depression or exist alongside it. Many patients actually have two, three, or more conditions. 
                      <strong> Finding the complete picture changes everything about your treatment.</strong>
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
                      We don&apos;t just look for what you think you might have. If you come to us saying &quot;I think I have depression,&quot; 
                      we evaluate for <em>everything</em>—anxiety, ADHD, bipolar disorder, and other conditions that can look like 
                      depression or co-exist with it.
                    </p>
                  </div>
                  
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
                    counselor meets with your child or teenager.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                    <p className="text-blue-800 font-semibold mb-2">Our counselor is trained to look for everything:</p>
                    <p className="text-blue-700 text-sm">
                      Not just depression—anxiety, ADHD, OCD, bipolar disorder, learning differences—we evaluate comprehensively 
                      because conditions often overlap and proper diagnosis changes everything.
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
                Evidence-Based Depression Treatment
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                There&apos;s no one-size-fits-all approach to depression. The right treatment depends on your specific 
                situation, symptoms, and preferences. Dr. Shapiro will work with you to find what works best for YOU.
              </p>
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
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">First-Line Medications (SSRIs and SNRIs)</h4>
                    <p className="text-muted-foreground mb-4">
                      These medications help restore balance to brain chemistry. They&apos;re well-studied, generally 
                      well-tolerated, and effective for most people.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-800 mb-2">SSRIs (Selective Serotonin Reuptake Inhibitors)</h5>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• <strong>Lexapro</strong> (escitalopram) – Often first choice due to effectiveness and tolerability</li>
                          <li>• <strong>Zoloft</strong> (sertraline) – Good for depression with anxiety</li>
                          <li>• <strong>Prozac</strong> (fluoxetine) – Long-acting, helpful for inconsistent schedules</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h5 className="font-semibold text-purple-800 mb-2">SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)</h5>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• <strong>Effexor</strong> (venlafaxine) – Adds norepinephrine boost for energy</li>
                          <li>• <strong>Cymbalta</strong> (duloxetine) – Good when pain is also present</li>
                          <li>• <strong>Pristiq</strong> (desvenlafaxine) – Fewer drug interactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h5 className="font-semibold text-amber-800 mb-2">What to Expect</h5>
                    <p className="text-amber-700 text-sm">
                      Most antidepressants take 2-4 weeks to begin working and 6-8 weeks for full effect. 
                      Side effects, if any, usually improve within the first week or two.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">Other Medication Options</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• <strong>Wellbutrin</strong> (bupropion) – Works on dopamine and norepinephrine; good for fatigue and low motivation; doesn&apos;t cause weight gain or sexual side effects</li>
                      <li>• <strong>Remeron</strong> (mirtazapine) – Helps with sleep and appetite; often used in combination</li>
                      <li>• <strong>Auvelity</strong> – Newer rapid-acting medication that can work within one week</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-2">For Treatment-Resistant Depression</h5>
                    <p className="text-red-700 text-sm mb-2">If standard medications haven&apos;t helped, there are additional options:</p>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• <strong>Spravato</strong> (esketamine) – FDA-approved nasal spray that works through a different brain system (glutamate)</li>
                      <li>• <strong>Lithium augmentation</strong> – Adding lithium to an antidepressant can boost effectiveness</li>
                      <li>• <strong>Combination strategies</strong> – Using two complementary medications together</li>
                      <li>• <strong>TMS</strong> (Transcranial Magnetic Stimulation) – Non-invasive brain stimulation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Therapy Section */}
            <div className="max-w-5xl mx-auto mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">Therapy Options</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Medication addresses the biology. Therapy addresses the thoughts and behaviors. 
                    <strong> The most effective treatment for moderate-to-severe depression is usually both together.</strong>
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-2">Cognitive Behavioral Therapy (CBT)</h5>
                      <p className="text-green-700 text-sm">
                        The most researched therapy for depression. Identifies and changes negative thought patterns 
                        and behaviors that maintain depression.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">Interpersonal Therapy (IPT)</h5>
                      <p className="text-blue-700 text-sm">
                        Focuses on improving relationships and communication. Especially helpful when depression 
                        is connected to relationship problems or major life changes.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">Behavioral Activation</h5>
                      <p className="text-purple-700 text-sm">
                        Sometimes the simplest approach works—gradually increasing engagement in meaningful 
                        activities to break the cycle of withdrawal and isolation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline Section */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-primary/5 to-healing/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Timeline Expectations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-primary">1-2</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Weeks: Side effects (if any) emerge and begin to fade</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-primary">2-4</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Weeks: Early improvement—better sleep, more energy</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-primary">4-8</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Weeks: Full antidepressant effect develops</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-healing">8-12</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Weeks: Fine-tuning if needed</p>
                    </div>
                  </div>
                  <p className="text-center text-foreground font-medium mt-6">
                    Most people feel significantly better within 6-8 weeks. Dr. Shapiro will see you monthly until 
                    you&apos;re <strong>dramatically better</strong>—not just &quot;okay,&quot; but truly thriving.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Considerations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <Target className="w-4 h-4 mr-1" />
                Special Considerations
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Depression Often Comes with Company
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    Depression + ADHD
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    About 30% of people with depression also have undiagnosed ADHD. The &quot;brain fog&quot; and concentration 
                    problems of depression overlap almost completely with ADHD. <strong>If we find both, treating the 
                    ADHD sometimes resolves the depression entirely.</strong>
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-purple-600" />
                    Depression + Anxiety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    More than half of people with depression also have significant anxiety. We treat both conditions 
                    together—and <strong>many medications help both</strong>.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-600" />
                    &quot;Soft&quot; Bipolar Disorder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Some people diagnosed with depression actually have a mild form of bipolar disorder. This matters 
                    because antidepressants alone can make bipolar worse. Signs include: depression that started before 
                    age 25, multiple episodes, family history of bipolar, or medications that worked at first then 
                    &quot;pooped out.&quot; <strong>We screen carefully for this.</strong>
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Depression in Older Adults
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Depression in seniors is common but often missed—it can look like memory problems or physical symptoms. 
                    <strong>It&apos;s absolutely treatable.</strong> We&apos;re careful to choose medications that are safe 
                    and don&apos;t interact with other prescriptions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lifestyle Factors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Heart className="w-4 h-4 mr-1" />
                Beyond Medication
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Lifestyle Factors That Matter
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While medication and therapy are the foundation of treatment, these factors can significantly impact your recovery.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              <Card className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Dumbbell className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Exercise</h4>
                  <p className="text-xs text-muted-foreground">
                    Regular aerobic exercise can be as effective as antidepressant medication for mild-to-moderate depression.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Moon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Sleep</h4>
                  <p className="text-xs text-muted-foreground">
                    Depression disrupts sleep, and poor sleep worsens depression. Establishing consistent sleep habits is part of treatment.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sun className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Light</h4>
                  <p className="text-xs text-muted-foreground">
                    Morning bright light helps regulate your body&apos;s clock and can improve mood, especially in winter months.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Utensils className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Nutrition</h4>
                  <p className="text-xs text-muted-foreground">
                    Emerging research links gut health to brain health. A Mediterranean-style diet may support recovery.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wine className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Alcohol</h4>
                  <p className="text-xs text-muted-foreground">
                    Alcohol is a depressant. Even moderate drinking can interfere with treatment and worsen symptoms.
                  </p>
                </CardContent>
              </Card>
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
                Why Patients Trust Dr. Shapiro for Depression Care
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over three decades of experience and a patient-centered approach, we&apos;ve helped 
                thousands of individuals overcome depression and find hope again.
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
                Frequently Asked Questions About Depression
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
                Ready to Feel Better?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Depression is treatable. With over 9,000 patients helped and 35+ years of experience, 
                Dr. Shapiro has the expertise to find what&apos;s really going on and get you the relief you deserve.
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
