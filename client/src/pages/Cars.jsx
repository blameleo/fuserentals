import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, useLocation } from "react-router-dom";

const Cars = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="#cars" className="py-[4rem] sm:px-10 px-2">
      <h1 className="text-center text-[30px] font-semibold tracking-wider">
        OUR CHAUFFEUR DRIVEN CARS
      </h1>
      <p className="text-center tracking-wide">PRICE GUIDE</p>
      <div className="my-20 grid place-items-center  lg:grid-cols-4 gap-8 ">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className=" mt-12 sm:mt-0 w-full px-4 "
        >
          <div className="w-64 mx-auto">
            <img className=" " src="/img/emojisky.com-8532015.png" alt="" />
          </div>

          <div className="pt-16">
            <h1 className="text-xl font-semibold tracking-widest">CITY CAR</h1>
            <div className="flex justify-between text-[15px] pt-4 border-b pb-2">
              <p className=" font-light">Freetown/Peninsula Hourly rate</p>
              <p className="font-bold">$20</p>
            </div>
            <div className="flex justify-between text-[15px] border-b py-2">
              <p className=" font-light">Freetown/Peninsula half day rate</p>
              <p className="font-bold">40</p>
            </div>
            <div className="flex justify-between text-[15px] border-b py-2">
              <p className=" font-light">Freetown/Peninsula Daily rate</p>
              <p className="font-bold">$60</p>
            </div>

            <div className="flex justify-between text-[15px] pt-2">
              <p className=" font-light">Province Daily rate</p>
              <p className="font-bold">$110</p>
            </div>
          </div>
          <NavLink to="/book">
            <div className="grid place-items-center">
              <button className="bg-black  hover:bg-gray-600 font-semibold text-white  rounded-lg py-2 my-4 px-4">
                BOOK THIS CAR
              </button>
            </div>
          </NavLink>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="mt-12 sm:mt-0 w-full px-4 "
        >
          <div className="w-52 mx-auto">
            <img
              className=""
              src="/img/2018-subaru-forester-2-5i-limited-sport-utility-vehicle-car-2017-subaru-forester-2-5i-limited-subaru-05a177cde83df2c1763a02c0c1582a19.png"
              alt=""
            />
          </div>

          <div className="pt-16">
            <h1 className="text-xl font-semibold tracking-widest">SMALL 4X4</h1>
            <div className="flex justify-between text-[15px] pt-4 border-b pb-2">
              <p className=" font-light">Freetown/Peninsula Hourly rate</p>
              <p className="font-bold">$20</p>
            </div>
            <div className="flex justify-between text-[15px] border-b py-2">
              <p className=" font-light">Freetown/Peninsula half day rate</p>
              <p className="font-bold">$40</p>
            </div>
            <div className="flex justify-between text-[15px] border-b py-2">
              <p className=" font-light">Freetown/Peninsula Daily rate</p>
              <p className="font-bold">$60</p>
            </div>

            <div className="flex justify-between text-[15px] pt-2">
              <p className=" font-light">Province Daily rate</p>
              <p className="font-bold">$110</p>
            </div>
          </div>
          <NavLink to="/book">
            <div className="grid place-items-center">
              <button className="bg-black  hover:bg-gray-600 font-semibold text-white  rounded-lg py-2 my-4 px-4">
                BOOK THIS CAR
              </button>
            </div>
          </NavLink>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="mt-16  sm:mt-0 w-full px-4 "
        >
          <div className=" mx-auto  w-72">
            <img
              className=" "
              src="/img/toyota-land-cruiser-prado-toyota-fj-cruiser-car-2017-toyota-land-cruiser-toyota-1fd28e9e070159ea6ee6371b7e687838.png"
              alt=""
            />
          </div>

          <div className="pt-16">
            <h1 className="text-xl font-semibold tracking-widest">
              RUGGED 4X4
            </h1>
            <div className="flex justify-between text-[15px] pt-4 border-b pb-2">
              <p className=" font-light">Freetown/Peninsula Hourly rate</p>
              <p className="font-bold">$30</p>
            </div>
            <div className="flex justify-between text-[15px] border-b py-2">
              <p className=" font-light">Freetown/Peninsula half day rate</p>
              <p className="font-bold">$50</p>
            </div>
            <div className="flex justify-between text-[15px] border-b py-2">
              <p className=" font-light">Freetown/Peninsula Daily rate</p>
              <p className="font-bold">$80</p>
            </div>

            <div className="flex justify-between text-[15px] pt-2">
              <p className=" font-light">Province Daily rate</p>
              <p className="font-bold">$130</p>
            </div>
          </div>

          <NavLink to="/book">
            <div className="grid place-items-center">
              <button className="bg-black  hover:bg-gray-600 font-semibold text-white  rounded-lg py-2 my-4 px-4">
                BOOK THIS CAR
              </button>
            </div>
          </NavLink>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="   sm:mt-0 w-full px-4 "
        >
          <div className=" mx-auto w-48">
            {" "}
            <img
              className="w-64"
              src="/img/Mercedes-V-Class-cutout-2021-581x450.webp"
              alt=""
            />
          </div>
          <div className="pt-1">
            <h1 className="text-xl font-semibold tracking-widest">7 SEATER</h1>
            <div className="flex justify-between text-[15px] pt-4 border-b pb-2">
              <p className=" font-light">Freetown/Peninsula Hourly rate</p>
              <p className="font-bold">$30</p>
            </div>
            <div className="flex justify-between text-[15px] border-b py-2">
              <p className=" font-light">Freetown/Peninsula half day rate</p>
              <p className="font-bold">$50</p>
            </div>
            <div className="flex justify-between text-[15px] border-b py-2">
              <p className=" font-light">Freetown/Peninsula Daily rate</p>
              <p className="font-bold">$80</p>
            </div>

            <div className="flex justify-between text-[15px] pt-2">
              <p className=" font-light">Province Daily rate</p>
              <p className="font-bold">$130</p>
            </div>
          </div>

          <NavLink to="/book">
            <div className="grid place-items-center">
              <button className="bg-black  hover:bg-gray-600 font-semibold text-white  rounded-lg py-2 my-4 px-4">
                BOOK THIS CAR
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cars;
