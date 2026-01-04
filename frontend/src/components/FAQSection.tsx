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
    question: "How does Dr. Shapiro do the evaluation before making the final diagnosis and treatment plan?",
    answer: "Dr. Shapiro uses a distinctive three-part evaluation system. For children and teenagers, Part One is a one-hour assessment where the patient meets with a highly trained therapist. In Part Two, the child or teenager meets alone with the therapist. Dr. Shapiro and the therapist then review all two hours of the evaluation together, and Dr. Shapiro takes detailed notes. Finally, Dr. Shapiro meets for a full hour with the patient and parents. For adults, the patient may bring a spouse or significant other if they wish. During this meeting, Dr. Shapiro shares what he's learned, explains the diagnoses that are definite and those being considered, and discusses the pros and cons of different treatment options including therapy alone, medication with therapy, or in some cases medication alone. You will decide together on the best approach."
  },
  {
    question: "Do you prescribe medication?",
    answer: "Yes, Dr. Shapiro has been prescribing psychiatric medications for over 35 years. He is an expert at selecting, prescribing, and managing medications. He loves answering questions and always keeps an open mind. Treatment decisions are made together with the patient and family, discussing the pros and cons of each option so you feel confident and informed about your care."
  },
  {
    question: "What ages do you treat?",
    answer: "Dr. Shapiro treats patients of all ages. He has treated children as young as one year old when they were so hyperactive they were jumping off furniture or running into the street and at serious risk of injury from ADHD. He has also treated adults as old as 90. No matter your age, Dr. Shapiro has the experience to help."
  },
  {
    question: "What conditions do you specialize in?",
    answer: "Dr. Shapiro is a board-certified psychiatrist who specializes in children, adolescents, and adults. He treats ADHD, anxiety, depression, bipolar disorder, generalized anxiety disorder, OCD, Tourette's syndrome, autism spectrum disorders, and many other psychiatric conditions."
  },
  {
    question: "Does Dr. Shapiro keep parents involved when treating children and teenagers?",
    answer: "Absolutely. Dr. Shapiro always includes parents in appointments for children and teenagers. Even with older teens, he encourages parent involvement because gathering information from both the teenager and parents leads to much better care. When teens have separate therapy sessions, confidentiality is maintained unless there's a safety concern, and teens know this from the start. Dr. Shapiro is very flexible and encourages complete parent involvement because he knows how important it is for families to work together."
  },
  {
    question: "Will I feel too tired on medication?",
    answer: "Dr. Shapiro promises you will feel exactly like your normal self. If any medication makes you too tired or causes uncomfortable side effects, he tells you not to wait until your next appointment. He explains how to safely stop the medication and asks you to contact the office. The goal is always to help you feel better while still feeling like yourself. You will never stay on a medication that makes you uncomfortable."
  },
  {
    question: "Is Dr. Shapiro open to questions or ideas I've read about online?",
    answer: "Dr. Shapiro is extremely open and flexible. He welcomes any questions or ideas you bring, whether from the internet or conversations with others. If your suggestion is reasonable and has a good chance of helping, he'll consider it. He explains the pros and cons of his recommendations but always decides together with you. At every appointment, he reevaluates how things are going and takes pride in making adjustments as needed to help each patient function at their absolute highest potential."
  }
];

// Generate FAQ Schema for Google Rich Results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
