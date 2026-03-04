"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Star, Users, Zap } from "lucide-react";

const VALUES_ICONS = {
  reliability: Shield,
  quality: Star,
  partnership: Users,
  efficiency: Zap,
} as const;

export function AboutSection() {
  const t = useTranslations("About");

  const values = ["reliability", "quality", "partnership", "efficiency"] as const;

  return (
    <SectionWrapper id="about" variant="white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("sectionTitle")}
            subtitle={t("sectionSubtitle")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <ScrollReveal direction="left">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-brand-muted">
                {t("description")}
              </p>

              <h3 className="mb-3 text-xl font-semibold text-brand-primary">
                {t("missionTitle")}
              </h3>
              <p className="text-brand-muted leading-relaxed">
                {t("mission")}
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Values Grid */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-brand-primary">
                {t("valuesTitle")}
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {values.map((value, i) => {
                  const Icon = VALUES_ICONS[value];
                  return (
                    <ScrollReveal key={value} delay={i * 0.1}>
                      <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-brand-accent/30 hover:shadow-md">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5">
                          <Icon className="h-5 w-5 text-brand-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-primary">
                            {t(`values.${value}`)}
                          </h4>
                          <p className="text-sm text-brand-muted">
                            {t(`values.${value}Desc`)}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
