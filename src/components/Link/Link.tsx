import classNames from "classnames";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent";
}

export function Link({ color, ...props }: LinkProps) {
  const linkClasses = classNames("link", {
    [`link-${color}`]: Boolean(color),
  });
  return (
    <a className={linkClasses} {...props}>
      {props.children}
    </a>
  );
}
