import SectionTitle from "../../Common/SectionTitle";
import ProfileCard from "./ProfileCard";

type title = {
  title: string;
};

const Partners = ({ title }: title) => {
  return (
    <section id="meet-a-partner" className="w-full pt-20">
      <div className="w-5/6 lg:w-[70%] mx-auto">
        <div>
          <SectionTitle title={title} />
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
};

export default Partners;
