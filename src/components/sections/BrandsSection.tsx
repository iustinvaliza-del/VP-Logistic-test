"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BRAND_CATEGORIES } from "@/lib/constants";
import {
  Wine,
  GlassWater,
  Beer,
  CupSoda,
  Droplets,
  Citrus,
} from "lucide-react";

const ICON_MAP = {
  Wine,
  GlassWater,
  Beer,
  CupSoda,
  Droplets,
  Citrus,
} as const;

export function BrandsSection() {
  const t = useTranslations("Brands");

  return (
    <SectionWrapper id="products" variant="white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("sectionTitle")}
            subtitle={t("sectionSubtitle")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {BRAND_CATEGORIES.map((category, i) => {
            const Icon = ICON_MAP[category.icon];
            return (
              <ScrollReveal key={category.key} delay={i * 0.08}>
                <Card className="text-center p-6 group">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-brand-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-primary">
                    {t(`categories.${category.key}`)}
                  </h3>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
