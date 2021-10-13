import classNames from "classnames";

export interface ProgressProps {
  progressType?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  className?: string;
  value: number;
  max: number;
}

const progressColor: Record<string, string> = {
  primary: "progress-primary",
  secondary: "progress-secondary",
  accent: "progress-accent",
  info: "progress-info",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error",
};
export function Progress({
  className,
  progressType,
  value,
  max,
}: ProgressProps) {
  const classes = classNames(
    "progress",
    {
      [progressColor[progressType as string]]: progressType,
    },
    className
  );
  return <progress value={value} max={max} className={classes}></progress>;
}
