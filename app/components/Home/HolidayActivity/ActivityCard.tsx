import Image from "next/image";
type WidthVariants = {
  sm: string;
  lg: string;
};
type ActivityCardProps = {
  width: keyof WidthVariants;
  image: string;
  title: string;
};

const ActivityCard = ({ width = "sm", image, title }: ActivityCardProps) => {
  const widthVariants: WidthVariants = {
    sm: "md:w-[31.5%]",
    lg: "md:w-[66%]",
  };
  return (
    <div
      className={`w-full ${widthVariants[width]} relative bg-gradient-to-tr from-blazingRed to-blazingYellow h-[300px] rounded-lg overflow-hidden mb-5 group`}
    >
      {/* Image */}
      <Image
        src={image}
        alt="movie"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />

      {/* Dark hover effect */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out"></div>

      {/* Text on top of the image */}
      <div className="absolute p-5 h-full w-full flex justify-center items-center z-10">
        <h3 className="font-montserrat font-bold text-white text-center text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
};
export default ActivityCard;
