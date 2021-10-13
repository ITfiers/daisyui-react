import classNames from "classnames";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent";
}

const linktColor: Record<string, string> = {
  primary: "link-primary",
  secondary: "link-secondary",
  accent: "link-accent",
};

export function Link({ color, ...props }: LinkProps) {
  const linkClasses = classNames("link", {
    [linktColor[color as string]]: Boolean(color),
  });
  return (
    <a className={linkClasses} {...props}>
      {props.children}
    </a>
  );
}
