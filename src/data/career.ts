interface CareerPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const CAREER_POSITIONS: CareerPosition[] = [
    {
      id: 1,
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Lead our social media strategy and make brands go viral daily.",
      requirements: [
        "2+ years of social media management experience",
        "Proven track record of growing social accounts",
        "Creative mindset with analytical skills",
        "Meme game should be strong",
      ],
    },
    {
      id: 2,
      title: "Creative Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Create stunning visuals that make people stop scrolling and start buying.",
      requirements: [
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio of creative work",
        "Understanding of design trends",
        "Ability to work on tight deadlines",
      ],
    },
    {
      id: 3,
      title: "Content Writer",
      department: "Content",
      location: "Remote",
      type: "Part-time",
      experience: "0-2 years",
      description:
        "Write copy that converts browsers into buyers and skeptics into believers.",
      requirements: [
        "Excellent writing and editing skills",
        "SEO knowledge is a plus",
        "Creative storytelling abilities",
        "Can write in multiple tones and styles",
      ],
    },
    

  ];
