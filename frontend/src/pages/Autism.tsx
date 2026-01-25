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
  BookOpen,
  Star,
  Calendar,
  Puzzle,
  Sparkles,
  Eye,
  Ear,
  Hand,
  Lightbulb,
  Target,
  Zap,
  Activity,
  School,
  Briefcase,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Autism Page Schema
const autismSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Autism Spectrum Disorder Evaluation & Support in Cincinnati & Northern Kentucky",
    "description": "Comprehensive autism spectrum disorder evaluation and support for children, adolescents, and adults. Expert care from board-certified psychiatrist Dr. Arnold Shapiro with 35+ years experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Autism Spectrum Disorder",
      "alternateName": ["ASD", "Autism", "Asperger's Syndrome"],
      "signOrSymptom": [
        "Social communication differences",
        "Restricted interests",
        "Repetitive behaviors",
        "Sensory sensitivities",
        "Difficulty with change"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about autism spectrum disorder symptoms, evaluation, and support options including accommodations and treatment for co-occurring conditions"
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
        "name": "At what age can autism be diagnosed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Autism can be reliably diagnosed as early as age 2, though many people aren't diagnosed until much later—especially those with fewer support needs or women and girls, who often present differently."
        }
      },
      {
        "@type": "Question",
        "name": "Can adults be diagnosed with autism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many adults are diagnosed with autism for the first time. This is especially common for those who learned to mask their traits or who were previously misdiagnosed with anxiety, depression, or other conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Is there medication for autism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There's no medication for autism itself, but medication can be very helpful for co-occurring conditions like ADHD, anxiety, depression, and sleep problems—which are extremely common in autistic individuals."
        }
      }
    ]
  }
];

