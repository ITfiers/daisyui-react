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

export function Badge(props: BadgeProps) {
  const classes = classNames("badge", {
    [`badge-${props.badgeType}` as string]: Boolean(props.badgeType),
    [badgeSize[props.size as string]]: Boolean(props.size),
    [`badge-${props.variant}` as string]: Boolean(props.variant),
    "badge-outline": props.variant === "outlined",
  });
  return <div className={`badge ${classes}`}>{props.children}</div>;
}
