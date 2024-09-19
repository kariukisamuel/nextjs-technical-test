"use client";
// Import the `Image` component from `next/image` for optimized image handling
import Image from "next/image";
//Import useEffect, useRef
import { useEffect, useRef } from 'react';
//Import gsap
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin with GSAP
gsap.registerPlugin(TextPlugin);

// Create a functional component named `Hero`
const Hero = () => {
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const heroButtonRef = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline();
    // Animate header text with fade-up effect
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 }, // Start with opacity 0 and move from below
      {
        opacity: 1,
        y: 0,
        duration: 2, // Duration of the animation
        ease: 'power1.out', // Easing function
      }
    )
      // Animate sub-header text with fade-up effect
      .fromTo(
        subHeaderRef.current,
        { opacity: 0, y: 20 }, // Start with opacity 0 and move from below
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power1.out',
          delay: 1, // Delay to start the animation after header
        },
        '<' // Start this animation right after the previous one
      )
      // Animate the third element 
      .fromTo(
        heroButtonRef.current,
        { opacity: 0, y: 20 }, // Start with opacity 0 and move from below
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power1.out',
          delay: 0.5, // Delay for the third element
        },
        '<' // Start the third animation right after the previous one
      );
  }, []);



  // Return the JSX structure for rendering the hero section
  return (
    <section id="hero">
      <div className="relative bg-gradient-to-r from-blazingRed  to-blazingYellow h-[85vh] md:h-screen">
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

          <div className="relative mx-auto w-[96%] lg:w-[70%] z-10 flex flex-col h-full justify-center items-center text-center">
            {/* Render the hero section title with appropriate styling */}
            <h1 ref={headerRef} className="text-3xl md:text-5xl text-white  font-bold leading-normal mb-4 font-montserrat opacity-0">
              SHARE YOUR <br></br>
              HOLIDAY DREAM
            </h1>
            {/* Render the hero section description with appropriate styling */}
            <p ref={subHeaderRef} className="text-xl md:text-2xl text-lightAlmond mb-8 font-roboto opacity-0 ">
              And find the perfect partner to fullfill it.
            </p>
            {/* Render a button with a call to action */}
            <a
              ref={heroButtonRef}
              href="#"
              className="bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg opacity-0"
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
