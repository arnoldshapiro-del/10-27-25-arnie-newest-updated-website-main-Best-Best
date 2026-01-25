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
  Baby,
  HeartPulse,
  Sun,
  Moon,
  Activity,
  Eye,
  CircleDot,
  UserCheck,
  BookOpen,
  Leaf,
  XCircle,
  CheckCircle,
  Layers,
  FileText,
  Download,
  ExternalLink,
  HelpCircle,
  ThermometerSun,
  CloudSun,
  Sunrise,
  HeartHandshake,
  Clipboard,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Postpartum Depression Page Schema
const postpartumDepressionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Postpartum Depression Treatment Cincinnati & Northern Kentucky",
    "description": "Comprehensive guide to postpartum depression treatment options including therapy, medication, and new rapid-acting treatments like Zuranolone.",
    "url": "https://arnoldshapiromd.com/postpartum-depression",
    "lastReviewed": "2026-01-25",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Arnold Shapiro",
      "medicalSpecialty": "Psychiatry"
    },
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": "Postpartum Depression",
      "alternateName": ["PPD", "Perinatal Depression", "Peripartum Depression"],
      "code": {
        "@type": "MedicalCode",
        "code": "F53.0",
        "codingSystem": "ICD-10"
      },
      "signOrSymptom": [
        "Persistent sadness",
        "Severe mood swings",
        "Difficulty bonding with baby",
        "Withdrawal from family",
        "Changes in appetite or sleep",
        "Overwhelming fatigue"
      ],
      "riskFactor": [
        "History of depression",
        "Lack of support system",
        "Pregnancy complications",
        "Stressful life events"
      ],
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Cognitive Behavioral Therapy"
        },
        {
          "@type": "Drug",
          "name": "Sertraline"
        },
        {
          "@type": "Drug",
          "name": "Zuranolone"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does postpartum depression last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper treatment, most women experience significant improvement within 2-3 months. Without treatment, PPD can persist for months or even years."
        }
      },
      {
        "@type": "Question",
        "name": "Can I breastfeed while taking antidepressants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many antidepressants are compatible with breastfeeding. Sertraline (Zoloft) and paroxetine have the most safety data and are considered first-line options for nursing mothers."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between baby blues and postpartum depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Baby blues affect up to 80% of new mothers and typically resolve within 2 weeks. PPD is more severe, lasts longer than 2 weeks, and significantly interferes with daily functioning and caring for your baby."
        }
      }
    ]
  }
];

