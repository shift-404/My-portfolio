export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/shift-404",
    icon: "github",
  },
  {
    name: "Telegram",
    url: "https://t.me/shift_404",
    icon: "telegram",
  },
  {
    name: "Email",
    url: "mailto:rusiyvarvar@gmail.com",
    icon: "mail",
  },
];

export const personalInfo = {
  name: "Руслан Чистяков",
  title: "Fullstack-разработчик",
  tagline: "На стыке системной архитектуры и чистого кода.",
  bio: "Full-stack разработчик и системный администратор с фокусом на автоматизацию и производительность. Создаю цифровые экосистемы с нуля: от настройки серверной инфраструктуры до разработки кастомных интерфейсов.",
  location: "Одесса, Украина",
  email: "rusiyvarvar@gmail.com",
  resumeUrl: "",
  stats: {
    experience: 6,
    projects: 30,
    technologies: 40,
    clients: 10,
  },
};
