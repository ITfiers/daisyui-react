interface CardImageProps {
  src: string;
  figureClasses?: React.HTMLAttributes<HTMLElement>["className"];
  imageClasses?: "w-full" | "rounded-xl";
  alt: string;
}

export function CardImage({
  src,
  figureClasses,
  imageClasses,
  alt,
  ...props
}: CardImageProps) {
  return (
    <figure className={figureClasses}>
      <img
        src={src}
        className={imageClasses}
        data-nsfw-filter-status="sfw"
        alt={alt}
        {...props}
      />
    </figure>
  );
}
