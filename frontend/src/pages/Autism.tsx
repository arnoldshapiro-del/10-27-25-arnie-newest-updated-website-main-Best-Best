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
  Lightbulb,
  Target,
  Zap,
  Activity,
  School,
  Briefcase,
  Home,
  Baby,
  Moon,
  AlertTriangle,
  Ban,
  CheckCircle,
  XCircle,
  Scroll,
  Building,
  DollarSign
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
    "name": "Autism Spectrum Disorder Evaluation & Treatment in Cincinnati & Northern Kentucky",
    "description": "Comprehensive autism spectrum disorder evaluation and treatment for children, teenagers, and adults. Board-certified psychiatrist with 35+ years experience. Cincinnati and Fort Wright, KY.",
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
      "description": "Information about autism spectrum disorder symptoms, evaluation, and treatment options including medication for co-occurring conditions and school accommodations"
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
        "name": "Will my child ever be 'normal'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We don't aim for 'normal'—we aim for happy, functional, and thriving. Many autistic individuals live successful lives: careers, relationships, families. The goal is helping your child become the best version of themselves, not a less-autistic version."
        }
      },
      {
        "@type": "Question",
        "name": "Did I cause my child's autism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Autism is strongly genetic and begins before birth. It's not caused by parenting, vaccines, or anything you did or didn't do."
        }
      },
      {
        "@type": "Question",
        "name": "Should I tell my child they're autistic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, in an age-appropriate way. Research consistently shows that autistic individuals who understand their diagnosis have better mental health outcomes than those who are kept in the dark."
        }
      }
    ]
  }
];

