export interface Experience {
  id: number;
  role: string;
  company: string;
  description: string;
  period: string;
  type: "work" | "education" | "freelance";
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Fullstack Developer",
    company: "TechCorp Inc.",
    description:
      "Led development of microservices architecture serving 2M+ users. Designed and implemented scalable APIs, mentored junior developers, and drove architectural decisions.",
    period: "2023 - Present",
    type: "work",
    highlights: [
      "Architected microservices serving 2M+ users",
      "Reduced API latency by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "StartupXYZ",
    description:
      "Built and shipped multiple features for a SaaS platform from ideation to production. Worked closely with design team to create seamless user experiences.",
    period: "2021 - 2023",
    type: "work",
    highlights: [
      "Shipped 20+ features to production",
      "Built real-time collaboration system",
      "Optimized bundle size by 60%",
      "Implemented automated testing",
    ],
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered full-stack web applications for diverse clients. Specialized in React/Next.js frontends with Node.js backends and cloud deployment.",
    period: "2019 - 2021",
    type: "freelance",
    highlights: [
      "Delivered 15+ client projects",
      "Built e-commerce platforms",
      "Developed custom CMS solutions",
      "Managed cloud infrastructure",
    ],
  },
  {
    id: 4,
    role: "B.Sc. Computer Science",
    company: "University of Technology",
    description:
      "Focused on software engineering, algorithms, and distributed systems. Dean's list recipient with research in web technologies.",
    period: "2017 - 2021",
    type: "education",
    highlights: [
      "Dean's List recipient",
      "Research in web technologies",
      "Teaching assistant for 3 semesters",
      "Hackathon winner",
    ],
  },
];
