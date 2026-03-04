"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "brands", href: "#products" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const showDarkText = scrolled || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          showDarkText
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 flex-shrink-0">
              <span
                className={cn(
                  "text-xl font-bold tracking-tight transition-colors",
                  showDarkText ? "text-brand-primary" : "text-white"
                )}
              >
                VP
                <span className="text-brand-accent"> Logistic</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-accent",
                    showDarkText ? "text-brand-primary" : "text-white/90"
                  )}
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <a href="#contact">
                <Button size="sm">{t("cta")}</Button>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 cursor-pointer relative z-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-brand-primary" />
              ) : (
                <Menu
                  className={cn(
                    "h-6 w-6",
                    showDarkText ? "text-brand-primary" : "text-white"
                  )}
                />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-white"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center gap-8 h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-xl font-medium text-brand-primary hover:text-brand-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <div className="mt-2">
              <LanguageSwitcher />
            </div>
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <Button size="lg">{t("cta")}</Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
