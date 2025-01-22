"use client";

import { DivideIcon as LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-background/95 p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm 
                hover:border-orange-500/40 hover:bg-white/20 dark:bg-black/40"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative space-y-6">
        <Icon className="h-10 w-10 text-orange-500" />
        <h2 className="text-2xl font-semibold uppercase tracking-wide">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="absolute -right-4 -top-4 h-32 w-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 blur-3xl" />
    </motion.div>
  );
}