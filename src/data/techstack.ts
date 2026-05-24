export interface TechItem {
  name: string;
  icon: string;
  category: TechCategory;
}

export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools";

export interface TechCategoryGroup {
  category: TechCategory;
  label: string;
  items: TechItem[];
}

export const techStack: TechCategoryGroup[] = [
  {
    category: "frontend",
    label: "Фронтенд",
    items: [
      { name: "React", icon: "⚛️", category: "frontend" },
      { name: "Next.js", icon: "▲", category: "frontend" },
      { name: "TypeScript", icon: "📘", category: "frontend" },
      { name: "TailwindCSS", icon: "🎨", category: "frontend" },
      { name: "Framer Motion", icon: "✨", category: "frontend" },
      { name: "Vue.js", icon: "💚", category: "frontend" },
    ],
  },
  {
    category: "backend",
    label: "Бэкенд",
    items: [
      { name: "Node.js", icon: "🟢", category: "backend" },
      { name: "Python", icon: "🐍", category: "backend" },
      { name: "Go", icon: "🔵", category: "backend" },
      { name: "GraphQL", icon: "◈", category: "backend" },
      { name: "REST APIs", icon: "🔗", category: "backend" },
      { name: "tRPC", icon: "⚡", category: "backend" },
    ],
  },
  {
    category: "database",
    label: "Базы данных",
    items: [
      { name: "PostgreSQL", icon: "🐘", category: "database" },
      { name: "MongoDB", icon: "🍃", category: "database" },
      { name: "Redis", icon: "🔴", category: "database" },
      { name: "Prisma", icon: "🗄️", category: "database" },
      { name: "Supabase", icon: "🔥", category: "database" },
    ],
  },
  {
    category: "devops",
    label: "DevOps",
    items: [
      { name: "Docker", icon: "🐳", category: "devops" },
      { name: "AWS", icon: "☁️", category: "devops" },
      { name: "Vercel", icon: "▲", category: "devops" },
      { name: "GitHub Actions", icon: "🤖", category: "devops" },
      { name: "Linux", icon: "🐧", category: "devops" },
    ],
  },
  {
    category: "tools",
    label: "Инструменты",
    items: [
      { name: "VS Code", icon: "💻", category: "tools" },
      { name: "Figma", icon: "🖌️", category: "tools" },
      { name: "Git", icon: "🔀", category: "tools" },
      { name: "Linear", icon: "📋", category: "tools" },
      { name: "Notion", icon: "📝", category: "tools" },
    ],
  },
];
