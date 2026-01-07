import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from 'react-helmet-async';

const faqData = [
  {
    question: "What conditions does Dr. Shapiro treat?",
    answer: "Dr. Shapiro treats a comprehensive range of mental health conditions including ADHD (Attention Deficit Hyperactivity Disorder), depression (Major Depressive Disorder), anxiety disorders, generalized anxiety disorder (GAD), bipolar disorder, OCD (Obsessive-Compulsive Disorder), panic disorder, Tourette syndrome, insomnia, autism spectrum disorder (ASD), PTSD, and other psychiatric conditions. He treats patients of all ages - children, adolescents, and adults."
  },
  {
    question: "Do you treat both children and adults?",
    answer: "Yes, Dr. Shapiro is board-certified in both adult psychiatry and child/adolescent psychiatry. He has treated patients ranging from children as young as one year old (for severe ADHD cases) to adults in their 90s. His practice is designed to serve patients across all age groups with age-appropriate evaluation and treatment approaches."
  },
  {
    question: "What insurance do you accept?",
    answer: "We accept most major insurance plans. We recommend calling our office at (859) 341-7453 to verify your specific insurance coverage before scheduling an appointment. Our staff will be happy to help you understand your benefits and any out-of-pocket costs."
  },
  {
    question: "Where are your offices located?",
    answer: "Dr. Shapiro has two convenient office locations to serve patients in the Greater Cincinnati area. The Fort Wright, Kentucky office is located at 1717 Dixie Highway, Suite 200, Fort Wright, KY 41011. The Cincinnati, Ohio office is located at 8280 Montgomery Road, Suite 304, Cincinnati, OH 45236. Both offices are wheelchair accessible with free parking."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "To schedule an appointment, please call our office at (859) 341-7453. Our office hours are Monday through Thursday from 9:00 AM to 5:00 PM, and Friday from 9:00 AM to 12:00 PM. We strive to respond to all inquiries within the same business day. New patients typically begin with our comprehensive three-part evaluation."
  },
  {
    question: "Do you offer telehealth/virtual appointments?",
    answer: "Yes, we offer secure telehealth appointments for patients who prefer virtual care or cannot travel to our offices. Telepsychiatry allows you to receive the same quality psychiatric care from the comfort of your home. This option is available for both new patient evaluations and follow-up appointments."
  },
  {
    question: "What should I expect at my first visit?",
    answer: "Dr. Shapiro uses a distinctive three-part evaluation system. For children and teenagers: Part One is a one-hour assessment where parents meet with a therapist, Part Two is where the child meets alone with the therapist, and Part Three is a full hour with Dr. Shapiro, the patient, and parents together. For adults: the evaluation includes 60 minutes with a therapist followed by 60 minutes with Dr. Shapiro. You may bring a spouse or significant other if you wish. At the end, Dr. Shapiro will share his findings, explain diagnoses, and discuss treatment options together with you."
  },
  {
    question: "How does Dr. Shapiro do the evaluation before making the final diagnosis and treatment plan?",
    answer: "Dr. Shapiro uses a distinctive three-part evaluation system. For children and teenagers, Part One is a one-hour assessment where the patient meets with a highly trained therapist. In Part Two, the child or teenager meets alone with the therapist. Dr. Shapiro and the therapist then review all two hours of the evaluation together, and Dr. Shapiro takes detailed notes. Finally, Dr. Shapiro meets for a full hour with the patient and parents. For adults, the patient may bring a spouse or significant other if they wish. During this meeting, Dr. Shapiro shares what he's learned, explains the diagnoses that are definite and those being considered, and discusses the pros and cons of different treatment options including therapy alone, medication with therapy, or in some cases medication alone. You will decide together on the best approach."
  },
  {
    question: "Do you prescribe medication?",
    answer: "Yes, Dr. Shapiro has been prescribing psychiatric medications for over 35 years. He is an expert at selecting, prescribing, and managing medications. He loves answering questions and always keeps an open mind. Treatment decisions are made together with the patient and family, discussing the pros and cons of each option so you feel confident and informed about your care."
  },
  {
    question: "Does Dr. Shapiro keep parents involved when treating children and teenagers?",
    answer: "Absolutely. Dr. Shapiro always includes parents in appointments for children and teenagers. Even with older teens, he encourages parent involvement because gathering information from both the teenager and parents leads to much better care. When teens have separate therapy sessions, confidentiality is maintained unless there's a safety concern, and teens know this from the start. Dr. Shapiro is very flexible and encourages complete parent involvement because he knows how important it is for families to work together."
  }
];

// Comprehensive FAQ Schema for Google Rich Results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Frequently Asked Questions - Dr. Arnold Shapiro, MD Psychiatry",
  "description": "Common questions about Dr. Arnold Shapiro's psychiatry practice, including conditions treated, insurance, appointments, and treatment approaches.",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export function FAQSection() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
