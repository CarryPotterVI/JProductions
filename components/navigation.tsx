"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { href: "/", label: "START" },
  { 
    href: "/services", 
    label: "LEISTUNGEN",
    subItems: [
      { href: "services", label: "Meine Leistungen" },
      { href: "process", label: "Entwicklungsprozess" },
      { href: "pricing", label: "Preise" },
    ]
  },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contact", label: "KONTAKT" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = (href: string) => {
    clearTimeout(closeTimeout);
    setActiveDropdown(href);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleSectionClick = async (sectionId: string) => {
    if (pathname !== "/services") {
      await router.push("/services");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-[1400px] flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium uppercase tracking-wider whitespace-nowrap">
            <span className="text-orange-500">J</span>P Productions
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.subItems && handleMouseEnter(item.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-block font-medium text-muted-foreground tracking-wider hover:text-orange-500",
                      pathname === item.href && "text-foreground",
                      "group"
                    )}
                  >
                    {item.label}
                    <span 
                      className="absolute bottom-[-5px] right-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-orange-600
                      transition-[width] duration-300 ease-out group-hover:w-full group-hover:left-0 group-hover:right-auto"
                    />
                  </Link>
                  
                  {item.subItems && activeDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-[calc(100%+5px)] py-2 bg-background border rounded-lg shadow-lg min-w-[200px]"
                    >
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.href}
                          onClick={() => handleSectionClick(subItem.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-orange-500 hover:bg-orange-500/5"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 pt-16 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center gap-6 p-8"
            >
              {menuItems.map((item) => (
                <div key={item.href} className="flex flex-col items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-2xl font-medium text-muted-foreground tracking-wider uppercase transition-colors hover:text-foreground",
                      pathname === item.href && "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  
                  {item.subItems && (
                    <div className="flex flex-col items-center gap-4 mt-4">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.href}
                          onClick={() => {
                            handleSectionClick(subItem.href);
                          }}
                          className="text-lg text-muted-foreground hover:text-orange-500"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}