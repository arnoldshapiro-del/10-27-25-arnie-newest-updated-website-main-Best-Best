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
  ChevronUp,
  Shield,
  Pill,
  Calendar,
  AlertTriangle,
  Sparkles,
  Target,
  Activity,
  BookOpen,
  XCircle,
  CheckCircle,
  Layers,
  FileText,
  Clipboard,
  ArrowRight,
  Zap,
  Flame,
  Home,
  GraduationCap,
  ThermometerSun,
  HeartHandshake,
  HelpCircle,
  BookMarked,
  Lightbulb,
  School
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// DMDD Page Schema for SEO
const dmddSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "DMDD Treatment Cincinnati | Pediatric Mood Disorder Specialist",
    "description": "Expert treatment for Disruptive Mood Dysregulation Disorder in children and teens. Dr. Shapiro offers evidence-based therapy and medication management for severe irritability and temper outbursts.",
    "url": "https://arnoldshapiromd.com/dmdd",
    "lastReviewed": "2026-01-25",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Arnold Shapiro",
      "medicalSpecialty": "Psychiatry"
    },
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": "Disruptive Mood Dysregulation Disorder",
      "alternateName": ["DMDD", "Severe Mood Dysregulation"],
      "code": {
        "@type": "MedicalCode",
        "code": "F34.81",
        "codingSystem": "ICD-10"
      },
      "signOrSymptom": [
        "Severe temper outbursts",
        "Chronic irritability",
        "Angry mood between outbursts",
        "Verbal rages",
        "Physical aggression",
        "Difficulty in multiple settings"
      ],
      "riskFactor": [
        "Family history of mood disorders",
        "ADHD comorbidity",
        "Early difficult temperament",
        "Environmental stress"
      ],
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Dialectical Behavior Therapy for Children (DBT-C)"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Collaborative & Proactive Solutions"
        },
        {
          "@type": "Drug",
          "name": "Stimulant Medications"
        },
        {
          "@type": "Drug",
          "name": "Atypical Antipsychotics"
        }
      ]
    }
  }
];

// Quick Facts Data
const quickFacts = [
  { icon: Calendar, label: "Age of Onset", value: "Before Age 10", detail: "Symptoms must begin before age 10 for diagnosis" },
  { icon: Activity, label: "Frequency Required", value: "3+ Per Week", detail: "Severe temper outbursts occurring at least 3 times weekly" },
  { icon: Target, label: "ADHD Overlap", value: "80%+", detail: "Most children with DMDD also have ADHD" },
  { icon: CheckCircle, label: "Treatment Response", value: "90%", detail: "Response rate with specialized DBT-C therapy" }
];

// Symptom Categories
const outburstSymptoms = [
  "Verbal rages (screaming, yelling, extended crying)",
  "Physical aggression toward people or property",
  "Duration: Often 15-60 minutes (the &ldquo;slow burn&rdquo;)",
  "Frequency: 3 or more times per week",
  "Grossly out of proportion to the trigger"
];

const moodSymptoms = [
  "Present most of the day, nearly every day",
  "Persistent between outbursts (not just during)",
  "Observable by others (parents, teachers, peers)",
  "The child rarely has periods of feeling &ldquo;good&rdquo; or neutral"
];

const settingSymptoms = [
  "At home AND at school",
  "With peers AND with adults",
  "Must be severe in at least one setting (home or school)"
];

// DSM-5 Criteria
const dsmCriteria = [
  { letter: "A", title: "Severe Recurrent Temper Outbursts", description: "Verbal and/or behavioral (aggression toward people/property). Grossly out of proportion in intensity or duration. Inconsistent with developmental level." },
  { letter: "B", title: "Outburst Frequency", description: "Three or more times per week, on average." },
  { letter: "C", title: "Persistent Irritable/Angry Mood", description: "Between outbursts, mood is irritable or angry most of the day, nearly every day. Observable by others." },
  { letter: "D", title: "Duration", description: "Criteria A-C present for 12 or more months. No period of 3 or more consecutive months without all symptoms." },
  { letter: "E", title: "Multiple Settings", description: "Present in at least 2 of 3 settings (home, school, with peers). Severe in at least one setting." },
  { letter: "F", title: "Age Requirements", description: "Diagnosis should not be made before age 6 or after age 18. Age of onset must be before age 10." }
];

// Differential Diagnosis Table
const differentialDiagnosis = [
  { condition: "Bipolar Disorder", difference: "Episodic (distinct manic periods vs. euthymia). DMDD is chronic, non-episodic." },
  { condition: "ODD", difference: "Defiant/annoying behavior, but mood is fine when getting their way. DMDD baseline is always angry." },
  { condition: "ADHD", difference: "Impulsive anger is brief (seconds-minutes). DMDD outbursts are prolonged (15-60 min)." },
  { condition: "Autism", difference: "Irritability triggered by sensory issues/rigidity. DMDD triggered by goal-blocking." },
  { condition: "PTSD", difference: "Triggers are trauma-specific. Often dissociative vs. &ldquo;hot&rdquo; anger." }
];

