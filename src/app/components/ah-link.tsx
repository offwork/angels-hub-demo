import { classNames } from "@/utils";
import Link from "next/link";

type LinkProps = {
  href: string;
  label: string;
  target?: string;
  color: "bg-primary" | "bg-secondary" | undefined;
  border?: boolean;
  fit?: boolean;
  size: "small" | "large" | undefined;
  rounded:
    | "rounded-none"
    | "rounded-sm"
    | "rounded"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-3xl"
    | "rounded-full";
};

export default function AHLink({
  href,
  label,
  target,
  color,
  border,
  fit,
  size,
  rounded,
}: LinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={classNames(
        fit ? "max-w-fit" : "max-w-full",
        size === "small" ? "p-1" : "px-11 py-4",
        `${color} ${border} ${rounded} text-white text-center`
      )}
    >
      <span className="">{label}</span>
    </Link>
  );
}
