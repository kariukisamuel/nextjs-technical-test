import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="h-full">
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
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

            <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                <h1 className="text-5xl font-bold leading-normal mb-4 font-montserrat">SHARE YOUR <br></br>
                    HOLIDAY DREAM</h1>
                <p className="text-2xl text-lightAlmond mb-8 font-roboto">And find the perfect partner to fullfill it.</p>
                <a href="#" className="bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Find your holiday partner</a>
            </div>
        </section>
    );
}