// Medication Tables
const stimulantMedications = [
  { name: "Methylphenidate (Concerta, Ritalin)", starting: "5-10 mg", target: "20-60 mg", notes: "First choice; good safety profile" },
  { name: "Amphetamine (Adderall, Vyvanse)", starting: "5 mg", target: "20-40 mg", notes: "If methylphenidate ineffective" }
];

const antipsychoticMedications = [
  { name: "Aripiprazole (Abilify)", starting: "2 mg", target: "5-15 mg", monitoring: "Akathisia (restlessness) in 15-20%" },
  { name: "Risperidone (Risperdal)", starting: "0.25-0.5 mg", target: "1-3 mg", monitoring: "Weight gain, prolactin elevation" }
];

const ssriMedications = [
  { name: "Escitalopram (Lexapro)", starting: "5 mg", target: "10-20 mg", notes: "Cleanest profile; best tolerated" },
  { name: "Sertraline (Zoloft)", starting: "25 mg", target: "100-200 mg", notes: "Good anxiety data" }
];

// Warning Signs
const emergencySigns = [
  "Child is threatening serious harm to self or others with a weapon or plan",
  "Child is physically uncontrollable and you cannot ensure safety",
  "Child has injured themselves or someone else seriously"
];

const urgentSigns = [
  "Outbursts are increasing in frequency or intensity",
  "Child is expressing thoughts of suicide or self-harm",
  "Child is not sleeping for extended periods",
  "New symptoms emerge (hallucinations, paranoia)",
  "Medication side effects are concerning"
];

const appointmentSigns = [
  "Current treatment isn&rsquo;t working after adequate trial",
  "School is threatening suspension/expulsion",
  "Family stress is becoming unmanageable",
  "You notice significant mood changes"
];

// FAQ Items
const faqItems = [
  {
    question: "Is DMDD the same as bipolar disorder?",
    answer: "No. This is a critical distinction. Bipolar disorder is episodic — children have distinct periods of mania (elevated mood, decreased need for sleep, grandiosity) alternating with depression or normal mood. DMDD is chronic — the irritability is present most of the day, nearly every day, without distinct episodes. Research shows DMDD children are not at elevated risk for developing bipolar disorder."
  },
  {
    question: "Will my child grow out of this?",
    answer: "Many children show significant improvement as their prefrontal cortex matures (into the mid-20s). With proper treatment, the explosive outbursts often decrease in frequency and intensity. However, without treatment, these children are at high risk for depression and anxiety in adulthood. Early intervention improves long-term outcomes."
  },
  {
    question: "Is DMDD caused by bad parenting?",
    answer: "Absolutely not. DMDD is a brain-based condition with identifiable neurological differences. Parents of DMDD children are often exceptional — they&rsquo;ve had to develop incredible patience and skills. The challenging behavior often causes parental stress, not the other way around."
  },
  {
    question: "Can DMDD be diagnosed in very young children?",
    answer: "The DSM-5 specifies that DMDD should not be diagnosed before age 6, because severe tantrums can be developmentally normal in toddlers and preschoolers. However, concerning patterns can be identified early, and parent-focused interventions (like PCIT) can begin before formal diagnosis."
  },
  {
    question: "My child is fine at school but terrible at home. Can it still be DMDD?",
    answer: "DMDD requires symptoms in at least two settings, but it only needs to be severe in one. Many children &ldquo;hold it together&rdquo; at school with high structure, then release everything at home where they feel safe. This pattern is actually common and doesn&rsquo;t rule out DMDD."
  },
  {
    question: "What&rsquo;s the difference between DMDD and ODD?",
    answer: "In ODD (Oppositional Defiant Disorder), the child is defiant and annoying, but their underlying mood is often fine — they&rsquo;re happy when getting their way. In DMDD, the baseline mood is chronically angry, irritable, or sad, even between outbursts. The child with DMDD rarely has periods of genuine happiness."
  },
  {
    question: "Are there any medications specifically FDA-approved for DMDD?",
    answer: "No medication is specifically FDA-approved for DMDD. However, we use medications approved for related conditions (ADHD stimulants, antipsychotics approved for irritability in autism) based on strong research evidence. Treatment is tailored to each child&rsquo;s specific symptom profile and comorbidities."
  },
  {
    question: "How long does treatment take?",
    answer: "DMDD is typically a long-term condition requiring ongoing management. Initial improvement with medication can be seen in weeks. Therapy skills take months to develop. Many families see meaningful improvement within 6-12 months, but continued support is usually needed for years. The goal is to provide tools that become internalized over time."
  },
  {
    question: "Should I avoid saying &ldquo;no&rdquo; to prevent outbursts?",
    answer: "No — avoiding all limits actually worsens DMDD long-term by reinforcing that outbursts work. The key is strategic limit-setting: choosing important battles, providing warnings before transitions, validating emotions while holding boundaries, and teaching coping skills. Therapy helps parents learn this balance."
  },
  {
    question: "Can my child participate in regular activities like sports?",
    answer: "Yes! Physical activity is actually therapeutic — it burns off stress hormones and improves mood. Choose activities with clear structure and supportive coaches. Brief the coach on your child&rsquo;s needs. Some children do better with individual sports (swimming, martial arts) rather than team sports initially."
  }
];

