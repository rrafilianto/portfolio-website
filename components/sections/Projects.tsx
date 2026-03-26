"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Vote, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

const projectConfig = [
  {
    id: 1,
    techStack: [
      { name: "Next.js", color: "primary" as const },
      { name: "Supabase", color: "secondary" as const },
      { name: "Midtrans", color: "tertiary" as const },
      { name: "Biteship", color: "neutral" as const },
    ],
    url: "https://sabinabyselly.com",
    domain: "sabinabyselly.com",
    icon: null,
  },
  {
    id: 2,
    techStack: [
      { name: "Next.js", color: "primary" as const },
      { name: "Express.js", color: "secondary" as const },
      { name: "PostgreSQL", color: "tertiary" as const },
    ],
    url: "https://medinainvitation.com",
    domain: "medinainvitation.com",
    icon: null,
  },
  {
    id: 3,
    techStack: [
      { name: "Next.js", color: "primary" as const },
      { name: "Express.js", color: "secondary" as const },
      { name: "PostgreSQL", color: "tertiary" as const },
    ],
    url: "https://count-votes-fe.vercel.app",
    domain: "count-votes-fe.vercel.app",
    icon: "Vote",
  },
  {
    id: 4,
    techStack: [
      { name: "Next.js", color: "primary" as const },
    ],
    url: "https://driverday.id",
    domain: "driverday.id",
    icon: null,
  },
  {
    id: 5,
    techStack: [
      { name: "React Native", color: "primary" as const },
    ],
    url: null,
    domain: null,
    icon: "Smartphone",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
  tertiary: "bg-tertiary/10 text-tertiary border-tertiary/20",
  neutral: "bg-black/5 dark:bg-white/5 text-gray-700 dark:text-white/60 border-black/15 dark:border-white/10",
};

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-headline text-4xl md:text-5xl font-bold">
          {t("title")}
        </h2>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projectConfig.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="project-card group rounded-3xl overflow-hidden flex flex-col h-full"
          >
            {/* Image / Icon Area */}
            <div className="relative aspect-video overflow-hidden dark:bg-surface-container bg-gray-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
              {project.icon === "Vote" ? (
                <Vote className="w-20 h-20 text-primary/60 dark:text-primary/20 group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <span className="text-5xl font-headline font-bold gradient-text bg-gradient-to-br from-primary to-secondary dark:from-primary/40 dark:to-secondary/30 group-hover:scale-110 transition-transform duration-500">
                  {t(`items.${project.id}.title`).charAt(0)}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t dark:from-surface/80 from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest border ${colorClasses[tech.color]}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <h3 className="font-headline text-2xl font-bold mb-4 dark:text-white text-gray-900">
                {t(`items.${project.id}.title`)}
              </h3>
              <div className="dark:text-on-surface-variant text-gray-500 md:text-sm leading-relaxed mb-8 flex-grow">
                <ul className="list-disc list-outside ml-4 space-y-1">
                  {(t.raw(`items.${project.id}.description`) as string[]).map((point, i) => (
                    <li key={i} className="pl-1">{point}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t dark:border-white/5 border-black/5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                {project.url && project.url !== "#" ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 dark:text-white text-gray-900 font-bold group/link transition-colors whitespace-nowrap"
                  >
                    <span className="hover:text-primary transition-colors">
                      {t("launchProject")}
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <div />
                )}
                {project.domain && (
                  <span className="text-xs dark:text-white/30 text-black/40 font-mono truncate max-w-full">
                    {project.domain}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
