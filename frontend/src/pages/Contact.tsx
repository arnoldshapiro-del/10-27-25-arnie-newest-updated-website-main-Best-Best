import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CreditCard, 
  Video, 
  Heart, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us | Dr. Arnold Shapiro MD Psychiatrist | Cincinnati & Northern Kentucky"
        description="Contact Dr. Arnold Shapiro's psychiatric practice. Two convenient locations in Cincinnati and Fort Wright, KY. Call (859) 341-7453. Same-day response. Telehealth available."
        path="/contact"
      />
      
      <Header />
      
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">We're Here to Help</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          
          {/* Subheadline - WARM AND LOW PRESSURE */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Have questions about our practice, our approach, or whether we can help with your concerns? We'd love to hear from you. No pressure, no commitment — just answers.
          </p>
          
          {/* CTA Button */}
          <a 
            href="tel:859-341-7453"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Us: (859) 341-7453
          </a>
          
          {/* Supporting text */}
          <p className="mt-6 text-white/80">
            Same-day response to your questions
          </p>
          
        </div>
      </section>

      {/* SECTION 2: LOCATIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Two Convenient Locations
            </h2>
            <p className="text-gray-600 mt-4">
              Serving Cincinnati and Northern Kentucky
            </p>
          </div>
          
          {/* Two Location Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Cincinnati Office */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cincinnati Office</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">8280 Montgomery Road, Suite 304</p>
                  <p className="text-gray-600">Cincinnati, OH 45236</p>
                </div>
                
                <a 
                  href="tel:859-341-7453"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  <Phone className="w-4 h-4" />
                  (859) 341-7453
                </a>
                
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span>🅿️</span> Free parking available on-site
                </p>
              </div>
            </div>
            
            {/* Fort Wright Office */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fort Wright Office</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">1717 Dixie Highway, Suite 200</p>
                  <p className="text-gray-600">Fort Wright, KY 41011</p>
                </div>
                
                <a 
                  href="tel:859-341-7453"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  <Phone className="w-4 h-4" />
                  (859) 341-7453
                </a>
                
                <p className="text-green-600 text-sm font-medium">
                  Just 5 minutes from downtown Cincinnati
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: OFFICE HOURS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">When to Reach Us</h2>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Monday – Thursday:</span> 9:00 AM – 5:00 PM
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Friday:</span> 9:00 AM – 12:00 PM
                </p>
              </div>
              <p className="mt-4 text-blue-600 font-medium">
                We return all calls the same business day.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: PAYMENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Understanding Your Investment in Care
                </h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                We are an out-of-network provider, which allows us to focus entirely on your care without insurance company limitations on treatment decisions.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-4">Here's how we help with costs:</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">We provide detailed superbills (receipts) that you can submit to your insurance for reimbursement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Many patients receive significant reimbursement from their insurance plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">We're happy to answer any questions about the reimbursement process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">We will submit claims to your insurance on your behalf to help you get reimbursed</span>
                </li>
              </ul>
              
              <p className="text-blue-700 font-medium italic">
                Your mental health is worth investing in, and we'll do everything we can to help make quality care accessible to you.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TELEHEALTH */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Telehealth: Quality Care From Anywhere
                </h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Life is busy, and getting to an office appointment isn't always easy. That's why we offer secure, HIPAA-compliant video sessions that bring the same quality care directly to you—whether you're at home, at work, or anywhere with a private space and internet connection.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-4">Telehealth is perfect for:</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Follow-up medication management appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Patients who live farther from our offices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Days when weather, illness, or schedule conflicts make travel difficult</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Anyone who simply prefers the convenience of video visits</span>
                </li>
              </ul>
              
              <p className="text-blue-700 font-medium italic">
                Same compassionate care. Same thorough attention. Just more convenient.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: READY TO SCHEDULE CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            If you're ready to schedule an evaluation, we're ready to help.
          </p>
          
          <Link 
            to="/schedule"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Your Evaluation
            <ArrowRight className="w-5 h-5" />
          </Link>
          
        </div>
      </section>

      {/* SECTION 7: CRISIS RESOURCES */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
          </p>
        </div>
      </section>

      {/* SECTION 8: FOOTER */}
      <Footer />
    </div>
  );
};

export default Contact;
