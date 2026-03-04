import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("mb-12 lg:mb-16", {
        "text-center": align === "center",
        "text-left": align === "left",
      })}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-brand-primary"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-1 w-16 rounded-full bg-brand-accent",
          align === "center" ? "mx-auto" : ""
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg",
            light ? "text-gray-300" : "text-brand-muted",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
