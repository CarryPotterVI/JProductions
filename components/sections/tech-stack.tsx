"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Database,
  Globe,
  Layout,
  Palette,
  Server,
} from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "PHP", "REST APIs"],
  },
  {
    category: "Datenbanken",
    icon: Database,
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "UI/UX",
    icon: Palette,
    items: ["Figma", "Adobe XD", "Responsive Design", "Accessibility"],
  },
  {
    category: "Tools",
    icon: Braces,
    items: ["Git", "Docker", "VS Code", "Webpack"],
  },
  {
    category: "CMS",
    icon: Globe,
    items: ["WordPress", "Shopware", "Contentful", "Strapi"],
  },
];

export function TechStack() {
  return (
    <section className="w-full py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">Tech Stack</h2>
          <p className="text-muted-foreground">
            Meine bevorzugten Technologien und Tools
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-orange-500/40 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-orange-500/10 p-2">
                    <tech.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold">{tech.category}</h3>
                </div>

                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}