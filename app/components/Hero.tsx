import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative bg-gradient-to-r from-[#FF4E50]  to-[#F9D423] h-screen  text-white overflow-hidden">
           
           <header className="z-10 relative w-full flex justify-center ">
            <div className="flex w-4/6 justify-between mt-10 align-baseline">
                <div className="logo">
                    <h3 className="font-montserrat font-bold uppercase text-xl">Dreamshare</h3>
                </div>

                <nav>
                    {/* <!-- Link Element --> */}
                    <a href="#home" className="text-white text-xl hover:bg-blazingRed hover:text-white hover:rounded-full hoverg:border-2 hover:border-white px-4 py-2 mr-5 rounded-md transition-colors duration-300">
                        Login
                    </a>

                    {/* <!-- Button Element --> */}
                    <button className="bg-transparent text-white text-xl hover:bg-blazingRed px-4 py-2 rounded-full border-2 border-white transition-colors duration-300 ">
                        Sign Up
                    </button>
                </nav>
            </div>

        </header>

            <div className="absolute inset-0">
                <div className="relative w-full h-full ">
                    <Image
                        src="/images/hero-background.png"
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                    />
                </div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-normal mb-4 font-montserrat">SHARE YOUR <br></br>
                    HOLIDAY DREAM</h1>
                <p className="text-2xl text-lightAlmond mb-8 font-roboto">And find the perfect partner to fullfill it.</p>
                <a href="#" className="bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Find your holiday partner</a>
            </div>
        </div>
    );
}
