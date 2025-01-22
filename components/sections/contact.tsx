"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/CarryPotterVI",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jackpolanco-v",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:jack.polanco.v@gmail.com",
    label: "E-Mail",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xjkknrew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Nachricht konnte nicht gesendet werden');
      }

      toast.success("Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.");
      form.reset();
    } catch (error: any) {
      console.error('Fehler beim Senden der E-Mail:', error);
      toast.error(error?.message || "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt per E-Mail.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="container relative min-h-screen py-24 px-6 sm:px-8">
      <div className="fixed inset-0 bg-gradient-to-br from-orange-400/5 via-background to-orange-600/5 -z-10" />
      
      <div className="fixed inset-0 opacity-30 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-orange-600/20 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-400/10 via-transparent to-orange-600/10 animate-pulse delay-700" />
      </div>

      <div className="mx-auto max-w-3xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-wider">{t('contact.title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="mb-16 flex justify-center gap-8">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              asChild
              className="h-14 w-14 rounded-full hover:bg-orange-500/10 hover:text-orange-500 transition-colors duration-300"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-7 w-7" />
              </a>
            </Button>
          ))}
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative space-y-8 rounded-2xl bg-background/40 backdrop-blur-md p-8 lg:p-10 shadow-[0_0_15px_rgba(249,115,22,0.1)] border border-orange-500/20 
                     before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-br before:from-orange-400/10 before:to-orange-600/10 before:opacity-50"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Max Mustermann" 
                      {...field}
                      className="bg-background/50 backdrop-blur-sm border-orange-500/20 focus:border-orange-500/40 transition-colors text-base py-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">E-Mail</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="max@beispiel.de" 
                      {...field}
                      className="bg-background/50 backdrop-blur-sm border-orange-500/20 focus:border-orange-500/40 transition-colors text-base py-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Nachricht</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ihre Nachricht hier..."
                      className="min-h-[160px] bg-background/50 backdrop-blur-sm border-orange-500/20 focus:border-orange-500/40 transition-colors text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base py-6"
            >
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}