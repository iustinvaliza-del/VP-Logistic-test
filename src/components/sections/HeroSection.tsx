"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(232,160,32,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(232,160,32,0.05) 0%, transparent 50%), linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 50%, #111111 100%)",
      }}
    >
      {/* Particle Canvas */}
      <ParticleBackground />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl" />

      <Container className="relative z-10 text-center">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Company Name */}
          <motion.h1
            className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            VP Logistic
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">
              & Distribution
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="mb-4 text-lg text-gray-400 sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t("tagline")}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="mb-10 text-sm text-gray-500 sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#contact">
              <Button size="lg" className="shadow-lg shadow-brand-accent/20">
                {t("cta")}
              </Button>
            </a>
            <a href="#services">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30"
              >
                {t("secondaryCta")}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
}
