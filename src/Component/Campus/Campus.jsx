import React from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div id="Campus" className="px-[10%] my-20 mx-auto w-full text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <img src={gallery_1} alt="" className="w-full rounded-xl" />
        <img src={gallery_2} alt="" className="w-full rounded-xl" />
        <img src={gallery_3} alt="" className="w-full rounded-xl" />
        <img src={gallery_4} alt="" className="w-full rounded-xl" />
      </div>

      <button className="bg-blue-800 text-white py-2 px-6 text-xl rounded-full cursor-pointer border-0 outline-none inline-flex items-center justify-center hover:bg-gray-200 transition">
        See more here
        <img src={white_arrow} alt="" className="w-6 h-6 ml-3" />
      </button>
    </div>
  );
};

export default Campus;
