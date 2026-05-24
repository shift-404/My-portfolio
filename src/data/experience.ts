export interface Experience {
  id: number;
  role: { uk: string; en: string };
  company: { uk: string; en: string };
  description: { uk: string; en: string };
  period: { uk: string; en: string };
  type: "work" | "education" | "freelance";
  highlights: { uk: string; en: string }[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: {
      uk: "Senior Fullstack-розробник",
      en: "Senior Fullstack Developer",
    },
    company: {
      uk: "TechCorp Inc.",
      en: "TechCorp Inc.",
    },
    description: {
      uk: "Керував розробкою мікросервісної архітектури, що обслуговує 2M+ користувачів. Проектував та реалізовував масштабовані API, навчав молодших розробників та приймав архітектурні рішення.",
      en: "Led development of microservices architecture serving 2M+ users. Designed and implemented scalable APIs, mentored junior developers, and drove architectural decisions.",
    },
    period: {
      uk: "2023 - теперішній час",
      en: "2023 - Present",
    },
    type: "work",
    highlights: [
      {
        uk: "Спроектував мікросервіси для 2M+ користувачів",
        en: "Architected microservices serving 2M+ users",
      },
      {
        uk: "Знизив затримку API на 40%",
        en: "Reduced API latency by 40%",
      },
      {
        uk: "Керував командою з 5 розробників",
        en: "Led team of 5 developers",
      },
      {
        uk: "Впровадив CI/CD пайплайн",
        en: "Implemented CI/CD pipeline",
      },
    ],
  },
  {
    id: 2,
    role: {
      uk: "Fullstack-розробник",
      en: "Fullstack Developer",
    },
    company: {
      uk: "StartupXYZ",
      en: "StartupXYZ",
    },
    description: {
      uk: "Розробив та запустив безліч функцій для SaaS-платформи від ідеї до production. Тісно працював з дизайн-командою для створення бездоганного користувацького досвіду.",
      en: "Built and shipped multiple features for a SaaS platform from ideation to production. Worked closely with design team to create seamless user experiences.",
    },
    period: {
      uk: "2021 - 2023",
      en: "2021 - 2023",
    },
    type: "work",
    highlights: [
      {
        uk: "Запустив 20+ функцій у production",
        en: "Shipped 20+ features to production",
      },
      {
        uk: "Побудував систему спільної роботи в реальному часі",
        en: "Built real-time collaboration system",
      },
      {
        uk: "Оптимізував розмір бандла на 60%",
        en: "Optimized bundle size by 60%",
      },
      {
        uk: "Впровадив автоматичне тестування",
        en: "Implemented automated testing",
      },
    ],
  },
  {
    id: 3,
    role: {
      uk: "Фріланс-розробник",
      en: "Freelance Developer",
    },
    company: {
      uk: "Самозайнятий",
      en: "Self-Employed",
    },
    description: {
      uk: "Розробляв full-stack веб-застосунки для різних клієнтів. Спеціалізувався на React/Next.js фронтендах з Node.js бекендами та хмарним деплоєм.",
      en: "Delivered full-stack web applications for diverse clients. Specialized in React/Next.js frontends with Node.js backends and cloud deployment.",
    },
    period: {
      uk: "2019 - 2021",
      en: "2019 - 2021",
    },
    type: "freelance",
    highlights: [
      {
        uk: "Виконав 15+ клієнтських проєктів",
        en: "Delivered 15+ client projects",
      },
      {
        uk: "Розробив e-commerce платформи",
        en: "Built e-commerce platforms",
      },
      {
        uk: "Створив кастомні CMS-рішення",
        en: "Developed custom CMS solutions",
      },
      {
        uk: "Керував хмарною інфраструктурою",
        en: "Managed cloud infrastructure",
      },
    ],
  },
  {
    id: 4,
    role: {
      uk: "Бакалавр комп'ютерних наук",
      en: "B.Sc. Computer Science",
    },
    company: {
      uk: "Технологічний університет",
      en: "University of Technology",
    },
    description: {
      uk: "Спеціалізувався на програмній інженерії, алгоритмах та розподілених системах. Включений до списку декана, проводив дослідження в галузі веб-технологій.",
      en: "Focused on software engineering, algorithms, and distributed systems. Dean's list recipient with research in web technologies.",
    },
    period: {
      uk: "2017 - 2021",
      en: "2017 - 2021",
    },
    type: "education",
    highlights: [
      {
        uk: "Включений до списку декана",
        en: "Dean's List recipient",
      },
      {
        uk: "Дослідження у веб-технологіях",
        en: "Research in web technologies",
      },
      {
        uk: "Асистент викладача 3 семестри",
        en: "Teaching assistant for 3 semesters",
      },
      {
        uk: "Переможець хакатонів",
        en: "Hackathon winner",
      },
    ],
  },
];
