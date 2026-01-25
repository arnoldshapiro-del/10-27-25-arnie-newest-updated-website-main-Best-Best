import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  MessageCircle,
  Phone,
  MapPin,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Shield,
  Pill,
  Calendar,
  Zap,
  Activity,
  AlertTriangle,
  Sparkles,
  Target,
  Lightbulb,
  RefreshCw,
  Baby,
  GraduationCap,
  HeartPulse,
  Hand,
  Eye,
  Fingerprint,
  Waves,
  CircleDot,
  UserCheck,
  ClipboardList,
  BookOpen,
  Wind,
  Leaf,
  Sun,
  Moon,
  ThermometerSun,
  Scissors,
  XCircle,
  CheckCircle,
  ArrowRight,
  Layers,
  Settings,
  Home,
  Focus,
  Repeat
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Trichotillomania Page Schema
const trichotillomaniaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Trichotillomania Treatment Cincinnati | Hair Pulling Disorder Expert",
    "description": "Expert trichotillomania (hair pulling disorder) treatment in Cincinnati. Board-certified psychiatrist with 35+ years experience. NAC, behavioral therapy, and treatment-resistant protocols. Compassionate care.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Trichotillomania",
      "alternateName": ["Hair Pulling Disorder", "TTM", "Trich"],
      "signOrSymptom": [
        "Recurrent hair pulling",
        "Tension before pulling",
        "Relief after pulling",
        "Noticeable hair loss",
        "Failed attempts to stop",
        "Significant distress"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about trichotillomania symptoms, subtypes, treatment options including NAC, behavioral therapy, and medication management"
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
        "name": "What causes trichotillomania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trichotillomania is a neurobiological condition involving dysregulation in brain circuits that govern habit formation and impulse control. It's not a character flaw or simply a 'bad habit.'"
        }
      },
      {
        "@type": "Question",
        "name": "Will my hair grow back after stopping trichotillomania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, yes. Hair follicles are resilient and can recover once pulling stops. However, after many years of pulling from the same area, some follicles may be permanently damaged."
        }
      },
      {
        "@type": "Question",
        "name": "Why don't regular antidepressants work for trichotillomania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike OCD, trichotillomania doesn't respond well to SSRIs alone. The glutamate system plays a more important role than serotonin, which is why NAC and memantine are often more effective."
        }
      }
    ]
  }
];

