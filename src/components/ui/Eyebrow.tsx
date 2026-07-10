import { clsx } from "clsx";

export default function Eyebrow({
  children,
  className,
  light,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-4 text-[11px] tracking-luxe uppercase",
        light ? "text-ivory/70" : "text-emerald/70",
        className
      )}
    >
      <span className={clsx("h-px w-8", light ? "bg-ivory/50" : "bg-gold")} />
      {children}
    </div>
  );
}