export default function Autism() {
  // How Autism Presents Differently
  const autismPresentations = [
    {
      icon: Sparkles,
      title: "In Children",
      description: "Placeholder: Signs often noticed in early childhood including delayed speech, preference for solitary play, intense interests, difficulty with transitions, and sensory sensitivities.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: School,
      title: "In Teens",
      description: "Placeholder: Adolescent challenges including social navigation difficulties, increased awareness of differences, identity formation, executive function struggles, and potential burnout.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Briefcase,
      title: "In Adults",
      description: "Placeholder: Adult presentation including workplace challenges, relationship difficulties, late diagnosis experiences, masking exhaustion, and lifelong compensation strategies.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Heart,
      title: "In Women & Girls",
      description: "Placeholder: Often underdiagnosed due to different presentation, better social masking, internalized symptoms, special interests in more 'typical' areas, and diagnostic criteria based on male presentation.",
      color: "bg-pink-100",
      iconColor: "text-pink-600"
    }
  ];

  // Child Symptoms
  const childSymptoms = [
    "Delayed or unusual speech development",
    "Difficulty with back-and-forth conversation",
    "Limited eye contact or unusual eye contact patterns",
    "Intense focus on specific topics or objects",
    "Repetitive movements (stimming) or behaviors",
    "Strong need for routine and difficulty with changes",
    "Unusual reactions to sensory input (sounds, textures, lights)",
    "Preference for solitary play or difficulty with peer relationships",
    "Difficulty understanding social cues or nonverbal communication"
  ];

  // Teen & Adult Symptoms
  const adultSymptoms = [
    "Difficulty reading social situations or 'unwritten rules'",
    "Feeling exhausted from social interactions (social burnout)",
    "History of being misunderstood or feeling 'different'",
    "Intense, focused interests that may seem unusual to others",
    "Preference for routine and difficulty adapting to change",
    "Sensory sensitivities that affect daily life",
    "Difficulty with executive function (planning, organizing)",
    "Challenges in maintaining relationships or employment",
    "History of anxiety, depression, or other mental health diagnoses"
  ];

  // Co-occurring Conditions
  const coOccurringConditions = [
    {
      icon: Zap,
      title: "ADHD",
      description: "Placeholder: 50-70% of autistic individuals also have ADHD. The overlap is significant and both conditions need to be addressed for effective support.",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: AlertCircle,
      title: "Anxiety",
      description: "Placeholder: Anxiety is extremely common in autism, often related to social situations, sensory overload, and uncertainty. Proper treatment makes a significant difference.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Depression",
      description: "Placeholder: Autistic individuals have higher rates of depression, often related to masking, social challenges, and feeling misunderstood throughout life.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Ear,
      title: "Sensory Processing Differences",
      description: "Placeholder: Sensory sensitivities or seeking behaviors are core features that significantly impact daily life and require understanding and accommodation.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  // After Diagnosis Support
  const afterDiagnosisSupport = [
    {
      icon: BookOpen,
      title: "Understanding Your Diagnosis",
      description: "Placeholder: Education about autism, connecting with autistic community, reframing life experiences through new understanding.",
      details: ["Psychoeducation sessions", "Recommended resources", "Community connections", "Identity exploration"]
    },
    {
      icon: Shield,
      title: "Accommodations & Support",
      description: "Placeholder: Workplace, school, and daily life accommodations that can make a significant difference in functioning and well-being.",
      details: ["School/workplace accommodations", "Environmental modifications", "Communication strategies", "Support planning"]
    },
    {
      icon: Pill,
      title: "Treatment for Co-occurring Conditions",
      description: "Placeholder: Medication and therapy for ADHD, anxiety, depression, and other conditions that commonly co-occur with autism.",
      details: ["ADHD medication", "Anxiety treatment", "Depression management", "Sleep support"]
    },
    {
      icon: Users,
      title: "Family Support & Education",
      description: "Placeholder: Helping family members understand autism and learn how to provide effective support.",
      details: ["Family education", "Communication strategies", "Advocacy skills", "Sibling support"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has helped over 9,000 patients, with extensive experience in autism evaluation and co-occurring conditions."
    },
    {
      icon: Brain,
      title: "Comprehensive Evaluation",
      description: "We don't just look for autism—we evaluate for ADHD, anxiety, depression, and other conditions that commonly co-occur."
    },
    {
      icon: Heart,
      title: "Neurodiversity-Affirming",
      description: "We view autism as a difference, not a deficit. Our goal is to help you understand yourself and get the support you need."
    },
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "We're extremely accessible—your questions are answered almost always the same day. Never feel alone in your journey."
    },
    {
      icon: Shield,
      title: "All Ages Welcome",
      description: "We evaluate children, teens, and adults. Many adults come to us wondering if autism explains their lifelong experiences."
    },
    {
      icon: GraduationCap,
      title: "Practical Support",
      description: "Beyond diagnosis, we help with accommodations, treatment for co-occurring conditions, and connecting you with resources."
    }
  ];

  const faqs = [
    {
      question: "At what age can autism be diagnosed?",
      answer: "Placeholder: Autism can be reliably diagnosed as early as age 2, though many people aren't diagnosed until much later—especially those with fewer support needs or women and girls, who often present differently."
    },
    {
      question: "Can adults be diagnosed with autism?",
      answer: "Placeholder: Yes, many adults are diagnosed with autism for the first time. This is especially common for those who learned to mask their traits or who were previously misdiagnosed with anxiety, depression, or other conditions."
    },
    {
      question: "Is there medication for autism?",
      answer: "Placeholder: There's no medication for autism itself, but medication can be very helpful for co-occurring conditions like ADHD, anxiety, depression, and sleep problems—which are extremely common in autistic individuals."
    },
    {
      question: "What's the difference between autism evaluation and ADHD evaluation?",
      answer: "Placeholder: While both are comprehensive, autism evaluation focuses more on social communication, sensory processing, and patterns of behavior. However, since ADHD and autism frequently co-occur (50-70% overlap), we evaluate for both."
    },
    {
      question: "I've been told I'm 'too social' to be autistic. Can that be true?",
      answer: "Placeholder: Many autistic people, especially women, are highly social—they've just learned to mask or compensate. Being social doesn't rule out autism. What matters is how much effort socializing requires and how you feel afterward."
    },
    {
      question: "Will a diagnosis go on my permanent record? Will it affect my job?",
      answer: "Placeholder: Your medical records are confidential. A diagnosis is a tool for understanding yourself and getting support—you choose what to share and with whom. Many people find diagnosis helpful for workplace accommodations."
    },
    {
      question: "What if I'm diagnosed with autism? What happens next?",
      answer: "Placeholder: Diagnosis is just the beginning. We help you understand what it means for you, treat any co-occurring conditions, connect you with resources, and support accommodations if needed. Many people find diagnosis validating and empowering."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You'll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Autism Evaluation Cincinnati | ASD Assessment for Children & Adults | Dr. Shapiro</title>
        <meta name="description" content="Expert autism spectrum disorder evaluation in Cincinnati & Northern Kentucky. Board-certified psychiatrist Dr. Arnold Shapiro specializes in autism assessment for children, teens, and adults. 35+ years experience. Same-day responses. Call (859) 341-7453." />
        <meta name="keywords" content="autism evaluation Cincinnati, ASD assessment Cincinnati, autism diagnosis Northern Kentucky, adult autism evaluation, autism spectrum disorder, ADHD and autism, autism in women, autism in girls" />
        <link rel="canonical" href={`${window.location.origin}/autism`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Autism Spectrum Disorder Evaluation & Support in Cincinnati & Northern Kentucky | Dr. Arnold Shapiro" />
        <meta property="og:description" content="Comprehensive autism evaluation and support for children, teens, and adults from a board-certified psychiatrist with 35+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/autism`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(autismSchema)}
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
                    <Puzzle className="w-4 h-4 mr-1" />
                    Autism Specialists
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children & Adults
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Autism Spectrum Disorder Evaluation & Support in{" "}
                  <span className="text-primary">Cincinnati & Northern Kentucky</span>
                </h1>
                
                <p className="text-2xl text-primary font-semibold">
                  Understanding Yourself Is the First Step
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Placeholder: Whether you're a parent wondering about your child, or an adult who has always felt 
                  "different," getting the right answers changes everything. We provide comprehensive autism 
                  evaluation for all ages—including adults who may have been missed or misdiagnosed for years.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Comprehensive evaluation for autism and co-occurring conditions</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Experienced with women, girls, and late diagnosis</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Neurodiversity-affirming approach</span>
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
                    Schedule Your Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    onClick={() => window.location.href = '/screening?assessment=autism'}
                  >
                    Take Free Autism Screening
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Supportive autism evaluation consultation with psychiatrist Dr. Arnold Shapiro" 
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

        {/* Understanding Autism Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  Understanding Autism
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  What Is Autism Spectrum Disorder?
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      Placeholder: Autism is a neurodevelopmental difference that affects how people perceive the world, 
                      communicate, and interact with others. It&apos;s called a "spectrum" because it presents very differently 
                      from person to person—there&apos;s no single "type" of autistic person.
                    </p>
                    
                    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                      <p className="text-teal-800">
                        Placeholder: <strong>Autism is not a disease to be cured—it&apos;s a different way of being.</strong> Many 
                        autistic people describe it as having a different "operating system." Our goal is to help you 
                        understand yourself, address any challenges, and leverage your strengths.
                      </p>
                    </div>
                    
                    <p>
                      Placeholder: For many people, getting diagnosed—whether as a child or an adult—is a turning point. 
                      It helps explain lifelong experiences and opens the door to appropriate support, accommodations, 
                      and self-understanding.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How Autism Presents Differently */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <Eye className="w-4 h-4 mr-1" />
                Different Presentations
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How Autism Presents Differently
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Placeholder: Autism looks different depending on age, gender, and individual factors. Understanding these 
                differences is crucial for accurate identification.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {autismPresentations.map((presentation, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className={`w-14 h-14 ${presentation.color} rounded-full flex items-center justify-center mb-4`}>
                      <presentation.icon className={`w-7 h-7 ${presentation.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg">{presentation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{presentation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Signs to Watch For */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Signs to Watch For
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Common Signs of Autism
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Placeholder: These signs may indicate autism, but remember that autism presents very differently 
                in each person. Not everyone will have all these traits.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Children Symptoms */}
              <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Signs in Children
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Early signs that may warrant evaluation
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
              
              {/* Teen & Adult Symptoms */}
              <Card className="bg-gradient-to-br from-teal-50 to-background border-teal-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-700 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6" />
                    Signs in Teens & Adults
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Signs that may indicate autism in older individuals
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {adultSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
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
                onClick={() => window.location.href = '/screening?assessment=autism'}
              >
                Take Free Autism Screening
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Science of Autism */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Brain className="w-4 h-4 mr-1" />
                  The Science
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Understanding the Autistic Brain
                </h2>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Placeholder: Autism is a neurodevelopmental difference present from birth. Research shows that 
                    autistic brains are wired differently—not defectively, just differently.
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-purple-50 to-background border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Different Wiring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Placeholder: Autistic brains show increased connectivity in some areas and decreased in others. 
                      This leads to different patterns of thinking, perceiving, and processing information.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700 flex items-center gap-2">
                      <Ear className="w-5 h-5" />
                      Sensory Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Placeholder: Many autistic people experience sensory input differently—either more intensely 
                      (hypersensitivity) or less intensely (hyposensitivity). This is a neurological difference, not 
                      a choice or behavior problem.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-background border-green-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Detail-Focused Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Placeholder: Autistic brains often excel at noticing details and patterns that others miss. 
                      This can be a significant strength in many fields and situations.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-amber-50 to-background border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-700 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Genetic Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Placeholder: Autism is highly heritable. It&apos;s not caused by parenting, vaccines, or anything 
                      parents did or didn&apos;t do. It&apos;s simply a different neurological profile.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Autism and Co-Occurring Conditions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                  <Heart className="w-4 h-4 mr-1" />
                  Co-Occurring Conditions
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Autism Rarely Travels Alone
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Placeholder: Most autistic individuals have at least one other condition. Identifying and treating 
                  these co-occurring conditions is often the key to improving quality of life.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {coOccurringConditions.map((condition, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className={`w-14 h-14 ${condition.color} rounded-full flex items-center justify-center mb-4`}>
                        <condition.icon className={`w-7 h-7 ${condition.iconColor}`} />
                      </div>
                      <CardTitle className="text-lg">{condition.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{condition.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* We Look for Everything Callout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-primary/30 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Puzzle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">We Look for Everything—Not Just Autism</h3>
                    <p className="text-foreground leading-relaxed">
                      When you come to us wondering about autism, we don&apos;t stop there—we evaluate for <em>everything</em>. 
                      ADHD, anxiety, depression, and other conditions frequently co-occur with autism—in fact, most 
                      autistic individuals have at least one other condition. <strong>Finding the complete picture 
                      changes everything about your support plan.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Evaluation Process */}
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
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Adults Section */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-teal-700">For Adults</CardTitle>
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
                  
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 my-4">
                    <p className="text-teal-800 font-semibold mb-2">Here&apos;s what makes us different:</p>
                    <p className="text-teal-700 text-sm">
                      Placeholder: We understand that many adults coming for autism evaluation have been misdiagnosed 
                      or missed for years. We take your history seriously and look at the complete picture.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-amber-800 font-semibold text-sm">Dr. Shapiro&apos;s Guidance:</p>
                    <p className="text-amber-700 italic">&quot;Understanding yourself is the first step. We&apos;ll help you figure out what it means and where to go from here.&quot;</p>
                  </div>
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
                      Placeholder: Not just autism—ADHD, anxiety, depression, learning differences—we evaluate comprehensively 
                      because these conditions often co-occur and proper diagnosis changes everything.
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
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Happens After Diagnosis */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20 mb-4">
                <Home className="w-4 h-4 mr-1" />
                After Diagnosis
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Happens After Diagnosis
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Placeholder: Diagnosis is just the beginning. We help you understand what it means and connect you 
                with the support you need.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {afterDiagnosisSupport.map((option, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{option.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {option.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-healing flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
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
                Why Patients Trust Dr. Shapiro for Autism Evaluation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over three decades of experience and a neurodiversity-affirming approach, we&apos;ve helped 
                countless individuals understand themselves and get the support they need.
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
                Frequently Asked Questions About Autism Evaluation
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
                Ready to Get Answers?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Placeholder: Whether you&apos;re a parent seeking answers for your child or an adult who has always felt 
                different, understanding is the first step. With over 9,000 patients helped and 35+ years of experience, 
                Dr. Shapiro can help you find the clarity you&apos;re looking for.
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
