import React from "react";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva({
  base: "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transform active:scale-95 disabled:transform-none disabled:shadow-none gap-2",
  variants: {
    intent: {
      primary:
        "bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-indigo-500",
      outline:
        "border-2 border-indigo-600 text-indigo-600 bg-white shadow-sm hover:bg-indigo-50 hover:border-indigo-700 hover:text-indigo-700 hover:-translate-y-0.5 focus-visible:ring-indigo-500",
      secondary:
        "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:-translate-y-0.5 focus-visible:ring-gray-500",
      ghost:
        "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400",
      accent:
        "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-purple-500",
    },
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-base px-5 py-2.5",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

const Spinner = ({ intent }) => {
  const color =
    intent === "outline" || intent === "secondary" || intent === "ghost"
      ? "border-indigo-600"
      : "border-white";

  return (
  <span
    className={clsx(
      "h-5 w-5 border-2 border-t-transparent rounded-full animate-spin",
      color
    )}
  ></span>
  );
};

const PrimaryButton = ({
  label,
  onClick,
  type = "button",
  intent,
  size,
  disabled,
  className,
  isLoading,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(buttonVariants({ intent, size }), className)}
    >
      {isLoading ? (
        <>
          <Spinner intent={intent} />
          <span>Loading...</span>
        </>
      ) : (
        label
      )}
    </button>
  );
};

export default PrimaryButton;
