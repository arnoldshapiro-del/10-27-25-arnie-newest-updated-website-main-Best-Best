import React, { useState } from "react";
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
  Award,
  Stethoscope,
  MessageCircle,
  Phone,
  MapPin,
  AlertCircle,
  Lightbulb,
  Target,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Pill,
  BookOpen,
  Calendar,
  Zap,
  HelpCircle,
  AlertTriangle,
  Activity,
  Eye,
  Volume2,
  Hand,
  Mic,
  TrendingUp,
  CircleAlert,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

const ticDisordersSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Tic Disorders & Tourette Syndrome Treatment in Cincinnati & Northern Kentucky",
    "description": "Expert diagnosis and treatment of Tic Disorders and Tourette Syndrome in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care with over 35 years of experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Tic Disorders",
      "alternateName": ["Tourette Syndrome", "Tourette's Disorder", "Chronic Tic Disorder"],
      "signOrSymptom": ["Motor tics", "Vocal tics", "Eye blinking", "Throat clearing", "Sniffing", "Complex movements"]
    },
    "specialty": { "@type": "MedicalSpecialty", "name": "Child and Adolescent Psychiatry" },
    "provider": { "@type": "Physician", "name": "Dr. Arnold G. Shapiro, MD" }
  }
];

const faqItems = [
  {
    question: "Will my child have tics forever?",
    answer: "Most children see significant improvement. The natural history shows that tics typically peak around ages 10-12 and then decline substantially after puberty. By early adulthood, about one-third have complete resolution, another third have mild manageable tics, and only about one-third continue with more significant tics. Importantly, childhood tic severity doesn't strongly predict adult outcomes—what matters more is how well we manage any comorbid conditions like ADHD or OCD."
  },
  {
    question: "Can my child control their tics if they try hard enough?",
    answer: "Not really. Tics can be suppressed briefly, but this requires tremendous mental effort—imagine trying not to blink for hours. Suppression also creates a \"rebound\" where tics increase afterward. Telling your child to \"just stop\" is like telling them not to sneeze. The urge builds until it must be released. That said, behavioral therapy (CBIT) can genuinely teach the brain to better manage tics by working WITH the urge rather than fighting it."
  },
  {
    question: "Will stimulant medication for ADHD make tics worse?",
    answer: "This is a common fear, but current evidence says no for most children. Large studies show that stimulants like methylphenidate (Ritalin, Concerta) do not worsen tics in the majority of patients. In fact, treating ADHD effectively often improves your child's overall functioning more than any tic treatment could. We do monitor carefully, and if tics clearly worsen, we have many other ADHD treatment options."
  },
  {
    question: "Does my child have Tourette Syndrome?",
    answer: "Tourette Syndrome specifically requires both motor AND vocal tics at some point (though not necessarily at the same time), lasting more than one year. If your child has only motor tics OR only vocal tics lasting more than a year, it's \"Chronic Motor (or Vocal) Tic Disorder\"—not Tourette's. If tics have been present less than a year, it's \"Provisional Tic Disorder,\" which often resolves. The specific diagnosis matters less than understanding your child's complete picture including any comorbid conditions."
  },
  {
    question: "What's the difference between a tic and a compulsion?",
    answer: "This can be confusing because some behaviors look similar. Tics are driven by a physical urge—a pressure or \"itch\" that the tic relieves. Compulsions are driven by anxiety—a fear that something bad will happen if you don't do the behavior. A child who taps their desk because of a building tension in their arm has a tic. A child who taps their desk three times because they'll fail the test if they don't has a compulsion. Both can occur in the same child, and the treatment differs."
  },
  {
    question: "Should I ignore my child's tics or acknowledge them?",
    answer: "The best approach is neutral acceptance: Don't react to tics (positively or negatively), but don't pretend they don't exist. Saying \"stop that\" increases stress and worsens tics. Asking \"are you okay?\" every time they tic makes them more self-conscious. But if your child wants to talk about their tics, listen supportively. The goal is making tics a non-issue in the household while remaining emotionally available."
  },
  {
    question: "My teenager suddenly developed severe tics overnight. Is this Tourette's?",
    answer: "Probably not, and this is an important distinction. Classic Tourette Syndrome develops gradually in early childhood (ages 5-7) and evolves over years. Sudden, explosive onset of severe tics in adolescence—especially complex tics, especially in girls—often represents \"functional tic-like behaviors\" rather than true Tourette's. This is not \"fake\" but is a different brain mechanism requiring different treatment. If this describes your child, a thorough evaluation to differentiate is essential before starting any treatment."
  },
  {
    question: "Can diet or supplements help tics?",
    answer: "The evidence is limited. Magnesium, omega-3 fatty acids, and vitamin D have some supportive data but aren't dramatically effective for tics specifically. Omega-3s may help comorbid ADHD more than the tics. Elimination diets (gluten-free, dye-free) have no robust evidence for tic disorders. That said, correcting nutritional deficiencies is always reasonable, and ensuring good sleep is clearly important—sleep deprivation definitely worsens tics."
  },
  {
    question: "My child also has OCD and ADHD. What do we treat first?",
    answer: "This is exactly why comprehensive evaluation matters. Generally, we treat what's causing the most impairment first. Often that's the ADHD—improving attention and impulse control can dramatically improve daily functioning. Sometimes the OCD is so distressing that it takes priority. The tics themselves are often not the first treatment target unless they're causing physical injury or severe distress. We help you prioritize based on YOUR child's specific situation."
  },
  {
    question: "When should I worry about my child's tics?",
    answer: "Seek evaluation if: tics are causing your child significant distress or embarrassment, interfering with school or friendships, causing physical pain or injury, or if you suspect ADHD/OCD/anxiety alongside the tics. Also seek urgent evaluation if tics started suddenly and severely (especially in adolescence), if your child is hurting themselves with tics, or if you're simply unsure what's happening and need clarity. Early accurate diagnosis leads to better outcomes."
  }
];

