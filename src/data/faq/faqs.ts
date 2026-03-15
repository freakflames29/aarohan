export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  mostAsked?: boolean;
};

export const FAQS: FAQItem[] = [
  {
    id: "1",
    question:
      "Why should I hire a creative marketing agency instead of doing it in-house?",
    answer:
      "An agency brings expert strategy, fresh ideas, tools, and a full team at a lower cost than hiring multiple in-house professionals.",
    mostAsked: true,
  },
  {
    id: "2",
    question: " What makes your agency different from others?",
    answer:
      "We don’t just post content. We build brand identity, run performance driven ads, create UGC, and design strategies focused on real business growth.",
    mostAsked: true,
  },
  {
    id: "3",
    question: "Do you work with small businesses or only big brands?",
    answer:
      "We work with startups, local businesses, and growing brands offering customized plans based on your goals and budget.",
  },
  {
    id: "4",
    question: "Will I get measurable results?",
    answer:
      "Absolutely. From logo design and brand positioning to social media presence and website creation , we handle it all",
    mostAsked: true,
  },
  {
    id: "5",
    question: "How do we get started?",
    answer:
      "Simple. Contact us, share your goals, and we’ll schedule a strategy discussion to create a customized plan for your brand.",
    mostAsked: true,
  },
  {
    id: "6",
    question: "Do I need paid ads, or is organic marketing enough?",
    answer:
      "Organic builds long-term trust, while paid ads accelerate growth. A smart combination of both gives the best results.",
  },
];
