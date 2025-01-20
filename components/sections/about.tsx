"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Vite", level: 75 },
  { name: "PHP/Twig", level: 70 },
  { name: "MySQL/HeidiSQL", level: 75 },
  { name: "MongoDB", level: 70 },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold">Über Mich</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-muted-foreground"
          >
            Mit 36 Jahren bringe ich Begeisterung und Erfahrung in die Entwicklung moderner Webanwendungen ein. Meine technische Reise wird von einer tiefen Faszination für Künstliche Intelligenz, schönes Design und die sich ständig weiterentwickelnde Welt des Codes angetrieben.
          </motion.p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-card p-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <h4 className="text-lg font-medium">{skill.name}</h4>
                  <div className="mt-2 h-2 rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}