import classNames from "classnames";
import React from "react";

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

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ color, ...props }, ref) => {
    const linkClasses = classNames("link", {
      [linktColor[color as string]]: Boolean(color),
    });
    return (
      <a ref={ref} className={linkClasses} {...props}>
        {props.children}
      </a>
    );
  }
);
