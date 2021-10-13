import classNames from "classnames";
import React from "react";
export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  children: React.ReactNode;
  size?: "large" | "small" | "tiny";
  bordered?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
}

enum InputSizes {
  large = "select-lg",
  small = "select-sm",
  tiny = "select-xs",
}

const selectColor: Record<string, string> = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ bordered, size, color, children, ...props }: SelectProps, ref) => {
    const selectClasses = classNames(
      "select",
      {
        "select-bordered": bordered,
        [InputSizes[size!]]: size,
        [selectColor[color as string]]: color,
      },
      "w-full",
      "max-w-xs"
    );

    return (
      <select className={selectClasses} ref={ref} {...props}>
        {children}
      </select>
    );
  }
);
