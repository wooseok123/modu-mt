import Image from "next/image";

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
}: NextImgProps) => {
  return (
    <Image
      style={{ cursor: touchable ? "pointer" : "default" }}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
