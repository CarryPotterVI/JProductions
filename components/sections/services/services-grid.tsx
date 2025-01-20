"use client";

import { Code, Layout, Search, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceCard } from "./service-card";

const services = [
  {
    icon: Layout,
    titleKey: 'services.webdesign',
    descriptionKey: 'services.webdesign.desc',
  },
  {
    icon: Code,
    titleKey: 'services.development',
    descriptionKey: 'services.development.desc',
  },
  {
    icon: Search,
    titleKey: 'services.seo',
    descriptionKey: 'services.seo.desc',
  },
  {
    icon: Smartphone,
    titleKey: 'services.support',
    descriptionKey: 'services.support.desc',
  },
];

export function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {services.map((service, index) => (
        <ServiceCard
          key={service.titleKey}
          icon={service.icon}
          title={t(service.titleKey)}
          description={t(service.descriptionKey)}
          index={index}
        />
      ))}
    </div>
  );
}