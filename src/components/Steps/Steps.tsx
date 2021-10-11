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

export function Step(props: StepProps) {
  const stepClasses = classNames("step", {
    [`step-${props.colorType}` as string]: Boolean(props.colorType),
  });
  return (
    <li data-Content={props.dataContent} className={stepClasses}>
      {props.children}
    </li>
  );
}
