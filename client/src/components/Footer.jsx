import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { LiaTelegramPlane } from "react-icons/lia";
import { AiFillCar } from "react-icons/ai";
import { BsInfoSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="   py-20 px-5  text-white  bg-zinc-900 ">
      {/* <div className=" mb-10 place-items-center flex justify-center flex-col md:flex-row ">
        <NavLink to="/book">
          <button className="h-10 w-40  px-2 md:mr-10 sm:h-14 sm:w-60 bg-white text-gray-400 flex justify-center items-center hover:bg-blue-500 hover:text-white  mb-5">
            <AiFillCar className="mr-3 text-xl sm:text-2xl" />
            <p>BOOK A CAR</p>
          </button>
        </NavLink>

        <button className=" h-10 w-40 px-2 md:mr-10 sm:h-14 sm:w-60 bg-white text-gray-400 flex justify-center items-center hover:bg-blue-500 hover:text-white  mb-5">
          <BsInfoSquareFill className="mr-3 text-xl sm:text-2xl" />{" "}
          <p>ABOUT US</p>
        </button>
        <button className=" h-10 px-2 w-40  sm:h-14 sm:w-60 bg-white text-gray-400 flex justify-center items-center hover:bg-blue-500 hover:text-white  mb-5">
          <LiaTelegramPlane className=" mr-3 text-xl sm:text-2xl " />{" "}
          <p>CONTACT US</p>
        </button>
      </div> */}

      <div className="sm:flex  items-start sm:items-center sm:justify-center">
        <div className="    ">
          <img
            className="w-40 rounded mb-2 sm:w-64 "
            src="/img/logo.png"
            alt=""
          />
        </div>

        <div className="text-[20px] sm:ml-5  text">
          {" "}
          <span className="text-blue-700  text-2xl sm:text-3xl">Fuse</span>
          <span className=" text-2xl sm:text-3xl">Rentals.com</span>{" "}
          <p className="text-sm  mt-2">Address: Lorem ipsum dolor sit amet </p>
          <p className="text-sm font-bold mt-2">Sierra leone : +23230736367</p>
        </div>
      </div>

      <div className="border-b mt-7 sm:text-center">
        <p className="mb-5 font-thin text-xs">
          Copyright © 2023 FuseRental Ltd. All rights reserved.
        </p>
      </div>
      <h1 className="mt-3 text-2xl font-bold sm:text-center">
        Connect with Us
      </h1>

      <div className="flex mt-1  sm:justify-center">
        <div className="border p-2 text-black bg-white mr-3 mt-4 text-2xl ">
          <Link>
            <FaFacebookF />
          </Link>
        </div>
        <div className="border p-2 text-black bg-white mr-3 mt-4 text-2xl">
          <Link>
            <BsTwitter />
          </Link>
        </div>
        <div className="border p-2 text-black bg-white mr-3 mt-4 text-2xl">
          <Link>
            <BiLogoGmail />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
