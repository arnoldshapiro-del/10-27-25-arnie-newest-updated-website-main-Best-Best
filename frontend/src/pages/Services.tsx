import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Users, 
  MessageSquare, 
  Pill, 
  Clock,
  Shield,
  Stethoscope,
  Phone,
  Video,
  Calendar,
  MapPin,
  Award,
  Check,
  ClipboardList,
  Target,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Services = () => {
  const coreServices = [
    {
      icon: Stethoscope,
      title: "Comprehensive Psychiatric Evaluation",
      description: "Our signature three-part evaluation provides the most thorough assessment available. We take the time to truly understand your situation.",
      duration: "2-3 hours total",
      features: [
        "60 minutes with therapist (adults) or parents (children)",
        "60 minutes with Dr. Shapiro for medical evaluation",
        "Complete diagnostic assessment and treatment plan",
        "For children: additional 60 minutes of child evaluation"
      ],
      highlight: true
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Expert psychiatric medication evaluation, initiation, and ongoing monitoring tailored to your unique needs.",
      duration: "30-45 minutes",
      features: [
        "Thorough medication review and optimization",
        "Side effect management and monitoring",
        "Coordination with other providers",
        "Evidence-based prescribing approach"
      ],
      highlight: false
    },
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions with experienced therapists, tailored to your specific needs and treatment goals.",
      duration: "50 minutes",
      features: [
        "Cognitive Behavioral Therapy (CBT)",
        "Psychodynamic approaches",
        "Solution-focused techniques",
        "Evidence-based interventions"
      ],
      highlight: false
    },
    {
      icon: Users,
      title: "Family Therapy",
      description: "Address family dynamics, improve communication, and build stronger relationships together.",
      duration: "45-60 minutes",
      features: [
        "Family systems therapy",
        "Parent-child relationship support",
        "Communication skill building",
        "Blended family guidance"
      ],
      highlight: false
    }
  ];

  const specialtyServices = [
    {
      icon: Video,
      title: "Telehealth Services",
      description: "Secure, HIPAA-compliant video sessions from the comfort of your home.",
      availability: "Flexible scheduling"
    },
    {
      icon: ClipboardList,
      title: "Psychological Testing",
      description: "Comprehensive assessments for ADHD, autism, learning disabilities, and more.",
      availability: "By appointment"
    },
    {
      icon: Target,
      title: "Treatment Planning",
      description: "Collaborative development of personalized treatment goals and strategies.",
      availability: "Included with evaluation"
    },
    {
      icon: MessageSquare,
      title: "Care Coordination",
      description: "Communication with schools, other providers, and support systems.",
      availability: "Ongoing support"
    }
  ];

  const conditionsTreated = [
    { name: "ADHD", path: "/adhd" },
    { name: "Anxiety Disorders", path: "/anxiety" },
    { name: "Depression", path: "/depression" },
    { name: "Bipolar Disorder", path: "/bipolar-disorder" },
    { name: "OCD", path: "/ocd" },
    { name: "DMDD", path: "/dmdd" },
    { name: "Autism Spectrum Disorder", path: "/autism" },
    { name: "Postpartum Depression", path: "/postpartum-depression" },
    { name: "Insomnia", path: "/insomnia" },
    { name: "ODD", path: "/odd" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Psychiatric Services | ADHD, Anxiety, Depression Treatment | Cincinnati Psychiatrist"
        description="Comprehensive psychiatric services including medication management, therapy, and our unique three-part evaluation. Treating ADHD, anxiety, depression, bipolar disorder, and more in Cincinnati & NKY."
        path="/services"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm">
                <Heart className="w-4 h-4 mr-1" />
                Compassionate Expert Care
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Comprehensive Mental Health Care
              </h1>
              <p className="text-xl text-white/90 mb-4 leading-relaxed font-semibold">
                Personalized Treatment for Children, Adolescents, and Adults
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                With over 35 years of experience, Dr. Arnold Shapiro and his team provide thorough, thoughtful psychiatric care. We take the time to truly understand your needs and develop a treatment plan that works for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
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
                    Call (859) 341-7453
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-8 h-8 text-blue-200" />
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
                    <span>Children & Adults</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-200" />
                    <span>In-Person & Telehealth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Core Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-base border-primary text-primary">
              <Sparkles className="w-4 h-4 mr-1" />
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of psychiatric services tailored to meet your unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {coreServices.map((service, index) => (
              <Card 
                key={index} 
                className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.highlight ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      service.highlight ? 'bg-primary text-white' : 'bg-primary/10'
                    }`}>
                      <service.icon className={`h-7 w-7 ${service.highlight ? 'text-white' : 'text-primary'}`} />
                    </div>
                    {service.highlight && (
                      <Badge className="bg-primary text-white">Signature Service</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mt-2">
                    <Clock className="h-3 w-3 mr-1" />
                    {service.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-foreground">What's Included:</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialty Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-base border-healing text-healing">
              <Shield className="w-4 h-4 mr-1" />
              Additional Support
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialty Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support beyond traditional appointments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-healing/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {service.availability}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conditions We Treat */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-none">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-4 text-base">
                  <Brain className="w-4 h-4 mr-1" />
                  Conditions We Treat
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Expert Care for a Wide Range of Conditions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Dr. Shapiro specializes in the diagnosis and treatment of various mental health conditions in both children and adults.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {conditionsTreated.map((condition, index) => (
                  <Link
                    key={index}
                    to={condition.path}
                    className="group bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span className="font-medium text-sm group-hover:text-white">{condition.name}</span>
                    <ArrowRight className="w-4 h-4 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  to="/disorders" 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
                >
                  View All Conditions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Notice */}
        <div className="text-center mb-16 p-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-amber-800 dark:text-amber-200">
            <strong>For non-emergency concerns:</strong> Call our office at <a href="tel:859-341-7453" className="underline font-bold">(859) 341-7453</a>
          </p>
          <p className="text-amber-700 dark:text-amber-300 text-sm mt-2">
            If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Quality mental health care begins with a thorough evaluation. We're here to listen, understand, and help you develop a path forward.
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
                Call (859) 341-7453
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 mt-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Cincinnati & Northern Kentucky</span>
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

export default Services;
