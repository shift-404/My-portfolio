export interface Experience {
  id: number;
  role: { ru: string; uk: string; en: string };
  company: { ru: string; uk: string; en: string };
  description: { ru: string; uk: string; en: string };
  period: { ru: string; uk: string; en: string };
  type: "work" | "education" | "freelance";
  highlights: { ru: string; uk: string; en: string }[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: {
      ru: "Senior Fullstack-разработчик",
      uk: "Senior Fullstack-розробник",
      en: "Senior Fullstack Developer",
    },
    company: {
      ru: "TechCorp Inc.",
      uk: "TechCorp Inc.",
      en: "TechCorp Inc.",
    },
    description: {
      ru: "Руководил разработкой микросервисной архитектуры, обслуживающей 2M+ пользователей. Проектировал и реализовывал масштабируемые API, наставлял младших разработчиков и принимал архитектурные решения.",
      uk: "Керував розробкою мікросервісної архітектури, що обслуговує 2M+ користувачів. Проектував та реалізовував масштабовані API, навчав молодших розробників та приймав архітектурні рішення.",
      en: "Led development of microservices architecture serving 2M+ users. Designed and implemented scalable APIs, mentored junior developers, and drove architectural decisions.",
    },
    period: {
      ru: "2023 - настоящее время",
      uk: "2023 - теперішній час",
      en: "2023 - Present",
    },
    type: "work",
    highlights: [
      {
        ru: "Спроектировал микросервисы для 2M+ пользователей",
        uk: "Спроектував мікросервіси для 2M+ користувачів",
        en: "Architected microservices serving 2M+ users",
      },
      {
        ru: "Снизил задержку API на 40%",
        uk: "Знизив затримку API на 40%",
        en: "Reduced API latency by 40%",
      },
      {
        ru: "Руководил командой из 5 разработчиков",
        uk: "Керував командою з 5 розробників",
        en: "Led team of 5 developers",
      },
      {
        ru: "Внедрил CI/CD пайплайн",
        uk: "Впровадив CI/CD пайплайн",
        en: "Implemented CI/CD pipeline",
      },
    ],
  },
  {
    id: 2,
    role: {
      ru: "Fullstack-разработчик",
      uk: "Fullstack-розробник",
      en: "Fullstack Developer",
    },
    company: {
      ru: "StartupXYZ",
      uk: "StartupXYZ",
      en: "StartupXYZ",
    },
    description: {
      ru: "Разработал и запустил множество функций для SaaS-платформы от идеи до production. Тесно работал с дизайн-командой для создания безупречного пользовательского опыта.",
      uk: "Розробив та запустив безліч функцій для SaaS-платформи від ідеї до production. Тісно працював з дизайн-командою для створення бездоганного користувацького досвіду.",
      en: "Built and shipped multiple features for a SaaS platform from ideation to production. Worked closely with design team to create seamless user experiences.",
    },
    period: {
      ru: "2021 - 2023",
      uk: "2021 - 2023",
      en: "2021 - 2023",
    },
    type: "work",
    highlights: [
      {
        ru: "Запустил 20+ функций в production",
        uk: "Запустив 20+ функцій у production",
        en: "Shipped 20+ features to production",
      },
      {
        ru: "Построил систему совместной работы в реальном времени",
        uk: "Побудував систему спільної роботи в реальному часі",
        en: "Built real-time collaboration system",
      },
      {
        ru: "Оптимизировал размер бандла на 60%",
        uk: "Оптимізував розмір бандла на 60%",
        en: "Optimized bundle size by 60%",
      },
      {
        ru: "Внедрил автоматическое тестирование",
        uk: "Впровадив автоматичне тестування",
        en: "Implemented automated testing",
      },
    ],
  },
  {
    id: 3,
    role: {
      ru: "Фриланс-разработчик",
      uk: "Фріланс-розробник",
      en: "Freelance Developer",
    },
    company: {
      ru: "Самозанятый",
      uk: "Самозайнятий",
      en: "Self-Employed",
    },
    description: {
      ru: "Разрабатывал full-stack веб-приложения для различных клиентов. Специализировался на React/Next.js фронтендах с Node.js бэкендами и облачным деплоем.",
      uk: "Розробляв full-stack веб-застосунки для різних клієнтів. Спеціалізувався на React/Next.js фронтендах з Node.js бекендами та хмарним деплоєм.",
      en: "Delivered full-stack web applications for diverse clients. Specialized in React/Next.js frontends with Node.js backends and cloud deployment.",
    },
    period: {
      ru: "2019 - 2021",
      uk: "2019 - 2021",
      en: "2019 - 2021",
    },
    type: "freelance",
    highlights: [
      {
        ru: "Выполнил 15+ клиентских проектов",
        uk: "Виконав 15+ клієнтських проєктів",
        en: "Delivered 15+ client projects",
      },
      {
        ru: "Разработал e-commerce платформы",
        uk: "Розробив e-commerce платформи",
        en: "Built e-commerce platforms",
      },
      {
        ru: "Создал кастомные CMS-решения",
        uk: "Створив кастомні CMS-рішення",
        en: "Developed custom CMS solutions",
      },
      {
        ru: "Управлял облачной инфраструктурой",
        uk: "Керував хмарною інфраструктурою",
        en: "Managed cloud infrastructure",
      },
    ],
  },
  {
    id: 4,
    role: {
      ru: "Бакалавр компьютерных наук",
      uk: "Бакалавр комп'ютерних наук",
      en: "B.Sc. Computer Science",
    },
    company: {
      ru: "Технологический университет",
      uk: "Технологічний університет",
      en: "University of Technology",
    },
    description: {
      ru: "Специализировался на программной инженерии, алгоритмах и распределённых системах. Включён в список декана, проводил исследования в области веб-технологий.",
      uk: "Спеціалізувався на програмній інженерії, алгоритмах та розподілених системах. Включений до списку декана, проводив дослідження в галузі веб-технологій.",
      en: "Focused on software engineering, algorithms, and distributed systems. Dean's list recipient with research in web technologies.",
    },
    period: {
      ru: "2017 - 2021",
      uk: "2017 - 2021",
      en: "2017 - 2021",
    },
    type: "education",
    highlights: [
      {
        ru: "Включён в список декана",
        uk: "Включений до списку декана",
        en: "Dean's List recipient",
      },
      {
        ru: "Исследования в веб-технологиях",
        uk: "Дослідження у веб-технологіях",
        en: "Research in web technologies",
      },
      {
        ru: "Ассистент преподавателя 3 семестра",
        uk: "Асистент викладача 3 семестри",
        en: "Teaching assistant for 3 semesters",
      },
      {
        ru: "Победитель хакатонов",
        uk: "Переможець хакатонів",
        en: "Hackathon winner",
      },
    ],
  },
];
