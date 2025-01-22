"use client";

import { Code, Layout, Search, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceCard } from "./service-card";

const services = [
  {
    icon: Layout,
    title: "Webdesign",
    description: "Entwicklung moderner, responsiver Websites mit außergewöhnlichem Benutzererlebnis auf allen Geräten. Jedes Design wird individuell auf Ihre Bedürfnisse zugeschnitten.",
  },
  {
    icon: Code,
    title: "Webentwicklung",
    description: "Umsetzung robuster Webanwendungen mit modernsten Technologien wie React, Next.js und Tailwind CSS. Performance und Benutzerfreundlichkeit stehen dabei im Fokus.",
  },
  {
    icon: Search,
    title: "SEO Optimierung",
    description: "Verbesserung der Sichtbarkeit Ihrer Website in Suchmaschinen durch technische Optimierung und Content-Strategien, um mehr potenzielle Kunden zu erreichen.",
  },
  {
    icon: Smartphone,
    title: "Support & Wartung",
    description: "Professionelle Unterstützung und kontinuierliche Wartung Ihrer Webprojekte. Regelmäßige Updates und schnelle Hilfe bei technischen Fragen.",
  },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          index={index}
        />
      ))}
    </div>
  );
}