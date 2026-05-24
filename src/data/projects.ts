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
    description: "AI-powered project management platform with real-time collaboration",
    longDescription:
      "A next-generation project management tool built with AI capabilities. Features intelligent task prioritization, automated workflow suggestions, and real-time team collaboration with WebSocket-powered updates.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Aether",
    description: "Design system and component library for modern web apps",
    longDescription:
      "A comprehensive design system featuring 50+ production-ready components with full accessibility support, dark mode, and customizable themes. Built with Radix UI primitives and styled with TailwindCSS.",
    image: "/placeholder.svg",
    tags: ["React", "Radix UI", "TailwindCSS", "Storybook"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Synthwave",
    description: "Real-time audio visualization and music collaboration platform",
    longDescription:
      "A real-time audio visualization platform that lets multiple users collaborate on music creation simultaneously. Features WebAudio API integration, MIDI support, and cloud-synced project files.",
    image: "/placeholder.svg",
    tags: ["Next.js", "WebAudio API", "WebSockets", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Orbit",
    description: "Analytics dashboard with interactive data visualization",
    longDescription:
      "A powerful analytics dashboard featuring interactive charts, real-time data streaming, and customizable reporting. Built with D3.js for visualizations and optimized for handling millions of data points.",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "Node.js", "Redis", "GraphQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
];
