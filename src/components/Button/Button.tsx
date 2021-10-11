import classNames from "classnames";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  buttonType?:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "link"
    | "info"
    | "warning"
    | "error"
    | "success";
  className?: string;
  size?: "large" | "small" | "tiny";
  shape?: "wide" | "square" | "circle";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: "contained" | "outlined";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const buttonSize: Record<string, string> = {
  large: "btn-lg",
  small: "btn-sm",
  tiny: "btn-xs",
};
const btnColor: Record<string, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
  link: "btn-link",
  info: "btn-info",
  warning: "btn-warning",
  error: "btn-error",
  success: "btn-success",
};

export function Button({
  children,
  buttonType,
  shape,
  size,
  fullWidth,
  loading,
  variant,
  startIcon,
  endIcon,
  className,
  ...props
}: ButtonProps) {
  const classes = classNames(
    "btn",
    {
      [btnColor[buttonType as string]]: Boolean(buttonType),
      [buttonSize[size!]]: size,
      "btn-block": fullWidth,
      loading: loading,
      "btn-outline": variant === "outlined",
      [`btn-${shape}`]: shape,
    },
    className
  );

  return (
    <button className={classes} {...props}>
      {startIcon &&
        React.cloneElement(startIcon, {
          className: "inline-block w-6 h-6 mr-2 stroke-current",
          "data-testid": "icon-start",
        })}
      {children}
      {endIcon &&
        React.cloneElement(endIcon, {
          className: "inline-block w-6 h-6 ml-2 stroke-current",
          "data-testid": "icon-end",
        })}
    </button>
  );
}
