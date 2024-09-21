// Import the Image component from Next.js
import Image from "next/image";
// Import Footer Link Conponent
import FooterLink from "../Common/FooterLink";

// Create the Footer component
const Footer = () => {
  const links = [
    { id: 1, href: "/about", ariaLabel: "About Us Page", name: "About" },
    { id: 2, href: "/contact", ariaLabel: "Contact Us Page", name: "Contact" },
    { id: 3, href: "/press", ariaLabel: "Press Page", name: "Press" },
    { id: 4, href: "/blog", ariaLabel: "Blog Page", name: "Blog" },
    {
      id: 5,
      href: "/terms-and-privacy",
      ariaLabel: "Terms and Privacy Page",
      name: "Terms and Privacy",
    },
    { id: 6, href: "/help", ariaLabel: "Help Page", name: "Help" },
  ];
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
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center  md:gap-0 md:flex-col font-roboto font-light mt-5">
            {links.map((link) => (
              <FooterLink
                key={link.id}
                href={link.href}
                ariaLabel={link.ariaLabel}
                name={link.name}
              />
            ))}
          </div>
        </div>
        {/* Partners section (placeholder for now) */}
        <div className="w-full md:w-[30%] lg:w-[30%] , relative">
          <p className="font-montserrat font-bold capitalize text-center md:text-left text-gray-700 text-xl">
            Partners
          </p>
        </div>
        {/* Logo section */}
        <div className="w-full md:w-[10%] lg:w-[15%] mb-10 mt-5 relative flex flex-col items-center">
          <div className="">
            <p className="font-montserrat font-bold uppercase text-slate-500text-xs">
              Designed By
            </p>
          </div>
          <div className="py-2">
            <Image
              src="/images/footer/web-designer-logo.svg"
              alt=""
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
