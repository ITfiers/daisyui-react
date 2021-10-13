import classNames from "classnames";

export interface MaskProps {
  src: string;
  alt: string;
  shape?:
    | "squircle"
    | "heart"
    | "hexagon"
    | "hexagon2"
    | "ecagon"
    | "pentagon"
    | "diamond"
    | "square"
    | "circle"
    | "parallelogram"
    | "parallelogram2"
    | "parallelogram3"
    | "parallelogram4"
    | "star"
    | "star2"
    | "triangle"
    | "triangle2"
    | "triangle3"
    | "triangle4";
}
const inputColor: Record<string, string> = {
  squircle: "mask-squircle",
  heart: "mask-heart",
  hexagon: "mask-hexagon",
  hexagon2: "mask-hexagon-2",
  ecagon: "mask-ecagon",
  pentagon: "mask-pentagon",
  diamond: "mask-diamond",
  sqaure: "mask-square",
  circle: "mask-circle",
  parallelogram: "mask-parallelogram",
  parallelogram2: "mask-parallelogram-2",
  parallelogram3: "mask-parallelogram-3",
  parallelogram4: "mask-parallelogram-4",
  star: "mask-star",
  star2: "mask-star-2",
  triangle: "mask-triangle",
  triangle2: "mask-triangle-2",
  triangle3: "mask-triangle-3",
  triangle4: "mask-triangle-4",
};

export function Mask(props: MaskProps) {
  const maskClasses = classNames("mask", {
    [inputColor[props.shape as string]]: props.shape,
  });
  return <img src={props.src} alt={props.alt} className={maskClasses} />;
}
