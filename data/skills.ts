export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  color: "primary" | "secondary" | "tertiary";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    icon: "Globe",
    color: "primary",
    skills: ["Next.js", "React.js", "Angular", "Backbone.js", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Languages",
    icon: "Code",
    color: "secondary",
    skills: ["JavaScript", "TypeScript", "PHP"],
  },
  {
    id: 3,
    title: "Mobile",
    icon: "Smartphone",
    color: "tertiary",
    skills: ["React Native"],
  },
];
