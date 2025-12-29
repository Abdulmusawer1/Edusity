import React, { useRef } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef(null);
  const tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -50) {
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div id="Testimonials" className="px-[10%]">
      <div className="relative w-full overflow-hidden my-20">
        {/* Next */}
        <img
          src={next_icon}
          alt="Next"
          className="absolute top-1/2 right-2 md:right-0 -translate-y-1/2 
          p-3 w-10 rounded-full cursor-pointer bg-blue-700 
          hover:bg-blue-900 z-10"
          onClick={slideForward}
        />

        {/* Back */}
        <img
          src={back_icon}
          alt="Back"
          className="absolute top-1/2 left-2 md:left-0 -translate-y-1/2 
          p-3 w-10 rounded-full cursor-pointer bg-blue-700 
          hover:bg-blue-900 z-10"
          onClick={slideBackward}
        />

        {/* Slider */}
        <div className="overflow-hidden">
          <ul
            ref={slider}
            className="flex w-[400%] md:w-[200%] gap-x-6 
            transition-transform duration-500 ease-in-out"
            style={{ transform: "translateX(0%)" }}
          >
            {/* Card 1 */}
            <li className="w-full md:w-[50%] p-5">
              <div className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-xl text-[#444]">
                <div className="flex items-center mb-4">
                  <img
                    src={user_1}
                    alt=""
                    className="w-16 h-16 rounded-full mr-3 border-4 border-blue-700 object-cover"
                  />
                  <div>
                    <h3 className="text-[#1E2A8A] font-semibold text-lg">
                      William Jackson
                    </h3>
                    <span className="text-sm text-gray-500">Edusity, USA</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus eos id perspiciatis odit praesentium iste ab, fuga
                  facilis sunt, voluptatibus cumque iusto exercitationem
                  laboriosam suscipit inventore dicta minus sequi ipsum veniam
                  eum, distinctio
                </p>
              </div>
            </li>

            {/* Card 2 */}
            <li className="w-full md:w-[50%] p-5">
              <div className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-xl text-[#444]">
                <div className="flex items-center mb-4">
                  <img
                    src={user_2}
                    alt=""
                    className="w-16 h-16 rounded-full mr-3 border-4 border-blue-700 object-cover"
                  />
                  <div>
                    <h3 className="text-[#1E2A8A] font-semibold text-lg">
                      Sarah Adams
                    </h3>
                    <span className="text-sm text-gray-500">Edusity, UK</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat numquam voluptate repudiandae in ipsa, tenetur fugit.
                  Deleniti cum, id labore nulla autem deserunt vero
                  reprehenderit eum sit veritatis quae placeat?
                </p>
              </div>
            </li>

            {/* Card 3 */}
            <li className="w-full md:w-[50%] p-5">
              <div className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-xl text-[#444]">
                <div className="flex items-center mb-4">
                  <img
                    src={user_3}
                    alt=""
                    className="w-16 h-16 rounded-full mr-3 border-4 border-blue-700 object-cover"
                  />
                  <div>
                    <h3 className="text-[#1E2A8A] font-semibold text-lg">
                      Michael Chen
                    </h3>
                    <span className="text-sm text-gray-500">
                      Edusity, Canada
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente et eum officiis obcaecati perspiciatis corrupti atque
                  nihil ipsum at sequi, maiores facilis ipsa enim animi? Fugit
                  corporis impedit vero a!
                </p>
              </div>
            </li>

            {/* Card 4 */}
            <li className="w-full md:w-[50%] p-5">
              <div className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-xl text-[#444]">
                <div className="flex items-center mb-4">
                  <img
                    src={user_4}
                    alt=""
                    className="w-16 h-16 rounded-full mr-3 border-4 border-blue-700 object-cover"
                  />
                  <div>
                    <h3 className="text-[#1E2A8A] font-semibold text-lg">
                      Emma Davis
                    </h3>
                    <span className="text-sm text-gray-500">Edusity, AUS</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  quaerat doloremque tempore eius, quidem ut beatae, inventore
                  neque esse tenetur voluptates dzzvg eleniti modi nesciunt quos
                  voluptatibus dicta
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
