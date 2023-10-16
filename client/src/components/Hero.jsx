import React, { useEffect } from "react";
import BookingForm from "./BookingForm";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "YOUR PERSONAL CHAUFFUER SERVICE",
      "BOOK YOUR PERSONAL RIDE TODAY",
      "WE OFFER GREAT PRICES",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="#hero" className="sm:px-10 px-2">
      <section
        className="   sm:h-[650px] xl:bg-bottom rounded-xl bg-cover bg-center bg-no-repeat mt-[120px]   font-roboto  grid lg:grid-cols-2 sm:place-items-center"
        style={{
          backgroundImage: "url('/img/crv.jpg')",
        }}
      >
        {/* Gradient Overlay */}

        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="p-10 lg:-mt-60 "
        >
          <div>
            <h1 className="text-white text-[30px] lg:text-[50px] font-black  h-32">
              {text}
              <Cursor cursorColor="white" />
            </h1>
          </div>

          {/* <div className="relative pt-8">
            <button className="bg-black hover:bg-blue-700 text-white p-4 rounded-xl font-semibold">
              Open Fleet
            </button>
          </div> */}
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="p-2 rounded "
        >
          <BookingForm />
        </div>
      </section>
    </div>
  );
};
