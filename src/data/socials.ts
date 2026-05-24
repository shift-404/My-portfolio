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
  title: "Fullstack-разработчик",
  tagline: "Создаю цифровые впечатления, которые имеют значение",
  bio: "Я создаю производительные, масштабируемые веб-приложения с использованием современных технологий. Увлечен чистым кодом, красивыми интерфейсами и расширением границ возможного в вебе.",
  location: "Сан-Франциско, Калифорния",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  stats: {
    experience: 5,
    projects: 20,
    technologies: 30,
    clients: 15,
  },
};
