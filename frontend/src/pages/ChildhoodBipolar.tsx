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
  Moon,
  Sun,
  Activity,
  HelpCircle,
  AlertTriangle,
  CircleAlert,
  GraduationCap,
  Baby,
  User
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";

// Childhood Bipolar Page Schema
const childhoodBipolarSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Childhood Bipolar Disorder Treatment in Cincinnati & Northern Kentucky",
    "description": "Expert diagnosis and treatment of bipolar disorder in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care with over 35 years of experience.",
    "about": {
      "@type": "MedicalCondition",
      "name": "Pediatric Bipolar Disorder",
      "alternateName": ["Childhood Bipolar Disorder", "Early-Onset Bipolar Disorder"],
      "signOrSymptom": [
        "Severe mood swings",
        "Manic episodes with decreased sleep need",
        "Depressive episodes",
        "Explosive irritability",
        "Rapid cycling",
        "Grandiosity",
        "Racing thoughts",
        "Risky behavior"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "description": "Information about childhood bipolar disorder symptoms, diagnosis, and treatment options including mood stabilizers, family-focused therapy, and comprehensive care"
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
        "name": "Is childhood bipolar disorder real, or is it overdiagnosed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both concerns have validity. Childhood bipolar disorder is absolutely real—it's a well-documented neurobiological condition. However, in the past it was overdiagnosed. The creation of DMDD as a diagnosis in 2013 was specifically designed to address this. Our comprehensive evaluation carefully distinguishes true bipolar disorder from other conditions."
        }
      },
      {
        "@type": "Question",
        "name": "How is bipolar disorder in children different from ADHD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ADHD is chronic and consistent while bipolar is episodic with distinct 'on' and 'off' periods. ADHD doesn't include decreased need for sleep, euphoria, or grandiosity—mania does. The key distinction is that bipolar disorder has periods of clearly abnormal mood and energy different from the child's usual baseline."
        }
      },
      {
        "@type": "Question",
        "name": "Will my child need medication forever?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many patients with bipolar disorder do best with long-term medication, but this isn't universal. Some children have a single episode and remain stable off medications for years. After your child is stable for 12-24 months, we can discuss whether a trial off medication is appropriate."
        }
      }
    ]
  }
];

