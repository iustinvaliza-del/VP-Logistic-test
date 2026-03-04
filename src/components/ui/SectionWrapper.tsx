import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "light" | "dark";
}

export function SectionWrapper({
  id,
  children,
  className,
  variant = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24",
        {
          "bg-white": variant === "white",
          "bg-brand-light": variant === "light",
          "bg-brand-primary text-white": variant === "dark",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
