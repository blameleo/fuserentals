import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  // Define state variables for form fields
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [telephone, setTelephone] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const personInfo = {
      email,
      name,
      pickupLocation,
      telephone,
    };

    const existingData = JSON.parse(localStorage.getItem("formData")) || {};
    const updatedData = {
      ...existingData,
      personInfo,
    };
    localStorage.setItem("formData", JSON.stringify(updatedData));
    navigate("/payment");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-sky-50 h-[20vh] sm:py-[150px] mt-20 flex justify-center items-center">
        <div>
          <h1 className="md:text-[50px] sm:font-normal sm:tracking-wider uppercase px-8 sm:px-0">
            Please enter your details
          </h1>
          <div className="sm:grid grid-cols-9 place-items-center text-[12px] sm:text-base pt-4 sm:pt-0 hidden px-2">
            <div className="border border-blue-500 text-gray-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
              <p>1</p>
            </div>
            <p className=" text-gray-300 ">Locations</p>
            <span className="border w-6 border-black "></span>
            <div className="border border-blue-500 text-gray-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
              <p>2</p>
            </div>
            <p className=" text-gray-300 ">Cars</p>
            <div className="border bg-blue-500 text-white border-blue-500 rounded-full w-6 h-6  sm:w-8 sm:h-8 flex justify-center items-center ">
              <p className="text-gray-300">3</p>
            </div>
            <span className="border w-8 border-black "></span>
            <div className="border  border-gray-300 rounded-full sm:w-8 sm:h-8 w-6 h-6 flex justify-center items-center ">
              <p className="text-gray-300">4</p>
            </div>
            <p className="text-gray-300 ">Payment</p>
          </div>
        </div>
      </div>

      <div className="py-16 ">
        <form
          className="  grid sm:place-items-center px-8 sm:px-0 "
          onSubmit={handleSubmit}
        >
          {/* <div className="border"> */}
          <div className="mb-6  sm:w-[400px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@xyz.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 sm:w-[400px]">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 sm:w-[400px]">
            <label
              htmlFor="pickupLocation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your pick up location
            </label>
            <input
              type="text"
              id="pickupLocation"
              placeholder="3rd street"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 sm:w-[400px]">
            <label
              htmlFor="tel"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your telephone number
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="+232 234 2355"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          {/* </div> */}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
