"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export function ContactSection() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20";

  return (
    <SectionWrapper id="contact" variant="light">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("sectionTitle")}
            subtitle={t("sectionSubtitle")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 lg:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-primary">
                      {t("form.name")} *
                    </label>
                    <input
                      {...register("name")}
                      className={inputClass}
                      placeholder={t("form.name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-primary">
                      {t("form.email")} *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className={inputClass}
                      placeholder={t("form.email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-primary">
                      {t("form.phone")}
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className={inputClass}
                      placeholder={t("form.phone")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-primary">
                      {t("form.company")}
                    </label>
                    <input
                      {...register("company")}
                      className={inputClass}
                      placeholder={t("form.company")}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-brand-primary">
                    {t("form.message")} *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder={t("form.message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    t("form.sending")
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t("form.submit")}
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm text-green-700">
                    <CheckCircle className="h-4 w-4" />
                    {t("form.success")}
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4" />
                    {t("form.error")}
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  { icon: MapPin, labelKey: "addressLabel", valueKey: "address" },
                  { icon: Phone, labelKey: "phoneLabel", valueKey: "phone" },
                  { icon: Mail, labelKey: "emailLabel", valueKey: "email" },
                  { icon: Clock, labelKey: "scheduleLabel", valueKey: "schedule" },
                ].map(({ icon: Icon, labelKey, valueKey }) => (
                  <div key={labelKey} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5">
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-primary">
                        {t(`info.${labelKey}`)}
                      </h4>
                      <p className="text-sm text-brand-muted">
                        {t(`info.${valueKey}`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.5!2d26.0137!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDAnNDkuMyJF!5e0!3m2!1sro!2sro!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VP Logistic location"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
