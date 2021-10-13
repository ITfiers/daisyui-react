import classNames from "classnames";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  labelText: string;
  color?: "primary" | "secondary" | "accent";
  size?: "extraSmall" | "small" | "medium" | "large";
}

const radioSize: Record<string, string> = {
  extraSmall: "radio-xs",
  small: "radio-sm",
  medium: "radio-md",
  large: "radio-lg",
};

const radioColor: Record<string, string> = {
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
};

export function Radio({ id, color, labelText, size, ...props }: RadioProps) {
  const radioClasses = classNames("radio", {
    [radioColor[color as string]]: color,
    [radioSize[size as string]]: Boolean(size),
  });

  return (
    <div className="form-control">
      <label className="cursor-pointer label" htmlFor={id}>
        <span className="label-text">{labelText}</span>
        <div>
          <input id={id} type="radio" className={radioClasses} {...props} />
          <span className="radio-mark" />
        </div>
      </label>
    </div>
  );
}
