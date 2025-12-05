import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Clock, 
  MessageSquare,
  Car,
  Accessibility
} from "lucide-react";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Contact = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: "Cincinnati Office",
      primary: "(513) 794-8777",
      secondary: "8280 Montgomery Road, Suite 304",
      description: "Cincinnati, OH 45236"
    },
    {
      icon: Phone,
      title: "Fort Wright Office",
      primary: "(859) 341-7453",
      secondary: "1717 Dixie Highway, Suite 200",
      description: "Fort Wright, KY 41011"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us | Schedule Appointment | Dr. Shapiro Psychiatrist Cincinnati"
        description="Schedule your psychiatric evaluation with Dr. Arnold Shapiro. Two convenient locations: Cincinnati (513-794-8777) and Fort Wright, KY (859-341-7453). Same-day response. Now accepting new patients."
        path="/contact"
      />
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 text-base">Contact Us</Badge>
          <h1 className="text-4xl font-bold mb-6">Contact us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take the first step? We're here to help you on your journey 
            to better mental health. Reach out today.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Emergency Notice */}
        <div className="text-center mb-12 p-6 bg-card rounded-lg shadow-lg">
          <p className="text-muted-foreground text-lg">
            For non-emergency concerns, call our office at (859) 341-7453. If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <info.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                        <p className="text-base font-semibold text-primary mb-1">{info.primary}</p>
                        <p className="text-sm text-muted-foreground">{info.secondary}</p>
                        <p className="text-xs text-muted-foreground mt-2">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Office Hours */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Clock className="h-6 w-6 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-semibold">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location & Accessibility */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Location & Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-base">Parking</p>
                      <p className="text-muted-foreground">Free parking available on-site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Accessibility className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-base">Accessibility</p>
                      <p className="text-muted-foreground">Wheelchair accessible with elevator access</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Telehealth Option */}
            <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow mt-6">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Telehealth Available</h3>
                    <p className="text-base text-muted-foreground">
                      Can't make it to our office? We offer secure video sessions 
                      from the comfort of your home.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <EmergencyDisclaimer />
      <Footer />
    </div>
  );
};

export default Contact;