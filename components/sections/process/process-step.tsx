"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isEven: boolean;
}

export function ProcessStep({ icon: Icon, title, description, index, isEven }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col ${
        isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-3 lg:gap-6`}
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:block">
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
      </div>

      <div className={`flex-1 ${isEven ? '' : 'lg:text-right'}`}>
        <div className="relative group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-400/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-1 rounded-lg border border-border bg-card p-3 shadow-lg">
            <div className={`flex items-center gap-2 ${
              isEven ? '' : 'lg:flex-row-reverse'
            }`}>
              <div className="rounded-lg bg-orange-500/10 p-1.5">
                <Icon className="h-4 w-4 text-orange-500" />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
}