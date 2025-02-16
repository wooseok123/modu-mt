import Image from "next/image";
import { touchableImage, defaultImage } from "./index.css";

interface NextImgProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  touchable?: boolean;
}

export const NextImg = ({
  src,
  alt,
  width,
  height,
  touchable = false,
  className,
  ...rest
}: NextImgProps) => {
  return (
    <Image
      className={`${touchable ? touchableImage : defaultImage} ${className}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
};
