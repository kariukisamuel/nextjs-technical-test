import React from "react";

const Header = () => {
  return (
    <header className="z-50 absolute w-full">
      <div className="flex w-5/6 lg:w-[70%] justify-between items-center mx-auto mt-5 md:mt-10">
        <div className="logo hidden sm:block">
          <h3 className="font-bold text-white uppercase text-base sm:text-xl md:text-2xl">
            Dreamshare
          </h3>
        </div>
        <nav className="flex justify-center sm:justify-end w-full">
          <button className="text-white text-base md:text-xl hover:bg-blazingRed hover:text-white hover:rounded-full hover:border-2 hover:border-white px-4 py-2 mr-5 rounded-md transition-colors duration-300">
            Login
          </button>
          <button className="bg-transparent text-white text-base md:text-xl hover:bg-blazingRed px-4 py-2 rounded-full border-2 border-white transition-colors duration-300">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
