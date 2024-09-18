// Import the Image component from Next.js
import Image from "next/image";

// Create the Footer component
const Footer = () => {
  return (
    // Footer container with a border
    <footer className="border-t-4 py-5 mt-10 border-blazingRed">
      <div className="w-5/6 lg:w-[70%] mx-auto flex justify-between mt-10 flex-wrap">
        {/* Company information section */}
        <div className="w-full md:w-[25%] lg:w-[25%] mb-10 text-center md:text-left relative">
          <p className="font-montserrat uppercase text-blazingRed text-xl">
            Dreamshare
          </p>
        </div>
        {/* Links section */}
        <div className="w-full md:w-[25%] lg:w-[25%] mb-10 relative">
          <p className="font-montserrat font-bold Capitalize text-center md:text-left text-gray-700 text-xl">
            Company
          </p>
          <div className="flex flex-wrap gap-4 justify-between  md:gap-0 md:flex-col font-roboto font-light mt-2">
            <a href="" className="py-1 text-gray-400  text-xl">
              About
            </a>
            <a href="" className="py-1 text-gray-400  text-xl">
              Contact
            </a>
            <a href="" className="py-1 text-gray-400  text-xl">
              Press
            </a>
            <a href="" className="py-1 text-gray-400  text-xl">
              Blog
            </a>
            <a href="" className="py-1 text-gray-400  text-xl">
              Terms and Privacy
            </a>
            <a href="" className="py-1 text-gray-400  text-xl">
              Help
            </a>
          </div>
        </div>
        {/* Partners section (placeholder for now) */}
        <div className="w-full md:w-[30%] lg:w-[30%] mb-10 relative">
          <p className="font-montserrat font-bold capitalize text-center md:text-left text-gray-700 text-xl">
            Partners
          </p>
        </div>
        {/* Logo section */}
        <div className="w-full md:w-[10%] lg:w-[15%] mb-10 relative flex justify-center">
          <div className="">
            <Image
              src="/images/footer/footer-logo.png"
              alt="Profile Image"
              width="113"
              height="43"
              quality={100}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
