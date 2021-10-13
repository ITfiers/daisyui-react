import classNames from "classnames";
import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  labelText?: string;
  bordered?: boolean;
  size?: "large" | "small" | "tiny";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "link"
    | "info"
    | "warning"
    | "error";
}

enum InputSizes {
  large = "input-lg",
  small = "input-sm",
  tiny = "input-xs",
}

const inputColor: Record<string, string> = {
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  ghost: "input-ghost",
  link: "input-link",
  info: "input-info",
  warning: "input-warning",
  error: "input-error",
  success: "input-success",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { color, labelText, id, bordered, size, className, ...props }: InputProps,
    ref
  ) => {
    const inputClasses = classNames(
      "input",
      {
        "input-bordered": bordered,
        [InputSizes[size!]]: size,
        [inputColor[color as string]]: color,
      },
      className
    );

    return (
      <div className="form-control">
        {labelText && (
          <label className="label" htmlFor={id}>
            <span className="label-text">{labelText}</span>
          </label>
        )}
        <input
          ref={ref}
          type="text"
          id={id}
          className={inputClasses}
          {...props}
        />
      </div>
    );
  }
);
