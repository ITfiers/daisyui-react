import classNames from "classnames";

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  color?: "primary" | "secondary" | "accent";
  labelText?: string;
  size?: "extraSmall" | "small" | "medium" | "large";
}

const toggleSize: Record<string, string> = {
  extraSmall: "toggle-xs",
  small: "toggle-sm",
  medium: "toggle-md",
  large: "toggle-lg",
};

const toggleColor: Record<string, string> = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
};

export function Toggle({ id, color, labelText, size, ...props }: ToggleProps) {
  const toggleClasses = classNames("toggle", {
    [toggleColor[color as string]]: Boolean(color),
    [toggleSize[size as string]]: Boolean(size),
  });

  return (
    <div className="form-control">
      <label htmlFor={id} className="cursor-pointer label">
        <span className="label-text">{labelText}</span>
        <div>
          <input id={id} type="checkbox" {...props} className={toggleClasses} />
          <span className="toggle-mark"></span>
        </div>
      </label>
    </div>
  );
}
