"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PriceCard } from "./price-card";
import type { PricingTier } from "./types";

const tiers: PricingTier[] = [
  {
    name: "Einsteiger",
    priceRange: "ab 500€",
    description: "Perfekt für kleine Unternehmen, die eine professionelle Online-Präsenz benötigen",
    features: [
      "One-Page Website",
      "Responsives Design",
      "Kontaktformular",
      "Basis SEO-Einrichtung",
      "Mobile Optimierung",
      "2 Überarbeitungsrunden",
      "1 Monat Support",
      "Hosting-Einrichtung"
    ],
    timeEstimate: "1-2 Wochen"
  },
  {
    name: "Business",
    priceRange: "ab 1.200€",
    description: "Ideal für wachsende Unternehmen mit erweitertem Funktionsumfang",
    features: [
      "Bis zu 5 Seiten",
      "Alles aus dem Einsteiger-Paket",
      "Content Management System",
      "Blog-Integration (optional)",
      "Newsletter-Einrichtung",
      "Google Analytics",
      "3 Überarbeitungsrunden",
      "3 Monate Support"
    ],
    popular: true,
    timeEstimate: "2-3 Wochen"
  },
  {
    name: "Pro",
    priceRange: "ab 2.500€",
    description: "Maßgeschneiderte Lösung mit Spezialfunktionen für anspruchsvolle Projekte",
    features: [
      "Unbegrenzte Seiten",
      "Alles aus dem Business-Paket",
      "Individuelle Funktionen",
      "E-Commerce Integration möglich",
      "Erweiterte SEO-Optimierung",
      "Performance-Optimierung",
      "5 Überarbeitungsrunden",
      "6 Monate Support"
    ],
    timeEstimate: "4-8 Wochen"
  }
];

const additionalInfo = [
  {
    title: "Individuelle Projekte",
    description: "Benötigen Sie spezielle Funktionen wie ein Buchungssystem oder einen Online-Shop? Lassen Sie uns Ihre Anforderungen besprechen – ich erstelle Ihnen ein maßgeschneidertes Angebot."
  },
  {
    title: "Flexible Lösungen",
    description: "Alle Pakete können an Ihre individuellen Bedürfnisse angepasst werden. Der endgültige Preis wird nach einem ausführlichen Beratungsgespräch festgelegt."
  },
  {
    title: "Transparente Preise",
    description: "Die angegebenen Preise sind Startpreise. Der finale Preis hängt von Ihren spezifischen Anforderungen, dem Funktionsumfang und der Projektkomplexität ab."
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="container py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">Transparente Preise</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Klare Pakete als Orientierung, kombiniert mit der Flexibilität für individuelle Anforderungen.
            Jedes Projekt ist einzigartig – kontaktieren Sie mich für ein persönliches Angebot.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {tiers.map((tier, index) => (
            <PriceCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {additionalInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border p-6 bg-card/50"
            >
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}