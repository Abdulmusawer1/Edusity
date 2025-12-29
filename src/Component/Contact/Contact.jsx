import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0ba16030-2535-4006-9170-9b2b47b487db");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
      event.target.reset();
    } else {
      setResult(res.message);
    }
  };

  return (
    <div
      id="Contact"
      className="px-[10%] my-20 mx-auto w-full flex flex-col md:flex-row 
      items-start justify-between gap-10"
    >
      {/* Left */}
      <div className="basis-full md:basis-[48%] text-gray-500">
        <h3 className="flex items-center mb-5 text-[#000F38] font-semibold text-2xl gap-2">
          Send us message
          <img src={msg_icon} className="w-[35px] ml-3" alt="" />
        </h3>

        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          blanditiis consequuntur quaerat accusamus recusandae nam maxime
          nesciunt non quo quibusdam architecto totam rem labore, possimus illum
          consequatur minu.
        </p>

        <ul className="mt-4 space-y-1">
          <li className="flex items-center my-5">
            <img src={mail_icon} alt="" className="w-6 mr-3" />
            abdulmusawer7@gmail.com
          </li>
          <li className="flex items-center my-5">
            <img src={phone_icon} alt="" className="w-6 mr-3" />
            +93 783091602
          </li>
          <li className="flex items-center my-5">
            <img src={location_icon} alt="" className="w-6 mr-3" />
            4 Street ,4 distriact Timani ,<br /> Kabul , Afghanistan
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="basis-full md:basis-[48%] text-gray-500">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            className="block w-full p-4 border-0 outline-0 mb-4 mt-1 resize-none"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            className="block w-full p-4 border-0 outline-0 mb-4 mt-1 resize-none"
            type="tel"
            name="phone"
            placeholder="Enter your number"
            required
          />

          <label>Write Your message here</label>
          <textarea
            className="block w-full p-4 border-0 outline-0 mb-4 mt-1 resize-none"
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button className="bg-blue-800 text-white py-2 px-6 text-xl rounded-full cursor-pointer border-0 outline-none inline-flex items-center justify-center hover:bg-gray-200 transition">
            Submite now
            <img src={white_arrow} alt="" className="w-6 h-6 ml-3" />
          </button>
        </form>

        <span className="block my-5">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
