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
  AlertTriangle,
  Sparkles,
  Target,
  RefreshCw,
  Baby,
  HeartPulse,
  Hand,
  Fingerprint,
  Waves,
  CircleDot,
  UserCheck,
  BookOpen,
  Leaf,
  XCircle,
  CheckCircle,
  Layers,
  Settings,
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
          "text": "Trichotillomania results from a combination of genetic, neurobiological, and environmental factors. Brain imaging studies show differences in the circuits controlling impulses and habits. There's often a family history of hair pulling, skin picking, or OCD-spectrum conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Will my hair grow back after stopping trichotillomania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, yes. Hair follicles are remarkably resilient and can regrow hair even after years of pulling. However, very long-term pulling can sometimes cause permanent damage to follicles. The sooner you get effective treatment, the better your chances for full regrowth."
        }
      },
      {
        "@type": "Question",
        "name": "Why don't regular antidepressants work for trichotillomania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard SSRIs are effective for depression, anxiety, and OCD—but they generally don't work for trichotillomania itself. That's because TTM involves different brain circuits (glutamate and dopamine in the habit/reward systems). This is why we use glutamate modulators like NAC and Memantine instead."
        }
      },
      {
        "@type": "Question",
        "name": "What is NAC and is it safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "N-Acetylcysteine (NAC) is an amino acid derivative that modulates glutamate, a brain chemical involved in habit formation. It has an excellent safety profile and is well-tolerated by most people. In a landmark 2009 study, 56% of patients responded to NAC versus only 16% on placebo."
        }
      }
    ]
  }
];