// School Accommodations
const schoolAccommodations = [
  { title: "The &ldquo;Pass&rdquo; System", description: "Student may leave classroom before outburst peaks. No questions asked. Destination: Sensory calm room (NOT principal&rsquo;s office)." },
  { title: "Reduced Writing Demands", description: "Allow dictation/typing. Reduce volume (quality over quantity). Extended time for assignments." },
  { title: "Preview of Changes", description: "24-hour notice for schedule changes. Warning before fire drills. Preparation for substitute teachers." },
  { title: "No Public Correction", description: "All correction must be private. Public shame triggers amygdala → instant rage." },
  { title: "Cool-Down Protocol", description: "Following an incident, no academic demands for 30 minutes. Allows nervous system to recover." }
];

const DMDD = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DMDD Treatment Cincinnati | Pediatric Mood Disorder Specialist</title>
        <meta name="description" content="Expert treatment for Disruptive Mood Dysregulation Disorder in children and teens. Dr. Shapiro offers evidence-based therapy and medication management for severe irritability and temper outbursts." />
        <meta name="keywords" content="DMDD, disruptive mood dysregulation disorder, pediatric mood disorder, child psychiatrist Cincinnati, severe irritability treatment, temper outbursts, childhood mood disorders" />
        <link rel="canonical" href="https://arnoldshapiromd.com/dmdd" />
        <script type="application/ld+json">
          {JSON.stringify(dmddSchema)}
        </script>
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-amber-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <Link 
            to="/disorders" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Conditions
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm">
                Pediatric Mood Disorder
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Disruptive Mood Dysregulation Disorder
                <span className="block text-amber-200 text-2xl md:text-3xl mt-2">(DMDD)</span>
              </h1>
              <p className="text-xl text-white/90 mb-4 leading-relaxed font-semibold">
                Beyond &ldquo;Bad Behavior&rdquo; — Understanding and Treating Severe Childhood Irritability
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                When your child&rsquo;s anger goes beyond normal tantrums, there&rsquo;s often a neurological explanation. DMDD is a real, treatable condition — not a parenting failure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/50 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#understanding">
                    Learn More
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Flame className="w-8 h-8 text-amber-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Expert Care</h3>
                    <p className="text-white/70">35+ Years Experience</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>Board-Certified Psychiatrist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>Evidence-Based Treatment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>Family-Centered Approach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>School Collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="bg-orange-50 dark:bg-gray-800 py-8 border-b border-orange-100 dark:border-gray-700">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <fact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                  <p className="font-bold text-foreground">{fact.value}</p>
                  <p className="text-xs text-muted-foreground hidden md:block">{fact.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-16">
        
        {/* Understanding Section */}
        <section id="understanding" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-300">
              <Brain className="w-4 h-4 mr-2" />
              Understanding DMDD
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is DMDD?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A childhood condition characterized by severe, chronic irritability and frequent, intense temper outbursts that are far beyond what would be expected for a child&rsquo;s age.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                  Key Characteristics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Unlike typical tantrums, DMDD outbursts are grossly out of proportion to the situation.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="font-semibold text-orange-700 dark:text-orange-400 mb-2">The Key Distinction:</p>
                    <p className="text-sm text-muted-foreground">
                      DMDD is NOT the same as bipolar disorder. Children with DMDD do not experience the distinct &ldquo;episodes&rdquo; of mania and depression. Instead, their irritability is <strong>chronic and persistent</strong> — their baseline mood between outbursts is angry, irritable, or sad most of the day, nearly every day.
                    </p>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Why DMDD Was Created:</p>
                    <p className="text-sm text-muted-foreground">
                      Before 2013, many severely irritable children were being diagnosed with pediatric bipolar disorder. Research showed this was often incorrect — these children were not at higher risk for adult bipolar disorder. DMDD was created to provide accurate diagnosis and appropriate treatment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                <CardTitle className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  The &ldquo;Broken Brakes&rdquo; Explanation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Think of emotional regulation like a car&rsquo;s braking system. In DMDD:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-950/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold">The Amygdala (Accelerator)</p>
                      <p className="text-sm text-muted-foreground">This brain region, which processes emotions and threats, is hyperactive. It over-responds to frustration and even neutral situations.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold">The Prefrontal Cortex (Brakes)</p>
                      <p className="text-sm text-muted-foreground">This region, responsible for impulse control and emotional regulation, has reduced connectivity to the amygdala. The &ldquo;brakes&rdquo; don&rsquo;t engage properly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold">The Result</p>
                      <p className="text-sm text-muted-foreground">The child experiences rage that feels overwhelming and uncontrollable — not because they&rsquo;re choosing to be difficult, but because their brain&rsquo;s regulation system isn&rsquo;t functioning optimally.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What DMDD is NOT */}
          <Card className="border-green-200 dark:border-green-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
              <CardTitle className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-green-500" />
                What DMDD is NOT
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Not willful disobedience or &ldquo;bad behavior&rdquo;",
                  "Not poor parenting",
                  "Not &ldquo;just tantrums&rdquo; that the child will outgrow",
                  "Not pediatric bipolar disorder",
                  "Not conduct disorder (aggression in DMDD is reactive, not planned)",
                  "Not a character flaw"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <XCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Symptoms Section */}
        <section id="symptoms" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-red-600 border-red-300">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Signs &amp; Symptoms
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognizing DMDD</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DMDD presents with three core symptom clusters that must all be present for diagnosis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Temper Outbursts Card */}
            <Card className="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 border-2 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-4 border border-red-200 dark:border-red-800">
                  <Flame className="w-7 h-7 text-red-500" />
                </div>
                <CardTitle className="text-xl">1. Severe Temper Outbursts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {outburstSymptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: symptom }} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Irritable Mood Card */}
            <Card className="bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 border-2 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mb-4 border border-orange-200 dark:border-orange-800">
                  <ThermometerSun className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-xl">2. Chronic Irritable/Angry Mood</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {moodSymptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: symptom }} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Multiple Settings Card */}
            <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 border-2 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4 border border-amber-200 dark:border-amber-800">
                  <Users className="w-7 h-7 text-amber-500" />
                </div>
                <CardTitle className="text-xl">3. Multiple Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {settingSymptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Day-to-Day Experience */}
          <Card className="border-orange-200 dark:border-orange-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
              <CardTitle className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-orange-500" />
                What DMDD Looks Like Day-to-Day
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">🌅 Morning</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Wakes up already irritable</li>
                      <li>• Small frustrations (wrong cereal, lost sock) trigger disproportionate rage</li>
                      <li>• Difficulty transitioning to school routine</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">🏫 School</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Explosive reactions to academic demands</li>
                      <li>• Misinterprets neutral peer interactions as hostile</li>
                      <li>• May have &ldquo;good&rdquo; periods if structure is high</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">🌙 Evening</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Homework battles that escalate to screaming/throwing</li>
                      <li>• Difficulty with any limit-setting</li>
                      <li>• Exhaustion from emotional dysregulation all day</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">👨‍👩‍👧 What Parents Report</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• &ldquo;Walking on eggshells&rdquo;</li>
                      <li>• &ldquo;Never knowing what will set him off&rdquo;</li>
                      <li>• &ldquo;The anger seems to come from nowhere&rdquo;</li>
                      <li>• &ldquo;Other kids don&rsquo;t react this way&rdquo;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Causes Section */}
        <section id="causes" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-amber-600 border-amber-300">
              <Brain className="w-4 h-4 mr-2" />
              Neurobiology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Causes DMDD?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DMDD is a brain-based condition with identifiable neurological differences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-amber-200 dark:border-amber-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
                <CardTitle className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-amber-500" />
                  Brain Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <h4 className="font-semibold mb-2">1. Amygdala Hyperreactivity</h4>
                    <p className="text-sm text-muted-foreground">The amygdala (the brain&rsquo;s threat detector) is overactive. Children with DMDD show heightened responses not only to angry faces but also to <strong>neutral or ambiguous</strong> faces — they perceive threats that aren&rsquo;t there.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <h4 className="font-semibold mb-2">2. Frontal-Limbic Disconnect</h4>
                    <p className="text-sm text-muted-foreground">fMRI studies show reduced communication between the amygdala and the prefrontal cortex. The &ldquo;rational brain&rdquo; cannot effectively calm the &ldquo;emotional brain.&rdquo;</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <h4 className="font-semibold mb-2">3. Reward System Blunting</h4>
                    <p className="text-sm text-muted-foreground">DMDD children show <strong>blunted activation</strong> in reward centers. They may exist in a state of chronic &ldquo;reward starvation&rdquo; — finding less pleasure in positive experiences, leading to persistent irritability.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <h4 className="font-semibold mb-2">4. Hostile Interpretation Bias</h4>
                    <p className="text-sm text-muted-foreground">Children with DMDD consistently misread neutral facial expressions as angry or threatening. This &ldquo;sees enemies everywhere&rdquo; pattern triggers inappropriate fight responses.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 dark:border-amber-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-amber-500" />
                  Contributing Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <div className="w-10 h-10 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🧬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Genetics</h4>
                      <p className="text-sm text-muted-foreground">Family history of mood disorders, anxiety, or ADHD</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <div className="w-10 h-10 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">👶</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Temperament</h4>
                      <p className="text-sm text-muted-foreground">Early &ldquo;difficult&rdquo; temperament in infancy</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <div className="w-10 h-10 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">ADHD Comorbidity</h4>
                      <p className="text-sm text-muted-foreground">Present in 80%+ of DMDD cases</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <div className="w-10 h-10 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏠</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Environmental</h4>
                      <p className="text-sm text-muted-foreground">Family stress, inconsistent parenting (often a <em>result</em> of managing the child, not a cause)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section id="diagnosis" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-300">
              <Clipboard className="w-4 h-4 mr-2" />
              Diagnosis
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DSM-5 Criteria &amp; Evaluation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To receive a DMDD diagnosis, ALL of the following criteria must be present.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-orange-500" />
                  DSM-5 Diagnostic Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {dsmCriteria.map((criterion, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-orange-600 dark:text-orange-400">
                        {criterion.letter}
                      </div>
                      <div>
                        <h4 className="font-semibold">{criterion.title}</h4>
                        <p className="text-sm text-muted-foreground">{criterion.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
                <CardTitle className="flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-orange-500" />
                  What to Expect at Your Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <h4 className="font-semibold mb-2">1. Comprehensive Interview (60-90 minutes)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Detailed developmental history</li>
                      <li>• Timeline of symptom onset and progression</li>
                      <li>• Review of symptoms across settings</li>
                      <li>• Family psychiatric history</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <h4 className="font-semibold mb-2">2. Standardized Assessment Tools</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Affective Reactivity Index (ARI) — gold standard for DMDD</li>
                      <li>• CBCL/ADHD rating scales to assess comorbidities</li>
                      <li>• Mood disorder screening to rule out bipolar</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <h4 className="font-semibold mb-2">3. Collateral Information</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Teacher questionnaires</li>
                      <li>• School records/behavior reports</li>
                      <li>• Previous treatment records</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <h4 className="font-semibold mb-2">4. Medical Clearance</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rule out thyroid dysfunction, sleep disorders</li>
                      <li>• Medication review (some medications cause irritability)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Differential Diagnosis Table */}
          <Card className="border-orange-200 dark:border-orange-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
              <CardTitle className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-orange-500" />
                Critical Differential Diagnosis
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-orange-100 dark:bg-orange-900/30">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Condition</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Key Difference from DMDD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100 dark:divide-orange-900/30">
                    {differentialDiagnosis.map((item, idx) => (
                      <tr key={idx} className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
                        <td className="px-6 py-4 font-medium">{item.condition}</td>
                        <td className="px-6 py-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.difference }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Treatment Section */}
        <section id="treatment" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-300">
              <Heart className="w-4 h-4 mr-2" />
              Treatment Options
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Evidence-Based Treatment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive treatment typically combines psychotherapy, family support, and when needed, medication management.
            </p>
          </div>
          
          <Tabs defaultValue="therapy" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
              <TabsTrigger 
                value="therapy" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 dark:data-[state=active]:bg-orange-950 dark:data-[state=active]:text-orange-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Therapy</span>
              </TabsTrigger>
              <TabsTrigger 
                value="medication" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 dark:data-[state=active]:bg-orange-950 dark:data-[state=active]:text-orange-300"
              >
                <Pill className="w-4 h-4" />
                <span className="hidden sm:inline">Medication</span>
              </TabsTrigger>
              <TabsTrigger 
                value="support" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700 dark:data-[state=active]:bg-orange-950 dark:data-[state=active]:text-orange-300"
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Family/School</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="therapy">
              <Card className="border-orange-200 dark:border-orange-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                  <CardTitle className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-orange-500" />
                    Evidence-Based Psychotherapy
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    {/* DBT-C Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Gold Standard</Badge>
                        <h3 className="text-xl font-semibold">Dialectical Behavior Therapy for Children (DBT-C)</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        The Perepletchikova Protocol has demonstrated <strong>90% response rates</strong> in clinical trials — superior to any medication study for DMDD.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Phase 1: Parent Training First (Weeks 1-10)</h4>
                          <p className="text-sm text-muted-foreground mb-2">Before the child learns skills, parents must learn:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• <strong>Validation:</strong> Acknowledging the emotion while not reinforcing the behavior</li>
                            <li>• <strong>The Extinction Burst:</strong> Understanding that behavior gets worse before better</li>
                            <li>• Creating a &ldquo;Change-Ready&rdquo; Environment</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Phase 2: Child Skills Training</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• <strong>Opposite Action:</strong> When the urge is to scream, whisper</li>
                            <li>• <strong>Check the Facts:</strong> &ldquo;Did Mom actually say she hates you?&rdquo;</li>
                            <li>• <strong>TIP Skills:</strong> Temperature (ice water), Intense exercise, Paced breathing</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* CPS Section */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Collaborative &amp; Proactive Solutions (CPS)</h3>
                      <p className="text-muted-foreground mb-4">
                        Dr. Ross Greene&rsquo;s model works well for DMDD because it treats outbursts as <strong>skill deficits</strong>, not willful defiance.
                      </p>
                      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                        <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Core Philosophy: &ldquo;Kids do well if they can&rdquo;</p>
                        <p className="text-sm text-muted-foreground mb-2"><strong>The Plan B Conversation:</strong></p>
                        <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                          <li><strong>Empathy:</strong> &ldquo;I&rsquo;ve noticed you get upset when I ask you to turn off the game. What&rsquo;s up?&rdquo;</li>
                          <li><strong>Define the Problem:</strong> &ldquo;The thing is, we need to eat dinner so you aren&rsquo;t hungry later.&rdquo;</li>
                          <li><strong>Invitation:</strong> &ldquo;I wonder if there&rsquo;s a way we can solve this together?&rdquo;</li>
                        </ol>
                      </div>
                    </div>

                    {/* PMT Section */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Parent Management Training (PMT)</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Best for mild cases or when ODD features are prominent</li>
                        <li>• Reward systems, planned ignoring, strategic consequences</li>
                        <li>• Less effective for severe DMDD where outbursts are neurologically driven</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="medication">
              <Card className="border-orange-200 dark:border-orange-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                  <CardTitle className="flex items-center gap-3">
                    <Pill className="w-6 h-6 text-orange-500" />
                    Medication Approaches
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
                    <p className="font-semibold text-amber-700 dark:text-amber-400">
                      Important Principle: Medication in DMDD is <strong>comorbidity-driven</strong>. We treat what&rsquo;s underneath.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* First-Line: Stimulants */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-700">First-Line</Badge>
                        Treat the ADHD (80% Comorbid)
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        The TOSCA Trial showed that <strong>optimizing stimulant treatment often reduces aggression</strong> by improving cortical inhibition.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-green-100 dark:bg-green-900/30">
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Medication</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Starting Dose</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Target Range</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {stimulantMedications.map((med, idx) => (
                              <tr key={idx} className="hover:bg-green-50 dark:hover:bg-green-950/20">
                                <td className="px-4 py-2 border font-medium">{med.name}</td>
                                <td className="px-4 py-2 border">{med.starting}</td>
                                <td className="px-4 py-2 border">{med.target}</td>
                                <td className="px-4 py-2 border text-muted-foreground">{med.notes}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Second-Line: Antipsychotics */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Badge className="bg-amber-100 text-amber-700">Second-Line</Badge>
                        Atypical Antipsychotics (For Severe Aggression)
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        When therapy + stimulant optimization isn&rsquo;t enough:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-amber-100 dark:bg-amber-900/30">
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Medication</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Starting Dose</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Target Range</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Key Monitoring</th>
                            </tr>
                          </thead>
                          <tbody>
                            {antipsychoticMedications.map((med, idx) => (
                              <tr key={idx} className="hover:bg-amber-50 dark:hover:bg-amber-950/20">
                                <td className="px-4 py-2 border font-medium">{med.name}</td>
                                <td className="px-4 py-2 border">{med.starting}</td>
                                <td className="px-4 py-2 border">{med.target}</td>
                                <td className="px-4 py-2 border text-muted-foreground">{med.monitoring}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Metabolic Protection:</strong> For children on antipsychotics, we often start Metformin early to prevent weight gain rather than waiting for it to occur.
                      </p>
                    </div>

                    {/* Third-Line: SSRIs */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Badge className="bg-blue-100 text-blue-700">Third-Line</Badge>
                        For Anxiety/Depression Component
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        If significant internalizing symptoms (worry, sadness) accompany irritability:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-blue-100 dark:bg-blue-900/30">
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Medication</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Starting Dose</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Target Range</th>
                              <th className="px-4 py-2 text-left text-sm font-semibold border">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ssriMedications.map((med, idx) => (
                              <tr key={idx} className="hover:bg-blue-50 dark:hover:bg-blue-950/20">
                                <td className="px-4 py-2 border font-medium">{med.name}</td>
                                <td className="px-4 py-2 border">{med.starting}</td>
                                <td className="px-4 py-2 border">{med.target}</td>
                                <td className="px-4 py-2 border text-muted-foreground">{med.notes}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                        <p className="font-semibold text-red-700 dark:text-red-400 mb-2">⚠️ Caution</p>
                        <p className="text-sm text-muted-foreground">In &ldquo;pure&rdquo; DMDD without anxiety, SSRIs may cause activation (worsened irritability).</p>
                      </div>
                    </div>

                    {/* What Does NOT Work */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-500" />
                        What Does NOT Work in DMDD
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                          <p className="font-semibold text-red-700 dark:text-red-400">Lithium</p>
                          <p className="text-sm text-muted-foreground">The hallmark Dickstein study showed no benefit over placebo</p>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                          <p className="font-semibold text-red-700 dark:text-red-400">Benzodiazepines</p>
                          <p className="text-sm text-muted-foreground">High risk of paradoxical disinhibition (makes rage worse)</p>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                          <p className="font-semibold text-red-700 dark:text-red-400">Depakote/Valproate</p>
                          <p className="text-sm text-muted-foreground">No evidence in DMDD (unlike bipolar)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support">
              <Card className="border-orange-200 dark:border-orange-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-orange-500" />
                    Family &amp; School Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    {/* Family Support */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Home className="w-5 h-5 text-teal-500" />
                        The Home Environment
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">1. Reduce &ldquo;Frustrative Non-Reward&rdquo;</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Minimize unnecessary demands during high-risk times</li>
                            <li>• Pick your battles — not every hill is worth dying on</li>
                            <li>• Provide warnings before transitions</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">2. Create Safety Protocols</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Remove dangerous objects during outbursts</li>
                            <li>• Designate a &ldquo;cool-down space&rdquo; (not punishment — regulation)</li>
                            <li>• Other family members know the evacuation plan</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">3. Sibling Protection</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Siblings often develop &ldquo;Glass Child Syndrome&rdquo;</li>
                            <li>• Protected time for siblings</li>
                            <li>• Siblings may need their own support/therapy</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">4. Parental Self-Care</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• You cannot pour from an empty cup</li>
                            <li>• Respite care is essential, not optional</li>
                            <li>• Parent support groups (online or local)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* School Accommodations */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <School className="w-5 h-5 text-blue-500" />
                        School Accommodations (IEP/504)
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        <strong>Classification:</strong> &ldquo;Other Health Impairment&rdquo; (OHI) or &ldquo;Emotional Disturbance&rdquo; (ED)
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {schoolAccommodations.map((item, idx) => (
                          <div key={idx} className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.description }} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* De-Escalation Protocol */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">De-Escalation Protocol for Schools</h3>
                      <div className="space-y-3">
                        <div className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                          <div className="w-8 h-8 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                          <div>
                            <p className="font-semibold">Pre-cursor observed</p>
                            <p className="text-sm text-muted-foreground">(Head down, tapping, withdrawing) → Teacher walks by, drops break card on desk, no eye contact</p>
                          </div>
                        </div>
                        <div className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                          <div className="w-8 h-8 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                          <div>
                            <p className="font-semibold">Student doesn&rsquo;t use break card</p>
                            <p className="text-sm text-muted-foreground">→ Offer face-saving exit: &ldquo;Can you take this envelope to the office?&rdquo;</p>
                          </div>
                        </div>
                        <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                          <div className="w-8 h-8 bg-red-200 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                          <div>
                            <p className="font-semibold">Explosion occurs</p>
                            <p className="text-sm text-muted-foreground">→ Clear OTHER students from room. Do not touch the student. Maintain calm presence at safe distance.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Living With Section */}
        <section id="living-with" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-teal-600 border-teal-300">
              <Home className="w-4 h-4 mr-2" />
              Daily Life
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Living with DMDD</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical strategies for families navigating the daily challenges of DMDD.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-teal-200 dark:border-teal-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-teal-500" />
                  Communication During Outbursts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ What to Say</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• &ldquo;I am here.&rdquo;</li>
                      <li>• &ldquo;You are safe.&rdquo;</li>
                      <li>• &ldquo;I cannot let you hurt me.&rdquo;</li>
                      <li>• &ldquo;We will talk when you are calm.&rdquo;</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-2 italic">(Repeat calmly like a broken record — do not engage in debate)</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ What NOT to Say</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• &ldquo;You need to calm down right now&rdquo;</li>
                      <li>• &ldquo;If you don&rsquo;t stop, I&rsquo;m taking away...&rdquo;</li>
                      <li>• &ldquo;Why are you doing this?&rdquo;</li>
                      <li>• &ldquo;Your sister doesn&rsquo;t act this way&rdquo;</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-teal-200 dark:border-teal-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
                <CardTitle className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-teal-500" />
                  The Prognosis — There Is Hope
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">The &ldquo;Depression Shift&rdquo;</h4>
                    <p className="text-sm text-muted-foreground">
                      Research shows DMDD children are NOT at higher risk for bipolar disorder than the general population. However, they ARE at significantly higher risk for Major Depressive Disorder and Generalized Anxiety Disorder in young adulthood.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">The Trajectory</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• With treatment and brain maturation, the <strong>intensity</strong> of rage typically decreases</li>
                      <li>• The prefrontal cortex continues developing into the mid-20s</li>
                      <li>• Many young adults describe &ldquo;growing out of&rdquo; the explosive component</li>
                      <li>• Underlying anxiety/depression may need ongoing management</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Our Goal</h4>
                    <p className="text-sm text-muted-foreground">
                      Keep them safe, in school, and out of the legal system until their frontal lobes come online. We&rsquo;re buying time with treatment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* The Validation Trap */}
          <Card className="border-purple-200 dark:border-purple-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
              <CardTitle className="flex items-center gap-3">
                <Target className="w-6 h-6 text-purple-500" />
                The &ldquo;Validation Trap&rdquo; to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Parents often cycle between two extremes:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Invalidation</h4>
                  <p className="text-sm text-muted-foreground">Yelling back, &ldquo;Stop being ridiculous!&rdquo;</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Capitulation</h4>
                  <p className="text-sm text-muted-foreground">Giving in to make the screaming stop</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ The Middle Path</h4>
                  <p className="text-sm text-muted-foreground">Validate the emotion, ignore the behavior: &ldquo;I can see you are incredibly angry because the game turned off. I&rsquo;m going to wait here until you&rsquo;re ready to talk about it.&rdquo;</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* When to Seek Help Section */}
        <section className="mb-20 scroll-mt-20">
          <Card className="border-red-200 dark:border-red-800 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <AlertTriangle className="w-7 h-7 text-red-500" />
                When to Seek Help
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-red-100 dark:bg-red-900/50 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                    <span className="text-xl">🚨</span> Call 911 or Go to the ER
                  </h4>
                  <ul className="text-sm space-y-2">
                    {emergencySigns.map((sign, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-amber-100 dark:bg-amber-900/50 rounded-lg border-2 border-amber-300 dark:border-amber-700">
                  <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
                    <span className="text-xl">⚠️</span> Contact Your Psychiatrist Urgently
                  </h4>
                  <ul className="text-sm space-y-2">
                    {urgentSigns.map((sign, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                    <span className="text-xl">📅</span> Schedule an Appointment
                  </h4>
                  <ul className="text-sm space-y-2">
                    {appointmentSigns.map((sign, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: sign }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-red-300 dark:border-red-700">
                <p className="font-semibold text-red-600 dark:text-red-400 mb-2 text-lg">
                  🚨 Emergency Resources
                </p>
                <p className="text-muted-foreground">
                  If your child is in immediate danger or expressing thoughts of self-harm, call 911 or go to your nearest emergency room.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-300">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about DMDD diagnosis and treatment
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card 
                key={index}
                className={`border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                  openFaq === index ? 'ring-2 ring-purple-300 dark:ring-purple-700' : ''
                }`}
                onClick={() => toggleFaq(index)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span className="flex items-center gap-3 text-left">
                      <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: item.question }} />
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" />
                    )}
                  </CardTitle>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0 pb-6">
                    <div className="pl-11 text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Parent Resources Section */}
        <section className="mb-20">
          <Card className="border-indigo-200 dark:border-indigo-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
              <CardTitle className="flex items-center gap-3">
                <BookMarked className="w-6 h-6 text-indigo-500" />
                Parent Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                    Recommended Books
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• &ldquo;The Explosive Child&rdquo; by Ross Greene, PhD</li>
                    <li>• &ldquo;The Whole-Brain Child&rdquo; by Daniel Siegel, MD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clipboard className="w-5 h-5 text-indigo-500" />
                    Validated Screening Tool
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Affective Reactivity Index (ARI) — can be completed before appointment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-indigo-500" />
                    Support Organizations
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• CHADD (Children and Adults with ADHD)</li>
                    <li>• NAMI (National Alliance on Mental Illness)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </main>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white py-16 scroll-mt-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Child Deserves Expert Care
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            DMDD is challenging, but it is treatable. With the right combination of therapy, family support, and when needed, medication, most children show significant improvement.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Dr. Shapiro has over 35 years of experience treating complex pediatric mood disorders. He understands that DMDD affects the whole family and takes a comprehensive approach to treatment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
              asChild
            >
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:859-341-7453">
                <Phone className="w-5 h-5 mr-2" />
                (859) 341-7453
              </a>
            </Button>
          </div>
          <p className="text-white/70 text-sm">
            Serving families in Cincinnati, Northern Kentucky, and surrounding areas. Both in-person and telehealth appointments available.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 mt-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Cincinnati &amp; Northern Kentucky</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>35+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <EmergencyDisclaimer />
      <Footer />
    </div>
  );
};

export default DMDD;
