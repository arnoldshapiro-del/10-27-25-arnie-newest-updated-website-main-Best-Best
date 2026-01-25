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
  TrendingUp,
  TrendingDown,
  Scale,
  Moon,
  Sun,
  Battery,
  BatteryLow,
  BatteryFull,
  AlertTriangle,
  Sparkles,
  Target,
  Lightbulb,
  RefreshCw,
  Baby,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Waves,
  CircleDot,
  ArrowUpDown,
  Flame,
  Snowflake,
  UserCheck,
  ClipboardList,
  BookOpen,
  Home,
  BedDouble,
  Dumbbell,
  Coffee,
  Wind
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Bipolar Disorder Page Schema
const bipolarSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Bipolar Disorder Treatment in Cincinnati | Mood Disorder Psychiatrist",
    "description": "Expert bipolar disorder treatment from board-certified psychiatrist with 35+ years experience. Comprehensive medication management for mania, depression, and treatment-resistant cases. Cincinnati & Fort Wright locations.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Bipolar Disorder",
      "alternateName": ["Manic Depression", "Bipolar I", "Bipolar II", "Cyclothymia"],
      "signOrSymptom": [
        "Manic episodes",
        "Depressive episodes",
        "Mood swings",
        "Changes in energy and activity",
        "Sleep disturbances",
        "Impulsive behavior"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about bipolar disorder symptoms, types, diagnosis, and treatment options including mood stabilizers, atypical antipsychotics, and therapy"
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
        "name": "What causes bipolar disorder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bipolar disorder results from a combination of genetic, neurobiological, and environmental factors. It tends to run in families, and brain imaging shows differences in structure and function. Stressful life events can trigger episodes in those predisposed."
        }
      },
      {
        "@type": "Question",
        "name": "Can bipolar disorder be cured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While there is no cure for bipolar disorder, it is highly treatable. With proper medication, therapy, and lifestyle management, most people achieve significant stability and lead fulfilling lives."
        }
      },
      {
        "@type": "Question",
        "name": "Will I need medication for life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most people with bipolar disorder benefit from long-term medication to prevent episodes. Stopping medication is the most common cause of relapse. However, treatment is individualized, and we work together to find the right long-term plan."
        }
      }
    ]
  }
];