export default function Trichotillomania() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSpecial, setOpenSpecial] = useState(null);

  // Signs/Symptoms Cards
  const signsCards = [
    {
      title: "The Behavior",
      icon: Hand,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      items: [
        "Recurrent pulling of hair from scalp, eyebrows, eyelashes",
        "May also pull from beard, pubic area, or body",
        "Episodes can last minutes to hours",
        "Often done in private, hidden from others"
      ]
    },
    {
      title: "The Urge",
      icon: Zap,
      color: "bg-purple-100 text-purple-700 border-purple-200",
      items: [
        "Rising tension or anxiety before pulling",
        "Relief, gratification, or pleasure during/after",
        "OR no awareness at all (automatic pulling)",
        "Inability to resist the urge despite wanting to"
      ]
    },
    {
      title: "The Consequences",
      icon: AlertCircle,
      color: "bg-amber-100 text-amber-700 border-amber-200",
      items: [
        "Noticeable hair loss or bald patches",
        "Significant distress about the behavior",
        "Avoidance of activities (swimming, wind, intimacy)",
        "Time spent concealing or compensating"
      ]
    },
    {
      title: "The Rituals",
      icon: Repeat,
      color: "bg-green-100 text-green-700 border-green-200",
      items: [
        "Examining the hair root or bulb",
        "Rolling hair between fingers",
        "Running hair across lips or face",
        "Trichophagia (eating hair) in some cases"
      ]
    }
  ];

  // Subtypes
  const subtypes = [
    {
      title: "Automatic Pulling",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-300",
      description: "Pulling without awareness—often while reading, watching TV, driving, or in bed",
      characteristics: [
        "Often unaware pulling is happening",
        "Triggered by sedentary activities",
        "May find hair in hands 'suddenly'",
        "Common during relaxation or focus"
      ],
      triggers: ["Reading", "Watching TV", "Studying", "Lying in bed", "Driving"],
      treatment: "Awareness training, environmental modifications, habit blockers"
    },
    {
      title: "Focused Pulling",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-300",
      description: "Deliberate pulling to relieve tension, regulate emotions, or achieve a specific sensation",
      characteristics: [
        "Fully aware of the behavior",
        "Searching for 'right' hair to pull",
        "Relief or satisfaction from pulling",
        "Often emotion-driven"
      ],
      triggers: ["Stress", "Anxiety", "Boredom", "Perfectionism", "Strong emotions"],
      treatment: "Competing response, emotion regulation, sensory alternatives"
    }
  ];

  // Related BFRBs
  const relatedConditions = [
    {
      name: "Excoriation (Skin Picking)",
      description: "Recurrent picking at skin causing lesions. 20-30% comorbidity with TTM.",
      icon: Fingerprint
    },
    {
      name: "Onychophagia (Nail Biting)",
      description: "Chronic nail biting beyond normal grooming. Often co-occurs with hair pulling.",
      icon: Hand
    },
    {
      name: "Cheek/Lip Biting",
      description: "Habitual biting of inner cheeks or lips causing tissue damage.",
      icon: CircleDot
    },
    {
      name: "Comparison to OCD",
      description: "Related but distinct. Different neurobiology, different treatment response.",
      icon: Brain
    }
  ];

  // Treatment Approach Steps
  const treatmentSteps = [
    {
      step: 1,
      title: "Behavioral Therapy First",
      description: "Habit Reversal Training (HRT) and Comprehensive Behavioral Model (ComB) are the foundation of effective treatment.",
      icon: BookOpen
    },
    {
      step: 2,
      title: "Medication When Needed",
      description: "N-Acetylcysteine (NAC), memantine, and targeted pharmacotherapy to reduce urges and support behavioral work.",
      icon: Pill
    },
    {
      step: 3,
      title: "Combined Approach",
      description: "For moderate to severe cases, combining therapy with medication produces the best outcomes.",
      icon: Layers
    },
    {
      step: 4,
      title: "Treatment-Resistant Protocols",
      description: "Advanced medication combinations and emerging treatments for cases that haven't responded to standard approaches.",
      icon: Settings
    }
  ];

  // First-Line Medications
  const firstLineMeds = [
    {
      name: "N-Acetylcysteine (NAC)",
      description: "The gold standard for trichotillomania. A glutamate modulator that reduces pulling urges. Well-tolerated with minimal side effects.",
      dosing: "Typically 1200-2400mg daily (divided doses)",
      notes: "May take 8-12 weeks for full effect. Available over-the-counter.",
      highlight: "Gold Standard"
    },
    {
      name: "Memantine (Namenda)",
      description: "Another glutamate modulator with growing evidence. Particularly useful when NAC alone isn't sufficient.",
      dosing: "5-20mg daily, titrated slowly",
      notes: "2023 data shows promising results. Can be combined with NAC.",
      highlight: "Emerging First-Line"
    }
  ];

  // Additional Medications
  const additionalMeds = [
    { name: "Olanzapine (Zyprexa)", note: "For severe/refractory cases. Significant evidence but metabolic concerns." },
    { name: "Aripiprazole (Abilify)", note: "Useful as augmentation. Better side effect profile than olanzapine." },
    { name: "Naltrexone", note: "For patients who experience a 'rush' or pleasure from pulling." },
    { name: "Clomipramine", note: "Oldest evidence but requires cardiac monitoring. Reserved for refractory cases." }
  ];

  // What Doesn't Work
  const ineffectiveMeds = [
    { name: "SSRIs alone", reason: "Unlike OCD, trichotillomania doesn't respond to serotonin-focused medications" },
    { name: "Standard antidepressants", reason: "May help comorbid depression/anxiety but not the pulling itself" },
    { name: "Benzodiazepines", reason: "May actually increase disinhibition and worsen pulling" }
  ];

  // Therapy Types
  const therapyTypes = [
    {
      name: "Habit Reversal Training (HRT)",
      icon: RefreshCw,
      components: [
        "Awareness training: Learning to notice the urge and behavior",
        "Competing response: Substituting an incompatible behavior (clenching fists)",
        "Social support: Enlisting help from family/friends"
      ],
      description: "The most studied behavioral treatment for trichotillomania. Teaches awareness and substitution."
    },
    {
      name: "Comprehensive Behavioral Model (ComB)",
      icon: Target,
      components: [
        "S = Sensory: Fidget toys, textured objects, alternative sensory input",
        "C = Cognitive: Challenging 'permission-giving' thoughts",
        "A = Affective: Emotion regulation, distress tolerance",
        "M = Motor: Habit blockers, barrier methods, competing responses",
        "P = Place: Environmental modifications, changing patterns"
      ],
      description: "A comprehensive approach that addresses all factors maintaining pulling behavior."
    },
    {
      name: "Acceptance and Commitment Therapy (ACT)",
      icon: Heart,
      components: [
        "'Urge surfing': Riding out urges without acting",
        "Acceptance of uncomfortable sensations",
        "Values-based motivation for change",
        "Defusion from unhelpful thoughts"
      ],
      description: "Helpful for those who find HRT too rigid. Focuses on values and acceptance."
    },
    {
      name: "DBT Skills",
      icon: Waves,
      components: [
        "TIPP skills for immediate distress",
        "Emotional regulation strategies",
        "Interpersonal effectiveness",
        "Mindfulness practices"
      ],
      description: "Dialectical Behavior Therapy skills for emotional regulation and distress tolerance."
    }
  ];

  // Special Considerations
  const specialConsiderations = [
    {
      title: "Children & Adolescents",
      icon: Baby,
      content: [
        "'Baby Trich' (ages 0-4): Often self-limiting and may resolve without intervention",
        "School-age children: May need school accommodations (504 plans)",
        "Family involvement is critical for treatment success",
        "NAC is the safest medication option for children",
        "Avoid shame-based approaches—normalize and support"
      ]
    },
    {
      title: "Women's Health",
      icon: HeartPulse,
      content: [
        "Menstrual cycle connection: Many women notice worsening during luteal phase",
        "Pregnancy considerations: NAC has limited safety data; behavioral therapy preferred",
        "Postpartum: High-risk period for worsening—proactive planning recommended",
        "Hormonal treatments may be worth exploring for cycle-related worsening"
      ]
    },
    {
      title: "Adults with Long-Standing TTM",
      icon: Clock,
      content: [
        "Hair restoration: Wait until sustained remission before considering",
        "Accumulated shame: Addressing decades of secrecy is part of treatment",
        "It's never too late: Meaningful improvement possible at any age",
        "Realistic expectations: Focus on reduction and management, not perfection"
      ]
    },
    {
      title: "Comorbidities",
      icon: Sparkles,
      content: [
        "ADHD: Stimulants can worsen pulling—non-stimulant alternatives exist",
        "OCD: Different treatment needs; may require separate interventions",
        "Depression/Anxiety: SSRIs help these but not TTM itself",
        "Other BFRBs: Often treat together with similar approaches"
      ]
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has treated thousands of patients with hair pulling and related conditions over three decades."
    },
    {
      icon: Brain,
      title: "BFRB Specialist",
      description: "Deep understanding of trichotillomania, skin picking, and the full spectrum of body-focused repetitive behaviors."
    },
    {
      icon: Pill,
      title: "Medication Expertise",
      description: "Knows which medications work (NAC, memantine) and which don't (SSRIs alone). No trial-and-error guessing."
    },
    {
      icon: Shield,
      title: "Compassionate Care",
      description: "Zero judgment. We understand the shame and secrecy. You'll be treated with dignity and understanding."
    },
    {
      icon: Target,
      title: "Treatment-Resistant Focus",
      description: "Extensive experience with complex cases that haven't responded to previous treatments."
    },
    {
      icon: MapPin,
      title: "Two Convenient Locations",
      description: "Offices in Cincinnati, Ohio and Fort Wright, Kentucky serving the Greater Cincinnati region."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What causes trichotillomania?",
      answer: "Trichotillomania is a neurobiological condition involving dysregulation in brain circuits that govern habit formation, impulse control, and reward processing. It's NOT a character flaw, a sign of weakness, or simply a 'bad habit' you should be able to stop. Research shows differences in glutamate signaling and connections between the cortex and basal ganglia. There's also a genetic component—it tends to run in families."
    },
    {
      question: "Is this just a 'bad habit' I should be able to stop?",
      answer: "Absolutely not. If willpower alone could stop trichotillomania, you would have stopped long ago. This is a recognized medical condition in the DSM-5-TR, classified among Obsessive-Compulsive and Related Disorders. The brain circuits involved are not fully under voluntary control. Treatment works by targeting the underlying neurobiology, not by trying harder."
    },
    {
      question: "Will my hair grow back?",
      answer: "In most cases, yes. Hair follicles are remarkably resilient and typically recover once pulling stops. Regrowth can take 3-6 months to become noticeable. However, after many years of pulling from the same area, some follicles may be permanently damaged. The good news: even partial reduction in pulling often allows significant regrowth."
    },
    {
      question: "Why don't regular antidepressants work for trichotillomania?",
      answer: "Unlike OCD (which responds to SSRIs), trichotillomania involves different neurochemistry. The glutamate system plays a more important role than serotonin in hair pulling. This is why N-Acetylcysteine (NAC) and memantine—which modulate glutamate—are more effective than traditional antidepressants. SSRIs may help comorbid depression or anxiety, but they don't address the pulling itself."
    },
    {
      question: "What is NAC and is it safe?",
      answer: "N-Acetylcysteine (NAC) is an amino acid supplement that modulates glutamate signaling in the brain. It has the best evidence base of any medication for trichotillomania. Side effects are minimal (occasional GI upset). It's available over-the-counter and has been used safely for decades for other conditions. Typical dose is 1200-2400mg daily."
    },
    {
      question: "How long does treatment take?",
      answer: "Most people see improvement within 3-6 months of starting combined treatment (behavioral therapy plus medication). However, trichotillomania often requires ongoing management rather than a 'cure.' Many people achieve long periods with minimal or no pulling, but may need to re-engage with treatment strategies during stressful periods. The skills you learn are for life."
    },
    {
      question: "Can children be treated for trichotillomania?",
      answer: "Yes, with age-appropriate approaches. 'Baby trich' (ages 0-4) often resolves on its own without intervention. For older children and adolescents, behavioral therapy with family involvement is the primary treatment. NAC is the safest medication option if needed. The key is avoiding shame-based approaches and normalizing the condition while working toward change."
    },
    {
      question: "What if I've tried therapy before and it didn't work?",
      answer: "Most general therapists aren't trained in the specific techniques that work for trichotillomania. If your previous therapy was talk therapy focused on 'why' you pull, or standard CBT not adapted for BFRBs, you haven't tried what actually works. Habit Reversal Training (HRT) and the Comprehensive Behavioral Model (ComB) are specialized approaches with the best evidence."
    },
    {
      question: "Is trichotillomania related to OCD?",
      answer: "Trichotillomania is classified in the same diagnostic category as OCD (Obsessive-Compulsive and Related Disorders), but they're distinct conditions with different neurobiology. Key differences: OCD involves intrusive thoughts and anxiety-driven compulsions; TTM involves urges and often pleasure/relief. OCD responds to SSRIs; TTM does not. Treatment protocols differ significantly."
    },
    {
      question: "What about hair eating (trichophagia)?",
      answer: "About 5-20% of people with trichotillomania also eat the pulled hair (trichophagia). This is important to assess because swallowed hair can form hairballs (trichobezoars) that may require medical attention. If you eat the hair you pull, please mention this—it doesn't change how I view you, but it affects treatment planning and may require additional monitoring."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trichotillomania Treatment Cincinnati | Hair Pulling Disorder Expert | Dr. Arnold Shapiro</title>
        <meta name="description" content="Expert trichotillomania (hair pulling disorder) treatment in Cincinnati. Board-certified psychiatrist with 35+ years experience. NAC, behavioral therapy, and treatment-resistant protocols. Compassionate care." />
        <meta name="keywords" content="trichotillomania treatment Cincinnati, hair pulling disorder Cincinnati, TTM treatment, hair pulling psychiatrist, NAC for trichotillomania, BFRB treatment Cincinnati, body-focused repetitive behavior, trich treatment Ohio, hair pulling disorder Kentucky" />
        <link rel="canonical" href={`${window.location.origin}/trichotillomania`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Trichotillomania Treatment Cincinnati | Hair Pulling Disorder Expert" />
        <meta property="og:description" content="Expert trichotillomania treatment with 35+ years experience. NAC, behavioral therapy, and treatment-resistant protocols. Compassionate care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/trichotillomania`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(trichotillomaniaSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-primary/5 via-background to-teal-50/50 py-16 lg:py-24">
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
                  <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200">
                    <Brain className="w-4 h-4 mr-1" />
                    BFRB Specialist
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <UserCheck className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Trichotillomania Treatment in{" "}
                  <span className="text-primary">Cincinnati</span>
                </h1>
                
                <p className="text-xl text-teal-700 font-semibold">
                  Expert, Compassionate Care for Hair Pulling Disorder
                </p>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    If you&apos;re struggling with an overwhelming urge to pull your hair—whether from your scalp, 
                    eyebrows, eyelashes, or elsewhere—you&apos;re not alone, and <strong>this is not your fault</strong>.
                  </p>
                  <p>
                    Trichotillomania is a neurobiological condition, not a character flaw or a &quot;bad habit&quot; 
                    you should be able to stop through willpower. With specialized treatment, meaningful 
                    improvement is absolutely possible.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Award className="w-4 h-4 text-healing" />
                    <span className="font-medium">35+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Stethoscope className="w-4 h-4 text-healing" />
                    <span className="font-medium">Board Certified</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Users className="w-4 h-4 text-healing" />
                    <span className="font-medium">9,000+ Patients Helped</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    onClick={() => document.getElementById('treatment')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn About Treatment
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large bg-gradient-to-br from-teal-100 to-green-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Leaf className="w-32 h-32 text-teal-400 mx-auto mb-4" />
                    <p className="text-teal-700 font-medium text-lg">Growth & Recovery</p>
                    <p className="text-teal-600 text-sm">Compassionate, Expert Care</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-healing" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Zero Judgment</p>
                      <p className="text-sm text-muted-foreground">Compassionate Care Always</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Understanding Trichotillomania */}
        <section id="understanding" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    <Brain className="w-4 h-4 mr-1" />
                    Understanding the Condition
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Understanding Trichotillomania
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Trichotillomania</strong> (trick-oh-till-oh-MAY-nee-ah), 
                      also called Hair Pulling Disorder, is a condition characterized by recurrent, compulsive 
                      urges to pull out one&apos;s own hair, resulting in noticeable hair loss.
                    </p>
                    <p>
                      This is a <strong className="text-foreground">real medical condition</strong> with a 
                      neurobiological basis—not a &quot;bad habit,&quot; a sign of weakness, or something you should 
                      be able to &quot;just stop.&quot; The brain circuits involved in habit formation, impulse control, 
                      and reward processing work differently in people with trichotillomania.
                    </p>
                    <p>
                      In the DSM-5-TR, trichotillomania is classified as an <strong className="text-foreground">
                      Obsessive-Compulsive and Related Disorder</strong>—related to OCD but with distinct 
                      features and treatment needs.
                    </p>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                      <h4 className="font-semibold text-amber-900 mb-2">The Shame Cycle</h4>
                      <p className="text-amber-800">
                        Most people with trichotillomania suffer in silence for years—hiding their hair loss, 
                        avoiding situations where it might be noticed, and feeling deeply ashamed. This secrecy 
                        makes it worse. <strong>You are not alone, and help is available.</strong>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-teal-50 border-teal-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-teal-900 mb-4">Key Statistics</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-teal-700">Prevalence</span>
                          <span className="font-bold text-teal-900">1-2% of population</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-teal-700">Gender Ratio</span>
                          <span className="font-bold text-teal-900">~4:1 Female:Male</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-teal-700">Typical Onset</span>
                          <span className="font-bold text-teal-900">Ages 10-13</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-teal-700">Avg. Years Before Help</span>
                          <span className="font-bold text-teal-900">10+ years</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6 text-center">
                      <Heart className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="font-bold text-green-900 mb-2">You Are Not Alone</h3>
                      <p className="text-green-700 text-sm">
                        Millions of people worldwide share this struggle. With proper treatment, 
                        most achieve significant improvement. Recovery is possible.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Recognizing the Signs */}
        <section id="signs" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Know the Signs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Recognizing the Signs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trichotillomania involves more than just hair pulling—it&apos;s a complex pattern of behaviors and experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {signsCards.map((card, index) => (
                <Card key={index} className={`bg-card border-2 ${card.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.color.split(' ')[0]}`}>
                        <card.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {card.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Subtypes of Hair Pulling */}
        <section id="subtypes" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <Layers className="w-4 h-4 mr-1" />
                Subtypes
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Subtypes of Hair Pulling
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Understanding your pulling pattern helps guide treatment. Many people have both types (mixed).
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
              {subtypes.map((subtype, index) => (
                <Card key={index} className={`bg-gradient-to-br ${subtype.color} border-2 ${subtype.borderColor}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{subtype.title}</CardTitle>
                    <p className="text-muted-foreground">{subtype.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Characteristics:</h4>
                      <ul className="space-y-1">
                        {subtype.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Common Triggers:</h4>
                      <div className="flex flex-wrap gap-2">
                        {subtype.triggers.map((trigger, idx) => (
                          <Badge key={idx} variant="outline" className="bg-white/50">{trigger}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-sm"><strong>Treatment Focus:</strong> {subtype.treatment}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">The SCAMP Framework</h3>
                  <p className="text-muted-foreground mb-4">
                    We use the SCAMP model to identify all factors maintaining your pulling:
                  </p>
                  <div className="grid grid-cols-5 gap-4 text-center">
                    {[
                      { letter: "S", word: "Sensory", desc: "Touch/texture needs" },
                      { letter: "C", word: "Cognitive", desc: "Thoughts/beliefs" },
                      { letter: "A", word: "Affective", desc: "Emotions/feelings" },
                      { letter: "M", word: "Motor", desc: "Physical patterns" },
                      { letter: "P", word: "Place", desc: "Environment/setting" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="font-bold text-purple-700">{item.letter}</span>
                        </div>
                        <p className="font-semibold text-sm">{item.word}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 5: Related Conditions (BFRBs) */}
        <section id="bfrbs" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Sparkles className="w-4 h-4 mr-1" />
                Related Conditions
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Body-Focused Repetitive Behaviors (BFRBs)
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trichotillomania is part of a family of related conditions. Dr. Shapiro treats the full spectrum.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {relatedConditions.map((condition, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <condition.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{condition.name}</h3>
                    <p className="text-sm text-muted-foreground">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto mt-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <p className="text-green-800 font-medium">
                    The same treatment approaches often work across BFRBs. If you struggle with multiple 
                    behaviors, we address them together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 6: Treatment Approach */}
        <section id="treatment" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                <Target className="w-4 h-4 mr-1" />
                Our Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Treatment Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Effective treatment follows a personalized, stepped approach based on your specific needs.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {treatmentSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      {index < treatmentSteps.length - 1 && (
                        <div className="w-0.5 h-12 bg-green-300 mx-auto mt-2" />
                      )}
                    </div>
                    <Card className="flex-grow bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon className="w-5 h-5 text-green-600" />
                          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Card className="bg-gradient-to-r from-teal-50 to-green-50 border-teal-200 inline-block">
                  <CardContent className="p-6">
                    <p className="text-teal-800 font-medium">
                      <Sparkles className="w-5 h-5 inline mr-2" />
                      Every treatment plan is personalized to your specific pulling pattern, triggers, and life circumstances.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Medications */}
        <section id="medications" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Pill className="w-4 h-4 mr-1" />
                Medication Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Medications for Trichotillomania
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Targeted medications can significantly reduce urges and support behavioral treatment.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="first-line" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="first-line">First-Line</TabsTrigger>
                  <TabsTrigger value="additional">Additional Options</TabsTrigger>
                  <TabsTrigger value="ineffective">What Doesn&apos;t Work</TabsTrigger>
                  <TabsTrigger value="resistant">Treatment-Resistant</TabsTrigger>
                </TabsList>
                
                <TabsContent value="first-line">
                  <div className="space-y-4">
                    {firstLineMeds.map((med, index) => (
                      <Card key={index} className="bg-card border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-semibold text-foreground">{med.name}</h4>
                            <Badge className="bg-green-100 text-green-700">{med.highlight}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{med.description}</p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-blue-50 rounded-lg p-3">
                              <strong className="text-blue-900">Typical Dosing:</strong>
                              <p className="text-blue-700">{med.dosing}</p>
                            </div>
                            <div className="bg-amber-50 rounded-lg p-3">
                              <strong className="text-amber-900">Notes:</strong>
                              <p className="text-amber-700">{med.notes}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="additional">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Additional Medication Options</h4>
                      <div className="space-y-3">
                        {additionalMeds.map((med, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                            <Pill className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium text-foreground">{med.name}</span>
                              <span className="text-muted-foreground"> — {med.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="ineffective">
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5" />
                        What Doesn&apos;t Work for Trichotillomania
                      </h4>
                      <div className="space-y-3">
                        {ineffectiveMeds.map((med, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium text-red-900">{med.name}</span>
                              <p className="text-red-700 text-sm">{med.reason}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-red-800 text-sm">
                        <strong>This is why expertise matters:</strong> Many patients have been tried on 
                        ineffective medications for years before finding a specialist who understands 
                        trichotillomania&apos;s unique neurobiology.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="resistant">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Treatment-Resistant Protocols</h4>
                      <div className="space-y-4">
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h5 className="font-medium text-purple-900 mb-2">Combination Strategies</h5>
                          <p className="text-purple-800 text-sm">NAC + Memantine + behavioral therapy. Sometimes adding low-dose atypical antipsychotic.</p>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-4">
                          <h5 className="font-medium text-indigo-900 mb-2">rTMS (Transcranial Magnetic Stimulation)</h5>
                          <p className="text-indigo-800 text-sm">Emerging evidence for non-invasive brain stimulation targeting habit circuits.</p>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-4">
                          <h5 className="font-medium text-teal-900 mb-2">Clomipramine</h5>
                          <p className="text-teal-800 text-sm">Oldest evidence but requires cardiac monitoring. Reserved for severe refractory cases.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Important Note</h4>
                    <p className="text-amber-800">
                      <strong>No medication is FDA-approved for trichotillomania</strong>—all use is off-label. 
                      This is why expertise matters. I know which medications have the best evidence and how 
                      to use them effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Specialized Therapy */}
        <section id="therapy" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200 mb-4">
                <BookOpen className="w-4 h-4 mr-1" />
                Specialized Therapy
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Evidence-Based Behavioral Treatments
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Behavioral therapy is the foundation of trichotillomania treatment. These specialized approaches 
                work—generic talk therapy doesn&apos;t.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {therapyTypes.map((therapy, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                          <therapy.icon className="w-6 h-6 text-teal-600" />
                        </div>
                        <CardTitle className="text-lg">{therapy.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{therapy.description}</p>
                      <h5 className="font-semibold text-foreground mb-2">Key Components:</h5>
                      <ul className="space-y-2">
                        {therapy.components.map((component, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{component}</span>
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

        {/* Section 9: Special Considerations */}
        <section id="special" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-pink-100 text-pink-700 border-pink-200 mb-4">
                <Users className="w-4 h-4 mr-1" />
                Special Populations
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Special Considerations
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trichotillomania affects people differently across life stages and circumstances.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {specialConsiderations.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setOpenSpecial(openSpecial === index ? null : index)}
                  >
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-pink-600" />
                        </div>
                        {item.title}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openSpecial === index ? 'rotate-180' : ''}`} />
                    </CardTitle>
                  </CardHeader>
                  {openSpecial === index && (
                    <CardContent>
                      <ul className="space-y-2">
                        {item.content.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Why Choose Dr. Shapiro */}
        <section id="why-us" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Award className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Dr. Shapiro
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience and expertise matter when treating trichotillomania.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        </section>

        {/* Section 11: FAQs */}
        <section id="faq" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <MessageCircle className="w-4 h-4 mr-1" />
                Common Questions
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span className="flex items-start gap-2">
                        <span className="text-primary">Q:</span>
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </CardTitle>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-healing">A:</span> {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-muted/30">
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

        {/* Section 12: Final CTA */}
        <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 via-background to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Take the First Step Toward Freedom
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                You&apos;ve struggled alone long enough. Trichotillomania is treatable, and you deserve 
                compassionate, expert care. <strong>Recovery is possible—let&apos;s start the journey together.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
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
                Same-day response to your questions • Accepting new patients • Compassionate, judgment-free care
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
