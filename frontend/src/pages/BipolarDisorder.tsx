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
  AlertTriangle,
  Sparkles,
  Target,
  Lightbulb,
  RefreshCw,
  Baby,
  GraduationCap,
  HeartPulse,
  Waves,
  CircleDot,
  ArrowUpDown,
  Flame,
  Snowflake,
  UserCheck,
  ClipboardList,
  BookOpen,
  Wind,
  Coffee,
  BedDouble,
  XCircle
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
          "text": "Bipolar disorder results from a combination of genetic, neurobiological, and environmental factors. It tends to run in families—if you have a first-degree relative with bipolar disorder, your risk is about 10 times higher than the general population."
        }
      },
      {
        "@type": "Question",
        "name": "Can bipolar disorder be cured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, bipolar disorder cannot be cured, but it can be excellently managed. With proper treatment, many people achieve long periods of mood stability and lead full, productive lives."
        }
      },
      {
        "@type": "Question",
        "name": "Will I need medication for life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most people with Bipolar I Disorder, long-term medication is recommended. The relapse rate after stopping mood stabilizers is very high—over 50% within 6 months."
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
        "Characterized by manic episodes lasting at least 7 days (or requiring hospitalization)",
        "Manic episodes involve elevated mood, dramatically increased energy, reduced need for sleep, racing thoughts, and often impulsive behavior",
        "Depressive episodes typically occur but aren't required for diagnosis",
        "Episodes may include psychotic features (delusions or hallucinations)"
      ]
    },
    {
      title: "Bipolar II Disorder",
      icon: Waves,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      features: [
        "Involves hypomanic episodes (less severe than full mania) lasting at least 4 days",
        "Major depressive episodes are the predominant feature—patients often spend significantly more time depressed than hypomanic",
        "Hypomania may feel productive or pleasant, causing many patients to initially seek help only for depression",
        "Frequently misdiagnosed as major depression, leading to ineffective treatment"
      ]
    },
    {
      title: "Cyclothymic Disorder",
      icon: Activity,
      color: "bg-purple-100 text-purple-700 border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      features: [
        "Chronic fluctuating mood involving numerous periods of hypomanic and depressive symptoms",
        "Symptoms are present for at least 2 years but don't meet full criteria for hypomanic or major depressive episodes",
        "May progress to Bipolar I or II in some individuals",
        "Never symptom-free for more than 2 months"
      ]
    },
    {
      title: "Other Specified Bipolar Disorder",
      icon: CircleDot,
      color: "bg-gray-100 text-gray-700 border-gray-200",
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      features: [
        "Bipolar-type symptoms that don't fit neatly into the above categories",
        "May include shorter episode durations or insufficient symptom numbers",
        "Substance/medication-induced bipolar disorder",
        "Still requires careful clinical attention and treatment"
      ]
    }
  ];

  // Manic/Hypomanic Symptoms
  const manicSymptoms = [
    { symptom: "Decreased need for sleep", detail: "Feeling rested after only 2-4 hours of sleep, or not feeling tired despite no sleep" },
    { symptom: "Elevated or irritable mood", detail: "Feeling unusually happy, confident, or on top of the world—or extremely irritable and agitated" },
    { symptom: "Racing thoughts", detail: "Ideas coming so fast it's hard to keep up; jumping from topic to topic" },
    { symptom: "Pressured speech", detail: "Talking rapidly, being difficult to interrupt, feeling compelled to keep talking" },
    { symptom: "Increased energy and activity", detail: "Taking on multiple projects, feeling you can accomplish anything" },
    { symptom: "Grandiosity", detail: "Inflated self-esteem, believing you have special abilities or are destined for greatness" },
    { symptom: "Impulsive behavior", detail: "Spending sprees, risky investments, sexual indiscretions, reckless driving" },
    { symptom: "Distractibility", detail: "Attention easily pulled to unimportant things" },
    { symptom: "Poor judgment", detail: "Making decisions that seem brilliant in the moment but cause problems later" }
  ];

  // Depressive Symptoms
  const depressiveSymptoms = [
    { symptom: "Persistent sad or empty mood", detail: "Feeling hopeless, helpless, or worthless for weeks at a time" },
    { symptom: "Loss of interest or pleasure", detail: "Activities you once enjoyed feel meaningless" },
    { symptom: "Sleep changes", detail: "Sleeping too much (hypersomnia) or difficulty sleeping (insomnia)" },
    { symptom: "Fatigue and low energy", detail: "Even small tasks feel exhausting; 'leaden paralysis' where arms and legs feel heavy" },
    { symptom: "Difficulty concentrating", detail: "Trouble thinking, making decisions, or remembering things" },
    { symptom: "Appetite changes", detail: "Significant weight loss or gain without dieting" },
    { symptom: "Psychomotor changes", detail: "Moving and speaking slowly, or feeling restless and agitated" },
    { symptom: "Thoughts of death or suicide", detail: "Recurrent thoughts that life isn't worth living" }
  ];

  // Differential Diagnosis Comparisons
  const differentialDiagnosis = [
    {
      condition: "Major Depression",
      features: [
        { label: "History of elevated mood", bipolar: "Yes (mania or hypomania, even if subtle)", other: "No" },
        { label: "Energy levels", bipolar: "Cycles between high and low", other: "Consistently low during episodes" },
        { label: "Sleep in depression", bipolar: "Often hypersomnia (sleeping too much)", other: "Typically insomnia" },
        { label: "Antidepressant response", bipolar: "May trigger mania or rapid cycling", other: "Generally helpful" },
        { label: "Age of onset", bipolar: "Often late teens to early 20s", other: "Can occur at any age" }
      ],
      keyPoint: "Standard antidepressants used alone can destabilize bipolar patients, potentially triggering manic episodes or rapid cycling. This is why accurate diagnosis is essential before beginning treatment."
    },
    {
      condition: "ADHD",
      features: [
        { label: "Symptom pattern", bipolar: "Episodic—distinct periods of wellness between episodes", other: "Chronic and consistent from childhood" },
        { label: "Attention issues", bipolar: "Distractibility during episodes", other: "Persistent difficulty sustaining attention" },
        { label: "Sleep", bipolar: "Dramatically reduced need during mania", other: "Often difficulty settling at night" }
      ],
      keyPoint: "Many patients have BOTH conditions, requiring careful sequential treatment. ADHD treatment must wait until mood is stable."
    },
    {
      condition: "Borderline Personality Disorder",
      features: [
        { label: "Mood episode duration", bipolar: "Days to weeks", other: "Hours to days, often interpersonally triggered" },
        { label: "Episode pattern", bipolar: "Clear onset and offset", other: "More chronic emotional dysregulation" },
        { label: "Self-esteem in elevated mood", bipolar: "Stable grandiosity during episodes", other: "Oscillating self-image" }
      ],
      keyPoint: "Both conditions can co-occur and require integrated treatment approaches."
    },
    {
      condition: "Anxiety Disorders",
      features: [
        { label: "Relationship", bipolar: "Anxiety common (present in 50-60%)", other: "Primary condition" },
        { label: "Presentation", bipolar: "Agitated depression/mixed states can mimic anxiety", other: "Consistent anxiety symptoms" },
        { label: "Treatment", bipolar: "SSRIs/SNRIs alone can worsen bipolar", other: "SSRIs/SNRIs typically helpful" }
      ],
      keyPoint: "Anxiety in bipolar disorder responds better to mood stabilization plus targeted approaches."
    }
  ];

  // Treatment Approach Features
  const treatmentApproach = [
    {
      icon: ClipboardList,
      title: "Thorough Diagnostic Evaluation",
      description: "Detailed psychiatric history, family history assessment, medical workup to rule out mimicking conditions, and timeline mapping of mood episodes."
    },
    {
      icon: Target,
      title: "Individualized Treatment Planning",
      description: "Treatment tailored to your predominant polarity, episode severity, mixed features, rapid cycling, co-occurring conditions, and life circumstances."
    },
    {
      icon: Pill,
      title: "Expert Medication Management",
      description: "Careful selection and monitoring of mood stabilizers, antipsychotics, and adjunctive medications based on 35+ years of experience."
    },
    {
      icon: RefreshCw,
      title: "Ongoing Monitoring",
      description: "Regular follow-up appointments, laboratory monitoring, dose adjustments, and proactive management of emerging episodes."
    }
  ];

  // Mood Stabilizers
  const moodStabilizers = [
    {
      name: "Lithium — The Gold Standard",
      description: "The oldest and most proven mood stabilizer, used for over 70 years. Effective for both manic and depressive episodes. The only medication proven to reduce suicide risk independent of its mood-stabilizing effects. Neuroprotective—actually helps preserve brain tissue over time.",
      considerations: "Requires regular blood level monitoring and kidney/thyroid checks. Works best for 'classic' euphoric mania. I have extensive experience optimizing lithium therapy to maximize benefits while minimizing side effects.",
      highlight: "Only medication proven to reduce suicide risk"
    },
    {
      name: "Valproate (Depakote)",
      description: "Particularly effective for mixed states and rapid cycling. Often works when lithium doesn't. Useful for patients with prominent irritability or agitation.",
      considerations: "Requires monitoring of blood levels and liver function. Contraindicated in pregnancy due to birth defect risks.",
      highlight: "Effective for mixed states"
    },
    {
      name: "Lamotrigine (Lamictal)",
      description: "Especially effective for preventing depressive episodes. Excellent choice for patients with depression-predominant bipolar disorder. Weight-neutral and generally well-tolerated.",
      considerations: "Requires slow dose titration to minimize rash risk. Less effective for acute mania. Takes weeks to reach therapeutic dose.",
      highlight: "Best for preventing depression"
    },
    {
      name: "Carbamazepine (Tegretol)",
      description: "Alternative mood stabilizer with strong antimanic effects. May help when other options fail.",
      considerations: "Requires careful drug interaction management and blood monitoring.",
      highlight: "Alternative option"
    }
  ];

  // Atypical Antipsychotics for Mania
  const antipsychoticsMania = [
    { name: "Olanzapine (Zyprexa)", note: "Highly effective but significant weight/metabolic effects" },
    { name: "Quetiapine (Seroquel)", note: "Versatile for mania and depression; sedating" },
    { name: "Risperidone (Risperdal)", note: "Potent antimanic; can elevate prolactin" },
    { name: "Aripiprazole (Abilify)", note: "Generally well-tolerated; can be activating" },
    { name: "Ziprasidone (Geodon)", note: "Weight-neutral but requires food for absorption" },
    { name: "Asenapine (Saphris)", note: "Particularly useful for mixed states" }
  ];

  // Atypical Antipsychotics for Depression
  const antipsychoticsDepression = [
    { name: "Quetiapine (Seroquel)", note: "FDA-approved for bipolar depression; strong evidence" },
    { name: "Lurasidone (Latuda)", note: "Effective with minimal metabolic effects; must take with food" },
    { name: "Lumateperone (Caplyta)", note: "Newer option with favorable side effect profile" },
    { name: "Cariprazine (Vraylar)", note: "Unique mechanism targeting motivation and energy" },
    { name: "Olanzapine/Fluoxetine (Symbyax)", note: "Effective but metabolically challenging" }
  ];

  // Treatment-Resistant Options
  const treatmentResistantOptions = [
    {
      name: "Clozapine",
      description: "Considered the most effective medication for treatment-resistant bipolar mania. Requires regular blood monitoring but can be life-changing for the right patients. Reserved for cases where multiple other treatments have failed."
    },
    {
      name: "Combination Strategies",
      description: "Lithium + Valproate (particularly for rapid cycling), mood stabilizer + atypical antipsychotic combinations, 'triple therapy' for refractory mania (lithium + valproate + antipsychotic)."
    },
    {
      name: "Pramipexole",
      description: "A dopamine agonist that can help treatment-resistant bipolar depression. Targets the motivation and reward systems differently than standard approaches."
    },
    {
      name: "Thyroid Augmentation",
      description: "Even in patients with normal thyroid function, adding thyroid hormone can help stabilize rapid cycling. A well-established strategy at major academic centers."
    },
    {
      name: "Ketamine/Esketamine",
      description: "Rapidly emerging as an option for severe, treatment-resistant bipolar depression. Must be used with mood stabilizer coverage. Can provide rapid relief while longer-term treatments take effect."
    },
    {
      name: "Electroconvulsive Therapy (ECT)",
      description: "Highly effective for severe bipolar depression or mania, especially with psychotic features or catatonia. Often works when medications don't. Modern ECT is safe and well-tolerated. May be lifesaving in emergencies."
    }
  ];

  // Therapy Approaches
  const therapyApproaches = [
    {
      name: "Interpersonal and Social Rhythm Therapy (IPSRT)",
      description: "Developed specifically for bipolar disorder. Focuses on stabilizing daily routines (sleep, wake, meal times, social contact). Addresses interpersonal problems that can trigger episodes. Helps you recognize and respond to early warning signs. Research shows IPSRT significantly speeds recovery and prevents relapse.",
      icon: Clock
    },
    {
      name: "Family-Focused Therapy (FFT)",
      description: "Involves family members in treatment. Improves communication and reduces criticism in the home environment. Helps families recognize warning signs and respond appropriately. Reduces hospitalization rates by 30-40%. Particularly valuable for younger patients.",
      icon: Users
    },
    {
      name: "Cognitive Behavioral Therapy for Bipolar (CBT-BP)",
      description: "Helps identify and change thought patterns that worsen mood episodes. Emphasizes medication adherence and early warning sign detection. Teaches coping strategies for managing symptoms. Addresses the grief of living with a chronic illness.",
      icon: Brain
    }
  ];

  // Lifestyle Factors
  const lifestyleFactors = [
    {
      title: "Sleep — The Most Important Factor",
      icon: Moon,
      tips: [
        "Sleep disruption is both a trigger and symptom of mood episodes",
        "Maintaining regular sleep-wake times is essential (even on weekends)",
        "Aim for 7-9 hours consistently",
        "Protect your sleep like your life depends on it—because your stability does"
      ],
      critical: true
    },
    {
      title: "Routine and Rhythm",
      icon: Calendar,
      tips: [
        "Regular meal times, exercise times, and social schedules stabilize circadian rhythms",
        "The bipolar brain needs predictability",
        "Even positive schedule disruptions (vacations, celebrations) can trigger episodes"
      ],
      critical: false
    },
    {
      title: "Light Exposure",
      icon: Sun,
      tips: [
        "Morning bright light can help depression (but may trigger mania if used incorrectly)",
        "Midday light exposure is safer for bipolar patients",
        "Limiting blue light (screens) in the evening supports sleep",
        "'Dark therapy' (avoiding light after 6 PM) can help stabilize mania"
      ],
      critical: false
    },
    {
      title: "Substance Avoidance",
      icon: Coffee,
      tips: [
        "Alcohol destabilizes mood and interacts with medications",
        "Cannabis can worsen psychotic symptoms and mood instability",
        "Stimulants (cocaine, amphetamines) can trigger severe manic episodes",
        "Even caffeine in excess can disrupt sleep and mood"
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
        "Many women notice mood fluctuations related to their menstrual cycle",
        "Perimenopause (ages 45-55) is a high-risk period for mood destabilization",
        "Pregnancy requires careful preconception planning—some medications are safer than others",
        "Lithium can be used with appropriate monitoring; Lamotrigine is relatively safe",
        "Valproate should be avoided due to birth defect and developmental risks",
        "Postpartum period carries very high relapse risk—planning ahead is essential",
        "I work closely with patients planning pregnancy to optimize treatment at every stage"
      ]
    },
    {
      title: "Young Adults & Adolescents",
      icon: GraduationCap,
      content: [
        "Bipolar disorder often first appears in late teens to early 20s",
        "Early episodes are frequently misdiagnosed as depression, ADHD, or substance use",
        "Early intervention can prevent years of inappropriate treatment and unnecessary suffering",
        "Family involvement is particularly important",
        "Certain medications have specific FDA approvals and evidence for younger patients"
      ]
    },
    {
      title: "Older Adults",
      icon: Heart,
      content: [
        "Bipolar symptoms may change character over time",
        "Medication dosing often needs adjustment (bodies process drugs differently with age)",
        "Cognitive effects of medications require more careful attention",
        "Drug interactions become more important with multiple medical conditions",
        "New-onset 'mania' in older adults requires medical workup to rule out other causes"
      ]
    },
    {
      title: "Co-occurring Conditions",
      icon: Sparkles,
      content: [
        "Bipolar + ADHD: Very common (10-20%). ADHD treatment must wait until mood is stable. Stimulants can be safe with mood stabilizer coverage.",
        "Bipolar + Anxiety: Present in over half of patients. Mood stabilization often improves anxiety. Some medications treat both.",
        "Bipolar + Substance Use: Affects up to 60%. Valproate may be preferred for bipolar + alcohol use. Treating bipolar reduces cravings."
      ]
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Deep expertise in complex mood disorders including treatment-resistant bipolar disorder developed over 35+ years of practice."
    },
    {
      icon: Brain,
      title: "Diagnostic Expertise",
      description: "Bipolar disorder is often misdiagnosed. I take the time to get the diagnosis right, distinguishing bipolar from depression, ADHD, and personality disorders."
    },
    {
      icon: Pill,
      title: "Medication Mastery",
      description: "Expert knowledge of mood stabilizers, antipsychotics, and combination strategies. I know what works and how to minimize side effects."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "When you're struggling, you won't wait days to hear back. Your questions are answered almost always the same day."
    },
    {
      icon: Shield,
      title: "Long-Term Partnership",
      description: "Bipolar disorder requires ongoing management. I'm here for the long haul, adjusting treatment as your life and needs change."
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
      answer: "Bipolar disorder results from a combination of genetic, neurobiological, and environmental factors. It tends to run in families—if you have a first-degree relative with bipolar disorder, your risk is about 10 times higher than the general population. Brain imaging studies show differences in the structure and function of mood-regulating circuits. The condition involves dysregulation of biological rhythms, neurotransmitter systems, and cellular energy metabolism. Stressful life events can trigger episodes, but they don't cause the underlying illness."
    },
    {
      question: "Can bipolar disorder be cured?",
      answer: "Currently, bipolar disorder cannot be cured, but it can be excellently managed. With proper treatment, many people achieve long periods of mood stability and lead full, productive lives. The goal of treatment is to minimize episode frequency and severity, maintain functioning between episodes, and prevent the cumulative brain changes that can occur with repeated untreated episodes. Many patients do very well on maintenance treatment and experience only rare breakthrough episodes."
    },
    {
      question: "Will I need medication for life?",
      answer: "For most people with Bipolar I Disorder, long-term medication is recommended. The relapse rate after stopping mood stabilizers is very high—over 50% within 6 months, and even higher long-term. Importantly, stopping medication abruptly can trigger severe rebound episodes that may be worse than the original illness. That said, medication regimens often simplify over time, and the goal is always the minimum effective treatment with acceptable side effects."
    },
    {
      question: "What about antidepressants for bipolar depression?",
      answer: "This is one of the most important things to understand: Standard antidepressants (like Prozac, Zoloft, Lexapro, or Effexor) are generally not recommended as first-line treatment for bipolar depression, especially in Bipolar I. Research shows they often don't work better than mood stabilizers alone and can trigger mania or accelerate mood cycling. Bipolar depression is best treated with mood stabilizers, certain atypical antipsychotics (like lurasidone, quetiapine, or cariprazine), or specific combinations. If you've been treated for 'depression' that keeps coming back despite antidepressants, it's worth considering whether bipolar disorder might be the underlying issue."
    },
    {
      question: "How long until I feel better?",
      answer: "Response to treatment varies, but most people begin noticing improvement within 2-4 weeks of starting effective medication. Full stabilization may take longer—sometimes 2-3 months to achieve optimal response. For acute manic episodes, medications often work faster (days to weeks). Depressive episodes may take longer to lift. Treatment-resistant cases may require several medication trials before finding the right approach. Patience and close communication during this process are essential."
    },
    {
      question: "Can I still work and go to school?",
      answer: "Absolutely. With proper treatment, most people with bipolar disorder maintain careers, complete education, and have successful relationships. Some highly successful people in business, arts, and sciences have lived with bipolar disorder. The key is getting diagnosed, getting treated, and staying on treatment. Accommodations may help during recovery or for managing appointments, but the goal is always to help you function at your best."
    },
    {
      question: "What if my medication stops working?",
      answer: "Sometimes medications that worked well lose effectiveness over time, or episodes break through despite treatment. This doesn't mean you're out of options. Often the solution involves optimizing doses or checking blood levels, adding or switching medications, addressing factors that might be undermining treatment (substance use, sleep deprivation, new stressors), or considering more intensive treatment options. I have extensive experience helping patients who feel they've 'failed everything' find new approaches that work."
    },
    {
      question: "Is bipolar disorder hereditary? Should I worry about my children?",
      answer: "Bipolar disorder has a strong genetic component. If one parent has bipolar disorder, a child's risk is approximately 10-15%. If both parents have it, the risk rises to 50-75%. However, most children of bipolar parents do not develop the condition. Being aware of the family history allows for early recognition and intervention if symptoms emerge. I can help you think through how to discuss this with family members and what to watch for in children at risk."
    },
    {
      question: "What about pregnancy and bipolar medications?",
      answer: "Pregnancy requires careful planning and management, but it is absolutely possible to have a healthy pregnancy while managing bipolar disorder. Lithium can be used with appropriate monitoring. Lamotrigine is considered relatively safe. Valproate should be avoided due to birth defect risks. Many atypical antipsychotics have growing safety data. The risk of untreated bipolar disorder during pregnancy must be weighed against medication risks. Postpartum planning is especially critical since the postpartum period carries very high relapse risk. I work closely with patients planning pregnancy to optimize treatment at every stage."
    },
    {
      question: "How is bipolar disorder different from just being 'moody'?",
      answer: "Everyone has mood fluctuations—that's normal human experience. Bipolar disorder is different in several key ways: Duration (episodes last days, weeks, or months—not hours), Intensity (episodes represent a marked change from baseline functioning), Impairment (episodes cause significant problems in work, relationships, or daily functioning), Specific symptoms (true manic/hypomanic episodes include decreased need for sleep, racing thoughts, and other specific features), and Pattern (there are distinct periods of wellness between episodes). If you're unsure whether your experiences might represent bipolar disorder, an evaluation can help clarify the picture."
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
                  Expert Psychiatric Care for Mood Instability | 35+ Years of Experience
                </p>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Living with bipolar disorder can feel like being on an emotional roller coaster you never 
                    chose to ride. If you or someone you love is experiencing dramatic mood swings—periods of 
                    intense energy and elation followed by crushing depression—you&apos;re not alone, and effective 
                    treatment is available.
                  </p>
                  <p>
                    With over 35 years of experience and more than 9,000 patients treated, I&apos;ve helped countless 
                    individuals achieve mood stability and reclaim their lives. <strong>Bipolar disorder is highly 
                    treatable</strong>, and the right combination of medication, therapy, and lifestyle management 
                    can lead to lasting stability.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-purple-800">
                    <strong>What&apos;s important to understand:</strong> Bipolar disorder is a biological condition 
                    involving brain chemistry and circadian rhythm regulation—it&apos;s not a character flaw, a sign 
                    of weakness, or something you can simply &quot;snap out of.&quot;
                  </p>
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
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Understanding Bipolar Disorder */}
        <section id="understanding" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Heart className="w-4 h-4 mr-1" />
                  Understanding Your Experience
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Understanding Bipolar Disorder
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground leading-relaxed">
                    <p className="text-lg">
                      Bipolar disorder is a complex brain condition that affects approximately <strong>2.8% of 
                      American adults</strong>. Unlike ordinary mood changes that everyone experiences, bipolar 
                      disorder involves distinct episodes of mania (or hypomania) and depression that significantly 
                      impact daily functioning, relationships, and quality of life.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-red-600" />
                          <h4 className="font-semibold text-red-900">During Manic Episodes</h4>
                        </div>
                        <p className="text-red-800 text-sm">
                          You might feel euphoric, invincible, or irritable—with racing thoughts, little need 
                          for sleep, and impulsive decisions you later regret.
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingDown className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-blue-900">During Depressive Episodes</h4>
                        </div>
                        <p className="text-blue-800 text-sm">
                          You may feel hopeless, exhausted, and unable to function. Activities that once 
                          brought joy feel meaningless.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-purple-50 border-purple-200">
                        <CardContent className="p-4 text-center">
                          <p className="text-3xl font-bold text-purple-700">2.8%</p>
                          <p className="text-sm text-purple-600">of American adults affected</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-purple-50 border-purple-200">
                        <CardContent className="p-4 text-center">
                          <p className="text-3xl font-bold text-purple-700">~25</p>
                          <p className="text-sm text-purple-600">typical age of onset</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <p className="text-primary font-medium text-lg">
                      You&apos;re not alone. With proper treatment, mood stability is achievable and most people 
                      lead full, productive lives.
                    </p>
                  </div>
                </CardContent>
              </Card>
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
                      <CardTitle className="text-xl text-red-900">Manic or Hypomanic Episodes</CardTitle>
                      <p className="text-sm text-red-700">Elevated mood, energy, and activity</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-4">
                    {manicSymptoms.map((item, index) => (
                      <li key={index} className="text-sm">
                        <div className="flex items-start gap-2">
                          <Flame className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">{item.symptom}</span>
                            <span className="text-muted-foreground"> — {item.detail}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-amber-800 text-sm">
                      <strong>Important:</strong> Many people enjoy the productive, confident feelings of hypomania 
                      and don&apos;t recognize it as part of an illness. However, these episodes often escalate or 
                      precede debilitating depressive crashes.
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
                  <ul className="space-y-3 mb-4">
                    {depressiveSymptoms.map((item, index) => (
                      <li key={index} className="text-sm">
                        <div className="flex items-start gap-2">
                          <Snowflake className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">{item.symptom}</span>
                            <span className="text-muted-foreground"> — {item.detail}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Bipolar depression often dominates:</strong> Patients with Bipolar I spend 
                      approximately three times more time depressed than manic. For Bipolar II, this ratio 
                      can be as high as 39:1.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mixed Features */}
            <div className="max-w-4xl mx-auto mt-8">
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowUpDown className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">Mixed Features</h3>
                      <p className="text-purple-800 mb-3">
                        Some patients experience symptoms of both mania and depression simultaneously. This might look like:
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 text-purple-700 text-sm mb-3">
                        <li>• Feeling energized but deeply sad</li>
                        <li>• Racing thoughts filled with negative content</li>
                        <li>• Irritable, agitated, and hopeless at the same time</li>
                        <li>• High energy with suicidal thoughts</li>
                      </ul>
                      <div className="bg-red-100 border border-red-200 rounded p-2">
                        <p className="text-red-800 text-sm font-medium">
                          <AlertTriangle className="w-4 h-4 inline mr-1" />
                          Mixed states are particularly dangerous because they combine despair with impulsive 
                          energy. These require urgent clinical attention.
                        </p>
                      </div>
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
                Understanding these distinctions is crucial because treatment approaches differ significantly.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {differentialDiagnosis.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Bipolar Disorder vs. {item.condition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                            <th className="text-left py-2 font-semibold text-purple-700">Bipolar</th>
                            <th className="text-left py-2 font-semibold text-gray-700">{item.condition}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.features.map((feature, idx) => (
                            <tr key={idx} className="border-b">
                              <td className="py-2 font-medium text-foreground">{feature.label}</td>
                              <td className="py-2 text-purple-700">{feature.bipolar}</td>
                              <td className="py-2 text-gray-600">{feature.other}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-amber-800 text-sm">
                        <strong>Key Point:</strong> {item.keyPoint}
                      </p>
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
                Effective bipolar treatment requires a multi-faceted approach tailored to your specific symptoms, 
                history, and circumstances.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {treatmentApproach.map((item, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
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
                Medication is the cornerstone of bipolar treatment. The goal is to stabilize mood, prevent 
                future episodes, and maintain quality of life with minimal side effects.
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
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-semibold text-foreground">{med.name}</h4>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">{med.highlight}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{med.description}</p>
                          <p className="text-sm text-amber-700 bg-amber-50 rounded p-2">
                            <strong>Considerations:</strong> {med.considerations}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="antipsychotics">
                  <p className="text-muted-foreground mb-6">
                    Despite their name, these medications are essential tools in bipolar treatment—not because 
                    bipolar involves psychosis (though it can), but because they effectively stabilize mood 
                    through multiple brain pathways.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-red-50 border-red-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          For Manic Episodes
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
                          For Depressive Episodes
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
                  
                  {/* Antidepressant Warning */}
                  <Card className="bg-red-50 border-red-300 border-2 mt-6">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        What About Antidepressants?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-red-800 mb-3">
                        <strong>This deserves special attention:</strong> In Bipolar I Disorder, standard 
                        antidepressants (SSRIs, SNRIs) used alone are generally <strong>not recommended</strong>. 
                        Large studies found that adding antidepressants to mood stabilizers provided no benefit 
                        over mood stabilizers alone. Worse, antidepressants can trigger manic episodes or 
                        accelerate mood cycling.
                      </p>
                      <p className="text-red-700 text-sm">
                        <strong>The bottom line:</strong> If you&apos;ve been diagnosed with or suspected of having 
                        bipolar disorder, antidepressant monotherapy is rarely appropriate. Mood stabilization must come first.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="resistant">
                  <p className="text-muted-foreground mb-6">
                    When standard treatments don&apos;t provide adequate relief, I have extensive experience with 
                    more advanced approaches:
                  </p>
                  <div className="space-y-4">
                    {treatmentResistantOptions.map((option, index) => (
                      <Card key={index} className="bg-card border-border">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-2">{option.name}</h4>
                          <p className="text-muted-foreground">{option.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Important Note</h4>
                    <p className="text-amber-800">
                      Medication selection is always individualized based on your specific symptom profile, 
                      medical history, previous treatment responses, potential side effects, and personal preferences. 
                      There is no one-size-fits-all approach.
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
                While medication is essential, the best outcomes combine pharmacotherapy with therapy and 
                lifestyle modifications.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Therapy Approaches */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Evidence-Based Psychotherapies</h3>
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Critical Lifestyle Factors</h3>
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
                      <ul className="space-y-2">
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
                You don&apos;t have to navigate bipolar disorder alone. With proper diagnosis and treatment, 
                mood stability is achievable. Whether you&apos;re seeking answers for confusing symptoms, looking 
                for a new psychiatrist after previous treatment hasn&apos;t worked, or need expert management 
                for a complex case, I&apos;m here to help.
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
