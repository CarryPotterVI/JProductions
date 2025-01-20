"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Start", href: "/" },
      { name: "Leistungen", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Kontakt", href: "/contact" },
    ],
    social: [
      { name: "GitHub", icon: Github, href: "https://github.com" },
      { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
      { name: "E-Mail", icon: Mail, href: "mailto:jack.polanco.v@gmail.com" },
    ],
  };

  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold uppercase tracking-wider">
              <span className="text-orange-500">J</span>P Productions
            </Link>
            <p className="text-sm text-muted-foreground">
              Entwicklung außergewöhnlicher digitaler Erlebnisse durch innovative Webentwicklung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Schnellzugriff
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Kontakt
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-orange-500" />
                <span>Kiel, Schleswig-Holstein, Deutschland</span>
              </div>
              <div className="flex gap-4">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-orange-500 transition-colors duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} JP Productions. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;