import StepCard from "./StepCard";
import Image from "next/image";

type title = {
  title: string;
};

export default function HowItWorksSection({ title }: title) {
  return (
    <section id="howitworks" className="w-full pt-20">
      <div className="w-5/6 lg:w-[70%] mx-auto">
        <div>
          <h2 className="text-center text-gray-700 text-2xl font-montserrat font-bold">
            {title}
          </h2>
        </div>
        <div className="flex justify-between mt-10 flex-wrap">
          <StepCard
            imageUrl="/images/howitworks/step-1.png"
            title="Sed leo enim, condimentum"
            description="Quisque libero libero, dictum non turpis in, luctus semper
                    lorem. Donec rhoncus a leo sit amet facilisis."
          />
          <StepCard
            imageUrl="/images/howitworks/step-1.png"
            title="Sed leo enim, condimentum"
            description="Quisque libero libero, dictum non turpis in, luctus semper
                    lorem. Donec rhoncus a leo sit amet facilisis."
          />
          <StepCard
            imageUrl="/images/howitworks/step-1.png"
            title="Sed leo enim, condimentum"
            description="Quisque libero libero, dictum non turpis in, luctus semper
                    lorem. Donec rhoncus a leo sit amet facilisis."
          />
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className=" bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Load More
          </a>
        </div>
      </div>
    </section>
  );
}
