import React from "react";
import cn from "classnames";

type TextProps = {
  size?:
    | "base"
    | "h1-bold"
    | "h2-bold"
    | "h2-normal"
    | "h3-bold"
    | "h3-normal"
    | "h4-extrabold"
    | "h4-bold"
    | "h4-normal"
    | "h5-bold"
    | "h5-normal"
    | "h5-light"
    | "h6-bold"
    | "title"
    | "subTitle"
    | "titleContact"
    | "paragraph";
  variant?: "default" | "secondary" | "disabled" | "neutral";
  children: React.ReactNode;
};

export function Text({
  size = "base",
  variant = "default",
  children,
}: TextProps) {
  const className = cn({
    "text-base leading-6": size === "base",
    "text-h1-bold": size === "h1-bold",
    "text-h2-bold": size === "h2-bold",
    "text-h2-normal": size === "h2-normal",
    "text-h3-bold": size === "h3-bold",
    "text-h3-normal": size === "h3-normal",
    "text-h4-extrabold": size === "h4-extrabold",
    "text-h4-bold": size === "h4-bold",
    "text-h4-normal text-center": size === "h4-normal",
    "text-h5-bold": size === "h5-bold",
    "text-h5-normal": size === "h5-normal",
    "text-h5-light": size === "h5-light",
    "text-h6-bold": size === "h6-bold",
    "text-h3-bold md:text-h1-bold": size === "title",
    "text-h4-bold md:text-h2-bold": size === "subTitle",
    "text-h4-bold md:text-h3-bold": size === "titleContact",
    "text-base md:text-h5-paragraph lg:text-h4-paragraph": size === "paragraph",
    "text-neutral-800": variant === "default",
    "text-secondary-500": variant === "secondary",
    "text-neutral-100": variant === "neutral",
    "text-gray-400": variant === "disabled",
  });

  return <span className={className}>{children}</span>;
}
