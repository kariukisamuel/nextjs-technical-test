// Import the `Image` component from `next/image` for optimized image handling
import Image from "next/image";
// Create a functional component named `Hero`
const Hero = () => {
  // Return the JSX structure for rendering the hero section
  return (
    <section id="hero">
      <div className="bg-gradient-to-r from-blazingRed  to-blazingYellow h-screen">
        <div className="h-full">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              {/* Render the background image using the `Image` component with appropriate props */}
              <Image
                src="/images/hero/hero-background.png"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>

          <div className="relative mx-auto w-5/6 lg:w-[70%] z-10 flex flex-col h-full justify-center items-center text-center">
            {/* Render the hero section title with appropriate styling */}
            <h1 data-aos="fade-up" className="text-3xl md:text-5xl text-white  font-bold leading-normal mb-4 font-montserrat">
              SHARE YOUR <br></br>
              HOLIDAY DREAM
            </h1>
            {/* Render the hero section description with appropriate styling */}
            <p className="text-xl md:text-2xl text-lightAlmond mb-8 font-roboto">
              And find the perfect partner to fullfill it.
            </p>
            {/* Render a button with a call to action */}
            <a
              href="#"
              className="bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Find your holiday partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