// FAQ Items - Full Clinical Content
const faqItems = [
  {
    question: "Is childhood bipolar disorder real, or is it overdiagnosed?",
    answer: "Both concerns have some validity. Childhood bipolar disorder is absolutely real—it's a well-documented neurobiological condition that significantly impairs functioning and carries serious risks including suicide. However, in the past, it WAS overdiagnosed, particularly when any severe irritability was labeled \"bipolar.\" The creation of Disruptive Mood Dysregulation Disorder (DMDD) as a separate diagnosis in 2013 was specifically designed to address this overdiagnosis. Our comprehensive evaluation carefully distinguishes true bipolar disorder from other conditions."
  },
  {
    question: "How is bipolar disorder in children different from ADHD?",
    answer: "There's significant overlap, and 60-90% of bipolar children also have ADHD—which is why this is confusing. Key differences: ADHD is chronic and consistent while bipolar is episodic (distinct \"on\" and \"off\" periods). ADHD doesn't include decreased need for sleep, euphoria, or grandiosity—mania does. ADHD hyperactivity is purposeless while manic energy is often goal-directed. The most important distinction: In bipolar disorder, there are periods of clearly abnormal mood and energy that are different from your child's usual baseline."
  },
  {
    question: "Will my child need medication forever?",
    answer: "Many patients with bipolar disorder do best with long-term medication, but this isn't universal. Some children and teens have a single episode and remain stable off medications for years. Others have recurrent episodes that clearly require ongoing treatment. After your child is stable for 12-24 months, we can discuss whether a trial off medication is appropriate. The decision is always individualized and made together with your family."
  },
  {
    question: "My child was just diagnosed—does this mean they can't live a normal life?",
    answer: "Absolutely not. With proper treatment, children with bipolar disorder graduate from high school and college, build careers, have relationships, and raise families. Many highly successful people have bipolar disorder. The key is early, effective treatment that prevents accumulated damage from repeated episodes. Getting help now is the best thing you can do for your child's future."
  },
  {
    question: "Are mood stabilizers and antipsychotics safe for children?",
    answer: "These medications have been studied extensively in pediatric populations and have FDA approval for use in children. Like all medications, they have potential side effects that require monitoring. Lithium requires blood level checks, atypical antipsychotics can cause weight gain (we have protocols to minimize this), and lamotrigine requires slow titration. The risks of medication must be weighed against the risks of untreated bipolar disorder—which include school failure, family disruption, substance abuse, and suicide. In most cases, the benefits of treatment substantially outweigh the risks."
  },
  {
    question: "What about stimulants for ADHD? Will they make bipolar worse?",
    answer: "This is a common concern, and stimulants CAN trigger mania in an unstable patient. However, research shows that once mood is properly stabilized with a mood stabilizer, stimulants can be used safely and effectively for the ADHD symptoms that most bipolar children also have. The key is sequencing: stabilize mood first, then add ADHD treatment."
  },
  {
    question: "Can therapy help, or does my child just need medication?",
    answer: "Both matter. Medication stabilizes the underlying brain dysregulation, but therapy—specifically Family-Focused Therapy—is proven to improve outcomes beyond medication alone. Therapy helps the family reduce stress triggers, teaches your child coping skills, and helps everyone recognize early warning signs of episodes. We recommend both."
  },
  {
    question: "My teenager refuses to take medication. What can we do?",
    answer: "This is unfortunately common, especially with teenagers who don't want to be \"different\" or who feel good during hypomanic episodes. Strategies include: involving your teen in treatment decisions (not just dictating), education about the condition in age-appropriate terms, addressing specific concerns (weight gain, feeling \"numbed\"), starting with medications that have fewer side effects, and sometimes experiencing a preventable episode creates motivation for treatment. We work with families to find approaches that your teenager will actually follow."
  },
  {
    question: "What's the risk of suicide with childhood bipolar disorder?",
    answer: "This is a serious concern. The suicide risk in bipolar disorder is 20-30 times higher than the general population, and mixed states (combined mania and depression) carry the highest risk. This is one of the most important reasons for proper treatment—lithium in particular has proven anti-suicide effects independent of its mood-stabilizing properties. We take suicidal thoughts in bipolar patients extremely seriously and have protocols for close monitoring and intervention."
  },
  {
    question: "Will my other children develop bipolar disorder too?",
    answer: "Bipolar disorder has strong genetic components. Siblings of a child with bipolar disorder have about a 10-15% risk (versus 1-2% in the general population). This doesn't mean they WILL develop it—most won't. But we advise parents to: not put siblings on stimulants or antidepressants casually, watch for early warning signs (sleep changes, mood instability, anxiety), and know that early intervention, if needed, improves outcomes."
  }
];

// Manic Symptoms
const manicSymptoms = [
  {
    title: "Decreased Need for Sleep",
    description: "Your child sleeps only 2-4 hours and wakes up energized—not tired, but genuinely rested. This is different from insomnia or ADHD."
  },
  {
    title: "Rapid, Pressured Speech",
    description: "Talks faster than normal, jumps from topic to topic, seems unable to stop. May include rhyming, punning, or theatrical flourishes."
  },
  {
    title: "Racing Thoughts",
    description: "Your child describes thoughts going \"too fast\" or is easily distracted by their own internal mental activity."
  },
  {
    title: "Grandiosity",
    description: "Believing they have special powers, are smarter than teachers, don't need to follow rules, or making unrealistic plans."
  },
  {
    title: "Increased Goal-Directed Activity",
    description: "Dramatically elevated energy—starting many projects, excessive organizing, wanting to do everything NOW."
  },
  {
    title: "Risky Behavior",
    description: "Age-inappropriate sexual behavior, dangerous physical activities, reckless spending, or leaving home without permission."
  },
  {
    title: "Explosive Irritability",
    description: "When frustrated or told \"no,\" the response is grossly out of proportion—intense anger lasting 30-60 minutes or longer."
  }
];

