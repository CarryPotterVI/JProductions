"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Search, Settings, Users } from "lucide-react";

const processes = [
  {
    icon: Search,
    title: "Analyse",
    description: "Verstehen Ihrer Bedürfnisse, Ziele und Projektanforderungen durch detaillierte Beratung."
  },
  {
    icon: Lightbulb,
    title: "Planung",
    description: "Entwicklung einer umfassenden Strategie und Auswahl der besten Technologien für Ihr Projekt."
  },
  {
    icon: Code2,
    title: "Entwicklung",
    description: "Entwicklung von sauberem, effizientem Code mit regelmäßiger Kommunikation und Updates."
  },
  {
    icon: Settings,
    title: "Testing",
    description: "Gründliche Tests auf allen Geräten und Browsern zur Sicherstellung perfekter Funktionalität."
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launch Ihres Projekts mit Optimierung für Leistung und Suchmaschinen."
  },
  {
    icon: Users,
    title: "Support",
    description: "Bereitstellung von kontinuierlicher Wartung und Support für den reibungslosen Betrieb."
  }
];

export function Process() {
  return (
    <section id="process" className="container py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl animate-pulse" />
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl animate-pulse delay-700" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">Entwicklungsprozess</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ein strukturierter Ansatz, um Ihre Ideen zum Leben zu erwecken und Qualität in jedem Schritt zu gewährleisten
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange-400/50 to-orange-600/50 hidden lg:block" />

          <div className="space-y-14 lg:space-y-14">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16`}
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:block">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
                </div>

                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative space-y-4 rounded-xl border border-border bg-card p-6 shadow-lg">
                      <div className={`flex items-center gap-4 ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <div className="rounded-lg bg-orange-500/10 p-3">
                          <process.icon className="h-6 w-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold">{process.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{process.description}</p>
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