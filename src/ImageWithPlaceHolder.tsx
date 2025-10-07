import { useState } from "react";

type ImageWithPlaceholderProps = {
    src: string,
    alt?: string,
    shadow?: boolean,
    wrapperClassName?: string,
    eager?: boolean,
    imgClassName?: string
}
const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
    src,
    wrapperClassName,
    imgClassName,
    shadow = true,
    alt,
    eager = false,
}) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className={`relative ${wrapperClassName} transition-shadow duration-700 ${shadow && imgLoaded ? "shadow-xl" : "shadow-none"} overflow-hidden`}>
            {!imgLoaded && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center animate-pulse" />
            )}
            <img
                src={src}
                alt={alt}
                loading={eager ? "eager" : "lazy"}
                onLoad={() => setImgLoaded(true)}
                className={`${imgClassName} object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
};

export default ImageWithPlaceholder;
