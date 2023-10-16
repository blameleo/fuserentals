import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      id="#about"
      className="py-[3rem] sm:px-10 px-2"
    >
      <h1 className="text-center text-[30px] font-semibold tracking-wider">
        ABOUT US
      </h1>
      <p className="text-center tracking-wide pb-8">LET US TELL YOU MORE</p>
      <p className=" px-4 leading-10  lg:w-[900px] mx-auto">
        At FreetownRentals, Service and Quality are at the core of everything we
        are trying to achieve. <br /> Based on Quality, our Service levels must
        be Second to None. This is why: <br /> • We come to you, at your
        convenience. Pick you up, and drop you off. <br /> • Our Cars and Bikes
        are Checked and Cleaned Daily. <br />• Our in-house mechanic checks the
        cars weekly. Minor Service is carried out every 2000 miles. Major
        overhaul Service every 10,000 miles. <br /> • All our cars are air
        conditioned. <br />• We offer a wide variety of vehicles to suit every
        requirement and need. <br />• We cover the entire country, with the
        proviso that the driver is in charge and not allowed to endanger you,
        the vehicle or other road users. <br /> You are our customer and your
        comfort, your safety are paramount. Our drivers have strict instructions
        to not do anything that call this into question. In so doing, we add,
        the safety and comfort of other road users, the driver and the vehicle.
        <br />
        There will be times when we fall short. That is why, we welcome any
        input that improves your experience with us. Please send them to
        <span className="text-blue-500">info@freetownrentals.com.</span>{" "}
      </p>
    </div>
  );
};

export default About;
