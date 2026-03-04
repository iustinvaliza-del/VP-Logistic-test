"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import {
  Truck,
  Route,
  Warehouse,
  PackageCheck,
  MapPin,
  Handshake,
} from "lucide-react";

const ICON_MAP = {
  Truck,
  Route,
  Warehouse,
  PackageCheck,
  MapPin,
  Handshake,
} as const;

export function ServicesSection() {
  const t = useTranslations("Services");

  return (
    <SectionWrapper id="services" variant="light">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("sectionTitle")}
            subtitle={t("sectionSubtitle")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <ScrollReveal key={service.key} delay={i * 0.1}>
                <Card className="h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 mb-5">
                    <Icon className="h-7 w-7 text-brand-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-brand-primary">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {t(`${service.key}.description`)}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
