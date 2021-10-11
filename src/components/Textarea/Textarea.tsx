import classNames from "classnames";
import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string;
  bordered?: boolean;
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

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, labelText, bordered, color, ...props }: TextareaProps, ref) => {
    const textareaClasses = classNames("textarea", "h-24", {
      "textarea-bordered": bordered,
      [`textarea-${color}`]: color,
    });

    return (
      <div className="form-control">
        <label className="label" htmlFor={id}>
          <span className="label-text">{labelText}</span>
        </label>
        <textarea id={id} className={textareaClasses} ref={ref} {...props} />
      </div>
    );
  }
);
