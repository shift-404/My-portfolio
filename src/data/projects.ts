export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nova",
    description: "Платформа управления проектами с ИИ и реальным временем",
    longDescription:
      "Инструмент управления проектами нового поколения на базе искусственного интеллекта. Включает интеллектуальную приоритизацию задач, автоматические рекомендации рабочих процессов и совместную работу в реальном времени через WebSocket.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Aether",
    description: "Дизайн-система и библиотека компонентов для современных веб-приложений",
    longDescription:
      "Комплексная дизайн-система с 50+ готовыми к production компонентами, полной поддержкой доступности, тёмной темой и настраиваемыми темами. Построена на примитивах Radix UI и стилизована с помощью TailwindCSS.",
    image: "/placeholder.svg",
    tags: ["React", "Radix UI", "TailwindCSS", "Storybook"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Synthwave",
    description: "Платформа визуализации аудио и совместного создания музыки",
    longDescription:
      "Платформа визуализации аудио в реальном времени, позволяющая нескольким пользователям одновременно collaborировать над созданием музыки. Включает интеграцию с WebAudio API, поддержку MIDI и облачную синхронизацию проектов.",
    image: "/placeholder.svg",
    tags: ["Next.js", "WebAudio API", "WebSockets", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Orbit",
    description: "Аналитическая панель с интерактивной визуализацией данных",
    longDescription:
      "Мощная аналитическая панель с интерактивными графиками, потоковой передачей данных в реальном времени и настраиваемой отчётностью. Построена на D3.js для визуализации и оптимизирована для обработки миллионов точек данных.",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "Node.js", "Redis", "GraphQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
];