export default function PostpartumDepression() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openRiskFactor, setOpenRiskFactor] = useState(null);

  // Quick Stats
  const quickStats = [
    { stat: "1 in 7", label: "Mothers affected" },
    { stat: "80%+", label: "Treatment success rate" },
    { stat: "2023", label: "New rapid-acting medications" }
  ];

  // Baby Blues vs PPD Comparison
  const comparison = {
    babyBlues: {
      title: "Baby Blues",
      color: "bg-blue-50 border-blue-200",
      items: [
        "Affects up to 80% of new mothers",
        "Starts within 2-3 days of delivery",
        "Resolves within 2 weeks",
        "Mild mood swings and tearfulness",
        "Able to care for baby and self",
        "Does not require treatment"
      ]
    },
    ppd: {
      title: "Postpartum Depression",
      color: "bg-amber-50 border-amber-200",
      items: [
        "Affects 10-20% of new mothers",
        "Can start anytime in first year",
        "Lasts weeks to months without treatment",
        "Severe symptoms that interfere with function",
        "Difficulty caring for baby or self",
        "Requires professional treatment"
      ]
    }
  };

  // Symptom Categories
  const symptomCategories = [
    {
      title: "Emotional Symptoms",
      icon: Heart,
      color: "bg-rose-100 text-rose-700 border-rose-200",
      items: [
        "Persistent sadness or emptiness",
        "Severe mood swings",
        "Intense irritability or anger",
        "Feeling hopeless or worthless",
        "Excessive crying",
        "Anxiety or panic attacks"
      ]
    },
    {
      title: "Cognitive Symptoms",
      icon: Brain,
      color: "bg-purple-100 text-purple-700 border-purple-200",
      items: [
        "Difficulty concentrating",
        "Trouble making decisions",
        "Memory problems",
        "Intrusive negative thoughts",
        "Fear of being a bad mother",
        "Thoughts of harming self or baby"
      ]
    },
    {
      title: "Physical Symptoms",
      icon: Activity,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      items: [
        "Extreme fatigue beyond normal",
        "Sleep problems (too much or too little)",
        "Changes in appetite",
        "Unexplained aches and pains",
        "Low energy or feeling slowed down",
        "Headaches"
      ]
    },
    {
      title: "Behavioral Symptoms",
      icon: Users,
      color: "bg-green-100 text-green-700 border-green-200",
      items: [
        "Withdrawing from family and friends",
        "Difficulty bonding with baby",
        "Loss of interest in activities",
        "Neglecting self-care",
        "Avoiding the baby",
        "Inability to complete daily tasks"
      ]
    }
  ];

  // Risk Factor Categories
  const riskFactorCategories = [
    {
      title: "Personal History Factors",
      icon: FileText,
      items: [
        "Previous depression or anxiety",
        "Prior postpartum depression",
        "Family history of mood disorders",
        "History of PMS or PMDD",
        "Previous pregnancy loss"
      ]
    },
    {
      title: "Pregnancy & Birth Factors",
      icon: Baby,
      items: [
        "Complicated pregnancy or delivery",
        "Premature birth or NICU stay",
        "Unplanned or unwanted pregnancy",
        "Multiple births (twins, triplets)",
        "Breastfeeding difficulties"
      ]
    },
    {
      title: "Psychosocial Factors",
      icon: Users,
      items: [
        "Lack of partner or family support",
        "Relationship problems",
        "Financial stress",
        "Recent major life changes",
        "Social isolation"
      ]
    },
    {
      title: "Biological Factors",
      icon: HeartPulse,
      items: [
        "Hormonal sensitivity",
        "Thyroid dysfunction",
        "Sleep deprivation",
        "Nutritional deficiencies",
        "Autoimmune conditions"
      ]
    }
  ];

  // Treatment Options
  const treatmentTabs = [
    {
      id: "therapy",
      title: "Psychotherapy",
      content: {
        description: "Talk therapy is highly effective for PPD, especially when started early.",
        options: [
          { name: "Cognitive Behavioral Therapy (CBT)", detail: "Helps identify and change negative thought patterns" },
          { name: "Interpersonal Therapy (IPT)", detail: "Focuses on relationships and communication" },
          { name: "Mother-Infant Therapy", detail: "Strengthens bonding and attachment" }
        ]
      }
    },
    {
      id: "medication",
      title: "Medication",
      content: {
        description: "Antidepressants are safe and effective for PPD. Many are compatible with breastfeeding.",
        options: [
          { name: "SSRIs (First-Line)", detail: "Sertraline, Escitalopram - proven safe and effective" },
          { name: "SNRIs", detail: "Venlafaxine, Duloxetine - for depression with anxiety" },
          { name: "New Rapid-Acting", detail: "Zuranolone - FDA-approved specifically for PPD" }
        ]
      }
    },
    {
      id: "combination",
      title: "Combination",
      content: {
        description: "Research shows combining therapy and medication often produces the best outcomes.",
        options: [
          { name: "Therapy + Medication", detail: "Most effective for moderate to severe PPD" },
          { name: "Stepped Care", detail: "Starting with one and adding as needed" },
          { name: "Maintenance", detail: "Ongoing support to prevent relapse" }
        ]
      }
    },
    {
      id: "lifestyle",
      title: "Lifestyle & Support",
      content: {
        description: "Lifestyle changes support recovery alongside professional treatment.",
        options: [
          { name: "Sleep Protection", detail: "Prioritizing rest with partner support" },
          { name: "Support Groups", detail: "Connecting with other mothers" },
          { name: "Self-Care Strategies", detail: "Exercise, nutrition, time for yourself" }
        ]
      }
    }
  ];

  // Medications Table
  const medications = [
    { name: "Sertraline (Zoloft)", category: "SSRI", breastfeeding: "L2 - Preferred", timeToEffect: "2-4 weeks", highlight: "Gold Standard" },
    { name: "Escitalopram (Lexapro)", category: "SSRI", breastfeeding: "L2 - Safe", timeToEffect: "2-4 weeks", highlight: null },
    { name: "Venlafaxine (Effexor XR)", category: "SNRI", breastfeeding: "L3 - Acceptable", timeToEffect: "2-4 weeks", highlight: null },
    { name: "Duloxetine (Cymbalta)", category: "SNRI", breastfeeding: "L3 - Acceptable", timeToEffect: "2-4 weeks", highlight: null },
    { name: "Bupropion (Wellbutrin)", category: "NDRI", breastfeeding: "L3 - Acceptable", timeToEffect: "2-4 weeks", highlight: "For fatigue" },
    { name: "Zuranolone (Zurzuvae)", category: "Neurosteroid", breastfeeding: "Not recommended", timeToEffect: "3 days", highlight: "Rapid-Acting" }
  ];

  // Breastfeeding Safety Levels
  const lactationLevels = [
    { level: "L1", name: "Safest", description: "Controlled studies show no risk" },
    { level: "L2", name: "Safer", description: "Limited studies show no increased risk" },
    { level: "L3", name: "Probably Safe", description: "No controlled studies; possible risk" },
    { level: "L4", name: "Possibly Hazardous", description: "Evidence of risk; use if benefit outweighs" },
    { level: "L5", name: "Hazardous", description: "Studies show significant risk" }
  ];

  // New Treatments
  const newTreatments = [
    {
      name: "Zuranolone (Zurzuvae)",
      badge: "FDA Approved 2023",
      description: "First oral medication specifically approved for postpartum depression.",
      features: [
        "14-day treatment course",
        "Rapid onset - improvement as early as Day 3",
        "Take once daily in the evening with food",
        "Works on GABA receptors (neurosteroid)",
        "Can be used with or without antidepressants"
      ],
      requirements: [
        "Must take with fat-containing food (400+ calories)",
        "Avoid driving/heavy machinery for 12 hours after dose",
        "Not recommended during breastfeeding"
      ]
    },
    {
      name: "Brexanolone (Zulresso)",
      badge: "FDA Approved 2019",
      description: "IV infusion treatment for severe postpartum depression.",
      features: [
        "60-hour continuous IV infusion",
        "Administered in certified healthcare facility",
        "Rapid improvement within days",
        "For moderate to severe PPD",
        "Works on same neurosteroid pathway"
      ],
      requirements: [
        "Requires 2.5-day hospital stay",
        "Continuous monitoring required",
        "Only available at certified centers",
        "REMS program enrollment required"
      ]
    }
  ];

  // Partner Support Tips
  const partnerTips = [
    { title: "Recognize the Signs", description: "Learn to identify symptoms of PPD in your partner" },
    { title: "Protect Her Sleep", description: "Take night feedings when possible; sleep is crucial for recovery" },
    { title: "Listen Without Fixing", description: "Sometimes she just needs to be heard, not solved" },
    { title: "Take Over Household Tasks", description: "Reduce her load so she can focus on recovery" },
    { title: "Encourage Professional Help", description: "Gently suggest seeing a doctor - offer to make the appointment" },
    { title: "Be Patient", description: "Recovery takes time; your consistent support matters" }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Extensive experience treating perinatal mood disorders"
    },
    {
      icon: Stethoscope,
      title: "Board-Certified",
      description: "Adult and Child Psychiatry certification"
    },
    {
      icon: Baby,
      title: "Perinatal Expertise",
      description: "Specialized knowledge in postpartum mental health"
    },
    {
      icon: Pill,
      title: "Latest Treatments",
      description: "Access to new rapid-acting medications like Zuranolone"
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Care",
      description: "Works with OB-GYNs and pediatricians"
    },
    {
      icon: Shield,
      title: "Breastfeeding Support",
      description: "Expert in breastfeeding-compatible medications"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How long does postpartum depression last?",
      answer: "With proper treatment, most women experience significant improvement within 2-3 months. Without treatment, PPD can persist for months or even years, and may evolve into chronic depression. Early treatment leads to faster recovery."
    },
    {
      question: "What is the difference between baby blues and postpartum depression?",
      answer: "Baby blues affect up to 80% of new mothers and typically resolve within 2 weeks. Symptoms include mild mood swings, crying spells, and anxiety. PPD is more severe, lasts longer than 2 weeks, and significantly interferes with daily functioning and caring for your baby. If symptoms persist beyond 2 weeks or are severe, seek professional help."
    },
    {
      question: "Can I breastfeed while taking antidepressants?",
      answer: "Yes, many antidepressants are compatible with breastfeeding. Sertraline (Zoloft) and paroxetine have the most safety data and are considered first-line options for nursing mothers. The amount that passes into breast milk is typically very low. We can discuss the specific risks and benefits for your situation."
    },
    {
      question: "Will I need to take medication forever?",
      answer: "Not necessarily. For a first episode of PPD, treatment typically continues for 6-12 months after you feel better to prevent relapse. Many women are able to taper off medication successfully. If you have a history of depression, longer-term treatment may be recommended."
    },
    {
      question: "Can postpartum depression start months after giving birth?",
      answer: "Yes. While PPD often begins within the first few weeks, it can develop anytime in the first year after delivery. Some women experience symptoms that gradually worsen over time. Don&apos;t dismiss symptoms just because your baby is several months old."
    },
    {
      question: "Is it safe to take medication while pregnant with my next child?",
      answer: "Many women need to continue antidepressants during pregnancy, especially if they have severe or recurrent depression. The risks of untreated depression (to both mother and baby) often outweigh the small risks of most antidepressants. This decision should be made with your psychiatrist and OB-GYN together."
    },
    {
      question: "What is Zuranolone and is it right for me?",
      answer: "Zuranolone (Zurzuvae) is the first oral medication specifically approved for postpartum depression. It&apos;s a 14-day treatment that works rapidly, often showing improvement within days. It may be appropriate if you want faster relief or prefer a short-term treatment. However, it&apos;s not compatible with breastfeeding and has specific requirements. We can discuss if it&apos;s right for your situation."
    },
    {
      question: "Can my partner get postpartum depression?",
      answer: "Yes. Paternal postpartum depression affects 8-10% of new fathers, often peaking 3-6 months after birth. Partners may experience similar symptoms including depression, anxiety, irritability, and withdrawal. If your partner is struggling, encourage them to seek help too."
    },
    {
      question: "Will having PPD affect my bond with my baby?",
      answer: "PPD can make bonding more difficult, but this does not mean permanent damage. With treatment, most mothers develop strong, healthy bonds with their babies. Mother-infant therapy can specifically help strengthen this relationship. Don&apos;t let guilt about bonding difficulties prevent you from seeking help."
    },
    {
      question: "How do I know if my symptoms are an emergency?",
      answer: "Seek immediate help if you have: thoughts of harming yourself or your baby, hallucinations or paranoid thoughts, inability to sleep for days, not eating or caring for basic needs, feeling like you or baby would be better off dead. Call 988, go to an emergency room, or call 911."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Postpartum Depression Treatment Cincinnati &amp; Northern Kentucky | Dr. Arnold Shapiro MD</title>
        <meta name="description" content="Board-certified psychiatrist treating postpartum depression in Cincinnati & Fort Wright KY. 35+ years experience. New rapid-acting medications available. Breastfeeding-safe options." />
        <meta name="keywords" content="postpartum depression treatment Cincinnati, PPD psychiatrist, perinatal mental health, postpartum anxiety, breastfeeding safe antidepressants, Zuranolone Cincinnati, baby blues vs depression" />
        <link rel="canonical" href={`${window.location.origin}/postpartum-depression`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Postpartum Depression Treatment | Dr. Arnold Shapiro MD" />
        <meta property="og:description" content="Compassionate, evidence-based treatment for postpartum depression. 35+ years experience. New rapid-acting treatments available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/postpartum-depression`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(postpartumDepressionSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-rose-50 via-background to-pink-50/50 py-16 lg:py-24">
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
                  <Badge variant="secondary" className="bg-rose-100 text-rose-700 border-rose-200">
                    <HeartPulse className="w-4 h-4 mr-1" />
                    Perinatal Mental Health
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Sparkles className="w-4 h-4 mr-1" />
                    New Treatments Available
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Postpartum Depression Treatment in{" "}
                  <span className="text-primary">Cincinnati &amp; Northern Kentucky</span>
                </h1>
                
                <p className="text-xl text-rose-700 font-semibold">
                  Compassionate, Evidence-Based Care for New Mothers
                </p>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Becoming a mother is supposed to be joyful—but for many women, the postpartum period 
                    brings overwhelming sadness, anxiety, and feelings of disconnection. 
                    <strong className="text-foreground"> You are not alone, and this is treatable.</strong>
                  </p>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Award className="w-4 h-4 text-healing" />
                    <span className="font-medium">Board-Certified Psychiatrist</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Stethoscope className="w-4 h-4 text-healing" />
                    <span className="font-medium">35+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Users className="w-4 h-4 text-healing" />
                    <span className="font-medium">9,000+ Patients Treated</span>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    onClick={() => window.location.href = '/screening?assessment=ppd'}
                  >
                    <Clipboard className="w-5 h-5 mr-2" />
                    Take the Screening Quiz
                  </Button>
                </div>
              </div>
              
              {/* Hero Visual */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large bg-gradient-to-br from-rose-100 to-pink-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-32 h-32 text-rose-400 mx-auto mb-4" />
                    <p className="text-rose-700 font-medium text-lg">Hope &amp; Healing</p>
                    <p className="text-rose-600 text-sm">You Deserve to Feel Like Yourself Again</p>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 hidden lg:flex gap-6">
                  {quickStats.map((item, idx) => (
                    <div key={idx} className="text-center px-4 border-r last:border-r-0 border-gray-200">
                      <p className="font-bold text-2xl text-primary">{item.stat}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding PPD Section */}
        <section id="understanding-ppd" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  Understanding the Condition
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  What Is Postpartum Depression?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Postpartum depression is a serious but treatable medical condition that affects 
                  approximately 1 in 7 new mothers. It is not a character flaw or a sign of weakness.
                </p>
              </div>
              
              {/* Baby Blues vs PPD Comparison */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className={`${comparison.babyBlues.color} border-2`}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Sun className="w-6 h-6 text-blue-600" />
                      {comparison.babyBlues.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {comparison.babyBlues.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className={`${comparison.ppd.color} border-2`}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <CloudSun className="w-6 h-6 text-amber-600" />
                      {comparison.ppd.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {comparison.ppd.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Timeline */}
              <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-rose-600" />
                    When Does PPD Typically Appear?
                  </h3>
                  <div className="flex items-center gap-4 overflow-x-auto pb-2">
                    <div className="flex-shrink-0 text-center p-4 bg-white rounded-lg shadow-sm min-w-[140px]">
                      <p className="font-bold text-rose-700">Week 1-2</p>
                      <p className="text-xs text-muted-foreground">Baby blues common</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-rose-300 flex-shrink-0" />
                    <div className="flex-shrink-0 text-center p-4 bg-white rounded-lg shadow-sm border-2 border-rose-300 min-w-[140px]">
                      <p className="font-bold text-rose-700">Month 1-3</p>
                      <p className="text-xs text-muted-foreground">PPD peak onset</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-rose-300 flex-shrink-0" />
                    <div className="flex-shrink-0 text-center p-4 bg-white rounded-lg shadow-sm min-w-[140px]">
                      <p className="font-bold text-rose-700">Month 3-12</p>
                      <p className="text-xs text-muted-foreground">Can still develop</p>
                    </div>
                  </div>
                  <p className="text-sm text-rose-700 mt-4">
                    <strong>Important:</strong> PPD can start anytime in the first year. Don&apos;t dismiss symptoms just because your baby is several months old.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section id="symptoms" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Warning Signs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Symptoms &amp; Warning Signs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                PPD affects mothers in different ways. You may experience some or all of these symptoms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
              {symptomCategories.map((category, index) => (
                <Card key={index} className={`bg-card border-2 ${category.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${category.color.split(' ')[0]}`}>
                        <category.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
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
            
            {/* Red Flag Alert */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-red-50 border-red-300 border-2">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Emergency Warning Signs - Seek Immediate Help
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-red-800">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Thoughts of harming yourself or your baby</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Hearing or seeing things others don&apos;t</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Feeling like your baby would be better off without you</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Unable to sleep for days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Paranoid or confused thinking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Unable to care for yourself or baby</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-red-900 font-medium mt-4">
                    If you experience any of these, call 988, go to an emergency room, or call 911.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Factors Section */}
        <section id="risk-factors" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <Target className="w-4 h-4 mr-1" />
                Risk Factors
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Who Is at Risk?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While PPD can affect any new mother, certain factors may increase risk. 
                <strong className="text-foreground"> Many women with PPD have no obvious risk factors.</strong>
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {riskFactorCategories.map((category, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader 
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenRiskFactor(openRiskFactor === index ? null : index)}
                  >
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        {category.title}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openRiskFactor === index ? 'rotate-180' : ''}`} />
                    </CardTitle>
                  </CardHeader>
                  {openRiskFactor === index && (
                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto mt-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <p className="text-green-800 font-medium">
                    Having risk factors doesn&apos;t mean you&apos;ll develop PPD, and not having them doesn&apos;t mean you&apos;re immune. 
                    Any new mother can be affected.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Screening Section */}
        <section id="screening" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                  <Clipboard className="w-4 h-4 mr-1" />
                  Screening Tools
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Take a Self-Assessment
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The Edinburgh Postnatal Depression Scale (EPDS) is a validated screening tool 
                  that can help identify symptoms of postpartum depression.
                </p>
              </div>
              
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 mb-8">
                <CardContent className="p-8 text-center">
                  <Clipboard className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Edinburgh Postnatal Depression Scale (EPDS)
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    This 10-question screening takes about 5 minutes. It&apos;s not a diagnosis, but it can help 
                    you understand if professional evaluation is recommended.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8"
                    onClick={() => window.location.href = '/screening?assessment=ppd'}
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Take the Screening Quiz
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Free • Confidential • Takes 5 minutes
                  </p>
                </CardContent>
              </Card>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Important Note</h4>
                    <p className="text-amber-800">
                      Screening tools are not a substitute for professional evaluation. If you&apos;re concerned 
                      about your mental health, please schedule an appointment for a comprehensive assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section id="treatment" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 mb-4">
                <Target className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Treat Postpartum Depression
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Effective treatment is available. Most women with PPD improve significantly with proper care.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="therapy" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  {treatmentTabs.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id}>{tab.title}</TabsTrigger>
                  ))}
                </TabsList>
                
                {treatmentTabs.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id}>
                    <Card className="bg-card border-border">
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-6">{tab.content.description}</p>
                        <div className="grid md:grid-cols-3 gap-4">
                          {tab.content.options.map((option, idx) => (
                            <div key={idx} className="bg-muted/50 rounded-lg p-4">
                              <h4 className="font-semibold text-foreground mb-2">{option.name}</h4>
                              <p className="text-sm text-muted-foreground">{option.detail}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Medications Section */}
        <section id="medications" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Pill className="w-4 h-4 mr-1" />
                Medication Guide
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Medications for Postpartum Depression
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Many effective medications are available, including options safe for breastfeeding.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Medications Table */}
              <Card className="bg-card border-border mb-8 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Medication</th>
                        <th className="text-left p-4 font-semibold">Type</th>
                        <th className="text-left p-4 font-semibold">Breastfeeding</th>
                        <th className="text-left p-4 font-semibold">Time to Effect</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medications.map((med, index) => (
                        <tr key={index} className="border-t border-border hover:bg-muted/50">
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{med.name}</span>
                              {med.highlight && (
                                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                                  {med.highlight}
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="p-4 text-muted-foreground">{med.category}</td>
                          <td className="p-4">
                            <span className={med.breastfeeding.includes("Preferred") || med.breastfeeding.includes("Safe") ? "text-green-600" : med.breastfeeding.includes("Not") ? "text-red-600" : "text-amber-600"}>
                              {med.breastfeeding}
                            </span>
                          </td>
                          <td className="p-4 text-muted-foreground">{med.timeToEffect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Breastfeeding Safety Section */}
        <section id="breastfeeding" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-pink-100 text-pink-700 border-pink-200 mb-4">
                <Baby className="w-4 h-4 mr-1" />
                Breastfeeding Safety
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Medications &amp; Breastfeeding
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                <strong className="text-foreground">Good news:</strong> Most psychiatric medications are compatible with breastfeeding. 
                You don&apos;t have to choose between your mental health and nursing.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Lactation Risk Categories */}
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Lactation Risk Categories (LactMed)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-5 gap-4">
                    {lactationLevels.map((level, idx) => (
                      <div key={idx} className={`p-4 rounded-lg text-center ${
                        level.level === 'L1' ? 'bg-green-100' :
                        level.level === 'L2' ? 'bg-green-50' :
                        level.level === 'L3' ? 'bg-amber-50' :
                        level.level === 'L4' ? 'bg-orange-50' : 'bg-red-50'
                      }`}>
                        <p className="font-bold text-lg">{level.level}</p>
                        <p className="font-medium text-sm">{level.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{level.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    Reassurance for Nursing Mothers
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Sertraline (Zoloft) is the gold standard - minimal transfer to breast milk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Taking medication right after nursing minimizes baby&apos;s exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Untreated depression poses greater risks than most medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>We&apos;ll work together to find the best option for you and your baby</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* New Treatments Section */}
        <section id="new-treatments" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200 mb-4">
                <Sparkles className="w-4 h-4 mr-1" />
                Breakthrough Treatments
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                New Rapid-Acting Treatments
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Revolutionary new medications specifically designed for postpartum depression 
                offer faster relief than traditional antidepressants.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {newTreatments.map((treatment, index) => (
                <Card key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-violet-600 text-white">{treatment.badge}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl pr-24">{treatment.name}</CardTitle>
                    <p className="text-muted-foreground">{treatment.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {treatment.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {treatment.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Support Section */}
        <section id="partner-support" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 border-cyan-200 mb-4">
                <HeartHandshake className="w-4 h-4 mr-1" />
                For Partners &amp; Family
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How You Can Help
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Partners and family members play a crucial role in recognizing PPD and supporting recovery.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerTips.map((tip, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                        <span className="font-bold text-cyan-700">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-amber-50 border-amber-200 mt-8">
                <CardContent className="p-6">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Paternal Postpartum Depression
                  </h3>
                  <p className="text-amber-800">
                    8-10% of new fathers also experience postpartum depression, often peaking 3-6 months after birth. 
                    If you&apos;re a partner struggling with similar symptoms, don&apos;t hesitate to seek help for yourself too.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Shapiro Section */}
        <section id="why-dr-shapiro" className="py-16 bg-background">
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
                Specialized expertise in perinatal mental health with over 35 years of experience.
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

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-muted/30">
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

        {/* Crisis Resources Section */}
        <section id="crisis-resources" className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Crisis Resources - If You Need Help Now
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-white border-red-200">
                  <CardContent className="p-4 text-center">
                    <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-bold text-red-900">Maternal Mental Health Hotline</h3>
                    <a href="tel:18338526262" className="text-xl font-bold text-red-700 hover:underline block mt-2">
                      1-833-TLC-MAMA
                    </a>
                    <p className="text-sm text-red-700">1-833-852-6262</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-red-200">
                  <CardContent className="p-4 text-center">
                    <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-bold text-red-900">988 Suicide &amp; Crisis Lifeline</h3>
                    <a href="tel:988" className="text-xl font-bold text-red-700 hover:underline block mt-2">
                      Call or Text 988
                    </a>
                    <p className="text-sm text-red-700">24/7 Support</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-red-200">
                  <CardContent className="p-4 text-center">
                    <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-bold text-red-900">Postpartum Support Int&apos;l</h3>
                    <a href="tel:18009444773" className="text-xl font-bold text-red-700 hover:underline block mt-2">
                      1-800-944-4773
                    </a>
                    <p className="text-sm text-red-700">Text &quot;HELP&quot; to 988</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-red-200">
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-bold text-red-900">Emergency</h3>
                    <a href="tel:911" className="text-xl font-bold text-red-700 hover:underline block mt-2">
                      Call 911
                    </a>
                    <p className="text-sm text-red-700">For immediate danger</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
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
        <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 via-background to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Take the Next Step?
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                You Deserve to Feel Like Yourself Again
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Postpartum depression is treatable, and help is available. Don&apos;t suffer in silence—reach out today 
                and take the first step toward recovery.
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
                Same-day response • Accepting new patients • Insurance accepted
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
