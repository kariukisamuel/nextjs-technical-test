import Image from "next/image"; // Ensure you're importing the Image component from Next.js

type ProfileCardProps = {
  imageUrl: string;
  name: string;
  knownFor: string;
};
const ProfileCard = ({ imageUrl, name, knownFor }: ProfileCardProps) => (
  <div className="w-full sm:w-[50%] md:w-[23.5%] lg:w-[23.5%] mb-10 relative py-2 transition-all duration-300 ease-in-out hover:rounded-md hover:border-2 hover:border-blazingRed hover:shadow-lg ">
    <div className="relative flex justify-center w-32 h-32 rounded-full overflow-hidden mx-auto ">
      <Image
        src={`https://image.tmdb.org/t/p/w200${imageUrl}`}
        alt="Profile Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute bottom-0 right-0 w-5 h-5 z-10 bg-red-500 ">
        <Image
          src="/images/howitworks/step-1.png"
          alt="Overlay Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
    </div>
    <div className="card-body mt-4 text-center">
      <div>
        <h3 className="font-montserrat font-bold mt-3 text-gray-700 text-center text-xl line-clamp-1">
          {name}
        </h3>
      </div>
      <div>
        <p className="font-roboto text-sm mt-3 text-center px-2 text-gray-700 line-clamp-2">
          {knownFor}
        </p>
      </div>
    </div>
  </div>
);

export default ProfileCard;
