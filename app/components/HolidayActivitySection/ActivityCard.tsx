import Image from "next/image";
type ActivityCardProps = {
  width: string;
  image: string;
  title: string;
};
export default function ActivityCard({
  width,
  image,
  title,
}: ActivityCardProps) {
  return (
    <div
      className={`w-full md:w-[${width}] relative bg-gradient-to-tr from-blazingRed to-blazingYellow h-[300px] rounded-lg overflow-hidden mb-5`}
    >
      <Image
        // src="/images/activities/Sport.png"
        src={image}
        alt="movie"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute p-5 h-full w-full flex justify-center items-center">
        <h3 className="font-montserrat font-bold text-white text-center text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
}