const coOccurringConditions = [
  { name: "ADHD", percentage: "50-60%", description: "More than half of children with Tourette Syndrome also have ADHD. Often, treating ADHD improves overall functioning MORE than tic treatment.", icon: Zap },
  { name: "OCD", percentage: "30-50%", description: "\"Tourettic OCD\" often involves symmetry, ordering, touching/tapping compulsions. Treatment dramatically improves quality of life.", icon: Target },
  { name: "Anxiety Disorders", percentage: "30%", description: "Generalized anxiety, social anxiety about tics, separation anxiety. Anxiety increases tics in a vicious cycle.", icon: AlertCircle },
  { name: "Learning Disabilities", percentage: "20-30%", description: "Higher rates of dyslexia, dysgraphia, executive function deficits. Often overlooked when tics are the focus.", icon: BookOpen }
];

const TicDisorders = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tic Disorders & Tourette Syndrome Treatment Cincinnati | Child Psychiatrist</title>
        <meta name="description" content="Expert diagnosis and treatment of Tic Disorders and Tourette Syndrome in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care in Cincinnati and Northern Kentucky." />
        <meta name="keywords" content="tic disorders, Tourette syndrome, motor tics, vocal tics, CBIT therapy, child psychiatrist Cincinnati, tic treatment" />
        <link rel="canonical" href="https://arnoldshapiromd.com/tic-disorders" />
        <script type="application/ld+json">{JSON.stringify(ticDisordersSchema)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-healing/5 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/disorders">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Conditions
                </Button>
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20">
                    <Brain className="w-4 h-4 mr-1" />
                    Movement Disorder Specialist
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children &amp; Adolescents
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Tic Disorders &amp; Tourette Syndrome Treatment in{" "}
                  <span className="text-primary">Cincinnati &amp; Northern Kentucky</span>
                </h1>
                
                <p className="text-lg text-muted-foreground italic">
                  Expert Care for Children with Motor Tics, Vocal Tics, and Tourette Syndrome
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  When your child develops tics—sudden movements or sounds they can't control—you need answers and 
                  effective treatment. Whether it's eye blinking, throat clearing, or more complex movements, we provide 
                  comprehensive evaluation to understand exactly what's happening and develop a treatment plan that 
                  actually works. For most children, tics improve significantly with proper care.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span><strong>Board-Certified Psychiatrist</strong> – Adult AND Child/Adolescent Psychiatry</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span><strong>35+ Years of Experience</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-healing" />
                    <span><strong>Expert in Tourette Syndrome and Comorbid Conditions</strong></span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8" onClick={() => window.location.href = '/schedule'}>
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Child's Evaluation
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 text-lg px-8" asChild>
                    <a href="tel:859-341-7453">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (859) 341-7453
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Compassionate psychiatric consultation for tic disorders" className="w-full h-auto object-cover" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="py-8 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">1 in 100</div>
                <div className="text-sm text-muted-foreground">children have a tic disorder</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">1 in 160</div>
                <div className="text-sm text-muted-foreground">have Tourette Syndrome</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-healing">80%</div>
                <div className="text-sm text-muted-foreground">improve significantly by adulthood</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">50-60%</div>
                <div className="text-sm text-muted-foreground">also have ADHD</div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Brain className="w-4 h-4 mr-1" />
                Understanding the Condition
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Understanding Tic Disorders
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tics are sudden, rapid, repetitive movements or sounds that a person makes involuntarily. Think of 
                  them like a sneeze or a hiccup—your child knows it's coming, feels an urge building, but can't easily 
                  stop it from happening. The tic provides temporary relief from that urge, much like finally scratching an itch.
                </p>
              </div>
              
              <Card className="border-healing/30 bg-healing/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-healing">
                    <Heart className="w-6 h-6" />
                    This Is a Brain Wiring Issue, Not a Behavior Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tics aren't nervous habits, attention-seeking behaviors, or something your child can simply "stop if they 
                    tried harder." They result from differences in brain circuitry:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>The Basal Ganglia</strong> (movement control center) has a "leaky filter" that lets unnecessary movements slip through</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>The Prefrontal Cortex</strong> (impulse control) has reduced ability to suppress these motor programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">The <strong>connection between these regions</strong> doesn't effectively inhibit unwanted movements</span>
                    </li>
                  </ul>
                  <p className="text-foreground font-medium mt-4">
                    Your child isn't choosing to tic. Their brain is wired to generate these movements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 bg-amber-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-amber-700">
                    <Lightbulb className="w-6 h-6" />
                    The "Premonitory Urge"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most children with tics (especially older children) describe a sensation that builds before the tic—a 
                    pressure, tension, or "itch" that is only relieved by performing the tic. This urge is actually the 
                    target of the most effective behavioral treatment (CBIT). Understanding this helps your child feel 
                    less crazy: <strong>"There's a reason you feel like you HAVE to do it."</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Tic Disorders */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Activity className="w-4 h-4 mr-1" />
                Types of Tic Disorders
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                The Tic Disorder Spectrum
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-lg text-blue-700">Provisional Tic Disorder</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tics present for less than one year</li>
                    <li>• Very common (10-20% of children)</li>
                    <li>• Most resolve without treatment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 shadow-lg">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-lg text-purple-700">Chronic Motor/Vocal Tic Disorder</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Either motor OR vocal tics (not both)</li>
                    <li>• Present for more than one year</li>
                    <li>• Typically persists but often improves</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 shadow-lg">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-lg text-amber-700">Tourette Syndrome</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Both motor AND vocal tics at some point</li>
                    <li>• Present for more than one year</li>
                    <li>• Usually begins ages 5-7, peaks at 10-12</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Natural History - Good News */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-healing/30 bg-gradient-to-r from-healing/10 to-trust/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-healing">
                    <TrendingUp className="w-6 h-6" />
                    The Natural History: Good News for Most Families
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4"><strong>Peak Severity:</strong> Ages 10-12</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <div className="text-2xl font-bold text-healing">~33%</div>
                      <div className="text-sm text-muted-foreground">Complete resolution by adulthood</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <div className="text-2xl font-bold text-blue-600">~33%</div>
                      <div className="text-sm text-muted-foreground">Mild, manageable tics</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <div className="text-2xl font-bold text-amber-600">~33%</div>
                      <div className="text-sm text-muted-foreground">Continue with moderate-severe tics</div>
                    </div>
                  </div>
                  <p className="text-foreground font-medium">
                    <strong>The Most Important Predictor:</strong> Tic severity in childhood does NOT strongly predict adult 
                    outcomes. What DOES predict adult quality of life is how well comorbid conditions (ADHD, OCD, anxiety) are managed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* We Look for Everything Callout */}
        <section className="py-8 bg-healing/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-healing/30 bg-gradient-to-r from-healing/10 to-trust/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-healing/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-healing" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Tics Are Often Just the Tip of the Iceberg
                      </h3>
                      <p className="text-muted-foreground">
                        When your child comes to us with tics, we don't stop at diagnosing the tic disorder. We thoroughly 
                        evaluate for EVERYTHING: ADHD (present in 50-60% of cases), OCD (30-50%), anxiety disorders, learning 
                        disabilities, and mood disorders. <strong>In many cases, treating these conditions improves your child's 
                        life MORE than treating the tics themselves.</strong> Finding the complete picture is essential.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Tics Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Activity className="w-4 h-4 mr-1" />
                Signs &amp; Symptoms
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Types of Tics: What to Look For
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-blue-50 border-blue-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <Eye className="w-6 h-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg">Simple Motor Tics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Brief, sudden movements involving one muscle group:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Eye blinking or rolling</li>
                    <li>• Nose twitching</li>
                    <li>• Mouth grimacing</li>
                    <li>• Head jerking</li>
                    <li>• Shoulder shrugging</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <Hand className="w-6 h-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-lg">Complex Motor Tics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Coordinated movements involving multiple muscle groups:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Touching objects or self</li>
                    <li>• Jumping or hopping</li>
                    <li>• Bending or twisting</li>
                    <li>• Imitating movements (echopraxia)</li>
                    <li>• Obscene gestures (rare)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-amber-50 border-amber-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                    <Volume2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <CardTitle className="text-lg">Simple Vocal Tics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Brief, meaningless sounds:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Throat clearing</li>
                    <li>• Sniffing</li>
                    <li>• Grunting</li>
                    <li>• Coughing</li>
                    <li>• Squeaking or humming</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <Mic className="w-6 h-6 text-red-500" />
                  </div>
                  <CardTitle className="text-lg">Complex Vocal Tics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">More elaborate vocalizations:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Words or phrases (out of context)</li>
                    <li>• Repeating own words (palilalia)</li>
                    <li>• Repeating others (echolalia)</li>
                    <li>• Coprolalia (swearing) - only 10-15%</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tic Characteristics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <Lightbulb className="w-4 h-4 mr-1" />
                Understanding Tic Behavior
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tic Characteristics Parents Should Understand
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-primary" />
                    Waxing and Waning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tics naturally increase and decrease over weeks to months. A "bad month" doesn't mean the medication 
                    stopped working or the condition is getting worse—it's just how tics behave.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    Suggestibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tics can temporarily increase when the child is stressed, tired, or excited; when someone mentions or 
                    focuses on the tics; or when the child sees someone else tic.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Suppressibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most children can suppress tics briefly, but this requires significant mental effort, creates a 
                    "rebound" effect afterward, and is exhausting—imagine trying not to blink for hours.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    "Location Migration"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As one tic fades, another may emerge in a different body part. This is normal and doesn't indicate 
                    treatment failure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Organic vs Functional */}
        <section className="py-16 bg-amber-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <AlertTriangle className="w-4 h-4 mr-1" />
                Important Distinction
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                True Tourette's vs. Functional Tic-Like Behaviors
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Since the pandemic, there has been a significant increase in adolescents presenting with sudden-onset 
                "tics" that are actually functional neurological symptoms. Proper diagnosis is critical because 
                treatment is completely different.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-amber-200 shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-amber-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Feature</th>
                        <th className="px-4 py-3 text-left font-bold text-blue-700">True Tourette Syndrome</th>
                        <th className="px-4 py-3 text-left font-bold text-red-700">Functional Tic-Like Behaviors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-semibold">Onset Age</td>
                        <td className="px-4 py-3 text-muted-foreground">Early childhood (5-7 years), gradual</td>
                        <td className="px-4 py-3 text-muted-foreground">Adolescence (12-16 years), explosive/overnight</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="px-4 py-3 font-semibold">Sex Ratio</td>
                        <td className="px-4 py-3 text-muted-foreground">Male &gt; Female (4:1)</td>
                        <td className="px-4 py-3 text-muted-foreground">Female &gt; Male (9:1)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-semibold">Tic Character</td>
                        <td className="px-4 py-3 text-muted-foreground">Brief, simple at first, evolving over years</td>
                        <td className="px-4 py-3 text-muted-foreground">Complex from start, large movements, long phrases</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="px-4 py-3 font-semibold">Premonitory Urge</td>
                        <td className="px-4 py-3 text-muted-foreground">Clear "itch" or pressure before tic</td>
                        <td className="px-4 py-3 text-muted-foreground">Vague "attack" sensation or none</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-semibold">Treatment</td>
                        <td className="px-4 py-3 text-muted-foreground">Medication + CBIT</td>
                        <td className="px-4 py-3 text-muted-foreground">STOP medications, specialized CBT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
              <p className="text-center mt-4 text-foreground font-medium">
                <strong>Why This Matters:</strong> Treating functional tic-like behaviors with antipsychotics doesn't 
                help and exposes the child to unnecessary side effects. Correct diagnosis leads to correct treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Co-occurring Conditions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <Target className="w-4 h-4 mr-1" />
                The "Tourette's Plus" Reality
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Conditions That Occur With Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                In the majority of cases, the tics themselves are NOT the biggest problem. The conditions that 
                accompany tic disorders often cause more impairment than the tics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {coOccurringConditions.map((condition, index) => (
                <Card key={index} className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <condition.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg text-center mb-1">{condition.name}</h3>
                    <p className="text-center text-primary font-semibold mb-2">{condition.percentage}</p>
                    <p className="text-sm text-muted-foreground text-center">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Approach */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Our Diagnostic Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Diagnose Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A thorough evaluation is essential because the treatment plan depends entirely on what we find.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                For Children and Teenagers: A 3-Hour Process
              </h3>
              
              <div className="space-y-6">
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                      Hour 1: Parent/Caregiver Meeting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Detailed tic history: When started? How changed?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Video of tics at home (often very revealing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Family history (tics are highly genetic)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Complete screening for ADHD, OCD, anxiety</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                      Hour 2: Child/Teen Interview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Direct observation of tic types and frequency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Assessment of premonitory urge awareness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Screening for comorbid conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Understanding: "What bothers YOU most?"</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                      Hour 3: Family Meeting &amp; Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Share complete diagnostic picture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Discuss natural history and prognosis (often reassuring!)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Review ALL treatment options—not just medication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Create prioritized treatment plan</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Heart className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Treatment for Tic Disorders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The good news: We have highly effective treatments. The key is choosing the right approach based on 
                your child's specific situation, severity, and comorbidities.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {/* First Question */}
              <Card className="border-amber-200 bg-amber-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-amber-700">
                    <HelpCircle className="w-6 h-6" />
                    First Question: Does Your Child Need Treatment?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Watchful Waiting is Often Appropriate If:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Tics are mild and not causing distress</li>
                        <li>• Not interfering with school, friendships, activities</li>
                        <li>• Not physically painful</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Active Treatment is Indicated When:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Tics cause significant distress or embarrassment</li>
                        <li>• Interfere with daily functioning</li>
                        <li>• Cause physical pain or injury</li>
                        <li>• Comorbid conditions need treatment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* CBIT */}
              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Brain className="w-6 h-6" />
                    CBIT: The Foundation (First-Line Treatment)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>Comprehensive Behavioral Intervention for Tics</strong> is not just "therapy"—it's a structured 
                    neurocognitive retraining program that teaches the brain to inhibit tics. <strong>Grade A evidence.</strong>
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h5 className="font-bold text-primary mb-2">1. Awareness Training</h5>
                      <p className="text-sm text-muted-foreground">Learn to detect the urge BEFORE the tic occurs</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h5 className="font-bold text-primary mb-2">2. Competing Response</h5>
                      <p className="text-sm text-muted-foreground">Specific movement that physically prevents the tic</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h5 className="font-bold text-primary mb-2">3. Functional Intervention</h5>
                      <p className="text-sm text-muted-foreground">Modify environmental triggers that increase tics</p>
                    </div>
                  </div>
                  <p className="text-foreground font-medium">
                    <strong>Effectiveness:</strong> 50-60% of patients show significant improvement with CBIT alone.
                  </p>
                </CardContent>
              </Card>
              
              {/* Medication */}
              <Card className="border-healing/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Pill className="w-6 h-6 text-healing" />
                    Medication Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">When CBIT alone is insufficient or tics are severe:</p>
                  
                  <h4 className="font-bold text-foreground mb-3">Tier 1: Alpha-2 Agonists (First Choice)</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h5 className="font-bold">Guanfacine ER (Intuniv)</h5>
                      <p className="text-sm text-muted-foreground">Less sedation; helps ADHD too; smooth 24-hour coverage</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h5 className="font-bold">Clonidine</h5>
                      <p className="text-sm text-muted-foreground">Helpful for sleep and impulsivity; available as patch</p>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-3">Tier 2: Atypical Antipsychotics (If Alpha-2s Insufficient)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h5 className="font-bold">Aripiprazole (Abilify)</h5>
                      <p className="text-sm text-muted-foreground">Current gold standard; lower metabolic risk</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h5 className="font-bold">Risperidone</h5>
                      <p className="text-sm text-muted-foreground">Very effective; higher risk of weight gain</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Treating Comorbidities */}
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-purple-600" />
                    Treating the Comorbidities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium mb-4">
                    This is often where the biggest improvement comes from.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h5 className="font-bold text-purple-700 mb-2">For ADHD + Tics</h5>
                      <p className="text-sm text-muted-foreground">
                        Guanfacine helps both. Methylphenidate does NOT worsen tics in most patients.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h5 className="font-bold text-purple-700 mb-2">For OCD + Tics</h5>
                      <p className="text-sm text-muted-foreground">
                        SSRIs + Exposure and Response Prevention (ERP) therapy. Often dramatically improves quality of life.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h5 className="font-bold text-purple-700 mb-2">For Anxiety + Tics</h5>
                      <p className="text-sm text-muted-foreground">
                        Addressing anxiety can reduce the stress-tic cycle. SSRIs if needed; therapy approaches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Award className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Dr. Shapiro for Tic Disorder Treatment
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    35+ Years of Specialized Practice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dr. Shapiro has spent over three decades treating children with tic disorders, Tourette Syndrome, 
                    and the complex comorbidities that accompany them—including the most challenging cases.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Dual Board Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Board-certified in BOTH Adult AND Child/Adolescent Psychiatry. We understand how tic disorders 
                    evolve across the lifespan and the natural improvement that typically occurs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Expert in "Tourette's Plus" Complexity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We specialize in cases where tics coexist with ADHD, OCD, anxiety, and mood disorders—understanding 
                    that treating these conditions often matters more than treating the tics alone.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    We Differentiate When It Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We can distinguish true Tourette Syndrome from functional tic-like behaviors—a critical distinction 
                    that determines the entire treatment approach.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-4xl mx-auto mt-8">
              <Card className="border-healing/30 bg-healing/5">
                <CardHeader>
                  <CardTitle className="text-xl">We Provide Realistic Hope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most families leave their first appointment feeling significantly better after learning that tics 
                    typically improve with age and that effective treatments exist. <strong>Knowledge is therapeutic.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <HelpCircle className="w-4 h-4 mr-1" />
                FAQ
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Common Questions About Tic Disorders
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <Card 
                  key={index}
                  className={`border-purple-200 shadow-sm hover:shadow-md transition-all cursor-pointer ${openFaq === index ? 'ring-2 ring-purple-300' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span className="flex items-center gap-3 text-left">
                        <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        {item.question}
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
                      <div className="pl-11 text-muted-foreground">{item.answer}</div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Take the First Step
              </h2>
              <p className="text-xl text-white/90 mb-4">
                Understanding Is the First Step to Helping Your Child
              </p>
              <p className="text-lg text-white/80 mb-8">
                Watching your child struggle with tics can be frightening and confusing. But here's what we want you 
                to know: most children improve significantly, highly effective treatments exist, and getting the right 
                diagnosis makes all the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8" onClick={() => window.location.href = '/schedule'}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Child's Evaluation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" asChild>
                  <a href="tel:859-341-7453">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (859) 341-7453
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Fort Wright, KY (5 min from Cincinnati)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>3-Hour Comprehensive Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>35+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crisis Resources */}
        <section className="py-8 bg-red-50 border-t border-red-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg font-bold text-red-800 mb-3">
                If your child is in immediate danger or engaging in self-injury:
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-red-700">
                  <Phone className="w-5 h-5" />
                  <span><strong>988</strong> Suicide &amp; Crisis Lifeline</span>
                </div>
                <div className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                  <span><strong>911</strong> or nearest emergency room</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground italic">
                Tic disorders can feel overwhelming when you first encounter them, but knowledge and proper treatment 
                transform the picture. Dr. Shapiro and his team are here to provide the thorough evaluation, accurate 
                diagnosis, and effective treatment your child deserves. Most families leave that first appointment 
                feeling significantly more hopeful—and that hope is grounded in evidence.
              </p>
            </div>
          </div>
        </section>
      </main>

      <EmergencyDisclaimer />
      <Footer />
    </div>
  );
};

export default TicDisorders;
