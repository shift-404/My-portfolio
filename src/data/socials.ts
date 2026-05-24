export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:hello@example.com",
    icon: "mail",
  },
];

export const personalInfo = {
  name: "Alex Rivera",
  title: "Fullstack Developer",
  tagline: "Building digital experiences that matter",
  bio: "I craft performant, scalable web applications with modern technologies. Passionate about clean code, beautiful interfaces, and pushing the boundaries of what's possible on the web.",
  location: "San Francisco, CA",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  stats: {
    experience: 5,
    projects: 20,
    technologies: 30,
    clients: 15,
  },
};
