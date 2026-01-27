import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Clock, 
  Car,
  Accessibility,
  CreditCard,
  Video,
  MapPin,
  Calendar,
  Heart,
  Award,
  Check,
  Building,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Contact = () => {

  const officeHours = [
    { day: "Monday - Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 12:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us | Schedule Appointment | Dr. Shapiro Psychiatrist Cincinnati"
        description="Schedule your psychiatric evaluation with Dr. Arnold Shapiro. Two convenient locations in Cincinnati and Fort Wright, KY. Call (859) 341-7453. Same-day response. Now accepting new patients."
        path="/contact"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm">
            <Heart className="w-4 h-4 mr-1" />
            We're Here to Help
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to take the first step toward better mental health? We're here to listen, 
            understand, and guide you on your journey. Reach out today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
              asChild
            >
              <a href="tel:859-341-7453">
                <Phone className="w-5 h-5 mr-2" />
                Call (859) 341-7453
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Emergency Notice */}
        <div className="text-center mb-12 p-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl shadow-sm">
          <p className="text-amber-800 dark:text-amber-200">
            <strong>For non-emergency concerns:</strong> Call our office at <a href="tel:859-341-7453" className="underline font-bold">(859) 341-7453</a>
          </p>
          <p className="text-amber-700 dark:text-amber-300 text-sm mt-2">
            If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
          </p>
        </div>

        {/* Office Locations */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 text-base border-primary text-primary">
              <Building className="w-4 h-4 mr-1" />
              Our Locations
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Two Convenient Locations</h2>
            <p className="text-muted-foreground">Serving Cincinnati and Northern Kentucky</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Cincinnati Office */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Cincinnati Office</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <a 
                    href="tel:859-341-7453" 
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    (859) 341-7453
                  </a>
                </div>
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground">8280 Montgomery Road, Suite 304</p>
                  <p>Cincinnati, OH 45236</p>
                </div>
                <div className="flex items-start gap-3 pt-2">
                  <Car className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">Free parking available on-site</p>
                </div>
              </CardContent>
            </Card>

            {/* Fort Wright Office */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-healing">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-healing" />
                  </div>
                  <CardTitle className="text-xl">Fort Wright Office</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <a 
                    href="tel:859-341-7453" 
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    (859) 341-7453
                  </a>
                </div>
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground">1717 Dixie Highway, Suite 200</p>
                  <p>Fort Wright, KY 41011</p>
                </div>
                <div className="pt-2">
                  <Badge className="bg-healing/10 text-healing border-healing/30">
                    Just 5 minutes from downtown Cincinnati
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Hours & Accessibility */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Office Hours */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Office Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Accessibility className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Accessibility & Parking</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Wheelchair Accessible</p>
                  <p className="text-sm text-muted-foreground">Elevator access at both locations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Free Parking</p>
                  <p className="text-sm text-muted-foreground">Convenient on-site parking available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Telehealth Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-healing/5 border-primary/20 hover:shadow-xl transition-all duration-300 mb-6">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl mb-4 text-foreground">Telehealth: Quality Care From Anywhere</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Life is busy, and getting to an office appointment isn't always easy. That's why we offer secure, HIPAA-compliant video sessions that bring the same quality care directly to you—whether you're at home, at work, or anywhere with a private space and internet connection.
                </p>
                <p className="font-semibold text-foreground mb-3">Telehealth is perfect for:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Follow-up medication management appointments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Patients who live farther from our offices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Days when weather, illness, or schedule conflicts make travel difficult</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Anyone who simply prefers the convenience of video visits</span>
                  </li>
                </ul>
                <p className="mt-6 text-foreground font-medium italic">
                  Same compassionate care. Same thorough attention. Just more convenient.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-300 mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-8 w-8 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl mb-4 text-amber-900 dark:text-amber-100">Understanding Your Investment in Care</h3>
                <p className="text-amber-800 dark:text-amber-200 mb-6 leading-relaxed">
                  We are an out-of-network provider, which allows us to focus entirely on your care without insurance company limitations on treatment decisions.
                </p>
                <p className="font-semibold text-amber-900 dark:text-amber-100 mb-3">Here's how we help with costs:</p>
                <ul className="space-y-2 text-amber-800 dark:text-amber-200">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>We provide detailed superbills (receipts) that you can submit to your insurance for reimbursement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Many patients receive significant reimbursement from their insurance plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>We're happy to answer any questions about the reimbursement process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>We will submit claims to your insurance on your behalf to help you get reimbursed</span>
                  </li>
                </ul>
                <p className="mt-6 text-amber-900 dark:text-amber-100 font-medium italic">
                  Your mental health is worth investing in, and we'll do everything we can to help make quality care accessible to you.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step toward better mental health. Our team is ready to welcome you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
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
              <span>Mon-Thu 9-5, Fri 9-12</span>
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

export default Contact;
