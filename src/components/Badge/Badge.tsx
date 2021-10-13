import classNames from "classnames";
export interface BadgeProps {
  children: React.ReactNode;
  badgeType?: "primary" | "secondary" | "accent" | "ghost";
  size?: "large" | "small";
  variant?: "contained" | "outlined";
}

const badgeSize: Record<string, string> = {
  large: "badge-lg",
  small: "badge-sm",
};
const badgecolor: Record<string, string> = {
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  ghost: "badge-ghost",
  link: "badge-link",
  info: "badge-info",
  warning: "badge-warning",
  error: "badge-error",
  success: "badge-success",
};

export function Badge({ children, badgeType, size, variant }: BadgeProps) {
  const classes = classNames("badge", {
    [badgecolor[badgeType as string]]: Boolean(badgeType),
    [badgeSize[size as string]]: Boolean(size),
    [`badge-${variant}` as string]: Boolean(variant),
    "badge-outline": variant === "outlined",
  });
  return <div className={`badge ${classes}`}>{children}</div>;
}
