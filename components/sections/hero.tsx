"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const highlights = [
  {
    icon: Code2,
    label: "2+ Jahre Erfahrung",
    value: "Frontend Entwicklung"
  },
  {
    icon: Briefcase,
    label: "10+ Projekte",
    value: "Erfolgreich abgeschlossen"
  },
  {
    icon: GraduationCap,
    label: "Kontinuierliches Lernen",
    value: "Neue Technologien"
  }
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="container max-w-6xl mx-auto min-h-[100svh] flex flex-col items-center justify-center px-4 py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
        <div className="flex-1 flex flex-col items-center lg:items-start">
          {/* Greeting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl inline-flex flex-wrap justify-center lg:justify-start gap-x-4">
              <span>Hallo, ich bin</span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Jack
              </span>
            </h1>
              {/* <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-orange-500/10 text-orange-500">
                Frontend Entwickler
              </span> */}
          </motion.div>

          {/* Profile Image (Mobile Only) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] rounded-full overflow-hidden border-4 border-orange-500/20 my-8 lg:hidden"
          >
            <Image
              src="/images/JackProfile.jpg"
              alt="Profile picture"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>

          {/* Introduction Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-center lg:text-left"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
              Ich bin Frontend-Entwickler mit einer Leidenschaft für ästhetisches Design und innovative Technologien.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground">
              Von meinem Standort in Kiel aus unterstütze ich Kunden dabei, digitale Visionen Wirklichkeit werden zu lassen.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8"
          >
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-orange-500/40 transition-colors duration-300"
              >
                <div className="rounded-lg bg-orange-500/10 p-2">
                  <item.icon className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 w-full sm:w-auto lg:hidden space-y-4"
          >
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/portfolio">
                Portfolio ansehen <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-orange-500 text-orange-500 hover:bg-orange-500/10 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                Kontakt
              </Link>
            </Button>
          </motion.div>

          {/* Desktop Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 hidden lg:flex gap-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/portfolio">
                Portfolio ansehen <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500/10 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                Kontakt
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Desktop Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative hidden lg:block flex-1 aspect-square w-full max-w-[400px] rounded-full overflow-hidden border-4 border-orange-500/20"
        >
          <Image
             src="\images\JackProfile.jpg"
            alt="Profile picture"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}