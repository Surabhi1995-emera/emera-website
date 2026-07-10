import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline-light" | "outline-dark" | "text";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden px-8 py-4 text-[11px] tracking-luxe uppercase transition-colors duration-500 ease-out";

  const variants: Record<string, string> = {
    primary: "bg-emerald text-ivory hover:text-ivory",
    "outline-light": "border border-ivory/40 text-ivory hover:border-ivory",
    "outline-dark": "border border-charcoal/30 text-charcoal hover:border-charcoal",
    text: "text-charcoal hover:text-emerald px-0 py-2",
  };

  const content = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-emerald-light transition-transform duration-500 ease-out group-hover:translate-x-0" />
      )}
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 h-px w-5 bg-current transition-all duration-500 ease-out group-hover:w-8" />
    </>
  );

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
