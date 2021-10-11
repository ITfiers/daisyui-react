import React, { ImgHTMLAttributes } from "react";
export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {}

const handleImageError = (event: React.ChangeEvent<HTMLImageElement>) => {
  event.target.src =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
};

export function Img(props: ImgProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      onError={handleImageError}
      {...props}
    />
  );
}
