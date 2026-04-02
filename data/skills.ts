export interface Skill {
  name: string;
  icon: string;
  invertDark?: boolean;
}

export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  color: "primary" | "secondary" | "tertiary";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    icon: "Globe",
    color: "primary",
    skills: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", invertDark: true },
      { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
      { name: "Angular", icon: "https://cdn.simpleicons.org/angular" },
      { name: "Backbone.js", icon: "https://cdn.simpleicons.org/backbonedotjs" },
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    ],
  },
  {
    id: 2,
    title: "Languages",
    icon: "Code",
    color: "secondary",
    skills: [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
    ],
  },
  {
    id: 3,
    title: "Backend",
    icon: "Server",
    color: "tertiary",
    skills: [
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express", invertDark: true },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
    ],
  },
  {
    id: 4,
    title: "Database",
    icon: "Database",
    color: "secondary",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
    ],
  },
  {
    id: 5,
    title: "Mobile",
    icon: "Smartphone",
    color: "primary",
    skills: [
      { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
    ],
  },
];
