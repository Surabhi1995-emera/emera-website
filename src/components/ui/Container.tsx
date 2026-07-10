import { clsx } from "clsx";

export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20", className)}>
      {children}
    </Tag>
  );
}
