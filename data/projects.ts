export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: { name: string; color: "primary" | "secondary" | "tertiary" | "neutral" }[];
  url: string;
  domain: string;
  image?: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sabina by Selly",
    description:
      "A boutique e-commerce experience designed for high-end fashion. Integrated real-time inventory management and seamless payment gateways with architectural elegance.",
    techStack: [
      { name: "Next.js", color: "primary" },
      { name: "Supabase", color: "secondary" },
      { name: "Midtrans", color: "tertiary" },
      { name: "Biteship", color: "neutral" },
    ],
    url: "https://sabinabyselly.com",
    domain: "sabinabyselly.com",
  },
  {
    id: 2,
    title: "Medina Invitation",
    description:
      "Revolutionizing digital event invitations. Focused on deep personalization and smooth animations that evoke the tactility of paper invitations in a digital world.",
    techStack: [
      { name: "Next.js", color: "primary" },
      { name: "Express.js", color: "secondary" },
      { name: "PostgreSQL", color: "tertiary" },
    ],
    url: "https://medinainvitation.com",
    domain: "medinainvitation.com",
  },
  {
    id: 3,
    title: "DriverDay.id",
    description:
      "A comprehensive driver management portal built to handle thousands of concurrent data streams. Performance was the primary feature, not just a goal.",
    techStack: [
      { name: "Next.js", color: "primary" },
      { name: "Tailwind", color: "neutral" },
    ],
    url: "https://driverday.id",
    domain: "driverday.id",
  },
  {
    id: 4,
    title: "Vote",
    description:
      "Real-time voting application with secure authentication and live data synchronization. Built to handle high-concurrency event polling.",
    techStack: [
      { name: "Next.js", color: "primary" },
      { name: "Express.js", color: "secondary" },
      { name: "PostgreSQL", color: "tertiary" },
    ],
    url: "https://count-votes-fe.vercel.app",
    domain: "count-votes-fe.vercel.app",
    icon: "Vote",
  },
];
