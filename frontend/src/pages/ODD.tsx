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
  FileText,
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
  Star,
  Calendar,
  Zap,
  HelpCircle,
  AlertTriangle,
  Home,
  School,
  UserX,
  Scale,
  Frown,
  RefreshCw,
  GraduationCap,
  CircleAlert
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// ODD Page Schema
const oddSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Oppositional Defiant Disorder (ODD) Treatment in Cincinnati & Northern Kentucky",
    "description": "Expert diagnosis and treatment of Oppositional Defiant Disorder in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care with over 35 years of experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Oppositional Defiant Disorder",
      "alternateName": ["ODD", "Oppositional Disorder"],
      "signOrSymptom": [
        "Frequent temper outbursts",
        "Chronic irritability",
        "Argumentative behavior",
        "Defiance of rules",
        "Deliberately annoying others",
        "Blaming others for mistakes",
        "Vindictiveness"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about ODD symptoms, diagnosis, and treatment options including parent training, therapy, and medication management when needed"
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Child and Adolescent Psychiatry"
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
        "name": "Is ODD just bad parenting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely not. ODD has clear neurobiological underpinnings—differences in how the brain's emotion regulation systems function. While parenting strategies can help or worsen the situation, they don't cause ODD."
        }
      },
      {
        "@type": "Question",
        "name": "Will my child outgrow ODD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some children do improve significantly, especially with early intervention. Research shows about 30-40% of children with ODD see significant improvement by adolescence. However, without treatment, another 30% may progress to Conduct Disorder."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between ODD and Conduct Disorder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ODD involves defiance, irritability, and vindictiveness but stops short of violating the rights of others. Conduct Disorder is more severe and includes behaviors like theft, vandalism, cruelty, and serious rule violations."
        }
      }
    ]
  }
];

// FAQ Items
const faqItems = [
  {
    question: "Is ODD just bad parenting?",
    answer: "Absolutely not. ODD has clear neurobiological underpinnings—differences in how the brain's emotion regulation systems function. While parenting strategies can help or worsen the situation, they don't cause ODD. Many wonderful parents have children with ODD, and many children with difficult backgrounds don't develop it. That said, specific parenting techniques (like those taught in PCIT and PMT) are highly effective treatments because they work with your child's brain wiring rather than against it."
  },
  {
    question: "Will my child outgrow ODD?",
    answer: "Some children do improve significantly, especially with early intervention. Research shows about 30-40% of children with ODD see significant improvement by adolescence. However, without treatment, another 30% may progress to Conduct Disorder, and many develop depression, anxiety, or substance abuse in adulthood. Early, effective treatment dramatically improves the odds of a good outcome."
  },
  {
    question: "What's the difference between ODD and Conduct Disorder?",
    answer: "ODD involves defiance, irritability, and vindictiveness but stops short of violating the rights of others. Conduct Disorder is more severe and includes behaviors like theft, vandalism, cruelty to animals or people, fire-setting, and serious rule violations. ODD can be a precursor to Conduct Disorder if untreated—which is why early intervention matters so much."
  },
  {
    question: "My child only acts this way at home. Is it still ODD?",
    answer: "Yes, this can still be ODD—it's called \"Mild ODD\" when symptoms occur in only one setting. It's actually common for ODD children to hold it together at school and fall apart at home where they feel safer. However, this presentation also makes us consider whether there's undiagnosed anxiety (exhausting themselves masking at school) or whether the home environment has specific triggers we need to address."
  },
  {
    question: "If my child has ADHD, do they really also have ODD?",
    answer: "They might. About 65% of children with ODD also have ADHD—but the overlap isn't automatic. Sometimes what looks like \"defiance\" is actually impulsivity (they can't stop themselves, not they won't). The key diagnostic question is: When your child is calm and regulated, do they acknowledge the rules are fair and wish they could follow them? ADHD children often do. True ODD involves more intentional opposition. Many children have both, which is why we evaluate so thoroughly."
  },
  {
    question: "Should I punish my child for ODD behaviors?",
    answer: "Traditional punishment (yelling, grounding, taking things away) often backfires with ODD. These approaches can escalate the power struggle and reinforce the coercive cycle. Effective management uses very specific techniques: strategic ignoring of minor behaviors, consistent and immediate consequences for major behaviors, and heavy emphasis on rewarding positive behavior. This is why parent training is so essential—it teaches counter-intuitive approaches that actually work."
  },
  {
    question: "Will my child need medication?",
    answer: "Not necessarily. For \"pure\" ODD without comorbidities, parent training alone is often sufficient. Medication becomes important when: ADHD is also present (treating it often resolves much of the ODD), aggression is severe enough to threaten safety, anxiety is driving avoidance behaviors, or the child hasn't responded to behavioral interventions alone. We always try to identify the minimum effective treatment."
  },
  {
    question: "Can therapy help an ODD child, or is it just about the parents?",
    answer: "Both matter. Parent training is essential for children under 12 because parents control the environment. But older children and teens can benefit from individual therapy to learn anger management skills, develop emotional vocabulary, and build insight. The most effective approach treats both the child AND teaches parents new strategies."
  },
  {
    question: "My teenager is physically bigger than me and intimidating. What do I do?",
    answer: "This is a safety concern we take very seriously. When a child becomes physically threatening, the standard behavioral approaches need modification. We may need to establish clear safety plans, consider whether medication can reduce the explosive potential, in extreme cases discuss higher levels of care (partial hospitalization, residential), and connect you with crisis resources. No parent should feel unsafe in their own home. This situation requires urgent professional intervention."
  },
  {
    question: "What happens if ODD isn't treated?",
    answer: "Untreated ODD doesn't typically \"just go away.\" Research on long-term outcomes shows: 30% improve naturally, 30% persist with ODD symptoms into adulthood, and 30% progress to Conduct Disorder, Antisocial Personality Disorder, or other serious conditions. Children with untreated ODD are at higher risk for school failure, substance abuse, legal trouble, relationship problems, and mental health conditions in adulthood. Early intervention is one of the few ways to prevent adult Antisocial Personality Disorder."
  }
];

