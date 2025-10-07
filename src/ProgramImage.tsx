import { useState } from "react";

type AccommodationCardProps = {
    src: string,
    alt?: string
}
const AccommodationCard: React.FC<AccommodationCardProps> = ({
    src,
    alt = "Dávid és Eszter",
}) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className={`relative w-84 md:w-96 h-84 md:h-96 rounded-full transition-shadow duration-700 ${imgLoaded ? "shadow-xl" : "shadow-none"} overflow-hidden`}>
            {!imgLoaded && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center animate-pulse" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover rounded-full transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
};

export default AccommodationCard;