export default function Autism() {
  // Co-occurring Conditions
  const coOccurringConditions = [
    {
      icon: Zap,
      title: "ADHD",
      percentage: "Very Common",
      description: "Many autistic individuals also have ADHD. The combination—sometimes called 'AuDHD'—creates unique challenges: the autistic brain craves routine while the ADHD brain craves novelty. Treatment requires understanding both.",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: AlertCircle,
      title: "Anxiety",
      percentage: "Common",
      description: "Many autistic youth have significant anxiety. Much of this anxiety comes from living in an unpredictable world that doesn't make intuitive sense. We address both the underlying neurology and practical coping strategies.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Moon,
      title: "Sleep Disorders",
      percentage: "Very Common",
      description: "Many autistic children have sleep problems. The brain's melatonin production is often dysregulated. Poor sleep makes every autism-related challenge worse—addressing sleep is often our first priority.",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: Activity,
      title: "Gastrointestinal Issues",
      percentage: "Common",
      description: "Many autistic individuals have gut problems (constipation, reflux, food sensitivities). A child who seems irritable or aggressive may actually be in physical pain they can't communicate. We always consider the gut.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Ear,
      title: "Sensory Processing Differences",
      percentage: "Nearly all",
      description: "autistic individuals experience sensory input differently—some are hypersensitive (sounds too loud, lights too bright), others are hyposensitive (seeking intense input), and many are both depending on the sense.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  // Female misdiagnoses
  const femaleMisdiagnoses = [
    "Anxiety disorders",
    "Depression",
    "Borderline Personality Disorder (especially in teens/young adults)",
    "Eating disorders",
    "'Just shy' or 'highly sensitive'"
  ];

  // School accommodations
  const schoolAccommodations = [
    "Access to a quiet space for breaks when overwhelmed",
    "Scheduled sensory breaks throughout the day",
    "Written instructions in addition to verbal directions",
    "Extended time for tests and assignments",
    "Permission to use headphones or sunglasses for sensory management",
    "Modified homework load (acknowledging the 'after school crash')"
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Dr. Shapiro has helped over 9,000 patients, with extensive experience in autism evaluation and treating co-occurring conditions."
    },
    {
      icon: Brain,
      title: "Comprehensive Evaluation",
      description: "We don't just look for autism—we evaluate for ADHD, anxiety, sleep disorders, and other conditions that commonly co-occur."
    },
    {
      icon: Heart,
      title: "Neurodiversity-Affirming",
      description: "We view autism as a difference, not a deficit. Our goal is to help autistic individuals thrive as themselves—not appear 'normal.'"
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
      title: "School Advocacy",
      description: "We provide documentation for IEPs and 504 plans, and advocate for appropriate accommodations and support."
    }
  ];

  const faqs = [
    {
      question: "Will my child ever be 'normal'?",
      answer: "We don't aim for 'normal'—we aim for happy, functional, and thriving. Many autistic individuals live successful lives: careers, relationships, families. The goal is helping your child become the best version of themselves, not a less-autistic version."
    },
    {
      question: "Did I cause my child's autism?",
      answer: "No. Autism is strongly genetic and begins before birth. It's not caused by parenting, vaccines, or anything you did or didn't do. If you're autistic yourself (which is common in parents of autistic children), your child's diagnosis may help you understand your own brain better."
    },
    {
      question: "Should I tell my child they're autistic?",
      answer: "Yes, in an age-appropriate way. Research consistently shows that autistic individuals who understand their diagnosis have better mental health outcomes than those who are kept in the dark. Knowing 'why I'm different' is much healthier than thinking 'something's wrong with me.'"
    },
    {
      question: "What about special diets and supplements?",
      answer: "Gluten-free/casein-free diets only help if your child has an actual food sensitivity—and can create nutritional deficiencies if not managed carefully. We take an evidence-based approach: some supplements (like omega-3s) have modest support; others (like chelation therapy) are dangerous and should never be used."
    },
    {
      question: "My child was fine and then seemed to regress. What happened?",
      answer: "Some children do appear to lose skills around 18-24 months. This doesn't mean something 'happened' to cause autism—it's a recognized pattern in autism development. However, any regression should be thoroughly evaluated to rule out other conditions."
    },
    {
      question: "Is my teenager's autism getting worse?",
      answer: "Probably not. Adolescence increases social demands dramatically, which can make autism more visible. We also see increased anxiety and depression during teen years. These are treatable—your teen isn't 'getting worse,' they're facing harder challenges."
    },
    {
      question: "What are your payment options?",
      answer: "We are an out-of-network practice. You'll pay at the time of your visit, and we provide detailed receipts (superbills) so you can submit to your insurance for possible reimbursement. Many patients with out-of-network mental health benefits receive partial reimbursement. We accept cash, check, and all major credit cards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Autism Spectrum Disorder Evaluation & Treatment | Dr. Arnold Shapiro | Cincinnati & Northern Kentucky</title>
        <meta name="description" content="Comprehensive autism evaluation and treatment for children, teenagers, and adults. Board-certified psychiatrist with 35+ years experience. Cincinnati and Fort Wright, KY." />
        <meta name="keywords" content="autism evaluation Cincinnati, autism psychiatrist Cincinnati, autism diagnosis adults Cincinnati, autism treatment Northern Kentucky, ASD evaluation Cincinnati, autism doctor Fort Wright KY, autism specialist Cincinnati, autism testing near me" />
        <link rel="canonical" href={`${window.location.origin}/autism`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Autism Spectrum Disorder Evaluation & Treatment | Dr. Arnold Shapiro | Cincinnati & Northern Kentucky" />
        <meta property="og:description" content="Comprehensive autism evaluation and treatment for children, teenagers, and adults. Board-certified psychiatrist with 35+ years experience." />
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
                  Autism Spectrum Disorder Evaluation & Treatment in{" "}
                  <span className="text-primary">Cincinnati</span>
                </h1>
                
                <p className="text-2xl text-primary font-semibold">
                  Understanding Your Child&apos;s Unique Brain—And Helping Them Thrive
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Autism isn&apos;t something to be &quot;fixed.&quot; It&apos;s a different way of experiencing the world. 
                  Our goal is to help your child (or you, if you&apos;re an adult seeking answers) understand their brain, 
                  manage challenges, and build on their remarkable strengths. <strong>With the right support, autistic 
                  individuals can live fulfilling, successful lives.</strong>
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Comprehensive evaluation for autism and co-occurring conditions</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span>Experienced with girls, women, and late diagnosis</span>
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
                  A Different Operating System
                </h2>
              </div>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    <p>
                      Think of the brain like a computer. Most computers run on Windows. <strong>Autistic brains run on 
                      a different operating system</strong>—let&apos;s call it &quot;Autism OS.&quot; It&apos;s not broken or 
                      inferior—it just processes information differently.
                    </p>
                    
                    <div className="bg-teal-50 rounded-lg p-6">
                      <p className="font-semibold text-teal-800 mb-3">Autistic individuals often:</p>
                      <ul className="space-y-2 text-teal-700">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Experience the world more intensely (sounds louder, lights brighter, textures more noticeable)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Think in patterns and details that others miss</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Prefer predictability and clear rules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Communicate more directly (less interested in small talk)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Develop deep expertise in topics that fascinate them</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p>
                      These differences can create challenges in a world designed for the &quot;typical&quot; operating 
                      system—but they also come with <strong>genuine strengths that neurotypical people don&apos;t have</strong>.
                    </p>
                    
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-primary/30 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-foreground">
                          <strong className="text-primary">Autism is not a disease to cure.</strong> It&apos;s a neurological 
                          difference to understand and support. Our approach focuses on helping autistic individuals thrive 
                          as themselves—not on making them appear &quot;normal.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How Autism Looks Different at Every Age */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <Eye className="w-4 h-4 mr-1" />
                Different at Every Age
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How Autism Looks Different at Every Age
              </h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Toddlers & Young Children */}
              <Card className="bg-gradient-to-br from-pink-50 to-background border-pink-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Baby className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-pink-700">Toddlers & Young Children (Under 5)</CardTitle>
                      <p className="text-muted-foreground">What Parents Often Notice First</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Not responding to their name (even though hearing is fine)</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Limited or no pointing at things to share interest</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Less back-and-forth babbling or conversation</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Intense interest in specific objects (wheels, fans, letters, numbers)</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Lining things up or organizing by color/size</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Unusual reactions to sounds, textures, or lights</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Preferring to play alone or playing with toys in unusual ways</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Delayed speech or losing words they previously used</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-pink-100 rounded-lg p-4 mt-4">
                    <p className="text-pink-800 italic">
                      <strong>What This Looks Like:</strong> A toddler might become fascinated with how wheels spin and 
                      watch them for extended periods. They might not look up when you call their name, but they&apos;ll hear 
                      the microwave beep from across the house. They might have a complete meltdown if you take a different 
                      route to daycare.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* School-Age Children */}
              <Card className="bg-gradient-to-br from-blue-50 to-background border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <School className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-blue-700">School-Age Children (5-12)</CardTitle>
                      <p className="text-muted-foreground">What Parents & Teachers Notice</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Difficulty making or keeping friends</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Not understanding unwritten social rules (&quot;Why is everyone laughing?&quot;)</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Taking things very literally (&quot;It&apos;s raining cats and dogs&quot; causes confusion)</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Intense, encyclopedic knowledge about specific topics</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Strong need for routine—distress when plans change</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Difficulty with group work or unstructured time (like recess)</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Sensory sensitivities (cafeteria too loud, fluorescent lights)</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Motor clumsiness (difficulty with handwriting, catching balls)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="text-blue-800">
                      <strong>The Homework Battle:</strong> Many parents describe homework as a nightly crisis. It&apos;s not 
                      defiance—it&apos;s often that the child used all their mental energy &quot;holding it together&quot; at school, 
                      and they simply have nothing left. They need a decompression period before any demands.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Teenagers */}
              <Card className="bg-gradient-to-br from-purple-50 to-background border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-purple-700">Teenagers</CardTitle>
                      <p className="text-muted-foreground">What Becomes More Visible</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Growing awareness of being &quot;different&quot; from peers</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Difficulty with the unwritten rules of teenage social life</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Intense anxiety about social situations</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Depression or withdrawal as social demands increase</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Possible &quot;shutdowns&quot; or &quot;meltdowns&quot; when overwhelmed</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Struggles with organization, time management, and multi-step projects</span>
                    </li>
                  </ul>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                    <p className="text-red-800">
                      <strong>The Risk Zone:</strong> Adolescence is when many autistic individuals develop depression or 
                      anxiety—not because of autism itself, but because of the exhaustion of trying to fit in. This is 
                      especially true for girls, who are often better at &quot;masking&quot; their autism and may not be diagnosed 
                      until their teens or adulthood.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Adults */}
              <Card className="bg-gradient-to-br from-teal-50 to-background border-teal-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-teal-700">Adults (Including Late Diagnosis)</CardTitle>
                      <p className="text-muted-foreground">Signs in Adults Who Were Never Diagnosed</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Always feeling like you&apos;re &quot;on a different wavelength&quot;</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Exhaustion from social situations, even enjoyable ones</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Strong preference for routine and predictability</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Sensory sensitivities that others don&apos;t understand</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Difficulty with workplace politics and unwritten rules</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>History of being called &quot;too intense,&quot; &quot;too sensitive,&quot; or &quot;weird&quot;</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Successful in structured environments but struggling in ambiguous ones</span>
                    </li>
                  </ul>
                  <div className="bg-teal-100 rounded-lg p-4 mt-4">
                    <p className="text-teal-800">
                      <strong>Why Adults Seek Diagnosis:</strong> Many adults come to us after years of struggling without 
                      knowing why. Some were told they had anxiety, depression, ADHD, or even personality disorders—but 
                      nothing quite fit. <strong>Learning about autism often feels like finally finding the owner&apos;s manual 
                      for their brain.</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Girls and Women Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-pink-100 text-pink-600 border-pink-200 mb-4">
                  <Heart className="w-4 h-4 mr-1" />
                  The Hidden Population
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Girls and Women with Autism
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Why autism is often missed in females
                </p>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    For decades, autism research focused almost entirely on boys. As a result, the &quot;classic&quot; autism 
                    profile is based on how boys present. <strong>Girls and women often look very different—and are 
                    frequently missed or misdiagnosed.</strong>
                  </p>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">How Autism Presents Differently in Females:</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h4 className="font-semibold text-pink-800 mb-2">Social Camouflaging</h4>
                      <p className="text-pink-700 text-sm">Girls are more likely to study and copy social behaviors, appearing more socially adept on the surface while exhausting themselves internally.</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h4 className="font-semibold text-pink-800 mb-2">Different Interests</h4>
                      <p className="text-pink-700 text-sm">Rather than trains or dinosaurs, girls may have intense interests in animals, celebrities, psychology, or fiction—interests that seem &quot;normal&quot; but are pursued with unusual intensity.</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h4 className="font-semibold text-pink-800 mb-2">Internalizing Problems</h4>
                      <p className="text-pink-700 text-sm">Boys with autism often act out; girls often turn inward with anxiety, depression, or eating disorders.</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h4 className="font-semibold text-pink-800 mb-2">The &quot;Chameleon&quot; Effect</h4>
                      <p className="text-pink-700 text-sm">Girls may adopt different personas to fit in, changing their personality based on who they&apos;re with.</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">Common Misdiagnoses in Females:</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {femaleMisdiagnoses.map((diagnosis, index) => (
                      <Badge key={index} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        {diagnosis}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-amber-800">
                      <strong>The Cost of Late Diagnosis:</strong> Many women aren&apos;t diagnosed until their 20s, 30s, or 
                      even later. By then, they&apos;ve often developed anxiety disorders, depression, and a deep sense of 
                      &quot;what&apos;s wrong with me?&quot; <strong>Getting the correct diagnosis can be life-changing—finally 
                      understanding why everything has felt so hard.</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Co-occurring Conditions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                The Complete Picture
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Conditions That Often Co-Occur with Autism
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Autism rarely travels alone. Research shows that most autistic individuals have at least one other 
                condition that needs attention. This is why a thorough evaluation is so important.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {coOccurringConditions.map((condition, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className={`w-14 h-14 ${condition.color} rounded-full flex items-center justify-center mb-4`}>
                      <condition.icon className={`w-7 h-7 ${condition.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {condition.title}
                      <Badge variant="outline" className="text-xs">{condition.percentage}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-amber-800">
                    <strong>When a child seems to be &quot;getting worse&quot; or having more meltdowns,</strong> the cause is 
                    usually something we can identify and treat: untreated anxiety, sleep deprivation, unrecognized 
                    pain, or environmental overwhelm. <strong>We look for these hidden drivers.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Look for Everything Callout */}
        <section className="py-12 bg-muted/30">
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
                      When you come to us concerned about autism, we conduct a comprehensive evaluation that looks at 
                      the complete picture. Autism often co-occurs with ADHD, anxiety, sleep disorders, and other 
                      conditions that need their own attention. <strong>Finding everything changes your treatment plan entirely.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment & Support */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20 mb-4">
                <Pill className="w-4 h-4 mr-1" />
                Treatment & Support
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                There Is No &quot;Cure&quot; for Autism—But There Is Effective Help
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We don&apos;t treat autism itself—we treat the challenges that come with it. Our goal is to help autistic 
                individuals manage their difficulties, leverage their strengths, and live their best lives.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* What We CAN Help With */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    What We CAN Help With
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Irritability & Aggression</h4>
                      <p className="text-green-700 text-sm">
                        When an autistic child is aggressive, there&apos;s always a reason. Often it&apos;s unrecognized pain, 
                        overwhelming anxiety, or communication frustration. We find the cause. If medication is needed, 
                        two medications (risperidone and aripiprazole) are FDA-approved specifically for irritability in 
                        autism and can make a dramatic difference when used correctly.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">ADHD Symptoms</h4>
                      <p className="text-green-700 text-sm">
                        For autistic individuals who also have ADHD, we often start with guanfacine—a medication that 
                        helps with hyperactivity and impulsivity without the risk of increased irritability that 
                        stimulants can cause in autistic individuals.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Anxiety</h4>
                      <p className="text-green-700 text-sm">
                        We use very low doses of anxiety medications (starting at 1/4 to 1/2 of the typical dose) 
                        because autistic brains often react more sensitively. <strong>&quot;Start low, go slow&quot;</strong> is our rule.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Sleep Problems</h4>
                      <p className="text-green-700 text-sm">
                        Melatonin is often helpful but must be used correctly—both immediate-release (to fall asleep) 
                        and extended-release (to stay asleep) forms may be needed. We also address sleep hygiene in 
                        autism-specific ways.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      What We DON&apos;T Do
                    </h4>
                    <p className="text-red-700 text-sm">
                      We don&apos;t try to eliminate autistic traits like stimming (self-stimulatory behaviors), special 
                      interests, or direct communication style. <strong>These aren&apos;t problems—they&apos;re part of how autistic 
                      brains work.</strong> We focus on reducing distress, not reducing autism.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Behavioral & Therapeutic Support */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                    Behavioral & Therapeutic Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Parent Training (RUBI Protocol)</h4>
                      <p className="text-purple-700 text-sm">
                        The Research Units in Behavioral Intervention (RUBI) is the only parent training program with 
                        strong research evidence for reducing challenging behaviors in autistic children. We can connect 
                        you with trained providers.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Modified CBT for Anxiety</h4>
                      <p className="text-purple-700 text-sm">
                        Standard cognitive behavioral therapy often fails for autistic individuals because it relies on 
                        abstract thinking. Modified approaches use visual supports, special interests, and concrete language.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Speech & Occupational Therapy</h4>
                      <p className="text-purple-700 text-sm">
                        Speech therapy isn&apos;t just about talking—it&apos;s about communication, including using devices if 
                        needed. Occupational therapy addresses sensory needs and daily living skills. Both are essential supports.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* School Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200 mb-4">
                  <School className="w-4 h-4 mr-1" />
                  School Support
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Getting the Right Support at School
                </h2>
                <p className="text-lg text-muted-foreground">
                  As your child&apos;s doctor, we provide the medical documentation that supports their educational needs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">IEP (Individualized Education Program)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized instruction through special education. Includes specific, measurable goals.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">504 Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Accommodations only (extra time, preferential seating, etc.) without specialized instruction.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Accommodations We Often Recommend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {schoolAccommodations.map((accommodation, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{accommodation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-2">What We Put in Our Letters</h4>
                <p className="text-blue-700">
                  We provide documentation stating that behaviors are a manifestation of disability—meaning traditional 
                  discipline approaches (like suspension) are inappropriate and counterproductive. We advocate for 
                  functional behavioral assessment and proper support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planning for the Future */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-amber-100 text-amber-600 border-amber-200 mb-4">
                  <Target className="w-4 h-4 mr-1" />
                  Planning Ahead
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  The Long Game: Supporting Your Child Into Adulthood
                </h2>
                <p className="text-lg text-muted-foreground">
                  We think beyond just today&apos;s challenges. Here are important milestones to plan for.
                </p>
              </div>
              
              <div className="space-y-4">
                <Card className="bg-gradient-to-r from-amber-50 to-background border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-amber-700">14</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-800 text-lg">Age 14 - Transition IEP</h4>
                        <p className="text-amber-700">Begin the &quot;Transition IEP&quot; focusing on life skills and vocational preparation, not just academics.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-blue-50 to-background border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-blue-700">17-18</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 text-lg">Age 17-18 - Guardianship Decisions</h4>
                        <p className="text-blue-700">Discuss guardianship options. Full guardianship removes all rights—consider &quot;Supported Decision Making&quot; instead, which keeps your adult child&apos;s autonomy while providing help with complex decisions.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-green-50 to-background border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-green-700">18</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 text-lg">Age 18 - Benefits Applications</h4>
                        <p className="text-green-700">Apply for SSI (Supplemental Security Income) and get on the Section 8 housing waitlist—these have 5-10 year waits, so start early even if you don&apos;t need them yet.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-red-50 to-background border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-red-700">22</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 text-lg">Age 22 - &quot;The Cliff&quot;</h4>
                        <p className="text-red-700">Aging out of the school system. Planning for adult day programs, supported employment, or college accommodations should begin years before.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Financial Planning</h4>
                    <p className="text-purple-700">
                      An <strong>ABLE Account</strong> allows savings up to $100,000 without jeopardizing SSI or Medicaid eligibility. 
                      A <strong>Special Needs Trust</strong> protects larger inheritances. <strong>Never leave money directly to a 
                      disabled adult child in a will</strong>—consult a special needs attorney.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The ABA Question */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-orange-100 text-orange-600 border-orange-200 mb-4">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Important Information
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  About ABA Therapy: What Parents Should Know
                </h2>
                <p className="text-lg text-muted-foreground">
                  You&apos;ll hear a lot about Applied Behavior Analysis (ABA). Here&apos;s an honest perspective.
                </p>
              </div>
              
              <Card className="bg-card border-border mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700">The Controversy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    Many autistic adults who went through ABA as children describe it as harmful or even traumatic—particularly 
                    older approaches that tried to eliminate autistic behaviors like stimming or forced eye contact. 
                    <strong> Their voices matter and should inform how we think about treatment.</strong>
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      What to Look For in ABA
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Uses &quot;Natural Environment Teaching&quot; (not just table drills)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Respects the child&apos;s ability to say &quot;no&quot; (assent-based)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Focuses on practical skills (safety, communication, daily living)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Does NOT target stimming or other self-regulatory behaviors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Does NOT use aversives (punishment-based approaches)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 flex items-center gap-2">
                      <Ban className="w-5 h-5" />
                      What to Avoid
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Programs that promise to make your child &quot;indistinguishable from peers&quot;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>40-hour-per-week intensity for young children</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Any approach that sees all autistic behaviors as problems to eliminate</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-healing/10 border-2 border-primary/30 rounded-xl p-6">
                <h4 className="font-semibold text-primary mb-2">Our Position</h4>
                <p className="text-foreground">
                  We believe autistic children need support to manage genuine challenges—not training to appear non-autistic. 
                  <strong> Any therapy should leave your child feeling good about themselves, not ashamed of who they are.</strong>
                </p>
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
                Comprehensive Autism Evaluation
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Children Evaluation */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-blue-700">For Children</CardTitle>
                      <p className="text-sm text-muted-foreground">Approximately 3 Hours (may be split across visits)</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground font-medium mb-3">What Our Evaluation Includes:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Detailed developmental history from pregnancy to present</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Review of school records and teacher observations</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Parent interview about current concerns and daily functioning</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Direct observation and interaction with your child</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Assessment for co-occurring conditions (ADHD, anxiety, sleep problems)</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Sensory profile assessment</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Discussion of what we find and what it means</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Specific recommendations for next steps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Adult Evaluation */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-teal-700">For Adults Seeking Diagnosis</CardTitle>
                      <p className="text-sm text-muted-foreground">Approximately 2 Hours</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground font-medium mb-3">What Our Evaluation Includes:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive history including childhood (we&apos;ll want school records or parent recollections if available)</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Assessment of current challenges and strengths</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Screening for conditions that can look like autism (ADHD, social anxiety, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2 text-foreground text-sm">
                      <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Discussion of what diagnosis means for your life and identity</span>
                    </li>
                  </ul>
                  
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-4">
                    <p className="text-teal-700 text-sm">
                      <strong>We understand</strong> that many adults coming for autism evaluation have been misdiagnosed 
                      or missed for years. We take your history seriously and look at the complete picture.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
                <Star className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Families Trust Dr. Shapiro for Autism Evaluation
              </h2>
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <MessageCircle className="w-4 h-4 mr-1" />
                Common Questions
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions About Autism
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
                We see patients in Cincinnati, Ohio and Fort Wright, Kentucky
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
                Whether you&apos;re a parent with concerns about your child or an adult wondering if autism explains your 
                life experience, we&apos;re here to help. A thorough evaluation provides clarity—and <strong>clarity is the 
                first step toward effective support</strong>.
              </p>
              <p className="text-lg text-foreground mb-8">
                Same-day phone response for new patient inquiries.
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
