"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PricingTier } from "./types";

interface PriceCardProps {
  tier: PricingTier;
  index: number;
}

export function PriceCard({ tier, index }: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative rounded-xl bg-card p-8 shadow-lg hover:shadow-xl transition-all duration-300
                ${tier.popular ? 'border-2 border-orange-500' : 'border border-border'}
                before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-br 
                before:from-orange-400/10 before:to-orange-600/10 before:opacity-0 hover:before:opacity-100
                before:transition-opacity`}
    >
      {tier.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 px-4 py-1 text-sm font-medium text-white">
          Meistgewählt
        </span>
      )}

      <div className="text-center">
        <h3 className="text-xl font-bold">{tier.name}</h3>
        <div className="mt-4 flex items-baseline justify-center gap-2">
          <span className="text-3xl font-bold">{tier.priceRange}</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
      </div>

      <ul className="mt-8 space-y-4">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className="mt-8 w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
        asChild
      >
        <Link href="/contact">Jetzt anfragen</Link>
      </Button>

      <p className="mt-4 text-xs text-center text-muted-foreground">
        Geschätzte Projektdauer: {tier.timeEstimate}
      </p>
    </motion.div>
  );
}