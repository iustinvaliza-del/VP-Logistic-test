"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
}

function StatItem({ value, suffix = "", label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const t = useTranslations("Stats");
  const yearsInBusiness = new Date().getFullYear() - COMPANY.founded;

  return (
    <section
      className="py-16 lg:py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #111111 100%)",
      }}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <StatItem value={yearsInBusiness} suffix="+" label={t("years")} />
          <StatItem value={COMPANY.employees} label={t("employees")} />
          <StatItem value={COMPANY.locations} label={t("locations")} />
          <StatItem
            value={COMPANY.productsDistributed}
            suffix="+"
            label={t("brands")}
          />
        </div>
      </Container>
    </section>
  );
}
