export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  side: "left" | "right";
  color: "primary" | "secondary";
  opacity: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "PT SiCepat Express Indonesia",
    period: "2020 — 2025",
    description:
      "Leading the migration of core logistics dashboards to micro-frontends, improving deployment speeds by 40% and enhancing UX for millions of parcel tracking interactions.",
    side: "left",
    color: "primary",
    opacity: "opacity-100",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "PT Bank Amar Indonesia Tbk",
    period: "2018 — 2020",
    description:
      "Architected secure digital banking components using Next.js and specialized in rigorous performance optimization for fintech mobile-web apps.",
    side: "right",
    color: "secondary",
    opacity: "opacity-80",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    company: "PT Astra Graphia IT",
    period: "2017 — 2018",
    description:
      "Developed enterprise-grade ERP modules with a focus on data visualization and complex form handling.",
    side: "left",
    color: "primary",
    opacity: "opacity-60",
  },
  {
    id: 4,
    title: "Helpdesk Provisioning",
    company: "PT Telkom Akses",
    period: "2016 — 2017",
    description:
      "First technical role ensuring network reliability and customer satisfaction for telecommunication infrastructure.",
    side: "right",
    color: "secondary",
    opacity: "opacity-40",
  },
];
