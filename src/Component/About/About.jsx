import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div
      id="About"
      className="px-[10%] my-20 mx-auto flex flex-col md:flex-row 
      items-center gap-10"
    >
      {/* Text Section */}
      <div className="basis-full md:basis-[56%] space-y-4 text-left">
        <h3 className="text-blue-700 font-semibold text-lg uppercase">
          ABOUT UNIVERSITY
        </h3>

        <h2 className="text-3xl md:text-4xl text-[#000F38] font-extrabold leading-tight">
          Nurturing Tomorrow's <br className="hidden md:block" /> Leaders Today
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia hic
          blanditiis ea ratione rem expedita tempora, et natus, sit maxime
          deleniti cum perspiciatis eum sint nihil quas nostrum repellendus vel.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quasi ducimus incidunt alias reiciendis deserunt suscipit, deleniti
          cum molestiae culpa?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel
          tempora iure, ex delectus eos consequuntur soluta illum omnis error.
        </p>
      </div>

      {/* Image Section */}
      <div className="basis-full md:basis-[40%] relative">
        <img src={about_img} alt="" className="w-full rounded-xl" />
        <img
          src={play_icon}
          alt=""
          onClick={(()=>{setPlayState(true)})}
          className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-16 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default About;
