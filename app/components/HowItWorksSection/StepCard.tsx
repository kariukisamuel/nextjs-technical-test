import Image from "next/image";
type StepCardProps = {
  imageUrl: string;
  stepNumber?: number;
  title: string;
  description: string;
};
export default function StepCard({
  imageUrl,
  stepNumber = 1,
  title,
  description,
}: StepCardProps) {
  return (
    <div className=" w-full md:w-[31.5%] relative bg-gradient-to-tr from-blazingRed to-blazingYellow h-[400px]  rounded-lg overflow-hidden mb-10">
      <Image
        src={imageUrl}
        alt="movie"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute bottom-0  p-5">
        <div className="h-20 pb-5 flex items-start">
          <button className="text-white uppercase text-xs font-montserrat font-light bg-blazingRed  px-4 py-1 rounded-3xl">
            Step {stepNumber}
          </button>
        </div>
        <div className="card-body">
          <div>
            <h3 className="font-montserrat text-white text-2xl">{title}</h3>
          </div>
          <div>
            <p className="font-roboto text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
