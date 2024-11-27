import Image, { ImageProps } from "next/image";

const DEFAULT_IMG_WIDTH = 200;
const DEFAULT_IMG_HEIGHT = 200;

// With Omit
type CustomImageProps = Omit<ImageProps, "width" | "height"> & {
    defaultWidth?: number;
    defaultHeight?: number;
    width?: number | `${number}`;
    height?: number | `${number}`;
};

export default function CustomImage({
    src,
    alt,
    width = DEFAULT_IMG_WIDTH,
    height = DEFAULT_IMG_HEIGHT,
    ...props
}: CustomImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...props}
        />
    );
}
