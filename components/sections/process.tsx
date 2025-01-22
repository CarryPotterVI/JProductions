"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Search, Settings, Users } from "lucide-react";

const processes = [
  {
    icon: Search,
    title: "Analyse",
    description: "Detaillierte Analyse Ihrer Anforderungen und Projektziele."
  },
  {
    icon: Lightbulb,
    title: "Konzeption",
    description: "Entwicklung der optimalen Strategie und Technologieauswahl."
  },
  {
    icon: Code2,
    title: "Entwicklung",
    description: "Umsetzung mit modernen Technologien und regelmäßigen Updates."
  },
  {
    icon: Settings,
    title: "Testing",
    description: "Gründliche Tests auf allen Geräten und Browsern."
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Optimierte Veröffentlichung nach finaler Abstimmung."
  },
  {
    icon: Users,
    title: "Support",
    description: "Zuverlässige Wartung und Support nach dem Launch."
  }
];

export function Process() {
  return (
    <section id="process" className="container py-16 relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl animate-pulse" />
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl animate-pulse delay-700" />
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">
            Entwicklungs-<br />prozess
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ein strukturierter Ansatz für erfolgreiche Projekte
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange-400/50 to-orange-600/50 hidden lg:block" />

          <div className="space-y-8 lg:space-y-16">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 lg:gap-12`}
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:block">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
                </div>

                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative rounded-xl border border-border bg-card p-4 lg:p-6 shadow-lg">
                      <div className={`flex items-center gap-3 ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <div className="rounded-lg bg-orange-500/10 p-2">
                          <process.icon className="h-5 w-5 text-orange-500" />
                        </div>
                        <h3 className="text-lg font-semibold">{process.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{process.description}</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}