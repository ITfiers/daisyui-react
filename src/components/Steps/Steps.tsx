import classNames from "classnames";
export interface StepsProps {
  children: React.ReactNode;
}

export function Steps(props: StepsProps) {
  return <ul className="steps w-full">{props.children}</ul>;
}

export interface StepProps {
  children: React.ReactNode;
  colorType?:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "error"
    | "warning"
    | "neutral";
  dataContent?: "?" | "!" | "✓" | "✕" | "★" | "" | "●";
}

const stepColor: Record<string, string> = {
  primary: "step-primary",
  secondary: "step-secondary",
  accent: "step-accent",
  ghost: "step-ghost",
  link: "step-link",
  info: "step-info",
  warning: "step-warning",
  error: "step-error",
  success: "step-success",
};

export function Step(props: StepProps) {
  const stepClasses = classNames("step", {
    [stepColor[props.colorType as string]]: Boolean(props.colorType),
  });
  return (
    <li data-Content={props.dataContent} className={stepClasses}>
      {props.children}
    </li>
  );
}
