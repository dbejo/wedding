import React from "react";
import ImageWithPlaceholder from "./ImageWithPlaceHolder";

type AccommodationCardProps = {
    title: string;
    description: string;
    href: string;      // Link for the button
    imageSrc: string;  // Image URL
    imageAlt?: string; // Optional alt text
    buttonColor?: string; // Optional button color
};

const AccommodationCard: React.FC<AccommodationCardProps> = ({
    title,
    description,
    href,
    imageSrc,
    imageAlt = "Accommodation image",
    buttonColor = "#a2a2a2ff" // Default to a gray color,
}) => {
    return (
        <div className="w-full h-full min-h-[420px] rounded-2xl shadow-md bg-white border border-gray-200 overflow-hidden flex flex-col">
            {/* Image */}
            <ImageWithPlaceholder src={imageSrc} alt={imageAlt} imgClassName="w-full h-48" shadow={false} />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{description}</p>

                {/* Button wrapped in <a> */}
                <a href={href} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <button style={{ backgroundColor: buttonColor }} className={`w-full px-4 py-2 text-white text-sm font-medium rounded-xl hover:cursor-pointer hover:grayscale-30 transition-all`}>
                        Foglalok
                    </button>
                </a>
            </div>
        </div>
    );
};

export default AccommodationCard;
