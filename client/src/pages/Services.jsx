import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-16 bg-zinc-900 text-white">
      <h1 className="text-center text-[30px] font-semibold tracking-wider">
        OUR SERVICES
      </h1>
      <p className="text-center tracking-wide">
        TAILOR MADE TRAVEL JUST FOR YOU
      </p>
      <p className="bg-white w-32 border-b text-center mx-auto mt-4"></p>

      <div className="sm:flex justify-center mt-10">
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          className="sm:w-[25%] bg-zinc-800 mx-8 sm:mx-0 pb-8"
        >
          <div>
            <img src="/img/as-directed-main-image-818x480.webp" alt="" />
          </div>

          <div className="p-4">
            <h1 className="tracking-wider font-semibold text-lg">
              BY THE HOUR
            </h1>
            <p className="text-gray-400">As Directed Hire</p>
          </div>
          <p className="p-4">
            Transparent hourly pricing with no hidden extras keeps you in
            control
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          className="sm:w-[25%] bg-zinc-800 sm:mx-8 mx-8 my-10 sm:my-0"
        >
          <div>
            <img src="/img/airport-chauffeur-1-818x480.webp" alt="" />
          </div>

          <div className="p-4">
            <h1 className="tracking-wider font-semibold text-lg">AIRPORT</h1>
            <p className="text-gray-400">Meet and Greet</p>
          </div>
          <p className="p-4">
            Expect high-flying service and style with our all inclusive airport
            meet and greet service.
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          className="sm:w-[25%] bg-zinc-800 mx-8 sm:mx-0"
        >
          <div>
            <img src="/img/Rolls-Royce-lady-door-818x480.webp" alt="" />
          </div>

          <div className="p-4">
            <h1 className="tracking-wider font-semibold text-lg">ONE WAY</h1>
            <p className="text-gray-400">First Class Service From A to B</p>
          </div>
          <p className="p-4">
            Enjoy safe and luxurious travel from pickup to destination
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
