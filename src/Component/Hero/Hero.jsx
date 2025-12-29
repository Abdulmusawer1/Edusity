import React from "react";
import heroImg from "../../assets/hero.png";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div
    id="hero"
      className="w-full min-h-screen bg-cover bg-center text-white px-[10%] flex items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroImg})`,
      }}
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
        <h1 className="text-[60px] font-semibold leading-[1.2]">
          We Ensure better education for better world
        </h1>
        <p className="max-w-[700px] text-lg leading-[1.4]">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experience needed to excel in the dynamic field
          of education.
        </p>
        <button className="bg-white text-gray-900 py-2 px-6 text-xl rounded-full cursor-pointer border-0 outline-none inline-flex align-items-center justify-content-center hover:bg-gray-200 transition">
          Explore more <img src={dark_arrow} alt="" className="w-6 h-6 ml-3 " />
        </button>
      </div>
    </div>
  );
};

export default Hero;
