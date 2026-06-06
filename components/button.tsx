import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "terracotta" | "ghost" | "dark";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  terracotta:
    "bg-[#C1694F] text-black hover:bg-[#D4A574] shadow-[0_18px_60px_rgba(193,105,79,0.24)]",
  ghost:
    "border border-white/20 text-white hover:border-[#C1694F]/60 hover:bg-white/10",
  dark: "bg-white/10 text-white border border-white/10 hover:bg-white/15"
};

export function Button({ href, children, variant = "terracotta", className = "", ...props }: Props) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition duration-300 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
