import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsCheckCircle } from "react-icons/bs";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { CiRollingSuitcase } from "react-icons/ci";
import { PiHandbagSimpleLight } from "react-icons/pi";
// Import useHistory for navigation

const Booking = () => {
  const navigate = useNavigate();
  const formData = JSON.parse(localStorage.getItem("formData"));
  const [price, setPrice] = useState({
    CityCar: 0,
    Small4x4: 0,
    Rugged4x4: 0,
    SevenSeater: 0,
  });
  const pricingData = {
    Hourly: {
      FreetownPeninsula: {
        CityCar: 20,
        Small4x4: 20,
        Rugged4x4: 30,
        SevenSeater: 30,
      },
    },
    "1/2 Day": {
      FreetownPeninsula: {
        CityCar: 40,
        Small4x4: 40,
        Rugged4x4: 50,
        SevenSeater: 50,
      },
    },

    Day: {
      FreetownPeninsula: {
        CityCar: 60,
        Small4x4: 60,
        Rugged4x4: 80,
        SevenSeater: 80,
      },
      Province: {
        CityCar: 110,
        Small4x4: 110,
        Rugged4x4: 130,
        SevenSeater: 130,
      },
    },
  };

  console.log(formData);

  const handleBookCar = (carType, carPrice, carImage) => {
    const existingData = JSON.parse(localStorage.getItem("formData")) || {};
    const carDetails = {
      type: carType,
      price: carPrice,
      carImage,
    };
    const updatedData = {
      ...existingData,
      carDetails: carDetails,
    };
    localStorage.setItem("formData", JSON.stringify(updatedData));
    console.log(updatedData);
    navigate("/details");
  };

  useEffect(() => {
    if (formData.hours) {
      console.log(formData.selectedValue);
      console.log(formData?.bookingType);
      const cityCarPrice =
        pricingData[formData.bookingType][formData.selectedValue]["CityCar"] *
        formData.hours;
      console.log(cityCarPrice);
      const Small4x4 =
        pricingData[formData.bookingType][formData.selectedValue]["Small4x4"] *
        formData.hours;
      const Rugged4x4 =
        pricingData[formData.bookingType][formData.selectedValue]["Rugged4x4"] *
        formData.hours;
      const SevenSeater =
        pricingData[formData.bookingType][formData.selectedValue][
          "SevenSeater"
        ] * formData.hours;

      setPrice({
        CityCar: cityCarPrice,
        Small4x4: Small4x4,
        Rugged4x4: Rugged4x4,
        SevenSeater: SevenSeater,
      });
    } else {
      const cityCarPrice =
        pricingData[formData.bookingType][formData.selectedValue]["CityCar"];
      const Small4x4 =
        pricingData[formData.bookingType][formData.selectedValue]["Small4x4"];
      const Rugged4x4 =
        pricingData[formData.bookingType][formData.selectedValue]["Rugged4x4"];
      const SevenSeater =
        pricingData[formData.bookingType][formData.selectedValue][
          "SevenSeater"
        ];

      setPrice({
        CityCar: cityCarPrice,
        Small4x4: Small4x4,
        Rugged4x4: Rugged4x4,
        SevenSeater: SevenSeater,
      });
    }
  }, []);

  return (
    <div>
      <Navbar />

      <div className="    mt-[100px] ">
        <div className="bg-sky-50 h-[20vh] sm:h-[40vh] flex justify-center items-center">
          <div>
            <h1 className="md:text-[70px] sm:font-normal sm:tracking-wider uppercase px-8 sm:px-0">
              Select your car
            </h1>
            <div className="hidden sm:flex items-center justify-center  w-full text-[12px] sm:text-base pt-4 sm:pt-0   ">
              <div className="border border-blue-500 text-gray-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
                <p>1</p>
              </div>
              <p className="sm:px-2 text-gray-300 px-1">Locations</p>
              <span className="border w-6 border-black sm:mr-2"></span>
              <div className="border bg-blue-500 text-white border-blue-500 rounded-full w-6 h-6 sm:mr-2 sm:w-8 sm:h-8 flex justify-center items-center mx-1">
                <p>2</p>
              </div>
              <span className="border w-16 border-black sm:mr-2"></span>
              <div className="border sm:mr-2 border-gray-300 rounded-full sm:w-8 sm:h-8 w-6 h-6 flex justify-center items-center mx-1">
                <p className="text-gray-300">3</p>
              </div>
              <p className="sm:mr-2 text-gray-300">Your Details</p>
              <div className="border sm:mr-2 border-gray-300 rounded-full sm:w-8 sm:h-8 w-6 h-6 flex justify-center items-center mx-1">
                <p className="text-gray-300">4</p>
              </div>
              <p className="text-gray-300">Payment</p>
            </div>
          </div>
        </div>

        <div className=" grid place-items-center  px-8">
          <div className="  mt-16">
            <h1 className="text-xl font-semibold tracking-widest  sm:px-0 pt-4">
              CITY CAR
            </h1>
            <div className="grid grid-cols-3 py-4">
              <div className="flex items-center text-sm">
                {" "}
                <MdAirlineSeatReclineExtra className="mr-1" /> 4 adults
              </div>

              <div className="flex items-center text-sm">
                {" "}
                <CiRollingSuitcase className="mr-1" />
                suitcases
              </div>

              <div className="flex items-center text-sm">
                <PiHandbagSimpleLight className="mr-1" /> carry on bags
              </div>
            </div>

            <div className="sm:flex items-center justify-between sm:w-[]  lg:w-[900px]  ">
              <div className="sm:w-[350px] px-8 ">
                <img className=" " src="/img/emojisky.com-8532015.png" alt="" />
              </div>

              <div className=" py-8 sm:py-0 sm:mx-8">
                <div className="flex items-center text-[15px]  border-b pb-2 ">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">First class chauffeur</p>
                </div>
                <div className="flex items-center text-[15px] border-b py-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">
                    free 60 mins airport parking and waiting
                  </p>
                </div>
                <div className="flex items-center text-[15px] border-b py-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">includes meet and greet</p>
                </div>

                <div className="flex items-center text-[15px] pt-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">Great customer service</p>
                </div>
              </div>

              <div className=" flex flex-col sm:block">
                <p className="text-[12px]">Your journey price is </p>
                <p className="text-left font-bold text-[40px]">
                  ${price.CityCar}
                </p>
                <button
                  onClick={() =>
                    handleBookCar(
                      "CityCar",
                      price.CityCar,
                      "/img/emojisky.com-8532015.png"
                    )
                  }
                  className="bg-black  justify-center hover:bg-gray-600 font-semibold text-white mt-4  rounded-lg py-4 px-4 text-[11px] tracking-wide flex items-center "
                >
                  SELECT THIS CAR{" "}
                  <BsFillArrowRightCircleFill className="ml-4" />
                </button>
              </div>
            </div>

            {/* <p>{price.CityCar}</p> */}
          </div>

          <div className=" mt-16 ">
            <h1 className="text-xl font-semibold tracking-widest  pt-4 sm:px-0">
              Small4x4
            </h1>
            <div className="grid grid-cols-3 py-4">
              <div className="flex items-center text-sm">
                {" "}
                <MdAirlineSeatReclineExtra className="mr-1" /> 4 adults
              </div>

              <div className="flex items-center text-sm">
                {" "}
                <CiRollingSuitcase className="mr-1" />
                suitcases
              </div>

              <div className="flex items-center text-sm">
                <PiHandbagSimpleLight className="mr-1" /> carry on bags
              </div>
            </div>

            <div
              className="sm:flex items-center justify-between  lg:w-[900px]  
            "
            >
              <div className="sm:w-[350px]  ">
                <img
                  className=" "
                  src="/img/2018-subaru-forester-2-5i-limited-sport-utility-vehicle-car-2017-subaru-forester-2-5i-limited-subaru-05a177cde83df2c1763a02c0c1582a19.png"
                  alt=""
                />
              </div>

              <div className=" py-8 sm:py-0 sm:mx-8">
                <div className="flex items-center text-[15px]  border-b pb-2 ">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">First class chauffeur</p>
                </div>
                <div className="flex items-center text-[15px] border-b py-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">
                    free 60 mins airport parking and waiting
                  </p>
                </div>
                <div className="flex items-center text-[15px] border-b py-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">includes meet and greet</p>
                </div>

                <div className="flex items-center text-[15px] pt-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">Great customer service</p>
                </div>
              </div>

              <div className=" flex flex-col sm:block">
                <p className="text-[12px]">Your journey price is </p>
                <p className="text-left font-bold text-[40px]">
                  ${price.Small4x4}
                </p>
                <button
                  onClick={() =>
                    handleBookCar(
                      "Small4x4",
                      price.Small4x4,
                      "/img/2018-subaru-forester-2-5i-limited-sport-utility-vehicle-car-2017-subaru-forester-2-5i-limited-subaru-05a177cde83df2c1763a02c0c1582a19.png"
                    )
                  }
                  className="bg-black  justify-center hover:bg-gray-600 font-semibold text-white  rounded-lg py-4 px-4 text-[11px] tracking-wide flex items-center"
                >
                  SELECT THIS CAR{" "}
                  <BsFillArrowRightCircleFill className="ml-4" />
                </button>
              </div>
            </div>

            {/* <p>{price.CityCar}</p> */}
          </div>

          <div className=" mt-16 ">
            <h1 className="text-xl font-semibold tracking-widest  sm:px-0 pt-4">
              RUGGED 4X4
            </h1>
            <div className="grid grid-cols-3 py-4">
              <div className="flex items-center text-sm">
                {" "}
                <MdAirlineSeatReclineExtra className="mr-1" /> 4 adults
              </div>

              <div className="flex items-center text-sm">
                {" "}
                <CiRollingSuitcase className="mr-1" />
                suitcases
              </div>

              <div className="flex items-center text-sm">
                <PiHandbagSimpleLight className="mr-1" /> carry on bags
              </div>
            </div>

            <div className="sm:flex items-center justify-between  lg:w-[900px]  ">
              <div className="sm:w-[350px]  ">
                <img
                  className=" "
                  src="/img/toyota-land-cruiser-prado-toyota-fj-cruiser-car-2017-toyota-land-cruiser-toyota-1fd28e9e070159ea6ee6371b7e687838.png"
                  alt=""
                />
              </div>

              <div className=" py-8 sm:py-0 sm:mx-8">
                <div className="flex items-center text-[15px]  border-b pb-2 ">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">First class chauffeur</p>
                </div>
                <div className="flex items-center text-[15px] border-b py-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">
                    free 60 mins airport parking and waiting
                  </p>
                </div>
                <div className="flex items-center text-[15px] border-b py-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">includes meet and greet</p>
                </div>

                <div className="flex items-center text-[15px] pt-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">Great customer service</p>
                </div>
              </div>

              <div className=" flex flex-col sm:block">
                <p className="text-[12px]">Your journey price is </p>
                <p className="text-left font-bold text-[40px]">
                  ${price.Rugged4x4}
                </p>
                <button
                  onClick={() =>
                    handleBookCar(
                      "Rugged4x4",
                      price.Rugged4x4,
                      "/img/toyota-land-cruiser-prado-toyota-fj-cruiser-car-2017-toyota-land-cruiser-toyota-1fd28e9e070159ea6ee6371b7e687838.png"
                    )
                  }
                  className="bg-black  justify-center hover:bg-gray-600 font-semibold text-white  rounded-lg py-4 px-4 text-[11px] tracking-wide flex items-center"
                >
                  SELECT THIS CAR{" "}
                  <BsFillArrowRightCircleFill className="ml-4" />
                </button>
              </div>
            </div>

            {/* <p>{price.CityCar}</p> */}
          </div>

          <div className=" my-16 ">
            <h1 className="text-xl font-semibold tracking-widest  pt-4 sm:px-0">
              7 SEATER
            </h1>
            <div className="grid grid-cols-3 py-4">
              <div className="flex items-center text-sm">
                {" "}
                <MdAirlineSeatReclineExtra className="mr-1" /> 4 adults
              </div>

              <div className="flex items-center text-sm">
                {" "}
                <CiRollingSuitcase className="mr-1" />
                suitcases
              </div>

              <div className="flex items-center text-sm">
                <PiHandbagSimpleLight className="mr-1" /> carry on bags
              </div>
            </div>

            <div className="sm:flex items-center justify-between  lg:w-[900px]  ">
              <div className="sm:w-[350px]  ">
                <img
                  className=" "
                  src="/img/Mercedes-V-Class-cutout-2021-581x450.webp"
                  alt=""
                />
              </div>

              <div className=" py-8 sm:py-0 sm:mx-8">
                <div className="flex items-center text-[15px]  border-b pb-2 ">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">First class chauffeur</p>
                </div>
                <div className="flex items-center text-[15px] border-b py-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">
                    free 60 mins airport parking and waiting
                  </p>
                </div>
                <div className="flex items-center text-[15px] border-b py-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">includes meet and greet</p>
                </div>

                <div className="flex items-center text-[15px] pt-2">
                  <BsCheckCircle />

                  <p className=" font-light ml-8">Great customer service</p>
                </div>
              </div>
              <div className=" flex flex-col sm:block">
                <p className="text-[12px]">Your journey price is </p>
                <p className="text-left font-bold text-[40px]">
                  ${price.SevenSeater}
                </p>
                <button
                  onClick={() =>
                    handleBookCar(
                      "SevenSeater",
                      price.SevenSeater,
                      "/img/Mercedes-V-Class-cutout-2021-581x450.webp"
                    )
                  }
                  className="bg-black  justify-center hover:bg-gray-600 font-semibold text-white  rounded-lg py-4 px-4 text-[11px] tracking-wide flex items-center"
                >
                  SELECT THIS CAR{" "}
                  <BsFillArrowRightCircleFill className="ml-4" />
                </button>
              </div>
            </div>

            {/* <p>{price.CityCar}</p> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
