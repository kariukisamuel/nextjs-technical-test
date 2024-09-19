// Import the Image component from Next.js
import Image from "next/image";

// Create the Footer component
const Footer = () => {
  return (
    // Footer container with a border
    <footer className="border-t-4 py-5 mt-10 border-blazingRed">
      <div className="xs:w-[94%] lg:w-[70%] mx-auto flex justify-between flex-wrap">
        {/* Company information section */}
        <div className="w-full md:w-[25%] lg:w-[25%] mb-2 text-center md:text-left relative">
          <p className="font-montserrat uppercase text-blazingRed text-xl">
            Dreamshare
          </p>
        </div>
        {/* Links section */}
        <div className="w-full md:w-[25%] lg:w-[25%]  relative">
          <p className="font-montserrat font-bold Capitalize text-center md:text-left text-gray-700 text-xl">
            Company
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center  md:gap-0 md:flex-col font-roboto font-light mt-2">
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              About
            </a>
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              Contact
            </a>
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              Press
            </a>
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              Blog
            </a>
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              Terms and Privacy
            </a>
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              Help
            </a>
          </div>
        </div>
        {/* Partners section (placeholder for now) */}
        <div className="w-full md:w-[30%] lg:w-[30%] relative">
          <p className="font-montserrat font-bold capitalize text-center md:text-left text-gray-700 text-xl">
            Partners
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center  md:gap-0 md:flex-col font-roboto font-light mt-2">
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              Gary Oldman
            </a>
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              Joey King
            </a>
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              Kinjal Nanda
            </a>
            <a href="" className="py-1 px-3 text-gray-400  text-sm lg:text-base hover:text-white hover:bg-blazingRed">
              C. Prem Kumar
            </a>

          </div>
        </div>
        {/* Logo section */}
        <div className="w-full md:w-[10%] lg:w-[15%] mb-10  relative flex flex-col items-center">
          <div className="">
            <p className="font-montserrat font-bold uppercase text-gray-300 text-xs">Designed By</p>
          </div>
          <div className="py-2">
            <Image
              src="/images/footer/web-designer-logo.svg"
              alt="Website Designer Logo"
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
