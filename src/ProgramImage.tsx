import ImageWithPlaceholder from "./ImageWithPlaceHolder";

type AccommodationCardProps = {
    src: string,
    alt?: string
}
const AccommodationCard: React.FC<AccommodationCardProps> = ({
    src,
    alt = "Dávid és Eszter",
}) => {
    return (
        <ImageWithPlaceholder src={src} alt={alt} wrapperClassName="w-84 md:w-96 h-84 md:h-96 rounded-full" imgClassName="w-full h-full rounded-full" shadow={true} />
    );
};

export default AccommodationCard;