// Depressive Symptoms
const depressiveSymptoms = [
  {
    title: "Persistent Sadness or Emptiness",
    description: "Not just a bad day—a pervasive, heavy sadness that doesn't lift with good news or fun activities."
  },
  {
    title: "Loss of Interest",
    description: "Activities they once loved no longer appeal. Video games, friends, sports, hobbies—nothing feels enjoyable."
  },
  {
    title: "Sleep Changes",
    description: "Either sleeping far too much (12+ hours) or not being able to sleep despite exhaustion."
  },
  {
    title: "Energy Collapse",
    description: "Even basic tasks feel overwhelming. Getting out of bed, showering, going to school require enormous effort."
  },
  {
    title: "Concentration Problems",
    description: "Difficulty thinking, making decisions, or completing schoolwork. Grades often drop during depressive episodes."
  },
  {
    title: "Worthlessness and Guilt",
    description: "Excessive self-criticism, feeling like a burden, believing everything is their fault."
  },
  {
    title: "Thoughts of Death",
    description: "Any mention of wanting to die, suicide, or being \"better off gone\" requires immediate attention."
  }
];

// Mixed State Warning
const mixedStateInfo = {
  title: "Mixed States: The Most Dangerous Presentation",
  description: "Mixed states combine features of both mania and depression simultaneously or in rapid alternation. Your child may be agitated AND miserable, irritable AND hopeless, unable to sleep AND exhausted.",
  warning: "Mixed states carry the highest suicide risk because your child has the misery that wants escape AND the energy to act on it. These require urgent evaluation."
};

