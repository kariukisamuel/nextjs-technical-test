import ProfileCard from "./ProfileCard";

type title = {
  title: string;
};

export default function PartnerSection({ title }: title) {
  return (
    <section id="meet-a-partner" className="w-full pt-20">
      <div className="w-5/6 lg:w-[70%] mx-auto">
        <div>
          <h2 className="text-center  text-gray-700 text-2xl font-montserrat font-bold">
            {title}
          </h2>
        </div>
        <div className="flex justify-between mt-10 flex-wrap">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className=" bg-white text-blazingRed border-2 border-blazingRed py-2 px-6   hover:bg-blazingRed hover:text-white hover hover:border-2 hover:border-white rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            See other partners
          </a>
        </div>
      </div>
    </section>
  );
}
