import React from "react";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  variant?: "default" | "active" | "disabled";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
};

export function Button({ size, variant, onClick, className, children, ...rest }: ButtonProps) {
  let sizeClass;
  switch (size) {
    case "small":
      sizeClass = "flex justify-center items-center py-2 px-9 h6-bold";
      break;
    case "medium":
      sizeClass = "flex justify-center items-center px-[3.5rem] text-h4-bold py-2";
      break;
    case "large":
      sizeClass = "flex justify-center items-center px-[4.5rem] text-h4-bold";
      break;
    default:
      sizeClass = "flex justify-center items-center py-2 px-9 h6-bold";
  }

  let variantClass;
  switch (variant) {
      case "default":
        variantClass = "bg-secondary-500 text-neutral-100 hover:opacity-90";
        break;
    case "active":
      variantClass = "bg-neutral-100 text-secondary-500 hover:opacity-90";
      break;
    case "disabled":
      variantClass = "bg-secondary-700 text-neutral-100 cursor-not-allowed hover:opacity-90";
      break;
    default:
      variantClass = "bg-primary-800 text-neutral-100 hover:opacity-90";
  }

  return (
    <button
      type="button"
      className={`${sizeClass} ${variantClass} shadow-md ${className}`}
      onClick={onClick}
      disabled={variant === "disabled"}
      {...rest}

    >
      {children}
    </button>
  );
}
