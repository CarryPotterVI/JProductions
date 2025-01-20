"use client";

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de' | 'es';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    'nav.home': 'HOME',
    'nav.services': 'SERVICES',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTACT',
    'hero.greeting': "Hi, I'm",
    'hero.role': "I'm a Freelance Frontend Developer with over 2 years of experience",
    'hero.description': "Creating modern web experiences for clients worldwide from Kiel, Germany.",
    'hero.portfolio': "View Portfolio",
    'hero.contact': "Contact Me",
    'about.title': "About Me",
    'about.description': "At 36, I'm a passionate developer with 2 years of professional experience in creating modern web applications. My journey in tech is driven by a deep fascination with AI, beautiful design, and the ever-evolving world of code.",
    'testimonials.title': "Client Testimonials",
    'testimonials.subtitle': "What clients say about working with me",
    'services.title': "My Services",
    'services.webdesign': "Web Design",
    'services.webdesign.desc': "Creating beautiful, responsive websites that provide an exceptional user experience across all devices.",
    'services.development': "Web Development",
    'services.development.desc': "Building robust web applications using modern technologies and best practices.",
    'services.seo': "SEO Optimization",
    'services.seo.desc': "Improving your website's visibility in search engines to reach more customers.",
    'services.support': "Technical Support",
    'services.support.desc': "Expert assistance and maintenance for your existing web projects.",
    'contact.title': "Get in Touch",
    'contact.subtitle': "Have a project in mind? Let's work together to create something amazing.",
    'footer.quicklinks': "Quick Links",
    'footer.contact': "Contact"
  },
  de: {
    'nav.home': 'START',
    'nav.services': 'LEISTUNGEN',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'KONTAKT',
    'hero.greeting': "Hallo, ich bin",
    'hero.role': "Ich bin Frontend-Entwickler mit über 2 Jahren Erfahrung",
    'hero.description': "Ich entwickle moderne Weberlebnisse für Kunden weltweit von Kiel aus.",
    'hero.portfolio': "Portfolio ansehen",
    'hero.contact': "Kontakt aufnehmen",
    'about.title': "Über Mich",
    'about.description': "Mit 36 Jahren bin ich ein leidenschaftlicher Entwickler mit 2 Jahren Berufserfahrung in der Entwicklung moderner Webanwendungen. Meine technische Reise wird von einer tiefen Faszination für KI, schönes Design und die sich ständig weiterentwickelnde Welt des Codes angetrieben.",
    'testimonials.title': "Kundenstimmen",
    'testimonials.subtitle': "Was meine Kunden über die Zusammenarbeit sagen",
    'services.title': "Meine Leistungen",
    'services.webdesign': "Webdesign",
    'services.webdesign.desc': "Erstellung schöner, responsiver Websites, die ein außergewöhnliches Benutzererlebnis auf allen Geräten bieten.",
    'services.development': "Webentwicklung",
    'services.development.desc': "Entwicklung robuster Webanwendungen mit modernen Technologien und Best Practices.",
    'services.seo': "SEO-Optimierung",
    'services.seo.desc': "Verbesserung der Sichtbarkeit Ihrer Website in Suchmaschinen, um mehr Kunden zu erreichen.",
    'services.support': "Technischer Support",
    'services.support.desc': "Professionelle Unterstützung und Wartung für Ihre bestehenden Webprojekte.",
    'contact.title': "Kontakt aufnehmen",
    'contact.subtitle': "Haben Sie ein Projekt im Sinn? Lassen Sie uns gemeinsam etwas Großartiges erschaffen.",
    'footer.quicklinks': "Schnellzugriff",
    'footer.contact': "Kontakt"
  },
  es: {
    // ... (keeping Spanish translations as they were)
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de'); // Set default to German

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['de']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}