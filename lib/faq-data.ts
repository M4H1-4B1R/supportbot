export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "My support team is overwhelmed with repetitive questions. Is there a way to automate answers without hiring more staff?",
    answer: "Yes. An AI customer support chatbot can handle repetitive inquiries automatically by pulling answers directly from your existing documentation. SupportBot Factory lets you upload your FAQs, product guides, and policies, then deploys a chatbot that answers common questions 24/7."
  },
  {
    question: "We tried a chatbot before but customers complained it gave wrong answers. Why does that happen?",
    answer: "Most chatbots use general AI models that generate responses based on broad training data. SupportBot Factory solves this by training exclusively on your uploaded documents. The AI only answers from verified sources and shows citations for every response."
  },
  {
    question: "I'm worried about AI giving customers incorrect information about our return policy or pricing. How can I prevent that?",
    answer: "The key is using an AI support system that answers only from your verified documentation. SupportBot Factory generates responses exclusively from the documents you upload. Every answer includes a visible citation showing exactly which document it came from."
  },
  {
    question: "What exactly is SupportBot Factory and what does it do?",
    answer: "SupportBot Factory is an AI-powered customer support platform that creates chatbots trained on your business documentation. You upload your FAQs, product guides, and policies, and the system builds a chatbot that answers customer questions using only information from those verified sources."
  },
  {
    question: "How does SupportBot Factory prevent AI hallucinations?",
    answer: "SupportBot Factory uses a retrieval-based approach rather than generative AI alone. When a customer asks a question, the system searches your uploaded documents for relevant information and only generates responses using content it can actually find and verify."
  }
];