const ChildhoodBipolar = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Childhood Bipolar Disorder Treatment Cincinnati | Pediatric Psychiatrist</title>
        <meta name="description" content="Expert diagnosis and treatment of bipolar disorder in children and adolescents. Board-certified psychiatrist Dr. Arnold Shapiro provides comprehensive care in Cincinnati and Northern Kentucky." />
        <meta name="keywords" content="childhood bipolar disorder, pediatric bipolar, early-onset bipolar, child psychiatrist Cincinnati, mood disorders children, bipolar treatment kids, mania in children, mood stabilizers" />
        <link rel="canonical" href="https://arnoldshapiromd.com/childhood-bipolar" />
        <script type="application/ld+json">
          {JSON.stringify(childhoodBipolarSchema)}
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
                    Mood Disorder Specialist
                  </Badge>
                  <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                    <Users className="w-4 h-4 mr-1" />
                    Children &amp; Adolescents
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Childhood Bipolar Disorder Treatment in{" "}
                  <span className="text-primary">Cincinnati &amp; Northern Kentucky</span>
                </h1>
                
                <p className="text-lg text-muted-foreground italic">
                  Specialized Care for Children and Teens with Bipolar Disorder
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  When your child's moods swing from explosive energy to crushing lows—and it's more than typical 
                  growing pains—you need answers. Childhood bipolar disorder is real, treatable, and responds 
                  best to specialized care from someone who understands the unique ways this condition appears 
                  in young people.
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
                    <span><strong>Expertise in Complex Cases</strong> – Including treatment-resistant pediatric bipolar</span>
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
                    src="https://images.pexels.com/photos/7579190/pexels-photo-7579190.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Compassionate psychiatric consultation for childhood bipolar disorder" 
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
                <div className="text-2xl font-bold text-primary">~2-3%</div>
                <div className="text-sm text-muted-foreground">of children and teens affected</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">Up to 70%</div>
                <div className="text-sm text-muted-foreground">initially misdiagnosed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-healing">70%+</div>
                <div className="text-sm text-muted-foreground">respond to proper medication</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">20-30x</div>
                <div className="text-sm text-muted-foreground">higher suicide risk—early treatment saves lives</div>
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
                Understanding Childhood Bipolar Disorder
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bipolar disorder in children and adolescents is a serious mood condition characterized by 
                  dramatic shifts in energy, activity, sleep, and mood. Unlike normal mood swings or teenage 
                  moodiness, pediatric bipolar disorder involves distinct episodes of mania (or hypomania) and 
                  depression that significantly disrupt your child's life—affecting school, friendships, family 
                  relationships, and safety.
                </p>
              </div>
              
              {/* This Is Not Your Child's Fault */}
              <Card className="border-healing/30 bg-healing/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-healing">
                    <Heart className="w-6 h-6" />
                    This Is Not Your Child's Fault
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Here's what's crucial to understand: Bipolar disorder is a brain-based medical condition—not 
                    a behavior problem, not bad parenting, and not something your child can control through willpower. 
                    Research shows clear differences in how the bipolar brain processes emotions and regulates energy.
                  </p>
                </CardContent>
              </Card>
              
              {/* How It's Different from Adult Bipolar */}
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    How It's Different from Adult Bipolar Disorder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Children with bipolar disorder often look different from adults with the same diagnosis:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Rapid cycling</strong> is more common—mood episodes may shift faster, even within the same day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Mixed states</strong> occur frequently—your child may be agitated, energized, AND miserable simultaneously</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Irritability</strong> may be more prominent than classic "euphoria"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Episodes are often longer</strong> and harder to distinguish from baseline behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Symptoms may be present most of the time</strong> rather than clearly separated episodes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* The Brain Science */}
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-purple-600" />
                    The Brain Science (Simplified)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    In bipolar disorder, the brain's "emotional thermostat" is dysregulated:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>The Amygdala</strong> (emotion center) often runs hot—overreacting to frustration and even neutral situations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>The Prefrontal Cortex</strong> (impulse control center) has reduced ability to regulate those emotional surges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Energy regulation</strong> is disrupted—leading to periods of dramatically increased or decreased activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Sleep systems</strong> don't function normally—sleep need genuinely decreases during mania</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-medium">
                    This isn't a character flaw. It's biology. And biology responds to proper treatment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnostic Challenge Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  The Diagnostic Challenge
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Why Getting the Diagnosis Right Matters
                </h2>
              </div>
              
              <Card className="border-amber-200 bg-amber-50/50 mb-8">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Pediatric bipolar disorder is one of the most frequently misdiagnosed conditions in child psychiatry. 
                    Many children are initially diagnosed with:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>ADHD alone</strong> (when bipolar is present)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>"Just" depression</strong> (missing the manic component)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Oppositional Defiant Disorder</strong> (when irritable mania is the real culprit)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>DMDD</strong> (specifically designed for children who DON'T have bipolar)</span>
                    </div>
                  </div>
                  <p className="text-foreground font-medium">
                    Why does this matter? Because treatment is completely different:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Stimulants prescribed for ADHD can trigger or worsen mania</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Antidepressants alone can destabilize mood and increase cycling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Behavioral strategies designed for conduct problems don't address the underlying brain dysregulation</span>
                    </li>
                  </ul>
                  <p className="text-foreground font-semibold mt-4">
                    Getting the diagnosis right changes everything about treatment—and outcomes.
                  </p>
                </CardContent>
              </Card>
              
              {/* We Look for Everything Callout */}
              <Card className="border-healing/30 bg-gradient-to-r from-healing/10 to-trust/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-healing/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-healing" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        We Evaluate the Complete Picture—Not Just One Condition
                      </h3>
                      <p className="text-muted-foreground">
                        When your child comes to us with mood problems, we don't stop at a single diagnosis. We thoroughly 
                        evaluate for EVERYTHING: ADHD (present in 60-90% of bipolar youth), anxiety disorders, autism spectrum 
                        features, trauma, and other conditions that commonly overlap with or mimic bipolar disorder. Many 
                        children actually have two, three, or more conditions. Finding the complete picture is what allows 
                        us to create a treatment plan that actually works.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Symptoms Section - Manic */}
        <section className="py-16 bg-amber-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-200 mb-4">
                <Sun className="w-4 h-4 mr-1" />
                Manic Episode Signs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                The "Energy Hurricane"
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Recognizing mania in children can be challenging because it often presents differently than in adults
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {manicSymptoms.map((symptom, index) => (
                <Card key={index} className="bg-white border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sun className="w-5 h-5 text-amber-500" />
                      {symptom.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{symptom.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Symptoms Section - Depressive */}
        <section className="py-16 bg-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                <Moon className="w-4 h-4 mr-1" />
                Depressive Episode Signs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                The "Shutdown"
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Depressive episodes in children with bipolar disorder can be profound and debilitating
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {depressiveSymptoms.map((symptom, index) => (
                <Card key={index} className="bg-white border-blue-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Moon className="w-5 h-5 text-blue-500" />
                      {symptom.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{symptom.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mixed States Warning */}
        <section className="py-12 bg-red-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-red-300 bg-red-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-red-700">
                    <AlertTriangle className="w-6 h-6" />
                    {mixedStateInfo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{mixedStateInfo.description}</p>
                  <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      {mixedStateInfo.warning}
                    </p>
                  </div>
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
                How Symptoms Vary by Age
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Baby className="w-6 h-6 text-purple-600" />
                    Younger Children (Ages 6-12)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Prolonged, explosive tantrums far beyond typical meltdowns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Extremely "silly" or giddy behavior that seems inappropriate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Hypersexual behavior or language (not due to exposure or abuse)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Rapid shifts between extreme joy and extreme irritability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Sleep problems—going days with minimal sleep without seeming tired</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <User className="w-6 h-6 text-purple-600" />
                    Teenagers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Classic euphoria may be more visible (feeling invincible)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Risk-taking may involve substances, sexual behavior, or legal trouble</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Irritability and anger may be attributed to "teenage attitude"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Depression may include social withdrawal, declining grades, or self-harm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Sleep schedule may flip entirely (up all night, sleeping all day)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* When to Seek Evaluation */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-red-300 shadow-lg">
                <CardHeader className="bg-red-100">
                  <CardTitle className="flex items-center gap-3 text-red-700">
                    <AlertTriangle className="w-6 h-6" />
                    When to Seek Evaluation Immediately
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">Contact us or seek emergency care if your child:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Expresses thoughts of suicide or self-harm</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Hasn't slept in 2+ nights but doesn't seem tired</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Is engaging in dangerous behavior they can't seem to stop</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Is experiencing hallucinations or paranoia</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Is so depressed they can't function</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Shows signs of psychosis (fixed false beliefs, hearing voices)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Diagnostic Approach */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Stethoscope className="w-4 h-4 mr-1" />
                Our Diagnostic Approach
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How We Diagnose Childhood Bipolar Disorder
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Because misdiagnosis is so common, we take extraordinary care in our evaluation process. Our goal 
                isn't just to identify bipolar disorder—it's to find EVERYTHING that's contributing to your child's struggles.
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
                        <span className="text-muted-foreground">Detailed timeline of mood and behavior changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Sleep patterns across different periods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Family psychiatric history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Medication history—what's been tried</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">School performance and social functioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Any previous diagnoses or evaluations</span>
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
                    <p className="text-muted-foreground mb-3">Dr. Shapiro meets with your child alone (age-appropriate):</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Building rapport so your child feels safe to share</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Direct assessment of mood, energy, sleep, thoughts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Screening for anxiety, ADHD, trauma, psychosis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Understanding their perspective on what's happening</span>
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
                        <span className="text-muted-foreground">We share our diagnostic findings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Your child participates in understanding their brain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">We discuss all treatment options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">You leave with a clear plan—not just a prescription</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Our Evaluation Different */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Star className="w-4 h-4 mr-1" />
                What Makes Us Different
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Evaluation Goes Deeper
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-healing/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-healing" />
                    We Look for the Episodic Pattern
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The KEY to accurate bipolar diagnosis is identifying distinct "episodes"—periods that are clearly 
                    different from your child's baseline. We create a timeline: When did the elevated mood/energy start? 
                    How long did it last? What was the depressive period like? Is there a clear "before and after"?
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-healing/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-healing" />
                    We Distinguish Bipolar from DMDD
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    DMDD was created specifically because children were being over-diagnosed with bipolar disorder. 
                    Key differences: Bipolar is episodic with euphoria and decreased sleep need; DMDD is chronic 
                    irritability without euphoria or sleep changes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-healing/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-healing" />
                    We Assess for ADHD Properly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    60-90% of children with bipolar disorder also have ADHD. We determine: Is the ADHD real and present 
                    from childhood? Is the "ADHD" actually mania being misdiagnosed? If both are present, which requires 
                    treatment first?
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-healing/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-healing" />
                    We Take Family History Seriously
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bipolar disorder has one of the strongest genetic components in psychiatry. First-degree relative 
                    with bipolar = 10-15% risk (vs 1-2% baseline). Both parents with bipolar = 50-60% risk. We ask about 
                    relatives with "mood problems," hospitalizations, or suicide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
                <Pill className="w-4 h-4 mr-1" />
                Treatment Options
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Treatment for Childhood Bipolar Disorder
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Effective treatment requires a multimodal approach—combining the right medications, appropriate therapy, 
                and family involvement.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* The Foundation */}
              <Card className="border-primary/30 bg-primary/5 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Shield className="w-6 h-6" />
                    The Foundation: Mood Stabilization First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The most important principle in treating childhood bipolar disorder: <strong>Stabilize the mood FIRST, 
                    before treating anything else.</strong>
                  </p>
                  <p className="text-muted-foreground">
                    Why? Because stimulants for ADHD can trigger mania if mood isn't stable, antidepressants alone can 
                    worsen cycling, and behavioral therapy can't work when mood is unstable. Once your child's mood is 
                    stable, we can effectively address ADHD, anxiety, and other co-occurring conditions.
                  </p>
                </CardContent>
              </Card>
              
              {/* Medication Options */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Medication Options</h3>
              
              <div className="space-y-6 mb-8">
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Lithium</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The oldest mood stabilizer, with the strongest evidence for preventing suicide. FDA-approved for 
                      ages 7 and up. Particularly effective for classic euphoric mania. Requires regular blood monitoring 
                      but is generally well-tolerated. May protect brain structure from the damaging effects of repeated episodes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Atypical Antipsychotics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">These medications work faster than lithium for acute mania:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong>Risperidone:</strong> Fastest acting; strongest evidence (68.5% response rate)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong>Aripiprazole (Abilify):</strong> Good efficacy with lower weight gain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong>Quetiapine (Seroquel):</strong> Helps with sleep and anxiety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong>Olanzapine (Zyprexa):</strong> Very effective; used when others fail</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">For Bipolar Depression</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      <strong>Lurasidone (Latuda)</strong> - FDA approved for pediatric bipolar depression (ages 10-17). 
                      Weight-neutral—critical for adolescents. Must be taken with 350 calories of food to work properly.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>What We Avoid:</strong> Antidepressants alone can trigger mania or rapid cycling. If an 
                      antidepressant is ever needed, it's only used WITH a mood stabilizer.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Therapy Options */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Therapy That Works</h3>
              <p className="text-muted-foreground mb-6">
                Medications stabilize the brain, but therapy stabilizes the environment and teaches skills.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-healing/20 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-healing" />
                    </div>
                    <CardTitle className="text-lg">Family-Focused Therapy (FFT)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      The <strong>gold-standard</strong> for adolescent bipolar disorder. 21 sessions over 9 months. 
                      Teaches the family to recognize early warning signs and improves communication during high-stress moments.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-healing/20 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center mb-3">
                      <Clock className="w-6 h-6 text-healing" />
                    </div>
                    <CardTitle className="text-lg">IPSRT</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Interpersonal and Social Rhythm Therapy focuses on stabilizing daily routines (sleep, meals, activities). 
                      Particularly important because sleep disruption triggers episodes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-healing/20 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center mb-3">
                      <Brain className="w-6 h-6 text-healing" />
                    </div>
                    <CardTitle className="text-lg">CBT</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cognitive Behavioral Therapy is helpful for depression and anxiety symptoms. Teaches coping skills 
                      and thought management. Works best AFTER mood is stable.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Lifestyle Factors */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Lifestyle Factors That Matter</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-amber-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Moon className="w-6 h-6 text-amber-600" />
                      Sleep is NON-NEGOTIABLE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Sleep deprivation is one of the most reliable triggers for mania:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Consistent bedtime and wake time</li>
                      <li>• Blue light blocking in the evening</li>
                      <li>• Dark, cool sleeping environment</li>
                      <li>• No "weekend catch-up" sleep schedules</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                      Substance Avoidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Cannabis in particular is devastating for bipolar youth:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 5x higher suicide attempt rate</li>
                      <li>• 3x lower remission rate</li>
                      <li>• Can trigger psychotic mania</li>
                      <li>• Effects linger for 30 days due to fat storage</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Practice */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                <Award className="w-4 h-4 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Dr. Shapiro for Your Child's Bipolar Disorder Treatment
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-primary" />
                      35+ Years of Specialized Practice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Dr. Shapiro has spent over three decades treating the most complex psychiatric cases—including 
                      children and adolescents with bipolar disorder who've been to multiple providers without finding answers.
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
                      Board-certified in BOTH Adult AND Child/Adolescent Psychiatry. This dual expertise means we understand 
                      how bipolar disorder evolves from childhood through adulthood and can continue care as your child grows.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary" />
                      Expertise in Treatment-Resistant Cases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Many of our patients come to us after other treatments have failed. We're experienced with complex 
                      medication combinations, cases that require clozapine protocols, and children with multiple co-occurring conditions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Heart className="w-6 h-6 text-primary" />
                      We Treat the Family
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Bipolar disorder affects everyone in the household. We provide guidance to parents, help siblings 
                      understand, and work to reduce the family stress that can trigger relapse.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* What Families Can Expect */}
              <Card className="border-healing/30 bg-healing/5">
                <CardHeader>
                  <CardTitle className="text-xl">What Families Can Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Clear Communication</h4>
                      <p className="text-sm text-muted-foreground">
                        You'll always understand what we're recommending and why. No medical jargon without explanation. 
                        No decisions made without your input.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Responsiveness</h4>
                      <p className="text-sm text-muted-foreground">
                        Bipolar disorder doesn't wait for office hours. We have protocols for urgent situations and take 
                        family concerns seriously.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Long-Term Partnership</h4>
                      <p className="text-sm text-muted-foreground">
                        We don't just stabilize and discharge. Bipolar disorder is a lifelong condition. We're committed 
                        to your child's journey from diagnosis through young adulthood.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                <HelpCircle className="w-4 h-4 mr-1" />
                FAQ
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Common Questions About Childhood Bipolar Disorder
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
                Your Child Deserves an Accurate Diagnosis and Effective Treatment
              </p>
              <p className="text-lg text-white/80 mb-8">
                If your child is struggling with extreme mood swings, explosive episodes, and symptoms that seem 
                beyond normal childhood behavior—don't wait. Early, accurate diagnosis and proper treatment can 
                change the trajectory of your child's entire life.
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
                    (859) 341-7453
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
                If your child is in immediate danger or expressing suicidal thoughts:
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
                Childhood bipolar disorder is one of the most challenging conditions in psychiatry—but also one of 
                the most treatable when approached correctly. With 35+ years of experience and a commitment to 
                comprehensive evaluation, Dr. Shapiro and his team are here to help your family find answers and hope.
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

export default ChildhoodBipolar;
