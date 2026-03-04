"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "ro" | "en") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1">
      <button
        onClick={() => switchLocale("ro")}
        className={cn(
          "rounded-md px-2.5 py-1 text-sm font-medium transition-colors cursor-pointer",
          locale === "ro"
            ? "bg-brand-accent text-white"
            : "text-brand-muted hover:text-brand-primary"
        )}
      >
        RO
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "rounded-md px-2.5 py-1 text-sm font-medium transition-colors cursor-pointer",
          locale === "en"
            ? "bg-brand-accent text-white"
            : "text-brand-muted hover:text-brand-primary"
        )}
      >
        EN
      </button>
    </div>
  );
}