export default function Trichotillomania() {
  const [openFaq, setOpenFaq] = useState(null as number | null);
  const [openSpecial, setOpenSpecial] = useState(null as number | null);

  // Signs/Symptoms Cards
  const signsCards = [
    {
      title: "The Pulling Behavior",
      icon: Hand,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      items: [
        "Scalp (most common location)",
        "Eyebrows (thinned or patchy brows)",
        "Eyelashes (may result in complete absence)",
        "Beard/facial hair (common in men)",
        "Pubic area, arms, legs (less common but occurs)"
      ]
    },
    {
      title: "The Urge and Relief",
      icon: Zap,
      color: "bg-purple-100 text-purple-700 border-purple-200",
      items: [
        "Building sense of tension before pulling",
        "Feeling of relief or gratification after pulling",
        "May experience pleasure during the pull",
        "Many pull WITHOUT any awareness (automatic)",
        "Often during sedentary activities"
      ]
    },
    {
      title: "The Rituals",
      icon: Repeat,
      color: "bg-amber-100 text-amber-700 border-amber-200",
      items: [
        "Searching for a particular type of hair",
        "Examining the root or bulb after pulling",
        "Running hair across lips or face",
        "Biting or eating hair (trichophagia)",
        "Occurs in 5-20% of cases"
      ]
    },
    {
      title: "The Consequences",
      icon: AlertCircle,
      color: "bg-red-100 text-red-700 border-red-200",
      items: [
        "Noticeable hair loss or bald patches",
        "Significant distress or shame",
        "Avoidance of social situations",
        "Interference with work, school, relationships",
        "Hours spent concealing hair loss"
      ]
    }
  ];

  // Subtypes
  const subtypes = [
    {
      title: "Automatic Pulling (The \"Trance\")",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-300",
      description: "Pulling happens outside of awareness, often during sedentary activities",
      characteristics: [
        "Pulling happens outside of awareness",
        "Often during reading, watching TV, driving, studying",
        "May not realize pulling until seeing the hair",
        "May involve a 'trance-like' state",
        "Often occurs in specific environments"
      ],
      triggers: ["Reading", "Watching TV", "Driving", "Studying", "Lying in bed"],
      treatment: "Stimulus control, barriers, awareness devices (wearables that detect hand motion), environmental modification"
    },
    {
      title: "Focused Pulling (The \"Urge\")",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-300",
      description: "Pulling is driven by an urge, tension, or uncomfortable sensation",
      characteristics: [
        "Person is fully aware they're pulling",
        "Driven by urge, tension, or uncomfortable sensation",
        "May be triggered by stress, anxiety, boredom",
        "Often involves searching for particular hair type",
        "Provides emotional relief or regulation"
      ],
      triggers: ["Stress", "Anxiety", "Boredom", "Specific sensations", "Strong emotions"],
      treatment: "Habit Reversal Training, cognitive restructuring, emotional regulation skills, competing responses"
    }
  ];

  // Related BFRBs
  const relatedConditions = [
    {
      name: "Excoriation (Skin Picking)",
      description: "20-30% of people with trichotillomania also pick their skin. Similar urge/relief cycle. Good news: Same medications (NAC, Memantine) help skin picking too.",
      icon: Fingerprint
    },
    {
      name: "Onychophagia (Nail Biting)",
      description: "Severe nail biting often co-occurs with hair pulling. Treatment approaches overlap significantly.",
      icon: Hand
    },
    {
      name: "Other BFRBs",
      description: "Cheek or lip biting, nose picking (rhinotillexomania), hair twirling/manipulation without pulling.",
      icon: CircleDot
    },
    {
      name: "How TTM Differs from OCD",
      description: "OCD responds well to SSRIs; trichotillomania generally does NOT. Different brain circuits are involved. This is why seeing a specialist matters.",
      icon: Brain
    }
  ];

  // Treatment Approach Steps
  const treatmentSteps = [
    {
      step: 1,
      title: "Behavioral Therapy (Foundation)",
      description: "Specialized behavioral therapy is the cornerstone of treatment. This is not 'talk therapy'—it involves specific, skills-based techniques proven effective for hair pulling.",
      icon: BookOpen
    },
    {
      step: 2,
      title: "Medication (When Needed)",
      description: "Unlike many psychiatric conditions, trichotillomania does not respond well to standard antidepressants. We use targeted medications that address the specific brain chemistry involved—primarily glutamate modulators.",
      icon: Pill
    },
    {
      step: 3,
      title: "Combined Approach",
      description: "For moderate to severe cases, combining behavioral therapy with medication produces the best outcomes.",
      icon: Layers
    },
    {
      step: 4,
      title: "Treatment-Resistant Protocols",
      description: "For cases that don't respond to standard approaches, we have additional options including combination medication strategies and emerging treatments.",
      icon: Settings
    }
  ];

  // First-Line Medications
  const firstLineMeds = [
    {
      name: "N-Acetylcysteine (NAC)",
      highlight: "Gold Standard",
      description: "NAC is our gold-standard first-line medication for trichotillomania. It's an amino acid derivative that modulates glutamate, a brain chemical involved in habit formation. By normalizing glutamate levels in the brain's reward and habit circuits, it reduces the rigid, compulsive drive to pull.",
      evidence: "In a landmark 2009 study by Dr. Jon Grant, 56% of patients responded to NAC versus only 16% on placebo. This was a breakthrough—no medication had shown such clear benefit before.",
      dosing: "Start at 600mg twice daily, increase to 1200mg twice daily (2400mg total)",
      timeline: "Benefits typically emerge over 8-12 weeks",
      sideEffects: "Generally well-tolerated; some GI effects (bloating) possible",
      safety: "Excellent safety profile; appropriate for adults and adolescents. Use pharmaceutical-grade NAC for best results."
    },
    {
      name: "Memantine (Namenda)",
      highlight: "Emerging First-Line",
      description: "Originally developed for Alzheimer's disease, memantine works on glutamate receptors differently than NAC. It has emerged as a first-line option based on impressive 2023 research.",
      evidence: "In a 2023 double-blind study of 100 patients with trichotillomania and skin picking, 60.5% showed significant improvement on memantine versus only 8.3% on placebo. This is the strongest evidence base of any current medication.",
      dosing: "Start at 5mg daily, increase gradually to 10-20mg daily",
      timeline: "Gradual titration over several weeks",
      sideEffects: "Well-tolerated in younger patients (unlike in elderly Alzheimer's patients). Main side effect: occasional dizziness",
      safety: "Can be combined with NAC for enhanced effect"
    }
  ];

  // Additional Medications
  const additionalMeds = [
    { name: "Olanzapine (Zyprexa)", note: "For severe/treatment-resistant cases. In a controlled trial, 85% of patients responded—exceptional rate. Tradeoff: significant risk of weight gain and metabolic effects. Reserved for cases where other options have failed." },
    { name: "Aripiprazole (Abilify)", note: "Good augmentation option with less metabolic risk than olanzapine. Often added when NAC or memantine provides partial benefit." },
    { name: "Naltrexone", note: "For patients who describe a 'thrill,' 'rush,' or distinct pleasure from pulling. Works by blocking the endorphin 'reward' associated with the pull." }
  ];

  // What Doesn't Work
  const ineffectiveMeds = [
    { name: "SSRIs (Prozac, Zoloft, Lexapro, etc.)", reason: "Standard antidepressants are generally ineffective for 'pure' trichotillomania. Meta-analyses consistently show limited efficacy. TTM is fundamentally a striatal (habit-brain) disorder, not primarily a serotonin problem. If you've been on SSRIs for years without improvement in pulling, this is why." },
    { name: "Inositol", reason: "Despite some early case reports, a rigorous 2017 study showed NO benefit over placebo. Don't waste time or money on this." },
    { name: "Stimulants", reason: "If you have ADHD and trichotillomania, stimulant medications (Adderall, Vyvanse) can WORSEN hair pulling. We have alternative ADHD treatments that don't aggravate trichotillomania." }
  ];

  // Therapy Types
  const therapyTypes = [
    {
      name: "Habit Reversal Training (HRT)",
      icon: RefreshCw,
      description: "HRT is the gold-standard behavioral treatment for trichotillomania, proven effective in multiple controlled trials.",
      components: [
        "Awareness Training: Learning to recognize when you're pulling (or about to pull), identifying warning signs and triggers",
        "Competing Response Training: Learning a specific action incompatible with pulling (e.g., clench fist tightly for 1-2 minutes when urge arises)",
        "Stimulus Control: Modifying environment to reduce triggers (covering mirrors, removing tweezers, wearing gloves)",
        "Social Support: Involving family members appropriately, developing 'secret signal' systems instead of verbal reminders"
      ]
    },
    {
      name: "Comprehensive Behavioral Model (ComB)",
      icon: Target,
      description: "ComB is the sophisticated evolution of HRT, developed specifically for trichotillomania. It addresses all five SCAMP domains.",
      components: [
        "Sensory Interventions: Textured tape on fingertips, fidget toys, brushes for scalp stimulation without extraction",
        "Cognitive Interventions: Challenging 'permission thoughts' ('Just one won't hurt'), recognizing there's no such thing as 'just one'",
        "Affective Interventions: Emotional regulation skills, distress tolerance techniques, addressing boredom and 'zoning out'",
        "Motor Interventions: Weighted wristbands, finger cots/bandages on scanning fingers, barrier methods (hats, gloves)",
        "Place Interventions: Environmental modification, covering mirrors, changing lighting in high-risk areas"
      ]
    },
    {
      name: "Acceptance and Commitment Therapy (ACT)",
      icon: Heart,
      description: "For patients who find HRT too rigid or frustrating, ACT offers an alternative approach focusing on acceptance and values.",
      components: [
        "Urge Surfing: Urges are like waves—they rise, peak, and fall. Observe without acting. 'Watch the wave' without being swept away.",
        "Cognitive Defusion: Instead of 'I have to pull this hair,' reframe as 'I am having the thought that I need to pull.' Creates distance.",
        "Values-Based Action: TTM steals time from what matters. Reconnecting with values provides motivation stronger than willpower."
      ]
    },
    {
      name: "DBT Skills for Emotional Regulation",
      icon: Waves,
      description: "When urges are driven by intense emotions, DBT skills can help manage distress in the moment.",
      components: [
        "T = Temperature: Dip face in ice water to activate dive reflex and calm nervous system",
        "I = Intense exercise: 60 seconds of burpees or running to discharge the urge",
        "P = Paced breathing: 4-7-8 breathing pattern",
        "P = Paired muscle relaxation: Tense and release muscle groups"
      ]
    }
  ];

  // Special Considerations
  const specialConsiderations = [
    {
      title: "Children & Adolescents",
      icon: Baby,
      content: [
        "'Baby Trich' (Ages 0-4): Hair pulling in very young children (often during breastfeeding or thumb-sucking) is usually self-limiting. Don't draw attention to it. Provide tactile alternatives (satin ribbon, 'taggie' blanket). Usually resolves on its own.",
        "School-Age Children and Teens: Habit Reversal Training is the treatment of choice. NAC is the safest medication option. Avoid antipsychotics unless severe due to metabolic risks.",
        "School accommodations may be needed (permission to wear hats, fidget tools, separate testing).",
        "The single biggest predictor of treatment failure in children is PARENTAL CRITICISM. Saying 'stop pulling' increases anxiety, which increases pulling. Parents need to become 'cheerleaders' not 'police.'"
      ]
    },
    {
      title: "Women's Health Considerations",
      icon: HeartPulse,
      content: [
        "The Menstrual Connection: Many women notice worsening during the late luteal phase (week before period) due to progesterone withdrawal affecting brain chemistry.",
        "Management: Track your cycle, identify 'high-risk' days, consider temporarily increasing NAC dose, use extra barriers prophylactically, keep hair wet/gelled in evenings during this time.",
        "Pregnancy: Behavioral therapy is the only risk-free intervention. NAC is generally considered safe but discuss with your doctor. SSRIs (Sertraline, Fluoxetine) have extensive safety data if needed for comorbid depression."
      ]
    },
    {
      title: "Adults with Long-Standing Trichotillomania",
      icon: Clock,
      content: [
        "It's never too late to get help. Even long-standing habits can be changed with proper treatment.",
        "Years of accumulated shame can be addressed as part of treatment.",
        "Hair Restoration Timing: Do NOT pursue hair transplantation until you have achieved 12-24 months of remission. Patients often pull out the expensive grafts.",
        "While working on behavior: Minoxidil for scalp regrowth, Latisse (bimatoprost) for eyelash regrowth, Microblading for eyebrows (provides appearance without tactile trigger)."
      ]
    },
    {
      title: "Managing Comorbidities",
      icon: Sparkles,
      content: [
        "ADHD and Trichotillomania: Challenging because stimulants often WORSEN pulling. Options: Non-stimulant ADHD medications (Guanfacine/Intuniv, Atomoxetine/Strattera). If stimulants required, use lowest dose plus NAC/Memantine.",
        "OCD and Trichotillomania: These require different treatments. High-dose SSRI for OCD thoughts, Memantine or NAC for TTM behavior.",
        "Depression and Trichotillomania: SSRIs help depression, add NAC or Memantine for pulling. Avoid Bupropion (Wellbutrin) which can worsen pulling in some patients."
      ]
    },
    {
      title: "Medical Complications: Trichophagia",
      icon: AlertTriangle,
      content: [
        "If you eat the hair you pull (trichophagia), be aware of trichobezoar (hairball) risk. Hair cannot be digested and can accumulate in the stomach.",
        "Warning signs: Abdominal pain (especially after eating), nausea/vomiting, weight loss, feeling full quickly, palpable mass in abdomen, severe bad breath (halitosis).",
        "Rapunzel Syndrome: In severe cases, hair mass can extend from stomach into intestines, causing obstruction requiring surgical intervention.",
        "If you eat hair, please mention this during your appointment. We can discuss monitoring and prevention strategies."
      ]
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has over 35 years of psychiatric experience and has treated over 9,000 patients throughout his career."
    },
    {
      icon: Stethoscope,
      title: "Board-Certified Specialist",
      description: "Board-certified in both Adult Psychiatry and Child and Adolescent Psychiatry."
    },
    {
      icon: Brain,
      title: "Knows What Works",
      description: "Understands that SSRIs alone don't work for trichotillomania. Uses evidence-based glutamate modulators (NAC, Memantine) instead."
    },
    {
      icon: Pill,
      title: "Full Medication Access",
      description: "Has access to the full range of medication options. Knows which medications to try—and which to avoid."
    },
    {
      icon: Target,
      title: "Treatment-Resistant Focus",
      description: "Many patients come after years of ineffective treatment elsewhere. Specializes in complex and treatment-resistant cases."
    },
    {
      icon: Shield,
      title: "Compassionate Care",
      description: "Trichotillomania carries enormous shame. Provides a judgment-free environment where you can discuss struggles openly."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What causes trichotillomania?",
      answer: "Trichotillomania results from a combination of genetic, neurobiological, and environmental factors. Brain imaging studies show differences in the circuits controlling impulses and habits. There's often a family history of hair pulling, skin picking, or OCD-spectrum conditions. Stress can trigger or worsen episodes, but it's not the underlying cause—the brain wiring is."
    },
    {
      question: "Is this just a 'bad habit' I should be able to stop on my own?",
      answer: "No. Trichotillomania is a recognized medical condition in the DSM-5-TR, classified among Obsessive-Compulsive and Related Disorders. Telling yourself to 'just stop' is like telling someone with diabetes to 'just make more insulin.' The urge is driven by brain circuits that don't respond to willpower alone. That's why proper treatment—behavioral therapy and often medication—is necessary."
    },
    {
      question: "Will my hair grow back?",
      answer: "In most cases, yes. Hair follicles are remarkably resilient and can regrow hair even after years of pulling. However, very long-term pulling (decades) can sometimes cause permanent damage to follicles. The sooner you get effective treatment, the better your chances for full regrowth. For eyelashes and eyebrows, medications like Latisse can accelerate regrowth."
    },
    {
      question: "Why didn't antidepressants work for me?",
      answer: "This is extremely common. Standard SSRIs (Prozac, Zoloft, Lexapro) are effective for depression, anxiety, and OCD—but they generally don't work for trichotillomania itself. That's because TTM involves different brain circuits (glutamate and dopamine in the habit/reward systems) than what SSRIs target. This is why we use glutamate modulators like NAC and Memantine instead."
    },
    {
      question: "What is NAC and is it safe?",
      answer: "N-Acetylcysteine (NAC) is an amino acid derivative that's been used medically for decades (originally for respiratory conditions). It modulates glutamate, a brain chemical involved in habit formation. NAC has an excellent safety profile and is well-tolerated by most people. It's available over-the-counter and has been used safely for decades. Typical dose is 1200-2400mg daily. The main side effects are mild GI symptoms (bloating, gas) which usually improve over time."
    },
    {
      question: "How long does treatment take?",
      answer: "Most patients see initial improvement within 8-12 weeks of starting proper treatment. However, trichotillomania is typically a chronic condition that requires ongoing management. Think of it like managing diabetes or high blood pressure—with good treatment, you can achieve long periods of control, but you'll need to maintain your strategies. Relapse is common and normal; it doesn't mean treatment failed."
    },
    {
      question: "Can children be treated?",
      answer: "Yes. Habit Reversal Training is highly effective in children and adolescents. NAC is the safest medication option for young patients. For very young children (under 4), 'baby trich' often resolves on its own with minimal intervention—mostly avoiding drawing attention to it and providing tactile alternatives."
    },
    {
      question: "What if I've tried therapy before and it didn't work?",
      answer: "Many patients have had 'therapy' that wasn't the right kind. Standard talk therapy or general counseling doesn't work for trichotillomania. What works is specific, skills-based behavioral treatment: Habit Reversal Training (HRT) or the Comprehensive Behavioral Model (ComB). If you haven't tried these specific approaches with a trained provider, you haven't really tried behavioral treatment for TTM."
    },
    {
      question: "Is trichotillomania related to OCD?",
      answer: "Yes and no. Trichotillomania is classified in the 'OCD and Related Disorders' category in the DSM-5, recognizing their connection. Both involve repetitive behaviors and difficulties with impulse control. However, they respond to different treatments: OCD responds well to SSRIs, while trichotillomania generally doesn't. They can co-occur, requiring a combined treatment approach."
    },
    {
      question: "What about hair eating (trichophagia)?",
      answer: "About 5-20% of people with trichotillomania eat the hair they pull. This is important to address because hair cannot be digested and can accumulate in the stomach, potentially causing a hairball (bezoar) that may require surgery. If you eat hair, please mention this—we can discuss monitoring and treatment strategies. Signs of a bezoar include abdominal pain, nausea, feeling full quickly, and weight loss."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trichotillomania Treatment Cincinnati | Hair Pulling Disorder Expert | Dr. Arnold Shapiro</title>
        <meta name="description" content="Expert trichotillomania (hair pulling disorder) treatment in Cincinnati. Board-certified psychiatrist with 35+ years experience. NAC, Memantine, behavioral therapy, and treatment-resistant protocols. Compassionate care." />
        <meta name="keywords" content="trichotillomania treatment Cincinnati, hair pulling disorder Cincinnati, TTM treatment, hair pulling psychiatrist, NAC for trichotillomania, Memantine trichotillomania, BFRB treatment Cincinnati, body-focused repetitive behavior, trich treatment Ohio, hair pulling disorder Kentucky, Habit Reversal Training" />
        <link rel="canonical" href={`${window.location.origin}/trichotillomania`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Trichotillomania Treatment Cincinnati | Hair Pulling Disorder Expert" />
        <meta property="og:description" content="Expert trichotillomania treatment with 35+ years experience. NAC, Memantine, behavioral therapy, and treatment-resistant protocols. Compassionate care." />
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
                  Trichotillomania Treatment:{" "}
                  <span className="text-primary">Expert Care for Hair Pulling Disorder</span>
                </h1>
                
                <p className="text-xl text-teal-700 font-semibold">
                  Compassionate, Evidence-Based Treatment from a Board-Certified Psychiatrist
                </p>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    If you struggle with pulling your hair, you&apos;re not alone—and you&apos;re not &quot;crazy.&quot; 
                    Trichotillomania is a <strong className="text-foreground">real neurobiological condition</strong> that 
                    affects 1-2% of the population. With proper treatment, you can regain control and 
                    find relief from this often misunderstood disorder.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Award className="w-4 h-4 text-healing" />
                    <span className="font-medium">35+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Stethoscope className="w-4 h-4 text-healing" />
                    <span className="font-medium">Board-Certified Adult & Child Psychiatrist</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Users className="w-4 h-4 text-healing" />
                    <span className="font-medium">Over 9,000 Patients Treated</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Target className="w-4 h-4 text-healing" />
                    <span className="font-medium">Treatment-Resistant Expertise</span>
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
                      <p className="text-sm text-muted-foreground">You deserve compassion, not criticism</p>
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
                    What Is Trichotillomania?
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Trichotillomania</strong> (trick-oh-till-oh-MAY-nee-uh), 
                      also called hair pulling disorder, is a condition where a person feels compelled to pull out 
                      their own hair. This can involve hair from the scalp, eyebrows, eyelashes, beard, or any other 
                      part of the body.
                    </p>
                    <p>
                      This is <strong className="text-foreground">not a &quot;bad habit&quot; or a sign of weakness</strong>. 
                      Trichotillomania is classified in the DSM-5-TR as an Obsessive-Compulsive and Related Disorder. 
                      It involves real differences in brain chemistry and structure—specifically in the circuits that 
                      control impulses and habits.
                    </p>
                    
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          You Are Not Alone
                        </h4>
                        <p className="text-green-800">
                          Trichotillomania affects approximately <strong>0.5% to 2% of the population</strong>—that's 
                          millions of people. It typically begins in late childhood or early adolescence, often around 
                          ages 10-13, though it can start at any age. Women are affected more often than men, though 
                          this may partly reflect who seeks treatment.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-teal-50 border-teal-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-teal-900 mb-4">Key Statistics</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-teal-700">Prevalence</span>
                          <span className="font-bold text-teal-900">0.5-2% of population</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-teal-700">Typical Onset</span>
                          <span className="font-bold text-teal-900">Ages 10-13</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-teal-700">Gender</span>
                          <span className="font-bold text-teal-900">More common in women</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-teal-700">Avg. Years in Silence</span>
                          <span className="font-bold text-teal-900">Often years or decades</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* The Shame Cycle */}
              <div className="mt-12">
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-amber-900 mb-4 text-xl flex items-center gap-2">
                      <AlertCircle className="w-6 h-6" />
                      The Shame Cycle
                    </h3>
                    <div className="text-amber-800 space-y-3">
                      <p>Most people with trichotillomania suffer in silence, often for years or even decades. The shame and embarrassment can be overwhelming:</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Spending hours styling hair to cover bald spots</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Avoiding swimming, wind, or activities that might reveal hair loss</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Feeling &quot;crazy&quot; or &quot;out of control&quot;</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Hiding the behavior from family, friends, and doctors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Believing you should be able to &quot;just stop&quot;</span>
                        </li>
                      </ul>
                      <p className="font-semibold mt-4 text-amber-900 bg-white/50 p-3 rounded-lg">
                        Here&apos;s what I want you to understand: <strong>This condition is not your fault.</strong> Your brain 
                        is wired differently in the circuits that control habits and impulses. With proper treatment, 
                        improvement is absolutely possible.
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
                Trichotillomania involves recurrent pulling of hair resulting in noticeable hair loss. 
                Understanding the full pattern helps guide treatment.
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
                Understanding your pulling pattern is crucial for effective treatment. Most people have elements of both types.
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
            
            {/* SCAMP Framework */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3 text-xl">The SCAMP Framework</h3>
                  <p className="text-muted-foreground mb-4">
                    Modern treatment uses the <strong>SCAMP model</strong> to identify your specific triggers. 
                    By identifying your unique SCAMP profile, we can target treatment precisely where it will be most effective.
                  </p>
                  <div className="grid grid-cols-5 gap-4 text-center">
                    {[
                      { letter: "S", word: "Sensory", desc: "Seeking certain texture or sensation?" },
                      { letter: "C", word: "Cognitive", desc: "'Permission' thoughts ('Just one won't hurt')?" },
                      { letter: "A", word: "Affective", desc: "Emotions (anxiety, boredom, anger) driving it?" },
                      { letter: "M", word: "Motor", desc: "Certain postures or hand positions?" },
                      { letter: "P", word: "Place", desc: "Specific environments trigger episodes?" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="font-bold text-purple-700 text-lg">{item.letter}</span>
                        </div>
                        <p className="font-semibold text-sm">{item.word}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
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
                Trichotillomania belongs to a family of conditions called <strong>Body-Focused Repetitive Behaviors</strong>. 
                These share similar brain mechanisms and often respond to similar treatments.
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
                    behaviors, we address them together with a comprehensive approach.
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
                Trichotillomania requires a comprehensive, individualized approach. There is no single &quot;magic bullet&quot;—the 
                most effective treatment combines behavioral therapy with targeted medication when needed.
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
              
              {/* What Makes Our Approach Different */}
              <div className="mt-12">
                <Card className="bg-gradient-to-r from-teal-50 to-green-50 border-teal-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 text-xl flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-teal-600" />
                      What Makes Our Approach Different
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-teal-800">We understand that SSRIs alone don&apos;t work for trichotillomania</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-teal-800">We use evidence-based behavioral approaches, not just &quot;talk therapy&quot;</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-teal-800">We have access to the full range of medication options</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-teal-800">We know which medications to try—and which to avoid</span>
                      </div>
                      <div className="flex items-start gap-2 md:col-span-2">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-teal-800">We treat the whole person, including comorbid conditions like ADHD, anxiety, and depression</span>
                      </div>
                    </div>
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
                <strong>Important Note:</strong> No medication is FDA-approved specifically for trichotillomania. 
                All prescribing is &quot;off-label.&quot; This is why expertise matters—you need a psychiatrist who knows the research.
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
                  <div className="space-y-6">
                    {firstLineMeds.map((med, index) => (
                      <Card key={index} className="bg-card border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-xl font-semibold text-foreground">{med.name}</h4>
                            <Badge className="bg-green-100 text-green-700">{med.highlight}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{med.description}</p>
                          
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                            <h5 className="font-semibold text-blue-900 mb-1">The Evidence:</h5>
                            <p className="text-blue-800 text-sm">{med.evidence}</p>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <strong className="text-foreground">Dosing:</strong>
                              <p className="text-muted-foreground">{med.dosing}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <strong className="text-foreground">Timeline:</strong>
                              <p className="text-muted-foreground">{med.timeline}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <strong className="text-foreground">Side Effects:</strong>
                              <p className="text-muted-foreground">{med.sideEffects}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <strong className="text-foreground">Safety:</strong>
                              <p className="text-muted-foreground">{med.safety}</p>
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
                      <div className="space-y-4">
                        {additionalMeds.map((med, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                            <Pill className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-foreground">{med.name}</span>
                              <p className="text-muted-foreground text-sm mt-1">{med.note}</p>
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
                        Medications That DON&apos;T Work (and Why)
                      </h4>
                      <div className="space-y-4">
                        {ineffectiveMeds.map((med, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-red-900">{med.name}</span>
                              <p className="text-red-700 text-sm mt-1">{med.reason}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-6 text-red-800 font-medium bg-white/50 p-4 rounded-lg">
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
                      <p className="text-muted-foreground mb-6">When standard approaches don&apos;t work, we have additional options:</p>
                      <div className="space-y-4">
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h5 className="font-semibold text-purple-900 mb-2">The Combination Approach (&quot;Chicago Cocktail&quot;)</h5>
                          <ul className="text-purple-800 text-sm space-y-1">
                            <li>• NAC (glutamate modulation) PLUS</li>
                            <li>• Memantine (NMDA modulation) PLUS</li>
                            <li>• Low-dose antipsychotic (dopamine modulation)</li>
                          </ul>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-4">
                          <h5 className="font-semibold text-indigo-900 mb-2">Emerging Options</h5>
                          <ul className="text-indigo-800 text-sm space-y-1">
                            <li>• rTMS (repetitive transcranial magnetic stimulation) targeting the supplementary motor area</li>
                            <li>• Ketamine protocols for &quot;circuit breaking&quot;</li>
                          </ul>
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
                      This is why expertise matters. Dr. Shapiro knows which medications have the best evidence and how 
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
                <strong>Why Regular "Talk Therapy" Doesn't Work:</strong> Standard counseling or psychotherapy—where you 
                discuss your feelings and life circumstances—is generally ineffective for trichotillomania. This condition 
                requires specific, skills-based behavioral interventions.
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
                Click each section to learn more.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {specialConsiderations.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader 
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
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
                    <CardContent className="pt-0">
                      <ul className="space-y-3">
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
                Expertise That Matters
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Dr. Shapiro
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over <strong>35 years</strong> of experience in psychiatric medication management, 
                Dr. Shapiro brings deep expertise to the treatment of trichotillomania and related conditions.
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
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span className="flex items-start gap-2 pr-4">
                        <span className="text-primary font-bold">Q:</span>
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </CardTitle>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent className="pt-0">
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
                Take the First Step
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                You Don't Have to Live This Way
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Trichotillomania can feel overwhelming and isolating. You may have struggled for years, hiding your 
                pulling and believing nothing could help. But effective treatment exists—treatment based on modern 
                understanding of how this condition actually works in the brain.
              </p>
              <p className="text-lg text-foreground font-medium mb-8">
                Whether you're newly struggling or have dealt with trichotillomania for decades, 
                Dr. Shapiro can help you develop a personalized treatment plan.
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

        {/* Crisis Resources */}
        <section className="py-8 bg-red-50 border-t border-red-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Crisis Resources</h3>
              <p className="text-red-800 mb-4">If you are in crisis or experiencing thoughts of self-harm:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/70 rounded-lg px-4 py-2">
                  <strong className="text-red-900">988 Suicide & Crisis Lifeline:</strong>
                  <span className="text-red-700 ml-2">Call or text 988</span>
                </div>
                <div className="bg-white/70 rounded-lg px-4 py-2">
                  <strong className="text-red-900">Crisis Text Line:</strong>
                  <span className="text-red-700 ml-2">Text HOME to 741741</span>
                </div>
                <div className="bg-white/70 rounded-lg px-4 py-2">
                  <strong className="text-red-900">Emergency:</strong>
                  <span className="text-red-700 ml-2">Call 911</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EmergencyDisclaimer />
      <Footer />
    </>
  );
}
