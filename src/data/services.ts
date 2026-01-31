interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: "🚀",
    title: "Social Media Sorcery",
    description:
      "We make your brand go viral (the 'everyone's talking about you' kind, not the 'stay home' kind).",
    colorClass: "card-purple",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Content That Converts",
    description:
      "Words so good, even your grandma will click. Designs so fire, they need a fire extinguisher.",
    colorClass: "card-pink",
  },
  {
    id: 3,
    icon: "📊",
    title: "SEO That Ranks",
    description:
      "We'll get you to Google's #1 spot. Your competitors? They'll be hitting refresh praying for miracles.",
    colorClass: "card-cyan",
  },
  {
    id: 4,
    icon: "⚡",
    title: "Paid Ads That Pop",
    description:
      "Every rupee works harder than a startup founder on coffee. Results so good, you'll think it's magic.",
    colorClass: "card-yellow",
  },
  {
    id: 5,
    icon: "💻",
    title: "Web Design & Development",
    description:
      "Websites so stunning, visitors forget to leave. Fast, beautiful, and converts like crazy.",
    colorClass: "card-purple",
  },
  {
    id: 6,
    icon: "📱",
    title: "App Development",
    description:
      "Apps smoother than butter on a hot pan. iOS, Android, or both - we build digital experiences users love.",
    colorClass: "card-pink",
  },
  {
    id: 7,
    icon: "🎬",
    title: "Video Production",
    description:
      "Videos that stop thumbs mid-scroll. From reels to commercials, we make content that sticks.",
    colorClass: "card-cyan",
  },
  {
    id: 8,
    icon: "📧",
    title: "Email Marketing",
    description:
      "Emails so good, people actually open them. No more spam folder sadness.",
    colorClass: "card-yellow",
  },
];
