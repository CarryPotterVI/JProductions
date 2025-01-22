"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Auto Werkstatt Website",
    description: "Eine moderne One-Page Website für eine Autowerkstatt mit übersichtlichem Design, Serviceliste und Kontaktintegration. Entwickelt mit responsivem Design und für lokale SEO optimiert.",
    category: "ONE-PAGER",
    image: "/images/tetik.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://auto-tetik-kiel.de"
  },
  {
    title: "B2B Shop Plattform",
    description: "Mitwirkung an der Entwicklung und Verbesserung der B2B-Shop-Plattform von Bartels & Langness. Implementierung neuer Funktionen, Optimierung des Einkaufserlebnisses und Wartung des Codes mit Shopware 5.",
    category: "E-COMMERCE",
    image: "/images/b2bshop.png",
    technologies: ["PHP", "Shopware 5", "Twig", "jQuery"],
    link: "https://b2b-shop.bela.de"
  },
  {
    title: "Diverse Kollaborationen",
    description: "Beteiligung an mehreren Entwicklungsprojekten, Beitrag zu Frontend-Implementierungen, Fehlerbehebungen und Funktionserweiterungen auf verschiedenen Plattformen.",
    category: "ENTWICKLUNG",
    image: "/images/concept.png",
    technologies: ["JavaScript", "React", "Node.js"],
    link: "#"
  }
];

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-24">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`flex flex-col gap-12 lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Container */}
          <div className="relative flex-1 overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-1 flex-col justify-center gap-6 lg:px-8">
            <span className="inline-block w-fit rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-600 dark:bg-orange-500/10 dark:text-orange-500">
              {project.category}
            </span>
            
            <h3 className="text-2xl font-bold sm:text-3xl">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-orange-500/10 text-orange-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Projekt ansehen
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}