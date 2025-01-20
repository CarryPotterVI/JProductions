"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Sarah Schmidt",
    role: "Marketing Direktorin",
    company: "TechStart GmbH",
    content: "Jack hat unsere veraltete Website in eine moderne, responsive Plattform verwandelt. Seine Aufmerksamkeit für Details und das Verständnis unserer Bedürfnisse war außergewöhnlich.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Weber",
    role: "Gründer",
    company: "Digital Solutions",
    content: "Die Zusammenarbeit mit Jack war ein Vergnügen. Er hat nicht nur eine schöne Website geliefert, sondern auch wertvolle Einblicke zur Verbesserung unserer Benutzerfreundlichkeit gegeben.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Anna Müller",
    role: "E-Commerce Managerin",
    company: "Nordic Style",
    content: "Die Liebe zum Detail und der saubere Code haben uns beeindruckt. Jacks Expertise in React und Next.js hat uns geholfen, unsere Vision perfekt umzusetzen.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">{t('testimonials.title')}</h2>
          <p className="text-muted-foreground mb-12">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl bg-card p-6 shadow-lg hover:shadow-xl transition-shadow duration-300
                       before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-br 
                       before:from-orange-400/10 before:to-orange-600/10 before:opacity-50"
            >
              <Quote className="h-8 w-8 text-orange-500 mb-4" />
              
              <p className="text-muted-foreground mb-6">{testimonial.content}</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} bei {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}