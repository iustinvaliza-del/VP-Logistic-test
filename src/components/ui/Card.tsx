import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className, hover = true, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 lg:p-8",
        glass
          ? "border border-white/10 bg-white/5 backdrop-blur-md"
          : "border border-gray-100 bg-white shadow-sm",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        glass && hover && "hover:bg-white/10 hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}
