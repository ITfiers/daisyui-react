import classNames from "classnames";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  color?: "primary" | "secondary" | "accent";
  labelText?: string;
  size?: "extraSmall" | "small" | "medium" | "large";
}

const checkboxSize: Record<string, string> = {
  extraSmall: "checkbox-xs",
  small: "checkbox-sm",
  medium: "checkbox-md",
  large: "checkbox-lg",
};
const checkboxColor: Record<string, string> = {
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
};

export function Checkbox({
  id,
  color,
  labelText,
  size,
  ...props
}: CheckboxProps) {
  const checkboxClasses = classNames("checkbox", {
    [checkboxColor[color as string]]: Boolean(color),
    [checkboxSize[size as string]]: Boolean(size),
  });

  return (
    <div className="form-control">
      <label htmlFor={id} className="cursor-pointer label">
        {labelText && <span className="label-text">{labelText}</span>}
        <div>
          <input
            id={id}
            type="checkbox"
            className={checkboxClasses}
            {...props}
          />
          <span className="checkbox-mark" />
        </div>
      </label>
    </div>
  );
}
