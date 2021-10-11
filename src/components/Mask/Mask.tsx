import classNames from "classnames";

export interface MaskProps {
  src: string;
  alt: string;
  shape?:
    | "squircle"
    | "heart"
    | "hexagon"
    | "hexagon-2"
    | "ecagon"
    | "pentagon"
    | "diamond"
    | "square"
    | "circle"
    | "parallelogram"
    | "parallelogram-2"
    | "parallelogram-3"
    | "parallelogram-4"
    | "star"
    | "star-2"
    | "triangle"
    | "triangle-2"
    | "triangle-3"
    | "triangle-4";
}
export function Mask(props: MaskProps) {
  const maskClasses = classNames("mask", {
    [`mask-${props.shape}`]: props.shape,
  });
  return <img src={props.src} alt={props.alt} className={maskClasses} />;
}
