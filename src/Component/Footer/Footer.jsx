import React from "react";

const Footer = () => {
  return (
    <div className="px-[10%] my-2 mx-auto border-t-2 border-solid border-gray-500 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-center md:text-left">
        2024 Edusity. All rights reserved.
      </p>

      <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
        <li className="cursor-pointer hover:underline">Terms of Service</li>
        <li className="cursor-pointer hover:underline">Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
