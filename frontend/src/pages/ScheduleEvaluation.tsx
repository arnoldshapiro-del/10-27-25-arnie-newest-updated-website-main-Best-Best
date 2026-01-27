import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  User, 
  Users, 
  MapPin, 
  CheckCircle, 
  Search, 
  Heart, 
  Calendar, 
  FileText, 
  ArrowRight 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ScheduleEvaluation = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Schedule Your Psychiatric Evaluation | Dr. Arnold Shapiro MD Cincinnati"
        description="Schedule your comprehensive psychiatric evaluation with Dr. Arnold Shapiro. Thorough 2-3 hour assessments for adults and children. Call (859) 341-7453. Same-day response."
        path="/schedule-evaluation"
      />
      
      <Header />
      
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Take the First Step</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your Evaluation
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            You've done your research. You're ready for answers. Let's get you scheduled for a comprehensive psychiatric evaluation with Dr. Shapiro.
          </p>
          
          {/* CTA Button */}
          <a 
            href="tel:859-341-7453"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            Call to Schedule: (859) 341-7453
          </a>
          
          {/* Supporting text */}
          <p className="mt-6 text-white/80">
            Same-day response to your call • Accepting new patients
          </p>
          
        </div>
      </section>

      {/* SECTION 2: WHAT TO EXPECT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              What to Expect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Evaluation at a Glance
            </h2>
          </div>
          
          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Adult Evaluation */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Adult Evaluation</h3>
                  <span className="text-blue-600 font-semibold">2 Hours</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                A thorough two-hour assessment including:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 hour with our licensed counselor gathering your complete history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive review of your information by Dr. Shapiro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 hour face-to-face with Dr. Shapiro for evaluation and treatment planning</span>
                </li>
              </ul>
              
              <p className="text-blue-600 font-medium">
                Leave with clarity and a personalized treatment plan
              </p>
            </div>
            
            {/* Card 2: Child & Teen Evaluation */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Child & Teen Evaluation</h3>
                  <span className="text-blue-600 font-semibold">3 Hours</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                A comprehensive three-hour family-centered assessment:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Separate sessions with parent(s) and child</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Complete developmental and behavioral history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Family meeting where your child participates in treatment decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Age-appropriate explanations your child can understand</span>
                </li>
              </ul>
              
              <p className="text-blue-600 font-medium">
                We believe children deserve to understand their own care
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW TO PREPARE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Before Your Visit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Preparing for Your Evaluation
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              To make the most of your evaluation time, please have the following ready:
            </p>
          </div>
          
          {/* Checklist */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <ul className="space-y-6">
              
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">List of current medications</h4>
                  <p className="text-gray-600">Include dosages and how long you've been taking each</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Previous medical records</h4>
                  <p className="text-gray-600">Any psychiatric evaluations, therapy notes, or relevant medical records (helpful but not required)</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Insurance card</h4>
                  <p className="text-gray-600">We'll provide a superbill for reimbursement</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">List of concerns</h4>
                  <p className="text-gray-600">Write down your main symptoms, questions, and goals for treatment</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">For children</h4>
                  <p className="text-gray-600">Report cards, teacher feedback, or school evaluations if available</p>
                </div>
              </li>
              
            </ul>
            
            <p className="mt-8 text-center text-gray-500 italic">
              Don't worry if you don't have everything — we'll work with what you have.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE DR. SHAPIRO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Our Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Makes Our Evaluations Different
            </h2>
          </div>
          
          {/* Three Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time That Matters</h3>
              <p className="text-gray-600">
                While most psychiatrists spend 15 minutes, we spend 2-3 hours. Accurate diagnosis requires thorough evaluation.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Picture</h3>
              <p className="text-gray-600">
                We evaluate for ALL psychiatric conditions, not just the one you came in for. Many patients discover co-occurring conditions they didn't know they had.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                No cookie-cutter approaches. Your treatment plan is built around your specific symptoms, history, and goals.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 5: BOTTOM CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          
          {/* Icon */}
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-8 h-8" />
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Phone Call Away From Answers
          </h2>
          
          {/* Subtext */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our office responds to calls the same day. We'll find an appointment time that works for your schedule.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:859-341-7453"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (859) 341-7453
            </a>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </Link>
          </div>
          
          {/* Bottom Info Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Cincinnati & Northern Kentucky</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Mon-Thu 9-5, Fri 9-12</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>35+ Years Experience</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 6: NOT READY */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Not ready to schedule?</strong> That's okay. If you have questions or want to learn more before committing, we're happy to help with no pressure.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            Visit our Contact page
            <ArrowRight className="w-4 h-4" />
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

export default ScheduleEvaluation;
