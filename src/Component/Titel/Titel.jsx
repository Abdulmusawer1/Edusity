import React from "react";

const Titel = ({ subTitel, Titel }) => {
  return (
    <div className="px-[10%] text-center text-[#122EA0] text-xl font-semibold uppercase mt-16 ml-0 mb-8">
      <p>{subTitel}</p>
      <h2 className="text-3xl text-[#000F38] mt-1 transform-none">{Titel}</h2>
    </div>
  );
};

export default Titel;
