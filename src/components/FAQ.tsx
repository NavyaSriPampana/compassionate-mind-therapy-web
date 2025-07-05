
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I do not accept insurance directly. However, I provide a superbill for each session that you can submit to your insurance company for potential reimbursement. Many clients find they can recover a portion of their session fees through out-of-network benefits."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer virtual therapy sessions via Zoom on Mondays, Wednesdays, and Fridays from 1:00 PM to 5:00 PM. Online sessions are just as effective as in-person therapy and provide the convenience of receiving care from your own space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations. This allows me to offer the time slot to another client who may need it. Cancellations made with less than 24-hour notice will be charged the full session fee."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples sessions are typically 60 minutes. This provides adequate time to explore issues thoroughly while maintaining a structured therapeutic framework."
    },
    {
      question: "What should I expect in the first session?",
      answer: "The first session focuses on understanding your concerns, goals, and background. We'll discuss your therapeutic needs, my approach, and develop a treatment plan together. It's completely normal to feel nervous - I'll help you feel comfortable throughout the process."
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "Most clients benefit from weekly sessions initially. As you progress, we may adjust the frequency based on your needs and goals. The therapeutic process is highly individual, and we'll work together to determine what works best for you."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-slate-600">
              Common questions about therapy services and policies
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
