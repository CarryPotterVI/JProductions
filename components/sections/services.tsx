"use client";

import { Code, Layout, Search, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Design",
    description: "Creating beautiful, responsive websites that provide an exceptional user experience across all devices."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust web applications using modern technologies and best practices."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving your website's visibility in search engines to reach more customers."
  },
  {
    icon: Smartphone,
    title: "Technical Support",
    description: "Expert assistance and maintenance for your existing web projects."
  }
];

export function Services() {
  return (
    <section id="services" className="relative min-h-[50vh] overflow-hidden py-24">
      <div className="fixed inset-0 bg-gradient-to-br from-orange-400/30 via-background/50 to-orange-600/30" />
      
      <div className="container max-w-6xl mx-auto relative">
        <h1 className="mb-16 text-center text-4xl font-bold uppercase tracking-wider">My Services</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/20 bg-background/95 p-8 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm 
                        hover:border-orange-500/40 hover:bg-white/20 dark:bg-black/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <service.icon className="mb-4 h-8 w-8 text-orange-500" />
                <h2 className="mb-4 text-2xl font-semibold uppercase tracking-wide">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <div className="absolute -right-4 -top-4 h-32 w-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 blur-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}