"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="container max-w-6xl mx-auto min-h-[100svh] flex flex-col items-center justify-center px-4 py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
        <div className="flex-1 flex flex-col items-center lg:items-start">
          {/* Greeting */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold sm:text-5xl lg:text-6xl inline-flex flex-wrap justify-center lg:justify-start gap-x-4 text-center lg:text-left"
          >
            <span>Hallo, ich bin</span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Jack
            </span>
          </motion.h1>

          {/* Profile Image (Mobile Only) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] rounded-full overflow-hidden border-4 border-orange-500/20 my-8 lg:hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Profile picture"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>

          {/* Introduction Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground text-center lg:text-left"
          >
            Ich bin Frontend-Entwickler mit über 2 Jahren Erfahrung und einer Leidenschaft für ästhetisches Design und innovative Technologien.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-muted-foreground text-center lg:text-left"
          >
            Von meinem Standort in Kiel aus unterstütze ich Kunden weltweit dabei, digitale Visionen Wirklichkeit werden zu lassen.
          </motion.p>

          {/* Mobile Portfolio Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 w-full sm:w-auto lg:hidden"
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
          </motion.div>

          {/* Mobile Contact Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 w-full sm:w-auto lg:hidden"
          >
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
            className="mt-6 hidden lg:flex gap-4"
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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
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