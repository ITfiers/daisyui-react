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
        [`input-${color}`]: color,
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