// Co-occurring conditions
const coOccurringConditions = [
  {
    name: "ADHD",
    percentage: "65%",
    description: "Many children labeled \"defiant\" are actually impulsive—they literally cannot stop themselves. Treating ADHD often dramatically reduces oppositional behavior.",
    icon: Zap
  },
  {
    name: "Anxiety Disorders",
    percentage: "30%",
    description: "Some children refuse tasks because they're terrified of failure. Their \"defiance\" is actually avoidance driven by panic.",
    icon: AlertCircle
  },
  {
    name: "Mood Disorders",
    percentage: "Variable",
    description: "Is the irritability part of DMDD (chronic), emerging bipolar (episodic), or depression (irritability as symptom)?",
    icon: Frown
  },
  {
    name: "Learning Disabilities",
    percentage: "Common",
    description: "A child who can't read will do anything to avoid being \"caught\" in class—including acting out.",
    icon: BookOpen
  }
];

// Differential diagnosis table
const differentialDiagnosis = [
  { condition: "ADHD", differentiator: "Impulsive, not intentionally defiant; behavior improves with structure" },
  { condition: "DMDD", differentiator: "Chronically irritable baseline (never has \"good moods\")" },
  { condition: "Bipolar", differentiator: "Episodic—clear periods of normal functioning between episodes" },
  { condition: "Anxiety", differentiator: "Defiance is avoidance-driven; child seems worried, not angry" },
  { condition: "Autism/PDA", differentiator: "Demands trigger panic, not anger; indifferent to social approval" },
  { condition: "Conduct Disorder", differentiator: "Violates rights of others (stealing, cruelty, destruction)" }
];

