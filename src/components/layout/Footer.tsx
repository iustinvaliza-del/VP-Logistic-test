import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navbar");
  const services = useTranslations("Services");
  const contact = useTranslations("Contact.info");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-gray-300">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-tight text-white">
                VP<span className="text-brand-accent"> Logistic</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">{t("description")}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {["home", "about", "services", "brands", "contact"].map((key) => (
                <li key={key}>
                  <a
                    href={`#${key === "home" ? "hero" : key === "brands" ? "products" : key}`}
                    className="text-sm hover:text-brand-accent transition-colors"
                  >
                    {nav(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("ourServices")}
            </h3>
            <ul className="space-y-2">
              {["wholesale", "logistics", "warehousing", "delivery", "coverage", "consulting"].map(
                (key) => (
                  <li key={key}>
                    <a
                      href="#services"
                      className="text-sm hover:text-brand-accent transition-colors"
                    >
                      {services(`${key}.title`)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-accent" />
                <span>{contact("address")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                <span>{contact("phone")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                <span>{contact("email")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 shrink-0 text-brand-accent" />
                <span>{contact("schedule")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm">
              &copy; {currentYear} {COMPANY.name}. {t("rights")}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-brand-accent transition-colors">
                {t("privacy")}
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors">
                {t("terms")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
