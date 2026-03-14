export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  mostAsked?: boolean;
};

export const FAQS: FAQItem[] = [
  {
    id: "onboarding",
    question: "How quickly can we get started with Aarohan?",
    answer:
      "Most projects can kick off within a few days once we align on your goals, scope, and timelines. We keep onboarding lightweight so momentum starts fast.",
    mostAsked: true,
  },
  {
    id: "services",
    question: "What kind of marketing support do you offer?",
    answer:
      "We help with strategy, content, performance marketing, social media, creative direction, and growth-focused campaigns tailored to your brand stage.",
    mostAsked: true,
  },
  {
    id: "pricing",
    question: "Do you offer custom plans or only fixed packages?",
    answer:
      "We usually recommend custom plans because every brand has different goals, channels, and growth timelines. That keeps the work practical and focused.",
  },
  {
    id: "industries",
    question: "Do you work with only one type of industry?",
    answer:
      "No. We work across industries as long as there is a clear growth problem to solve and room to build a sharper brand and marketing engine.",
  },
  {
    id: "communication",
    question: "How do you share updates and results?",
    answer:
      "We keep communication straightforward with regular check-ins, campaign updates, and performance reviews so you always know what is working and what is next.",
  },
];
