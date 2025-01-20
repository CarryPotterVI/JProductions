"use client";

import { Code2, Lightbulb, Rocket, Search, Settings, Users } from "lucide-react";
import { ProcessStep } from "./process-step";

const processes = [
  {
    icon: Search,
    title: "Analyse",
    description: "Analyse Ihrer Anforderungen und Projektziele"
  },
  {
    icon: Lightbulb,
    title: "Konzeption",
    description: "Entwicklung der optimalen Strategie und Technologieauswahl"
  },
  {
    icon: Code2,
    title: "Entwicklung",
    description: "Effiziente Umsetzung mit regelmäßigen Updates"
  },
  {
    icon: Settings,
    title: "Qualität",
    description: "Umfassende Tests auf allen Geräten"
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Optimierte Veröffentlichung Ihres Projekts"
  },
  {
    icon: Users,
    title: "Support",
    description: "Kontinuierliche Wartung und Betreuung"
  }
];

export function Process() {
  return (
    <section id="process" className="container py-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl animate-pulse" />
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl animate-pulse delay-700" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-2">Entwicklungsprozess</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strukturierter Ansatz für maximale Qualität und Effizienz
          </p>
        </div>

        <div className="relative mt-8">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange-400/50 to-orange-600/50 hidden lg:block" />

          <div className="space-y-4 lg:space-y-8">
            {processes.map((process, index) => (
              <ProcessStep
                key={process.title}
                icon={process.icon}
                title={process.title}
                description={process.description}
                index={index}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}