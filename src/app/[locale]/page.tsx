import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StatsBar />
      <ServicesSection />
      <BrandsSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  );
}