export default function BipolarDisorder() {
  const [openFaq, setOpenFaq] = useState(null);

  // Bipolar Types
  const bipolarTypes = [
    {
      title: "Bipolar I Disorder",
      icon: Flame,
      color: "bg-red-100 text-red-700 border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      features: [
        "At least one manic episode lasting 7+ days (or requiring hospitalization)",
        "Manic episodes may include psychotic features",
        "Depressive episodes common but not required for diagnosis",
        "Most severe form of bipolar disorder"
      ]
    },
    {
      title: "Bipolar II Disorder",
      icon: Waves,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      features: [
        "Hypomanic episodes (less severe than full mania, lasting 4+ days)",
        "At least one major depressive episode",
        "No full manic episodes (which would change diagnosis to Bipolar I)",
        "Depression tends to dominate the clinical picture"
      ]
    },
    {
      title: "Cyclothymic Disorder",
      icon: Activity,
      color: "bg-purple-100 text-purple-700 border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      features: [
        "Chronic fluctuating mood over 2+ years",
        "Hypomanic symptoms and depressive symptoms",
        "Symptoms don't meet full criteria for hypomania or major depression",
        "Never symptom-free for more than 2 months"
      ]
    },
    {
      title: "Other Specified/Unspecified",
      icon: CircleDot,
      color: "bg-gray-100 text-gray-700 border-gray-200",
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      features: [
        "Bipolar symptoms that don't fit neatly into above categories",
        "Short-duration hypomanic episodes with depression",
        "Substance/medication-induced bipolar disorder",
        "Bipolar due to another medical condition"
      ]
    }
  ];

  // Manic/Hypomanic Symptoms
  const manicSymptoms = [
    "Abnormally elevated, expansive, or irritable mood",
    "Decreased need for sleep (feels rested after 3-4 hours)",
    "Racing thoughts or flight of ideas",
    "Rapid, pressured speech",
    "Increased goal-directed activity or agitation",
    "Distractibility",
    "Grandiosity or inflated self-esteem",
    "Excessive involvement in risky activities (spending sprees, sexual indiscretions, poor business decisions)"
  ];

  // Depressive Symptoms
  const depressiveSymptoms = [
    "Persistent sad, empty, or hopeless mood",
    "Loss of interest or pleasure in activities",
    "Significant weight changes or appetite changes",
    "Insomnia or hypersomnia",
    "Fatigue or loss of energy",
    "Feelings of worthlessness or excessive guilt",
    "Difficulty concentrating or making decisions",
    "Thoughts of death or suicide"
  ];

  // Differential Diagnosis Comparisons
  const differentialDiagnosis = [
    {
      condition: "Major Depression",
      bipolar: "History of manic/hypomanic episodes; episodic pattern; family history of bipolar",
      other: "No manic/hypomanic episodes; may be single episode or recurrent",
      key: "Ask about past elevated mood, decreased sleep with high energy, impulsive behavior"
    },
    {
      condition: "ADHD",
      bipolar: "Episodic symptoms; mood elevation/depression; onset often in late teens/early 20s",
      other: "Chronic, persistent symptoms since childhood; no mood episodes",
      key: "ADHD is constant; bipolar is episodic. Can co-occur (up to 20% of bipolar patients have ADHD)"
    },
    {
      condition: "Borderline Personality Disorder",
      bipolar: "Episodes last days to months; mood shifts independent of relationships; grandiosity in mania",
      other: "Mood shifts within hours; triggered by interpersonal events; chronic emptiness; self-harm",
      key: "BPD mood is reactive to relationships; bipolar mood episodes are more autonomous"
    },
    {
      condition: "Anxiety Disorders",
      bipolar: "Anxiety may spike during episodes but mood symptoms dominate",
      other: "Anxiety is primary; no manic/depressive episodes",
      key: "Anxiety is extremely common in bipolar (>50%) but should not be the sole diagnosis"
    }
  ];

  // Treatment Approach Features
  const treatmentApproach = [
    {
      icon: ClipboardList,
      title: "Thorough Diagnostic Evaluation",
      description: "Comprehensive assessment including mood history, family history, medical workup, and screening for co-occurring conditions."
    },
    {
      icon: Target,
      title: "Individualized Treatment Planning",
      description: "No cookie-cutter approaches. Your treatment plan is tailored to your specific bipolar type, symptom pattern, and life circumstances."
    },
    {
      icon: Pill,
      title: "Expert Medication Management",
      description: "Careful selection and monitoring of mood stabilizers, antipsychotics, and adjunctive medications based on 35+ years of experience."
    },
    {
      icon: Users,
      title: "Coordinated Care",
      description: "Collaboration with therapists, primary care providers, and family members to ensure comprehensive support."
    }
  ];

  // Mood Stabilizers
  const moodStabilizers = [
    {
      name: "Lithium",
      description: "The gold standard for bipolar disorder. Highly effective for preventing both manic and depressive episodes. Uniquely neuroprotective and reduces suicide risk.",
      considerations: "Requires blood monitoring; narrow therapeutic window; thyroid and kidney monitoring"
    },
    {
      name: "Valproate (Depakote)",
      description: "Effective for acute mania and maintenance. Works quickly. Good for mixed episodes and rapid cycling.",
      considerations: "Teratogenic (avoid in women of childbearing potential); weight gain; tremor"
    },
    {
      name: "Lamotrigine (Lamictal)",
      description: "Excellent for preventing depressive episodes. Does not cause weight gain. Well-tolerated long-term.",
      considerations: "Must be titrated slowly to avoid rash; less effective for mania; takes weeks to reach therapeutic dose"
    },
    {
      name: "Carbamazepine (Tegretol)",
      description: "Alternative mood stabilizer. May be helpful when lithium and valproate aren't tolerated.",
      considerations: "Drug interactions; blood monitoring required; can affect other medications"
    }
  ];

  // Atypical Antipsychotics for Mania
  const antipsychoticsMania = [
    { name: "Olanzapine (Zyprexa)", note: "Very effective; weight gain concern" },
    { name: "Quetiapine (Seroquel)", note: "Effective for mania and depression" },
    { name: "Risperidone (Risperdal)", note: "Good efficacy; movement side effects possible" },
    { name: "Aripiprazole (Abilify)", note: "Weight-neutral; activating" },
    { name: "Ziprasidone (Geodon)", note: "Weight-neutral; take with food" },
    { name: "Asenapine (Saphris)", note: "Sublingual; rapid onset" }
  ];

  // Atypical Antipsychotics for Depression
  const antipsychoticsDepression = [
    { name: "Quetiapine (Seroquel)", note: "FDA-approved for bipolar depression" },
    { name: "Lurasidone (Latuda)", note: "FDA-approved; weight-neutral; take with food" },
    { name: "Lumateperone (Caplyta)", note: "Newer option; favorable side effect profile" },
    { name: "Cariprazine (Vraylar)", note: "FDA-approved for bipolar depression and mania" },
    { name: "Olanzapine-Fluoxetine (Symbyax)", note: "Combination product; weight gain" }
  ];

  // Therapy Approaches
  const therapyApproaches = [
    {
      name: "Interpersonal and Social Rhythm Therapy (IPSRT)",
      description: "Focuses on stabilizing daily routines (sleep, meals, activities) and addressing interpersonal problems. Particularly effective for bipolar disorder.",
      icon: Clock
    },
    {
      name: "Family-Focused Therapy (FFT)",
      description: "Involves family members in treatment. Improves communication, reduces expressed emotion, and helps families support their loved one.",
      icon: Users
    },
    {
      name: "Cognitive Behavioral Therapy for Bipolar (CBT-BP)",
      description: "Addresses negative thought patterns, helps identify early warning signs, and develops coping strategies for mood episodes.",
      icon: Brain
    }
  ];

  // Lifestyle Factors
  const lifestyleFactors = [
    {
      title: "Sleep Hygiene",
      icon: Moon,
      tips: [
        "Maintain consistent sleep and wake times—even on weekends",
        "Sleep disruption is the #1 trigger for manic episodes",
        "Avoid all-nighters and shift work if possible",
        "Address sleep apnea if present"
      ],
      critical: true
    },
    {
      title: "Routine Maintenance",
      icon: Calendar,
      tips: [
        "Regular meal times help stabilize mood",
        "Consistent daily schedule reduces episode risk",
        "Social rhythms (regular activities with others) are protective",
        "Avoid major schedule disruptions when possible"
      ],
      critical: false
    },
    {
      title: "Stress Management",
      icon: Wind,
      tips: [
        "Identify personal stress triggers",
        "Build in recovery time after stressful events",
        "Practice relaxation techniques",
        "Learn to say no to excessive demands"
      ],
      critical: false
    },
    {
      title: "Substance Avoidance",
      icon: Coffee,
      tips: [
        "Alcohol destabilizes mood and interferes with medication",
        "Cannabis can trigger mania in vulnerable individuals",
        "Stimulants (cocaine, amphetamines) commonly trigger mania",
        "Even caffeine can disrupt sleep and mood"
      ],
      critical: true
    }
  ];

  // Special Considerations
  const specialConsiderations = [
    {
      title: "Women's Health & Pregnancy",
      icon: Baby,
      content: [
        "Hormonal fluctuations can trigger mood episodes (postpartum period is high-risk)",
        "Some medications (valproate, carbamazepine) are teratogenic—avoid in pregnancy",
        "Lamotrigine and certain antipsychotics may be safer options during pregnancy",
        "Breastfeeding considerations vary by medication",
        "Planning pregnancy? We discuss medication adjustments BEFORE conception"
      ]
    },
    {
      title: "Young Adults & Adolescents",
      icon: GraduationCap,
      content: [
        "Bipolar disorder often first appears in late teens/early 20s",
        "May initially look like depression, ADHD, or 'normal' teen behavior",
        "Academic stress and sleep deprivation can trigger first episodes",
        "Early treatment improves long-term prognosis",
        "Family involvement is particularly important"
      ]
    },
    {
      title: "Older Adults",
      icon: Heart,
      content: [
        "Late-onset bipolar disorder may indicate underlying medical condition",
        "Medical comorbidities affect medication selection",
        "Lower medication doses often needed",
        "Increased sensitivity to side effects",
        "Cognitive changes may accompany long-standing bipolar disorder"
      ]
    },
    {
      title: "Co-occurring Conditions",
      icon: Sparkles,
      content: [
        "ADHD co-occurs in up to 20% of bipolar patients",
        "Anxiety disorders are present in >50% (treat both)",
        "Substance use disorders affect up to 50% (complicates treatment)",
        "Thyroid disorders can mimic or worsen bipolar symptoms",
        "Metabolic syndrome requires monitoring and management"
      ]
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has treated over 9,000 patients, with extensive expertise in complex mood disorders including treatment-resistant bipolar disorder."
    },
    {
      icon: Brain,
      title: "Diagnostic Expertise",
      description: "Bipolar disorder is often misdiagnosed. We take the time to get the diagnosis right, distinguishing bipolar from depression, ADHD, and personality disorders."
    },
    {
      icon: Pill,
      title: "Medication Mastery",
      description: "Expert knowledge of mood stabilizers, antipsychotics, and combination strategies. We know what works and how to minimize side effects."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "When you're struggling, you won't wait days to hear back. Your questions are answered almost always the same day."
    },
    {
      icon: Shield,
      title: "Long-Term Partnership",
      description: "Bipolar disorder requires ongoing management. We're here for the long haul, adjusting treatment as your life and needs change."
    },
    {
      icon: MapPin,
      title: "Two Convenient Locations",
      description: "Offices in Cincinnati, Ohio and Fort Wright, Kentucky to serve the greater Cincinnati and Northern Kentucky area."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What causes bipolar disorder?",
      answer: "Bipolar disorder results from a combination of genetic, neurobiological, and environmental factors. It tends to run in families—if you have a first-degree relative with bipolar disorder, your risk is 10x higher than the general population. Brain imaging shows differences in structure and function, particularly in areas regulating emotion. Stressful life events, sleep deprivation, and substance use can trigger episodes in those predisposed."
    },
    {
      question: "Can bipolar disorder be cured?",
      answer: "While there is no cure for bipolar disorder, it is highly treatable. With proper medication, therapy, and lifestyle management, most people achieve significant stability and lead fulfilling lives. The goal is to prevent episodes, reduce their severity when they occur, and maintain functioning between episodes. Many people with bipolar disorder have successful careers, relationships, and families."
    },
    {
      question: "Will I need medication for life?",
      answer: "Most people with bipolar disorder benefit from long-term medication to prevent episodes. Stopping medication is the most common cause of relapse—studies show 80-90% relapse rates within 2 years of stopping. However, treatment is individualized. Some people do well with lower doses during stable periods. We work together to find the right long-term plan that balances effectiveness with quality of life."
    },
    {
      question: "What about antidepressants?",
      answer: "Antidepressants alone can be dangerous in bipolar disorder—they can trigger manic episodes or rapid cycling. If antidepressants are used, they're almost always combined with a mood stabilizer or antipsychotic. For bipolar depression, we typically prefer quetiapine, lurasidone, lumateperone, or lamotrigine over traditional antidepressants."
    },
    {
      question: "How long until I feel better?",
      answer: "For acute mania, improvement often begins within days to a week with appropriate treatment. For bipolar depression, improvement typically takes 2-6 weeks. Finding the right long-term medication regimen may take several months of adjustment. We move as quickly as safely possible while monitoring for side effects."
    },
    {
      question: "Can I still work and go to school?",
      answer: "Absolutely. With effective treatment, most people with bipolar disorder maintain careers and academic pursuits. You may need accommodations during episodes or recovery periods. Managing stress and maintaining sleep become important priorities. Many highly successful people have bipolar disorder—the key is consistent treatment."
    },
    {
      question: "What if my medication stops working?",
      answer: "Sometimes medications lose effectiveness over time, or life changes require treatment adjustments. This is normal and expected. We have many options—adjusting doses, switching medications, adding augmentation agents. Treatment resistance doesn't mean hopelessness; it means we haven't found the right combination yet."
    },
    {
      question: "Is bipolar disorder hereditary?",
      answer: "Bipolar disorder has strong genetic components. If one parent has bipolar disorder, a child has about 10% risk. If both parents have it, risk rises to 40%. However, genetics isn't destiny—many people with family history never develop the condition, and many with bipolar have no family history. Knowing your family history helps us monitor for early signs."
    },
    {
      question: "What about pregnancy and bipolar medications?",
      answer: "This requires careful planning. Some medications (especially valproate) cause birth defects and must be avoided. Others (lamotrigine, certain antipsychotics) may be safer options. Ideally, we discuss pregnancy plans BEFORE conception to optimize your medication regimen. Untreated bipolar disorder during pregnancy also carries risks—we balance all factors to protect both mother and baby."
    },
    {
      question: "How is bipolar different from being 'moody'?",
      answer: "Normal moodiness involves reactions to events—you feel happy when good things happen, sad when bad things happen, and moods shift within hours. Bipolar episodes last days to months, often occur without clear triggers, and involve dramatic changes in energy, sleep, thinking, and behavior—not just mood. During mania, you might sleep 3 hours and feel great; during depression, you might sleep 12 hours and still be exhausted. The intensity and duration distinguish it from normal mood variation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bipolar Disorder Treatment | Dr. Arnold Shapiro | Cincinnati & Northern Kentucky</title>
        <meta name="description" content="Expert bipolar disorder treatment from board-certified psychiatrist with 35+ years experience. Comprehensive medication management for mania, depression, and treatment-resistant cases. Cincinnati & Fort Wright locations." />
        <meta name="keywords" content="bipolar disorder treatment Cincinnati, bipolar psychiatrist Cincinnati, manic depression treatment, mood stabilizer doctor, bipolar medication management, bipolar II treatment, cyclothymia treatment, lithium doctor Cincinnati, bipolar Northern Kentucky" />
        <link rel="canonical" href={`${window.location.origin}/bipolar-disorder`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Bipolar Disorder Treatment in Cincinnati | Dr. Arnold Shapiro" />
        <meta property="og:description" content="Expert bipolar disorder treatment with 35+ years experience. Comprehensive medication management for mania, depression, and treatment-resistant cases." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/bipolar-disorder`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(bipolarSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-primary/5 via-background to-purple-50/50 py-16 lg:py-24">
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
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                    <Scale className="w-4 h-4 mr-1" />
                    Mood Disorder Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <UserCheck className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Bipolar Disorder Treatment in{" "}
                  <span className="text-primary">Cincinnati</span> & Northern Kentucky
                </h1>
                
                <p className="text-xl text-purple-700 font-semibold">
                  Expert psychiatric care for bipolar disorder with 35+ years of experience treating mood instability
                </p>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    The highs feel incredible—until they spin out of control. The lows feel endless—like you&apos;ll 
                    never surface. And the people around you can&apos;t understand why you can&apos;t &quot;just be stable.&quot;
                  </p>
                  <p>
                    If this sounds familiar, you may be living with bipolar disorder. <strong>You&apos;re not broken. 
                    You&apos;re not weak. And with the right treatment, stability is absolutely achievable.</strong>
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Comprehensive diagnostic evaluation</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Expert medication management</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Treatment-resistant case expertise</span>
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
                    Schedule a Consultation
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
                    src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Supportive bipolar disorder treatment consultation" 
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

        {/* Section 1: Understanding Bipolar Disorder */}
        <section id="understanding" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    <Heart className="w-4 h-4 mr-1" />
                    Understanding Your Experience
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Understanding Bipolar Disorder
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Bipolar disorder is a brain-based illness that causes dramatic shifts in mood, energy, 
                      activity levels, and the ability to carry out daily tasks. These aren&apos;t ordinary mood 
                      swings—they&apos;re intense episodes that can last days, weeks, or months.
                    </p>
                    <p>
                      During manic episodes, you might feel euphoric, invincible, or irritable—with racing thoughts, 
                      little need for sleep, and impulsive decisions you later regret. During depressive episodes, 
                      you may feel hopeless, exhausted, and unable to function.
                    </p>
                    <p className="text-primary font-medium">
                      You&apos;re not alone. Bipolar disorder affects approximately 2.8% of adults—about 7 million 
                      Americans. With proper treatment, most people achieve significant stability.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-card border-border">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-primary">2.8%</p>
                        <p className="text-sm text-muted-foreground">of adults affected</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card border-border">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-primary">25</p>
                        <p className="text-sm text-muted-foreground">average age of onset</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                      <Scale className="w-32 h-32 text-purple-400" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-red-100 rounded-full p-4">
                      <TrendingUp className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-blue-100 rounded-full p-4">
                      <TrendingDown className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Bipolar Disorder */}
        <section id="types" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <Activity className="w-4 h-4 mr-1" />
                Types & Classifications
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Types of Bipolar Disorder
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Bipolar disorder exists on a spectrum. Understanding your specific type helps guide treatment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {bipolarTypes.map((type, index) => (
                <Card key={index} className={`bg-card border-2 ${type.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${type.iconBg} rounded-full flex items-center justify-center`}>
                        <type.icon className={`w-6 h-6 ${type.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Recognizing the Signs */}
        <section id="symptoms" className="py-16 bg-muted/30">
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
                Bipolar disorder involves distinct episodes of mania/hypomania and depression.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Manic/Hypomanic Episodes */}
              <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-red-900">Manic/Hypomanic Episodes</CardTitle>
                      <p className="text-sm text-red-700">Elevated mood, energy, and activity</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {manicSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Flame className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-100 rounded-lg p-3">
                    <p className="text-red-800 text-sm">
                      <strong>Duration:</strong> Mania lasts 7+ days (or any duration if hospitalization required). 
                      Hypomania lasts 4+ days but is less severe.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Depressive Episodes */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-blue-900">Depressive Episodes</CardTitle>
                      <p className="text-sm text-blue-700">Low mood, energy, and interest</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {depressiveSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Snowflake className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Duration:</strong> Depressive episodes last 2+ weeks. 
                      Many people with bipolar spend more time depressed than manic.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mixed Features */}
            <div className="max-w-4xl mx-auto mt-8">
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowUpDown className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">Mixed Features</h3>
                      <p className="text-purple-800">
                        Some people experience symptoms of both mania and depression simultaneously—feeling 
                        energized and agitated while also feeling hopeless and suicidal. These &quot;mixed episodes&quot; 
                        are particularly dangerous and require careful treatment, as antidepressants can worsen them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: How Bipolar Differs from Other Conditions */}
        <section id="differential" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Lightbulb className="w-4 h-4 mr-1" />
                Differential Diagnosis
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How Bipolar Differs from Other Conditions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Bipolar disorder is frequently misdiagnosed. Getting the right diagnosis is crucial for effective treatment.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-4">
              {differentialDiagnosis.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Bipolar vs. {item.condition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <h4 className="font-semibold text-purple-800 text-sm mb-1">Bipolar:</h4>
                        <p className="text-purple-700 text-sm">{item.bipolar}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.condition}:</h4>
                        <p className="text-gray-700 text-sm">{item.other}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-green-800 text-sm mb-1">Key Distinction:</h4>
                        <p className="text-green-700 text-sm">{item.key}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Comprehensive Treatment Approach */}
        <section id="treatment" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Our Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive Treatment Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over 35 years of experience and 9,000+ patients treated, we provide thorough, 
                individualized care for bipolar disorder.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {treatmentApproach.map((item, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Medications for Bipolar Disorder */}
        <section id="medications" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Pill className="w-4 h-4 mr-1" />
                Medication Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Medications for Bipolar Disorder
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Medication is the cornerstone of bipolar treatment. We have many effective options.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="stabilizers" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="stabilizers">Mood Stabilizers</TabsTrigger>
                  <TabsTrigger value="antipsychotics">Atypical Antipsychotics</TabsTrigger>
                  <TabsTrigger value="resistant">Treatment-Resistant</TabsTrigger>
                </TabsList>
                
                <TabsContent value="stabilizers">
                  <div className="space-y-4">
                    {moodStabilizers.map((med, index) => (
                      <Card key={index} className="bg-card border-border">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-2">{med.name}</h4>
                          <p className="text-muted-foreground mb-2">{med.description}</p>
                          <p className="text-sm text-amber-700 bg-amber-50 rounded p-2">
                            <strong>Considerations:</strong> {med.considerations}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="antipsychotics">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-red-50 border-red-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          For Mania
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {antipsychoticsMania.map((med, index) => (
                            <li key={index} className="text-sm">
                              <span className="font-medium text-foreground">{med.name}</span>
                              <span className="text-muted-foreground"> — {med.note}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                          <TrendingDown className="w-5 h-5" />
                          For Depression
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {antipsychoticsDepression.map((med, index) => (
                            <li key={index} className="text-sm">
                              <span className="font-medium text-foreground">{med.name}</span>
                              <span className="text-muted-foreground"> — {med.note}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="resistant">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">When Standard Treatments Aren&apos;t Enough</h4>
                      <div className="space-y-4">
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h5 className="font-medium text-purple-900 mb-1">Clozapine</h5>
                          <p className="text-purple-800 text-sm">The most effective medication for treatment-resistant bipolar disorder. Requires blood monitoring but can be life-changing for those who haven&apos;t responded to other medications.</p>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-4">
                          <h5 className="font-medium text-indigo-900 mb-1">Combination Therapy</h5>
                          <p className="text-indigo-800 text-sm">Sometimes optimal treatment requires combining medications—such as lithium plus an antipsychotic plus lamotrigine (&quot;triple therapy&quot;). We carefully balance effectiveness with side effect burden.</p>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-4">
                          <h5 className="font-medium text-teal-900 mb-1">Electroconvulsive Therapy (ECT)</h5>
                          <p className="text-teal-800 text-sm">For severe, treatment-resistant episodes (especially with psychosis or suicidality), ECT remains highly effective. Modern ECT is safe and often provides rapid relief when medications haven&apos;t worked.</p>
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
                      Medication selection is highly individualized based on your symptom profile, bipolar type, 
                      side effect tolerance, medical history, and personal preferences. What works for one person 
                      may not work for another. We take time to find the right fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Therapy & Lifestyle Management */}
        <section id="therapy" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200 mb-4">
                <BookOpen className="w-4 h-4 mr-1" />
                Beyond Medication
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Therapy & Lifestyle Management
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Medication is essential, but therapy and lifestyle changes significantly improve outcomes.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Therapy Approaches */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {therapyApproaches.map((therapy, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                        <therapy.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <CardTitle className="text-lg">{therapy.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{therapy.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Lifestyle Factors */}
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Critical Lifestyle Factors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {lifestyleFactors.map((factor, index) => (
                  <Card key={index} className={`bg-card border-border ${factor.critical ? 'ring-2 ring-red-200' : ''}`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <factor.icon className={`w-5 h-5 ${factor.critical ? 'text-red-500' : 'text-teal-500'}`} />
                        {factor.title}
                        {factor.critical && (
                          <Badge variant="destructive" className="text-xs">Critical</Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {factor.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{tip}</span>
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

        {/* Section 8: Special Considerations */}
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
                Bipolar disorder affects people differently across life stages and circumstances.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {specialConsiderations.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index + 100 ? null : index + 100)}
                  >
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-pink-600" />
                        </div>
                        {item.title}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === index + 100 ? 'rotate-180' : ''}`} />
                    </CardTitle>
                  </CardHeader>
                  {openFaq === index + 100 && (
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

        {/* Section 9: Why Choose Dr. Shapiro */}
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
                Experience and expertise matter when treating complex mood disorders.
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

        {/* Section 10: FAQs */}
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

        {/* Section 11: Final CTA */}
        <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-background to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Find Stability?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Living with untreated bipolar disorder means living at the mercy of your mood episodes. 
                <strong> It doesn&apos;t have to be that way.</strong> With proper treatment, most people achieve 
                significant stability and lead fulfilling lives. Take the first step today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Consultation
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
