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
  AlertTriangle,
  Sparkles,
  Target,
  Baby,
  HeartPulse,
  Sun,
  Activity,
  BookOpen,
  XCircle,
  CheckCircle,
  Layers,
  FileText,
  CloudSun,
  HeartHandshake,
  Clipboard,
  ArrowRight,
  Moon,
  Zap,
  Eye
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
    "description": "Comprehensive guide to postpartum depression treatment options including therapy, medication, and new rapid-acting treatments like Zuranolone. Board-certified psychiatrist with 35+ years experience.",
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
        "Overwhelming fatigue",
        "Feelings of worthlessness",
        "Intrusive thoughts"
      ],
      "riskFactor": [
        "History of depression",
        "Previous postpartum depression",
        "Lack of support system",
        "Pregnancy complications",
        "Stressful life events",
        "Thyroid dysfunction"
      ],
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Cognitive Behavioral Therapy"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Interpersonal Therapy"
        },
        {
          "@type": "Drug",
          "name": "Sertraline"
        },
        {
          "@type": "Drug",
          "name": "Zuranolone"
        },
        {
          "@type": "Drug",
          "name": "Brexanolone"
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
        "name": "How long does postpartum depression last without treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Without treatment, PPD can last months to years. Some women experience chronic depression that never fully resolves. With proper treatment, most mothers see significant improvement within 2-3 months, and new rapid-acting medications can provide relief in days."
        }
      },
      {
        "@type": "Question",
        "name": "Can I breastfeed while taking antidepressants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most psychiatric medications are compatible with breastfeeding. Sertraline (Zoloft) and paroxetine have the most safety data and are considered first-line options for nursing mothers. The amount that passes into breast milk is typically very low."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between baby blues and postpartum depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Baby blues affect up to 80% of new mothers and typically resolve within 2 weeks. PPD is more severe, lasts longer than 2 weeks, and significantly interferes with daily functioning and caring for your baby. If symptoms persist beyond 2 weeks or are severe, seek professional help."
        }
      },
      {
        "@type": "Question",
        "name": "What is Zuranolone and how quickly does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zuranolone (Zurzuvae) is the first oral medication specifically approved for postpartum depression (FDA approved August 2023). It's a 14-day treatment that works rapidly, often showing improvement within 3-5 days. It works by targeting GABA receptors to help reset the brain chemistry disrupted by hormonal changes after delivery."
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
    { stat: "80%+", label: "Recovery with treatment" },
    { stat: "Days", label: "Relief with new medications" }
  ];

  // Baby Blues vs PPD Comparison
  const comparison = {
    babyBlues: {
      title: "Baby Blues",
      icon: Sun,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      items: [
        "Affects up to 80% of new mothers",
        "Starts within first 2 weeks after delivery",
        "Resolves within 2 weeks",
        "Mild mood swings, weepiness, irritability",
        "Able to care for baby and self",
        "Support and rest are sufficient—no treatment needed"
      ]
    },
    ppd: {
      title: "Postpartum Depression",
      icon: CloudSun,
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
      items: [
        "Affects 10-15% of new mothers",
        "Can start anytime in first year (peaks 2-3 months)",
        "Persists beyond 2 weeks, often worsens without treatment",
        "Persistent sadness, hopelessness, anxiety, difficulty bonding",
        "Significantly impairs daily function and baby care",
        "Professional treatment needed for recovery"
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
        "Persistent sadness or depressed mood most of the day",
        "Severe mood swings",
        "Feeling hopeless, worthless, or inadequate",
        "Overwhelming guilt about your ability as a mother",
        "Feeling \"empty\" or emotionally numb",
        "Unexplained crying spells",
        "Intense irritability or anger"
      ]
    },
    {
      title: "Cognitive Symptoms",
      icon: Brain,
      color: "bg-purple-100 text-purple-700 border-purple-200",
      items: [
        "Difficulty concentrating or making decisions",
        "Memory problems (\"mom brain\" that feels extreme)",
        "Scary or intrusive thoughts about harm to your baby",
        "Feeling disconnected from reality",
        "Racing thoughts or inability to \"turn off\" your brain"
      ]
    },
    {
      title: "Physical Symptoms",
      icon: Activity,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      items: [
        "Extreme fatigue that doesn&apos;t improve with rest",
        "Insomnia even when baby sleeps, OR excessive sleeping",
        "Changes in appetite (eating too much or too little)",
        "Unexplained aches and pains",
        "Feeling \"wired but tired\""
      ]
    },
    {
      title: "Behavioral Symptoms",
      icon: Users,
      color: "bg-green-100 text-green-700 border-green-200",
      items: [
        "Difficulty bonding with your baby",
        "Withdrawing from family and friends",
        "Loss of interest in activities you used to enjoy",
        "Avoiding situations involving the baby",
        "Neglecting personal care",
        "Thinking about escaping or running away"
      ]
    }
  ];

  // Emergency Warning Signs
  const emergencyWarnings = [
    "Thoughts of harming yourself or your baby",
    "Thoughts that your baby or family would be better off without you",
    "Hearing voices or seeing things others don&apos;t",
    "Feeling like your baby is a stranger or isn&apos;t yours",
    "Severe confusion or disorientation",
    "Inability to eat or sleep for several days",
    "Thoughts that something is terribly wrong with your baby when doctors say baby is healthy"
  ];

  // Risk Factor Categories
  const riskFactorCategories = [
    {
      title: "Personal & Family History",
      icon: FileText,
      items: [
        "Previous episode of depression or anxiety (strongest predictor)",
        "Previous postpartum depression",
        "Family history of depression or mood disorders",
        "History of premenstrual dysphoric disorder (PMDD)",
        "History of bipolar disorder"
      ]
    },
    {
      title: "Pregnancy & Birth Factors",
      icon: Baby,
      items: [
        "Unplanned or unwanted pregnancy",
        "Pregnancy complications (preeclampsia, gestational diabetes)",
        "Difficult delivery or birth trauma",
        "Premature birth or NICU stay",
        "Breastfeeding difficulties",
        "History of infertility or pregnancy loss"
      ]
    },
    {
      title: "Psychosocial Factors",
      icon: Users,
      items: [
        "Lack of partner or family support",
        "Relationship difficulties",
        "Financial stress",
        "Major life changes during pregnancy",
        "Young maternal age",
        "Social isolation",
        "History of childhood trauma or abuse"
      ]
    },
    {
      title: "Biological Factors",
      icon: HeartPulse,
      items: [
        "Thyroid dysfunction (common after pregnancy)",
        "Severe sleep deprivation",
        "Sensitivity to hormonal changes",
        "Certain genetic variations (MTHFR, serotonin transporter genes)"
      ]
    }
  ];

  // Treatment Tabs
  const treatmentTabs = [
    {
      id: "therapy",
      title: "Psychotherapy",
      content: {
        description: "Talk therapy is highly effective for PPD, especially when started early. We recommend evidence-based approaches tailored to new mothers.",
        options: [
          { 
            name: "Cognitive Behavioral Therapy (CBT)", 
            detail: "Helps identify and change negative thought patterns. Targets the \"Perfect Mother\" myth, negative automatic thoughts, and behavioral strategies to increase positive activities."
          },
          { 
            name: "Interpersonal Therapy (IPT)", 
            detail: "Focuses on improving relationships and adjusting to your new role. Addresses grieving your \"old self,\" role transitions to motherhood, and building support networks."
          },
          { 
            name: "Mother-Infant Attachment Therapy", 
            detail: "For mothers struggling to bond. Helps recognize and respond to baby&apos;s cues, build positive interactions, and heal the relationship affected by depression."
          }
        ]
      }
    },
    {
      id: "medication",
      title: "Medication",
      content: {
        description: "For moderate to severe PPD, medication is often the most effective approach—especially when combined with therapy. Your brain chemistry has been affected by massive hormonal shifts after delivery.",
        options: [
          { name: "Traditional Antidepressants (SSRIs/SNRIs)", detail: "Sertraline (gold standard), Escitalopram, Venlafaxine. Initial improvement in 2-4 weeks, full effect in 6-8 weeks. Many are breastfeeding-safe." },
          { name: "New Neurosteroid Medications", detail: "Zuranolone (Zurzuvae): First oral medication for PPD. Improvement can begin in 3-5 days. 14-day treatment course." },
          { name: "Augmentation Options", detail: "For sleep/anxiety: Gabapentin, Hydroxyzine. For severe cases: Quetiapine, Lithium (with monitoring)." }
        ]
      }
    },
    {
      id: "combination",
      title: "Combination",
      content: {
        description: "Research consistently shows that medication PLUS therapy produces the best outcomes for moderate-to-severe depression. Think of it as attacking the problem from two directions.",
        options: [
          { name: "Medication + Therapy", detail: "Medication addresses the biological/chemical component while therapy addresses psychological/behavioral aspects. Most effective for moderate to severe PPD." },
          { name: "Stepped Care Approach", detail: "Starting with one treatment and adding another as needed based on your response. Allows for personalized adjustment." },
          { name: "Maintenance Treatment", detail: "Ongoing support to prevent relapse. Most women stay on medication 6-12 months after achieving remission." }
        ]
      }
    },
    {
      id: "lifestyle",
      title: "Lifestyle & Support",
      content: {
        description: "These complement (but don&apos;t replace) professional treatment. Your brain cannot heal without addressing these fundamentals.",
        options: [
          { name: "Sleep Protection Protocol", detail: "NON-NEGOTIABLE: Arrange for 4-5 hours of uninterrupted sleep nightly. Partner takes at least one night feeding. Prioritize sleep over household tasks." },
          { name: "Support Networks", detail: "Postpartum support groups, Postpartum Support International communities, family/friend support systems, doula or postpartum care support." },
          { name: "Self-Care Basics", detail: "The \"10-Minute Rule\": One non-baby activity for 10 minutes daily. Regular nutrition, gentle movement when cleared, sunlight exposure." }
        ]
      }
    }
  ];

  // Medications - Full Details
  const medicationDetails = [
    { 
      name: "Sertraline (Zoloft)", 
      category: "SSRI", 
      highlight: "Gold Standard",
      startingDose: "25-50 mg daily",
      targetDose: "100-200 mg daily",
      breastfeeding: "L1 (Safest)",
      breastfeedingNote: "Often undetectable in infant&apos;s blood",
      timeToEffect: "2-4 weeks initial, 6-8 full",
      sideEffects: "Nausea (first week), headache, sleep changes",
      drNote: "This is my go-to for most breastfeeding mothers. The safety profile is unmatched."
    },
    { 
      name: "Escitalopram (Lexapro)", 
      category: "SSRI", 
      highlight: "Excellent Tolerability",
      startingDose: "5-10 mg daily",
      targetDose: "10-20 mg daily",
      breastfeeding: "L2 (Safer)",
      breastfeedingNote: "Low transfer, monitor for sleepiness",
      timeToEffect: "2-4 weeks",
      sideEffects: "Generally very well tolerated",
      drNote: "Best for mothers with significant anxiety alongside depression."
    },
    { 
      name: "Venlafaxine XR (Effexor)", 
      category: "SNRI", 
      highlight: "For Severe Cases",
      startingDose: "37.5-75 mg daily",
      targetDose: "150-225 mg daily",
      breastfeeding: "L2-L3 (Relatively Safe)",
      breastfeedingNote: "Slightly higher transfer but adverse events rare",
      timeToEffect: "2-4 weeks",
      sideEffects: "Nausea, dizziness, sweating",
      drNote: "Best for treatment-resistant cases, depression with prominent fatigue."
    },
    { 
      name: "Bupropion (Wellbutrin)", 
      category: "NDRI", 
      highlight: "For Fatigue",
      startingDose: "150 mg XL daily",
      targetDose: "300 mg XL daily",
      breastfeeding: "L3 (Moderately Safe)",
      breastfeedingNote: "Compatible but monitor closely",
      timeToEffect: "2-4 weeks",
      sideEffects: "Insomnia, dry mouth",
      drNote: "Best for fatigue, low motivation, concentration problems. May increase anxiety—avoid if anxiety is prominent."
    },
    { 
      name: "Zuranolone (Zurzuvae)", 
      category: "Neurosteroid", 
      highlight: "Rapid-Acting (FDA 2023)",
      startingDose: "50 mg daily",
      targetDose: "50 mg daily x 14 days",
      breastfeeding: "Generally Safe",
      breastfeedingNote: "Low transfer; monitor baby for sedation",
      timeToEffect: "3-5 days",
      sideEffects: "Drowsiness, dizziness",
      drNote: "Game-changer for PPD. First oral medication targeting the actual biology of PPD."
    }
  ];

  // Breastfeeding Safety Levels
  const lactationLevels = [
    { level: "L1", name: "Safest", description: "Extensive studies show no risk to infant", color: "bg-green-100" },
    { level: "L2", name: "Safer", description: "Limited studies show no increased risk", color: "bg-green-50" },
    { level: "L3", name: "Moderately Safe", description: "No controlled studies; possible risk", color: "bg-amber-50" },
    { level: "L4", name: "Possibly Hazardous", description: "Evidence of risk; use only if clearly needed", color: "bg-orange-50" },
    { level: "L5", name: "Contraindicated", description: "Documented risk to infant", color: "bg-red-50" }
  ];

  // Safe Breastfeeding Medications Table
  const breastfeedingSafeMeds = [
    { name: "Sertraline", category: "L1", note: "Gold standard. Usually undetectable in infant blood." },
    { name: "Escitalopram", category: "L2", note: "Very low transfer. First-line alternative." },
    { name: "Paroxetine", category: "L2", note: "Low transfer. Watch for short half-life withdrawal." },
    { name: "Venlafaxine", category: "L2", note: "Safe. Slightly higher transfer but rarely problematic." },
    { name: "Duloxetine", category: "L2", note: "Safe. About 1% relative infant dose." },
    { name: "Bupropion", category: "L3", note: "Compatible. Monitor infant for irritability (rare)." },
    { name: "Mirtazapine", category: "L2", note: "Safe. Good for insomnia." },
    { name: "Quetiapine", category: "L2", note: "Very low transfer. First-line if antipsychotic needed." },
    { name: "Gabapentin", category: "L2", note: "Safe. Excellent for sleep/anxiety." }
  ];

  // New Treatments
  const newTreatments = [
    {
      name: "Zuranolone (Zurzuvae)",
      badge: "FDA Approved August 2023",
      tagline: "First Oral Medication Specifically for PPD",
      description: "Zuranolone is a positive allosteric modulator of GABA-A receptors—it enhances your brain&apos;s natural calming system and helps \"reset\" the receptors that didn&apos;t readjust after delivery.",
      howItWorks: "During pregnancy, your body produces massive amounts of allopregnanolone. At delivery, it drops 99% within 48 hours. In PPD, the brain&apos;s receptors fail to reset. Zuranolone acts as a \"bridge\" to help them reset naturally.",
      protocol: [
        "Dose: 50 mg once daily (30 mg if kidney/liver issues)",
        "Duration: 14 days only (not long-term)",
        "Timing: Take in the evening",
        "MUST take with fat-containing food (400-1,000 calories with 25-50% fat)"
      ],
      timeline: [
        { day: "Day 1-2", desc: "May feel drowsy; some notice subtle mood shift" },
        { day: "Day 3-5", desc: "Many women experience noticeable improvement" },
        { day: "Day 14", desc: "Course completed; benefits sustained" },
        { day: "Day 45", desc: "Studies show sustained improvement" }
      ],
      requirements: [
        "No driving for 12 hours after each dose",
        "Avoid alcohol during treatment",
        "Breastfeeding: Generally safe but monitor baby for sedation",
        "Not a \"cure\"—some may need traditional antidepressants for maintenance"
      ],
      bestFor: [
        "Moderate to severe PPD",
        "Need rapid relief (functional impairment)",
        "Unable to wait 4-6 weeks for traditional antidepressants",
        "Previous PPD with prolonged episodes"
      ]
    },
    {
      name: "Brexanolone (Zulresso)",
      badge: "FDA Approved March 2019",
      tagline: "IV Infusion for Severe PPD",
      description: "Brexanolone is IV allopregnanolone—essentially replacing what your body suddenly lost after delivery. It was the first medication ever approved specifically for PPD.",
      howItWorks: "Direct IV delivery of the neurosteroid your brain needs, providing immediate receptor support while your system recalibrates.",
      protocol: [
        "Administration: 60-hour continuous IV infusion",
        "Location: Must be at certified healthcare facility (REMS program)",
        "Monitoring: Continuous pulse oximetry due to sedation risk",
        "Cost: Approximately $34,000 (often covered by insurance for severe cases)"
      ],
      efficacy: [
        "Significant symptom reduction at 60 hours (end of infusion)",
        "Benefits sustained at 30-day follow-up",
        "Some women describe feeling \"like myself again\" within hours"
      ],
      requirements: [
        "Requires leaving home for 2.5 days",
        "Childcare arrangements needed",
        "Limited availability (certified centers only)",
        "Higher cost than Zuranolone"
      ],
      bestFor: [
        "Severe PPD requiring rapid intervention",
        "Unable to take oral medication",
        "Inpatient treatment indicated anyway",
        "Failed or unable to tolerate Zuranolone"
      ]
    }
  ];

  // Partner Support Tips
  const partnerBehavioralSigns = [
    "Withdrawing from the baby or from you",
    "Expressing excessive worry about the baby&apos;s health",
    "Unable to sleep even when the baby sleeps",
    "Loss of interest in things she used to enjoy",
    "Neglecting her own basic needs (eating, showering)",
    "Seeming \"checked out\" or distant"
  ];

  const partnerWhatSheMightSay = [
    "\"I&apos;m a terrible mother\"",
    "\"The baby would be better off without me\"",
    "\"I don&apos;t feel connected to the baby\"",
    "\"I can&apos;t do this anymore\"",
    "\"Everyone else seems to handle this better than me\""
  ];

  const partnerWhatNotToSay = [
    "\"Just think positive\"",
    "\"Other moms manage fine\"",
    "\"You should be grateful for a healthy baby\"",
    "\"Maybe you&apos;re just tired\"",
    "\"Snap out of it\""
  ];

  const postpartumPact = [
    { 
      title: "1. Protect Her Sleep (Critical)", 
      description: "Take at least one feeding during the night so she gets 4-5 hours of uninterrupted sleep. This is not optional—it&apos;s medicine." 
    },
    { 
      title: "2. The \"Fed Is Best\" Clause", 
      description: "If breastfeeding is destroying her mental health, switching to formula or pumped bottles is the RIGHT choice. Support that decision without guilt." 
    },
    { 
      title: "3. Lower All Other Expectations", 
      description: "Housework can wait. Visitors can be limited. The only priority is her recovery and basic baby care." 
    },
    { 
      title: "4. Encourage Professional Help", 
      description: "Offer to make the appointment, drive her there, and watch the baby during treatment sessions." 
    },
    { 
      title: "5. Watch for Emergencies", 
      description: "Call for help immediately if she talks about harming herself or baby, seems confused or disconnected from reality, or can&apos;t care for herself or baby at all." 
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Extensive experience treating perinatal mood disorders developed over 35+ years of practice."
    },
    {
      icon: Stethoscope,
      title: "Board-Certified",
      description: "Board-certified in both adult and child psychiatry, bringing comprehensive expertise."
    },
    {
      icon: Baby,
      title: "Perinatal Expertise",
      description: "Specialized knowledge in postpartum mental health, breastfeeding safety, and pregnancy planning."
    },
    {
      icon: Sparkles,
      title: "Latest Treatments",
      description: "Access to new rapid-acting medications like Zuranolone. Stays current with latest research."
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Care",
      description: "Works closely with your OB-GYN, midwife, and pediatrician for coordinated treatment."
    },
    {
      icon: Shield,
      title: "Breastfeeding Support",
      description: "Expert in breastfeeding-compatible medications. You don&apos;t have to choose between treatment and nursing."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How long does postpartum depression last without treatment?",
      answer: "Without treatment, PPD can last months to years. Some women experience chronic depression that never fully resolves. With proper treatment, most mothers see significant improvement within 2-3 months, and new rapid-acting medications can provide relief in days."
    },
    {
      question: "Can postpartum depression start months after delivery?",
      answer: "Yes. While symptoms often begin within the first few weeks, PPD can develop any time during the first year after childbirth. Many women notice a worsening when they return to work, wean from breastfeeding, or experience a significant life stressor."
    },
    {
      question: "Will I get postpartum depression with my next pregnancy?",
      answer: "Having had PPD does increase your risk (about 30-50% chance of recurrence). However, with proactive planning—potentially starting medication immediately after delivery—recurrence can often be prevented or significantly reduced."
    },
    {
      question: "How long will I need to take medication?",
      answer: "Most women stay on medication for 6-12 months after achieving remission. If you&apos;ve had multiple episodes of depression, longer-term treatment may be recommended to prevent recurrence. We&apos;ll create a personalized plan and discuss tapering when you&apos;re ready."
    },
    {
      question: "Will antidepressants change my personality?",
      answer: "No. Antidepressants restore you to yourself—they don&apos;t create a false happiness or change who you are. Most women describe feeling \"like myself again\" once the medication takes effect."
    },
    {
      question: "Do I have to choose between breastfeeding and treatment?",
      answer: "No. Most psychiatric medications are compatible with breastfeeding. We have excellent data on several antidepressants showing minimal infant exposure and no adverse effects. Sertraline (Zoloft) is the gold standard—often undetectable in infant blood. Your treatment doesn&apos;t have to mean ending breastfeeding."
    },
    {
      question: "Will medication affect my milk supply?",
      answer: "Most antidepressants do not affect milk supply. In fact, treating depression often IMPROVES breastfeeding because you have more energy and better attachment with your baby. A few specific medications can potentially affect supply, and we avoid those when possible."
    },
    {
      question: "What is Zuranolone and is it right for me?",
      answer: "Zuranolone (Zurzuvae) is the first oral medication specifically approved for postpartum depression (FDA approved August 2023). It&apos;s a 14-day treatment that works rapidly, often showing improvement within 3-5 days. It may be appropriate if you want faster relief or prefer a short-term treatment. However, it must be taken with fatty food and you can&apos;t drive for 12 hours after each dose. We can discuss if it&apos;s right for your situation."
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
      question: "What should I expect at my first appointment?",
      answer: "Your initial visit will last approximately 60 minutes. We&apos;ll discuss your symptoms, medical history, pregnancy and delivery experience, current support system, and treatment goals. If medication is recommended, we can often start that day. You&apos;re welcome to bring your baby and/or your partner."
    },
    {
      question: "How do I know if my symptoms are an emergency?",
      answer: "Seek immediate help if you have: thoughts of harming yourself or your baby, hallucinations or paranoid thoughts, inability to sleep for days, not eating or caring for basic needs, or feeling like you or baby would be better off dead. Call 988, go to an emergency room, or call 911."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Postpartum Depression Treatment Cincinnati &amp; Northern Kentucky | Dr. Arnold Shapiro MD</title>
        <meta name="description" content="Board-certified psychiatrist treating postpartum depression in Cincinnati & Fort Wright KY. 35+ years experience. New rapid-acting medications available. Breastfeeding-safe options. 1 in 7 mothers affected—help is available." />
        <meta name="keywords" content="postpartum depression treatment Cincinnati, PPD psychiatrist, perinatal mental health, postpartum anxiety, breastfeeding safe antidepressants, Zuranolone Cincinnati, Zurzuvae, baby blues vs depression, postpartum psychosis, maternal mental health" />
        <link rel="canonical" href={`${window.location.origin}/postpartum-depression`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Postpartum Depression Treatment | Dr. Arnold Shapiro MD" />
        <meta property="og:description" content="Compassionate, evidence-based treatment for postpartum depression. 35+ years experience. New rapid-acting treatments available. You deserve to feel like yourself again." />
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
                    New Rapid Treatments Available
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Postpartum Depression Treatment in{" "}
                  <span className="text-primary">Cincinnati &amp; Northern Kentucky</span>
                </h1>
                
                <p className="text-xl text-rose-700 font-semibold">
                  You&apos;re not failing as a mother. You&apos;re facing a medical condition—and it&apos;s very treatable.
                </p>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Postpartum depression affects <strong className="text-foreground">1 in 7 new mothers</strong>, yet many suffer in silence. 
                    If you&apos;re struggling to feel like yourself after having a baby, you&apos;re not alone—and you don&apos;t have to 
                    white-knuckle through it. With proper treatment, <strong className="text-foreground">over 80% of mothers recover fully</strong>. 
                    New rapid-acting medications can bring relief in days, not weeks.
                  </p>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Award className="w-4 h-4 text-healing" />
                    <span className="font-medium">Board-Certified Psychiatrist</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Stethoscope className="w-4 h-4 text-healing" />
                    <span className="font-medium">35+ Years Experience</span>
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
                  Postpartum depression (PPD) is a serious but highly treatable medical condition that affects mothers 
                  in the weeks or months after giving birth. Unlike the temporary &quot;baby blues,&quot; PPD involves persistent 
                  feelings of sadness, anxiety, and exhaustion that interfere with your ability to care for yourself and your baby.
                </p>
              </div>
              
              {/* Key Fact Box */}
              <Card className="bg-rose-50 border-rose-200 mb-8">
                <CardContent className="p-6">
                  <p className="text-rose-800">
                    <strong className="text-rose-900">Key fact:</strong> PPD is NOT a character flaw or a sign that you&apos;re a bad mother. 
                    It&apos;s a biological response to the dramatic hormonal changes that occur after delivery—your brain&apos;s receptors 
                    simply didn&apos;t &quot;reset&quot; the way they should have.
                  </p>
                </CardContent>
              </Card>
              
              {/* Statistics */}
              <div className="grid md:grid-cols-4 gap-4 mb-12">
                <Card className="bg-card border-border text-center">
                  <CardContent className="p-4">
                    <p className="text-3xl font-bold text-primary">1 in 7</p>
                    <p className="text-sm text-muted-foreground">Mothers develops PPD</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border text-center">
                  <CardContent className="p-4">
                    <p className="text-3xl font-bold text-primary">1 in 5</p>
                    <p className="text-sm text-muted-foreground">Experience perinatal mood disorders</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border text-center">
                  <CardContent className="p-4">
                    <p className="text-3xl font-bold text-primary">8-10%</p>
                    <p className="text-sm text-muted-foreground">Of new fathers affected</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border text-center">
                  <CardContent className="p-4">
                    <p className="text-3xl font-bold text-primary">80%+</p>
                    <p className="text-sm text-muted-foreground">Recover with treatment</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Baby Blues vs PPD Comparison */}
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Baby Blues vs. Postpartum Depression: Know the Difference
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className={`${comparison.babyBlues.color} border-2`}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <comparison.babyBlues.icon className={`w-6 h-6 ${comparison.babyBlues.iconColor}`} />
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
                      <comparison.ppd.icon className={`w-6 h-6 ${comparison.ppd.iconColor}`} />
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
                      <p className="text-xs text-muted-foreground">Baby blues common<br />(up to 80% of moms)</p>
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
                  <p className="text-sm text-rose-700 mt-4 bg-white/50 p-3 rounded-lg">
                    <strong>Important:</strong> Baby blues that don&apos;t improve after two weeks, or that seem to be getting worse, 
                    should be evaluated for postpartum depression.
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
            
            {/* Emergency Warning Signs */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-red-50 border-red-300 border-2">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-6 h-6" />
                    ⚠️ SEEK IMMEDIATE HELP IF YOU EXPERIENCE:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 text-red-800 mb-4">
                    {emergencyWarnings.map((warning, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{warning}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="text-red-900 font-semibold">
                      These symptoms may indicate postpartum psychosis—a medical emergency requiring immediate treatment.
                    </p>
                    <p className="text-red-800 mt-2">
                      <strong>Call 911, go to your nearest emergency room, or call the National Maternal Mental Health Hotline: 
                      <a href="tel:18338526262" className="underline ml-1">1-833-TLC-MAMA</a></strong>
                    </p>
                  </div>
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
                Who Is at Risk for Postpartum Depression?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                <strong className="text-foreground">The truth is:</strong> PPD can happen to any new mother. 
                Many women who develop PPD have no obvious risk factors. However, certain factors may increase your likelihood.
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
                    <strong>Remember:</strong> Having risk factors does NOT mean you will develop PPD. 
                    And NOT having risk factors doesn&apos;t protect you completely. 
                    What matters is recognizing symptoms early and seeking help.
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
                  The Edinburgh Postnatal Depression Scale (EPDS)
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The EPDS is the most widely used screening tool for postpartum depression worldwide. 
                  It&apos;s a simple 10-question assessment that takes about 5 minutes to complete.
                </p>
              </div>
              
              {/* What EPDS Measures */}
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">What the EPDS Measures:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Ability to laugh and see the funny side of things",
                      "Ability to look forward to things with enjoyment",
                      "Feelings of self-blame",
                      "Anxiety or worry",
                      "Feeling scared or panicky",
                      "Inability to cope",
                      "Difficulty sleeping due to unhappiness",
                      "Sadness or feeling miserable",
                      "Crying spells",
                      "Thoughts of self-harm"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Score Interpretation */}
              <Card className="bg-blue-50 border-blue-200 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Score Interpretation:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="font-bold text-green-700 min-w-[60px]">0-9:</span>
                      <span className="text-blue-800">Low risk, but continue monitoring</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="font-bold text-amber-700 min-w-[60px]">10-12:</span>
                      <span className="text-blue-800">Possible depression—professional evaluation recommended</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                      <span className="font-bold text-red-700 min-w-[60px]">13+:</span>
                      <span className="text-blue-800">Likely depression—treatment recommended</span>
                    </div>
                    <div className="flex items-start gap-3 bg-red-100 p-3 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800"><strong>Any positive response to Question 10 (self-harm):</strong> Requires immediate safety assessment, regardless of total score</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* CTA */}
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 mb-8">
                <CardContent className="p-8 text-center">
                  <Clipboard className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Take a Self-Assessment
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    This screening takes about 5 minutes. It&apos;s not a diagnosis, but it can help 
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
                      Online screenings are helpful for awareness but do not replace a professional diagnosis. 
                      Please schedule an evaluation for accurate assessment and treatment planning.
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
                Treatment should be as individual as you are. <strong className="text-foreground">Our goal is remission—not just improvement.</strong> Research shows that &quot;feeling a little better&quot; isn&apos;t enough; 
                full recovery is essential for your wellbeing and your baby&apos;s development.
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
                        <div className="space-y-4">
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
                We&apos;ll help you find the right choice for your situation.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              {/* Medication Cards */}
              <div className="space-y-6 mb-12">
                {medicationDetails.map((med, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{med.name}</h3>
                          <p className="text-muted-foreground">{med.category}</p>
                        </div>
                        {med.highlight && (
                          <Badge className="bg-green-100 text-green-700">{med.highlight}</Badge>
                        )}
                      </div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <div className="bg-muted/50 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground uppercase font-semibold">Starting Dose</p>
                          <p className="font-medium">{med.startingDose}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground uppercase font-semibold">Target Dose</p>
                          <p className="font-medium">{med.targetDose}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground uppercase font-semibold">Time to Effect</p>
                          <p className="font-medium">{med.timeToEffect}</p>
                        </div>
                        <div className={`rounded-lg p-3 ${med.breastfeeding.includes('L1') ? 'bg-green-50' : med.breastfeeding.includes('L2') ? 'bg-green-50/50' : 'bg-amber-50'}`}>
                          <p className="text-xs text-muted-foreground uppercase font-semibold">Breastfeeding</p>
                          <p className={`font-medium ${med.breastfeeding.includes('L1') || med.breastfeeding.includes('L2') ? 'text-green-700' : 'text-amber-700'}`}>{med.breastfeeding}</p>
                          <p className="text-xs text-muted-foreground">{med.breastfeedingNote}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 lg:col-span-2">
                          <p className="text-xs text-muted-foreground uppercase font-semibold">Common Side Effects</p>
                          <p className="font-medium">{med.sideEffects}</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 rounded-lg p-4">
                        <p className="text-sm">
                          <strong className="text-primary">Dr. Shapiro&apos;s Note:</strong> &quot;{med.drNote}&quot;
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Key Message */}
              <Card className="bg-rose-50 border-rose-200 mb-8">
                <CardContent className="p-6">
                  <h3 className="font-bold text-rose-900 text-xl mb-4">The Most Important Message</h3>
                  <p className="text-rose-800 text-lg font-medium mb-4">
                    The biggest risk to your baby is an untreated, depressed mother—not the tiny amount of medication in breastmilk.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/50 rounded-lg p-4">
                      <h4 className="font-semibold text-rose-900 mb-2">Untreated depression:</h4>
                      <ul className="space-y-1 text-rose-800 text-sm">
                        <li>• Releases stress hormones (cortisol) into breastmilk</li>
                        <li>• Impairs bonding and attachment</li>
                        <li>• Affects your baby&apos;s brain development</li>
                        <li>• Reduces quality and duration of breastfeeding</li>
                      </ul>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Treated with medication:</h4>
                      <ul className="space-y-1 text-green-800 text-sm">
                        <li>• Most antidepressants have very low transfer</li>
                        <li>• Improves bonding and caregiving</li>
                        <li>• Supports healthy baby development</li>
                        <li>• Often improves breastfeeding success</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Lactation Risk Categories */}
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Understanding Lactation Risk Categories (Hale&apos;s)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-2">
                    {lactationLevels.map((level, idx) => (
                      <div key={idx} className={`p-3 rounded-lg text-center ${level.color}`}>
                        <p className="font-bold text-lg">{level.level}</p>
                        <p className="font-medium text-sm">{level.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{level.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Safe Medications Table */}
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Safe Medications for Breastfeeding Mothers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-3 font-semibold">Medication</th>
                          <th className="text-left p-3 font-semibold">Category</th>
                          <th className="text-left p-3 font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {breastfeedingSafeMeds.map((med, index) => (
                          <tr key={index} className="border-t border-border hover:bg-muted/50">
                            <td className="p-3 font-medium">{med.name}</td>
                            <td className="p-3">
                              <span className={med.category === 'L1' ? 'text-green-600 font-semibold' : med.category === 'L2' ? 'text-green-600' : 'text-amber-600'}>
                                {med.category}
                              </span>
                            </td>
                            <td className="p-3 text-muted-foreground text-sm">{med.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              {/* Timing Strategy */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Strategic Timing: The &quot;Time-to-Peak&quot; Strategy
                  </h3>
                  <p className="text-green-800 mb-4">
                    You can minimize infant exposure by timing your medication:
                  </p>
                  <ol className="space-y-2 text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1.</span>
                      <span>Take your medication immediately AFTER breastfeeding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2.</span>
                      <span>By your next feeding session, the drug has already peaked and is declining</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3.</span>
                      <span>This minimizes the amount transferred during nursing</span>
                    </li>
                  </ol>
                  <p className="text-green-800 mt-4 bg-white/50 p-3 rounded-lg">
                    <strong>Example with Sertraline:</strong> Peak blood level occurs about 4-6 hours after taking. 
                    If you take it right after the morning feed, levels are already dropping by the next feed.
                  </p>
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
                <Zap className="w-4 h-4 mr-1" />
                Breakthrough Treatments
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Revolutionary Rapid-Acting Treatments
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                In 2019 and 2023, the FDA approved two revolutionary medications designed specifically for postpartum depression. 
                These work differently from traditional antidepressants—they target the exact biological mechanism that causes PPD.
              </p>
            </div>
            
            {/* Science Explainer */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-violet-900 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    The Science: Why These Work So Fast
                  </h3>
                  <div className="space-y-4 text-violet-800">
                    <p>
                      <strong>Traditional antidepressants</strong> work by gradually changing serotonin and other neurotransmitter levels. 
                      Your brain needs time to adapt, which is why improvement takes 4-6 weeks.
                    </p>
                    <p>
                      <strong>Neurosteroids work differently:</strong> During pregnancy, your body produces massive amounts of a natural 
                      brain chemical called <strong>allopregnanolone</strong>. This chemical keeps your GABA receptors (the brain&apos;s &quot;calming system&quot;) balanced.
                    </p>
                    <p>
                      At delivery, allopregnanolone drops by over 99% within 48 hours. In most women, the brain&apos;s receptors quickly readjust. 
                      <strong> In PPD, this reset fails</strong>—leaving you in a state of chemical imbalance.
                    </p>
                    <p className="bg-white/50 p-4 rounded-lg">
                      <strong>Zuranolone and Brexanolone are synthetic versions of allopregnanolone.</strong> They act as a &quot;bridge&quot; 
                      to help your receptors reset naturally—which is why they work in days instead of weeks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
              {newTreatments.map((treatment, index) => (
                <Card key={index} className="bg-card border-border relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-violet-600 text-white">{treatment.badge}</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl pr-32">{treatment.name}</CardTitle>
                    <p className="text-violet-600 font-medium">{treatment.tagline}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{treatment.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Treatment Protocol:</h4>
                      <ul className="space-y-1">
                        {treatment.protocol.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {treatment.timeline && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">What to Expect:</h4>
                        <div className="space-y-2">
                          {treatment.timeline.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm bg-violet-50 p-2 rounded">
                              <span className="font-semibold text-violet-700 min-w-[70px]">{item.day}</span>
                              <span>{item.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Important Considerations:</h4>
                      <ul className="space-y-1">
                        {treatment.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-violet-50 rounded-lg p-4">
                      <h4 className="font-semibold text-violet-900 mb-2">Best Candidates:</h4>
                      <ul className="space-y-1">
                        {treatment.bestFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-violet-800">
                            <CheckCircle className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Dr. Shapiro's Note */}
            <div className="max-w-4xl mx-auto mt-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-foreground">
                    <strong className="text-primary">Dr. Shapiro&apos;s Note:</strong> &quot;Zuranolone represents a paradigm shift. 
                    For the first time, we can offer mothers a 2-week treatment course that addresses the actual biology of PPD. 
                    I discuss this option with every patient who meets criteria.&quot;
                  </p>
                </CardContent>
              </Card>
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
                How to Recognize PPD &amp; Support Recovery
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Partners and family members play a crucial role in recognizing PPD and supporting recovery. 
                She may not tell you directly—here&apos;s what to watch for.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Recognition Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Eye className="w-5 h-5 text-cyan-600" />
                      Behavioral Signs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {partnerBehavioralSigns.map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-cyan-600" />
                      What She Might Say
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {partnerWhatSheMightSay.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground italic">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-red-900">
                      <XCircle className="w-5 h-5 text-red-600" />
                      What NOT to Say
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {partnerWhatNotToSay.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 italic">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* The Postpartum Pact */}
              <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-900">The &quot;Postpartum Pact&quot;: How You Can Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {postpartumPact.map((item, idx) => (
                      <div key={idx} className="bg-white/50 rounded-lg p-4">
                        <h4 className="font-semibold text-cyan-900 mb-1">{item.title}</h4>
                        <p className="text-cyan-800 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Paternal PPD */}
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Taking Care of Yourself: Paternal Postpartum Depression
                  </h3>
                  <p className="text-amber-800">
                    Partner depression is real—<strong>8-10% of new fathers experience it</strong>, and rates are higher 
                    when the mother has PPD. Symptoms often peak 3-6 months after birth. If you&apos;re struggling, you deserve help too.
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
                Dr. Arnold Shapiro is a board-certified psychiatrist bringing 
                <strong className="text-foreground"> 35+ years of clinical experience</strong> to the treatment of postpartum depression. 
                With over 9,000 patients treated, he combines deep expertise with compassionate, individualized care.
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
                You Deserve to Feel Like Yourself Again
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Take the Next Step Toward Recovery
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Postpartum depression is not your fault, and it&apos;s not something you have to push through alone. 
                Effective treatment exists—including new rapid-acting medications that can bring relief in days.
                <strong className="text-foreground"> Dr. Shapiro and his team are here to help you reclaim the joy of motherhood.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Consultation
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
                Same-day response • Priority scheduling for new mothers • Babies welcome at appointments
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