const ODD = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Oppositional Defiant Disorder (ODD) Treatment Cincinnati | Child Psychiatrist</title>
        <meta name="description" content="Expert diagnosis and treatment of Oppositional Defiant Disorder (ODD) in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care in Cincinnati and Northern Kentucky." />
        <meta name="keywords" content="oppositional defiant disorder, ODD treatment, child behavior problems, defiant child, child psychiatrist Cincinnati, behavior disorder treatment, parent training" />
        <link rel="canonical" href="https://arnoldshapiromd.com/oppositional-defiant-disorder" />
        <script type="application/ld+json">
          {JSON.stringify(oddSchema)}
        </script>
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
                    Behavioral Disorder Specialist
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children &amp; Adolescents
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Oppositional Defiant Disorder Treatment in{" "}
                  <span className="text-primary">Cincinnati &amp; Northern Kentucky</span>
                </h1>
                
                <p className="text-lg text-muted-foreground italic">
                  Specialized Care for Children Who Struggle with Anger, Defiance, and Emotional Control
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  When your child's behavior goes beyond normal testing of limits—when arguments escalate into rage, 
                  when "no" triggers explosions, when every request becomes a battle—you need answers. Oppositional 
                  Defiant Disorder is a real condition with real solutions, and the right treatment can transform 
                  your family's life.
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
                    <span><strong>Expert in Complex Behavioral Presentations</strong></span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Child's Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/5 text-lg px-8"
                    asChild
                  >
                    <a href="tel:859-341-7453">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (859) 341-7453
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="https://images.pexels.com/photos/7820626/pexels-photo-7820626.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Frustrated child displaying emotional distress - representing the challenges families face with Oppositional Defiant Disorder" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
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
                <div className="text-2xl font-bold text-primary">3-5%</div>
                <div className="text-sm text-muted-foreground">of children and teens</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">65%</div>
                <div className="text-sm text-muted-foreground">also have ADHD</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-healing">70%+</div>
                <div className="text-sm text-muted-foreground">improve with proper intervention</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">Before Age 8</div>
                <div className="text-sm text-muted-foreground">best outcomes with early intervention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding ODD Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Brain className="w-4 h-4 mr-1" />
                Understanding the Condition
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Understanding Oppositional Defiant Disorder
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Oppositional Defiant Disorder (ODD) is a behavioral condition in which a child displays a persistent 
                  pattern of angry/irritable mood, argumentative/defiant behavior, and vindictiveness toward authority 
                  figures. This isn't occasional back-talk or testing limits—it's a consistent pattern that disrupts 
                  family life, school performance, and social relationships.
                </p>
              </div>
              
              {/* This Is Not a Parenting Problem */}
              <Card className="border-healing/30 bg-healing/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-healing">
                    <Heart className="w-6 h-6" />
                    This Is Not a Parenting Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Here's what every parent needs to understand: ODD is a neurobiological condition, not the result 
                    of bad parenting or a willful choice by your child. Research shows clear differences in how the 
                    ODD brain processes emotions and responds to frustration:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>The Amygdala</strong> (emotion center) is hyperactive—overreacting to perceived threats and frustration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>The Prefrontal Cortex</strong> (impulse control) has reduced ability to regulate those emotional surges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">The <strong>connection between these brain regions</strong> is weaker, meaning the "brakes" can't slow down the "accelerator"</span>
                    </li>
                  </ul>
                  <p className="text-foreground font-medium mt-4">
                    Your child isn't choosing to be difficult. Their brain is wired to experience frustration more 
                    intensely and to struggle with impulse control.
                  </p>
                </CardContent>
              </Card>
              
              {/* The Coercive Cycle */}
              <Card className="border-amber-200 bg-amber-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-amber-700">
                    <RefreshCw className="w-6 h-6" />
                    The "Coercive Cycle" That Traps Families
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Most families with an ODD child are stuck in a destructive pattern:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside text-muted-foreground mb-4">
                    <li>Parent makes a request</li>
                    <li>Child refuses/argues</li>
                    <li>Parent escalates (raises voice, threatens)</li>
                    <li>Child escalates further (screams, throws things)</li>
                    <li>Parent gives up to stop the chaos</li>
                    <li><strong>Child learns: "If I explode big enough, I get my way"</strong></li>
                  </ol>
                  <p className="text-foreground font-medium">
                    This cycle isn't anyone's fault—it develops naturally when a dysregulated child meets exhausted 
                    parents. But breaking this cycle requires specific techniques that most parents have never learned.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ODD vs Normal Defiance Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <Scale className="w-4 h-4 mr-1" />
                Understanding the Difference
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ODD vs. Normal Childhood Defiance
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                All children test limits. Here's how to distinguish normal developmental behavior from ODD.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-green-700">
                      <Check className="w-6 h-6" />
                      Normal Defiance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Occasional arguments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Tantrums decrease with age</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Can calm down within minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Behavior improves with consistent discipline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Defiance is situation-specific</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Child shows remorse after</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Responds to rewards and consequences</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 bg-red-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-700">
                      <AlertTriangle className="w-6 h-6" />
                      Oppositional Defiant Disorder
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Arguments happen almost daily</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Tantrums persist or worsen beyond age 4-5</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Rage episodes last 15-60+ minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Standard discipline makes things worse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Pattern occurs at home AND school AND with others</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Limited remorse; may blame others</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Seems indifferent to consequences</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-foreground font-medium">
                  <strong>The Key Question:</strong> Is this behavior significantly worse than other children the same age, 
                  and has it persisted for at least 6 months?
                </p>
              </div>
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
                        We Evaluate the Complete Picture—Not Just the Behavior
                      </h3>
                      <p className="text-muted-foreground">
                        When your child comes to us with defiant behavior, we don't stop at ODD. We thoroughly evaluate 
                        for EVERYTHING: ADHD (present in 65% of ODD cases), anxiety disorders, mood disorders, autism 
                        spectrum features, learning disabilities, and trauma. Many children actually have two, three, or 
                        more conditions. Finding all the pieces is what allows treatment to actually work.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                <AlertCircle className="w-4 h-4 mr-1" />
                Signs &amp; Symptoms
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Signs and Symptoms of ODD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ODD symptoms fall into three main categories. A child must show at least four symptoms from any of 
                these categories, persisting for at least 6 months, to meet diagnostic criteria.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Angry/Irritable Mood */}
              <Card className="bg-red-50 border-red-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <Frown className="w-6 h-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl">Angry/Irritable Mood</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Loses temper frequently and intensely</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Easily annoyed or bothered by others</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Seems resentful or "touchy"</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Persistent, simmering anger as baseline</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Argumentative/Defiant */}
              <Card className="bg-orange-50 border-orange-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <UserX className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Argumentative/Defiant Behavior</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Actively defies or refuses adults' requests</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Argues excessively with authority figures</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Deliberately annoys others</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Blames others for mistakes or misbehavior</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Vindictiveness */}
              <Card className="bg-amber-50 border-amber-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                  </div>
                  <CardTitle className="text-xl">Vindictiveness</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Spiteful or vindictive at least twice in 6 months</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Seeks revenge when feeling wronged</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Holds grudges</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Deliberately breaks sibling's belongings after conflict</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age-Specific Presentations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <Users className="w-4 h-4 mr-1" />
                Age-Specific Signs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How ODD Looks at Different Ages
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">3-5</span>
                    Preschool
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Tantrums far exceeding "terrible twos" in intensity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Physical aggression toward parents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Meltdowns during transitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">May be expelled from daycare</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">6-12</span>
                    School-Age
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Daily battles over homework, chores, routines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Frequent calls from school about behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Difficulty maintaining friendships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Sophisticated arguments and manipulation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">13+</span>
                    Adolescents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Outright refusal to follow household rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">May become physically intimidating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Risk of substance use as "self-medication"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">School truancy, academic failure, legal trouble</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* When to Seek Help */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-red-300 shadow-lg">
                <CardHeader className="bg-red-100">
                  <CardTitle className="flex items-center gap-3 text-red-700">
                    <AlertTriangle className="w-6 h-6" />
                    When to Seek Help Immediately
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">Contact us or seek immediate evaluation if:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Your child is physically aggressive and you fear for safety</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">There are threats of self-harm or harm to others</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">The family is in constant crisis mode</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">School is threatening expulsion</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">You're walking on eggshells in your own home</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Co-occurring Conditions Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Target className="w-4 h-4 mr-1" />
                The "Underlying Engine"
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Conditions That Often Occur with ODD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ODD is often the "smoke"—we need to find the "fire"
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {coOccurringConditions.map((condition, index) => (
                <Card key={index} className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <condition.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg text-center mb-1">{condition.name}</h3>
                    <p className="text-center text-primary font-semibold mb-2">{condition.percentage} overlap</p>
                    <p className="text-sm text-muted-foreground text-center">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Approach Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Our Diagnostic Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Diagnose ODD
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Getting the diagnosis right is critical because ODD rarely exists alone—and treatment depends 
                entirely on understanding the full picture.
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
                    <p className="text-muted-foreground mb-3">We meet with parents alone first to gather complete history:</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Detailed behavior timeline: When did this start?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">What have you already tried?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Family psychiatric history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">School reports and previous evaluations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Your theory about what's driving the behavior</span>
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
                    <p className="text-muted-foreground mb-3">Dr. Shapiro meets with your child alone:</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Building rapport (they've likely been "in trouble" with every adult)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Direct observation of how they interact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Screening for ADHD, anxiety, mood disorders, trauma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Understanding their perspective: "What makes you so angry?"</span>
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
                    <p className="text-muted-foreground mb-3">Everyone comes together:</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">We share our complete diagnostic picture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Your child participates in understanding what's happening</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">We discuss ALL treatment options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">You leave with a clear plan—not just "try harder"</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Differential Diagnosis */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                The Differential Diagnosis Challenge
              </h3>
              <Card className="border-primary/20 shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Condition</th>
                        <th className="px-4 py-3 text-left font-bold">Key Differentiator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {differentialDiagnosis.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
                          <td className="px-4 py-3 font-semibold">{item.condition}</td>
                          <td className="px-4 py-3 text-muted-foreground">{item.differentiator}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Heart className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Treatment for Oppositional Defiant Disorder
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Effective ODD treatment requires a multimodal approach. Medication alone doesn't work—but the right 
                combination of parent training, therapy, and sometimes medication can be transformative.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Parent Training - The Foundation */}
              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Users className="w-6 h-6" />
                    The Foundation: Parent Training (Non-Negotiable)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    This is the <strong>single most important intervention</strong> for ODD in children under 12. 
                    Medication without parent training is clinically incomplete.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    You are with your child more than any therapist ever will be. Parent training teaches you to 
                    break the coercive cycle, use specific techniques that work with the ODD brain, stay calm when 
                    your child escalates, and rebuild the parent-child relationship.
                  </p>
                  
                  <h4 className="font-bold text-foreground mt-6 mb-3">The Gold-Standard Programs:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h5 className="font-bold text-primary mb-2">PCIT (Ages 2-7)</h5>
                      <p className="text-sm text-muted-foreground">
                        Parent-Child Interaction Therapy. You wear an earpiece while a therapist coaches you in real-time.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h5 className="font-bold text-primary mb-2">PMT (Ages 7-12)</h5>
                      <p className="text-sm text-muted-foreground">
                        Parent Management Training. Weekly sessions teaching specific behavior modification techniques.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h5 className="font-bold text-primary mb-2">CPS (Ages 8-17)</h5>
                      <p className="text-sm text-muted-foreground">
                        Collaborative Problem Solving. Reframes ODD as a "skill deficit." Great for argumentative teens.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Medication */}
              <Card className="border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Pill className="w-6 h-6 text-amber-600" />
                    Medication: When and What
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-amber-50 p-4 rounded-lg mb-4">
                    <p className="text-amber-800 font-medium">
                      <strong>The Cardinal Rule:</strong> We never medicate "pure" ODD without trying parent training 
                      first—unless there's a safety crisis.
                    </p>
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-3">When Medication Helps:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-foreground">Scenario 1: Treating Underlying ADHD</h5>
                      <p className="text-muted-foreground text-sm">
                        If your child has ADHD + ODD (65% do), treating ADHD often dramatically reduces oppositional behavior. 
                        Stimulants (methylphenidate, amphetamines) are first-line.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Scenario 2: Reducing Explosive Aggression</h5>
                      <p className="text-muted-foreground text-sm">
                        For severe, dangerous aggression: Guanfacine (first add-on), Risperidone or Aripiprazole for 
                        treatment-resistant cases.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Scenario 3: Treating Comorbid Anxiety</h5>
                      <p className="text-muted-foreground text-sm">
                        If anxiety is driving avoidance-based defiance: SSRIs combined with appropriate therapy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Child Therapy & School */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-healing/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MessageCircle className="w-6 h-6 text-healing" />
                      Therapy for the Child
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <strong>Anger Management:</strong>
                        <p className="text-sm text-muted-foreground">Recognize warning signs, develop "circuit breakers," build emotional vocabulary</p>
                      </li>
                      <li>
                        <strong>Social Skills Training:</strong>
                        <p className="text-sm text-muted-foreground">Reading social cues, conflict resolution, perspective-taking</p>
                      </li>
                      <li>
                        <strong>Individual Therapy:</strong>
                        <p className="text-sm text-muted-foreground">Processing trauma, building insight in older children/teens</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-healing/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <School className="w-6 h-6 text-healing" />
                      School Interventions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">We help families obtain:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">IEP or 504 Plan with appropriate accommodations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Cool-down pass: Access to a safe space</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Modified demands: Breaking overwhelming tasks into chunks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Check-In/Check-Out: Daily structure with mentor</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Shapiro Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Award className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Dr. Shapiro for Your Child's ODD Treatment
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
                    Dr. Shapiro has spent over three decades treating children with complex behavioral presentations—
                    including the most challenging cases that have been to multiple providers without success.
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
                    Board-certified in BOTH Adult AND Child/Adolescent Psychiatry. We understand how childhood ODD 
                    evolves across development and the adult conditions it can become if untreated.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    We Find What Others Miss
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Many children come to us after years of failed treatment because previous providers missed the 
                    ADHD, the anxiety, the learning disability, or the autism features driving the behavior.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    We Don't Just Medicate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Medication without parent training is incomplete treatment. We ensure families have access to 
                    evidence-based behavioral interventions, not just prescriptions.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* What Families Can Expect */}
            <div className="max-w-4xl mx-auto mt-8">
              <Card className="border-healing/30 bg-healing/5">
                <CardHeader>
                  <CardTitle className="text-xl">What Families Can Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Clear Communication</h4>
                      <p className="text-sm text-muted-foreground">
                        You'll understand exactly what we're recommending and why. No jargon without explanation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Realistic Expectations</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll tell you honestly what medication can and cannot do—and what requires behavioral change.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Collaborative Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        We work with your child's school, therapist, and other providers to ensure consistent approaches.
                      </p>
                    </div>
                  </div>
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
                Common Questions About ODD
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <Card 
                  key={index}
                  className={`border-purple-200 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                    openFaq === index ? 'ring-2 ring-purple-300' : ''
                  }`}
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
                      <div className="pl-11 text-muted-foreground">
                        {item.answer}
                      </div>
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
                Your Family Doesn't Have to Live in Constant Conflict
              </p>
              <p className="text-lg text-white/80 mb-8">
                If your home has become a war zone—if you're exhausted from the battles, walking on eggshells, and 
                wondering where your sweet child went—there is hope. ODD is one of the most treatable childhood 
                psychiatric conditions when approached correctly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Child's Evaluation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8"
                  asChild
                >
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
                If your child is in immediate danger or you fear for safety:
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
                Oppositional Defiant Disorder is not a life sentence. With proper evaluation and evidence-based 
                treatment, your child can learn to manage their emotions, your family can find peace, and everyone 
                can move forward together. Dr. Shapiro and his team are here to help you find that path.
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

export default ODD;
