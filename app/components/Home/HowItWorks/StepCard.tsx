import Image from "next/image";
type StepCardProps = {
  imageUrl: string;
  stepNumber: number;
  title: string;
  description: string;
};


const StepCard = ({
  imageUrl,
  stepNumber,
  title,
  description,
}: StepCardProps) => {
  return (
    <div className="w-full sm:w-[31.5%] relative bg-gradient-to-tr from-blazingRed to-blazingYellow h-[400px] rounded-lg overflow-hidden mb-10 shadow-md transition-all duration-300 ease-in-out hover:border-2 hover:border-blazingRed hover:shadow-lg group">
      {/* Image */}
      <Image
        src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
        alt="movie"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />

      {/* Dark overlay on hover or focus */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 group-focus:bg-opacity-50 transition duration-300 ease-in-out"></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content (Text, Button, etc.) */}
      <div className="absolute bottom-0 p-5 z-10">
        <div className="h-20 pb-5 flex items-start">
          <button className="text-white uppercase text-xs font-montserrat font-light bg-blazingRed px-4 py-1 rounded-3xl">
            Trending {`#${stepNumber}`}
          </button>
        </div>
        <div className="card-body">
          <div className="h-20">
            <h3 className="font-montserrat text-white text-2xl line-clamp-2">{title}</h3>
          </div>
          <div className="h-20">
            <p className="font-roboto text-sm text-white line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
    </div>

  );
};
export default StepCard;
