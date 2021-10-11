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
export function Progress({
  className,
  progressType,
  value,
  max,
}: ProgressProps) {
  const classes = classNames(
    "progress",
    {
      [`progress-${progressType}` as string]: progressType,
    },
    className
  );
  return <progress value={value} max={max} className={classes}></progress>;
}
