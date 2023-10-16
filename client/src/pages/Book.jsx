import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCheckCircle, BsFillArrowRightCircleFill } from "react-icons/bs";

const Book = () => {
  const [selectedValue, setSelectedValue] = useState("1 hour");
  const [pickupAddress, setPickupAddress] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [hours, setHours] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [telephone, setTelephone] = useState("");
  console.log(hours);
  const pricingData = {
    "1 hour": {
      FreetownPeninsula: {
        CityCar: 20,
        Small4x4: 20,
        Rugged4x4: 30,
        SevenSeater: 30,
      },
      // Province: {
      //   CityCar: 20,
      //   Small4x4: 25,
      //   Rugged4x4: 30,
      //   SevenSeater: 35,
      // },
    },
    "1/2 Day": {
      FreetownPeninsula: {
        CityCar: 40,
        Small4x4: 40,
        Rugged4x4: 50,
        SevenSeater: 50,
      },
      // Province: {
      //   CityCar: 40,
      //   Small4x4: 45,
      //   Rugged4x4: 50,
      //   SevenSeater: 55,
      // },
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigate = useNavigate();
  const personInfo = {
    email,
    name,
    pickupLocation,
    telephone,
  };

  console.log(hours);

  const handleSubmit = (carType, carImage) => {
    let calculatedPrice = null;
    console.log(hours);

    if (hours && carType === "CityCar") {
      const carPrice = pricingData[selectedValue][bookingType][carType] * hours;

      calculatedPrice = carPrice;
    } else if (hours && carType === "Small4x4") {
      const carPrice = pricingData[selectedValue][bookingType][carType] * hours;

      calculatedPrice = carPrice;
    } else if (hours && carType === "Rugged4x4") {
      const carPrice = pricingData[selectedValue][bookingType][carType] * hours;

      calculatedPrice = carPrice;
    } else if (hours && carType === "SevenSeater") {
      const carPrice = pricingData[selectedValue][bookingType][carType] * hours;

      calculatedPrice = carPrice;
    } else if (carType === "CityCar") {
      const carPrice = pricingData[selectedValue][bookingType][carType];
      calculatedPrice = carPrice;
    } else if (carType === "Small4x4") {
      const carPrice = pricingData[selectedValue][bookingType][carType];
      calculatedPrice = carPrice;
    } else if (carType === "Rugged4x4") {
      const carPrice = pricingData[selectedValue][bookingType][carType];
      calculatedPrice = carPrice;
    } else if (carType === "SevenSeater") {
      const carPrice = pricingData[selectedValue][bookingType][carType];
      calculatedPrice = carPrice;
    }

    setPrice(calculatedPrice);

    const carDetails = {
      type: carType,
      price: calculatedPrice,
      carImage,
    };

    const formData = {
      selectedValue,
      // pickupAddress,
      bookingType,
      date,
      time,
      hours,
      price,
      personInfo,
      carDetails,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);

    navigate("/payment");
  };
  console.log(selectedValue);
  return (
    <div>
      <Navbar />
      <div className="sm:grid grid-cols-2  place-items-center">
        <div className="  p-4 rounded-xl mt-20 sm:mt-28 ">
          <h1 className="text-center font text-2xl pb-4">
            <span className="bg-black text-white px-2 mr-2 rounded">1</span>{" "}
            BOOK YOUR RENTAL
          </h1>
          <form>
            <ul className="flex px-2 font-roboto justify-evenly mb-4">
              <li className="relative ">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="hourly"
                  name="hourly"
                  id="hourly"
                  checked={selectedValue === "1 hour"}
                  onChange={() => {
                    setSelectedValue("1 hour");
                  }}
                />
                <label
                  className={`flex py-2 px-4  text-gray-600 border border-zinc-500  text-[13px] hover:bg-gray-300 hover:text-black text-center ${
                    selectedValue === "1 hour"
                      ? "bg-black text-white font-bold active:bg-black active:text-white active:font-bold"
                      : ""
                  }    rounded-lg cursor-pointer focus:outline-none  `}
                  htmlFor="hourly"
                >
                  1 hour
                </label>
              </li>

              <li className="relative border-r border-l px-4 border-gray-300">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="halfDay"
                  id="halfDay"
                  checked={selectedValue === "1/2 Day"}
                  onChange={() => {
                    setSelectedValue("1/2 Day");
                    // console.log(selectedValue);
                  }}
                  required
                />
                <label
                  className={`flex py-2  px-4  text-black border border-zinc-500  hover:bg-gray-300 hover:text-black text-[13px] font-roboto  ${
                    selectedValue === "1/2 Day"
                      ? "bg-black text-white font-bold active:bg-black active:text-white active:font-bold"
                      : ""
                  }  text-[13px] cursor-pointer focus:outline-none rounded-lg `}
                  htmlFor="halfDay"
                >
                  1/2 Day
                </label>
              </li>

              <li className="relative">
                <input
                  required
                  className="sr-only peer"
                  type="radio"
                  value="day"
                  id="day"
                  checked={selectedValue === "Day"}
                  onChange={() => {
                    setSelectedValue("Day");
                    // console.log(selectedValue);
                  }}
                />
                <label
                  className={`flex py-2  px-4  text-black border border-zinc-500  hover:bg-gray-300 hover:text-black text-[13px] font-roboto ${
                    selectedValue === "Day"
                      ? "bg-black text-white font-bold active:bg-black active:text-white active:font-bold"
                      : ""
                  }  rounded-lg cursor-pointer focus:outline-none  `}
                  htmlFor="day"
                >
                  Day
                </label>
              </li>
            </ul>

            {selectedValue === "1 hour" && (
              <div className="mb-6">
                <label
                  for="hours"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Duration
                </label>

                <select
                  required
                  value={hours}
                  onChange={(e) => {
                    let val = parseInt(e.target.value);
                    setHours(val);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled value="">
                    Hire Duration
                  </option>
                  <option value={1}>1 hour</option>
                  <option value={2}>2 hours</option>
                  <option value={3}>3 hours</option>
                  <option value={4}>4 hours</option>
                  <option value={5}>5 hours</option>
                  <option value={6}>6 hours</option>
                  <option value={7}>7 hours</option>
                  <option value={8}>8 hours</option>
                  <option value={9}>9 hours</option>
                  <option value={10}>10 hours</option>
                  <option value={11}>11 hours</option>
                </select>
              </div>
            )}
            {/* <input
          type="text"
          placeholder="Pick Up Address"
          value={pickupAddress}
          onChange={(e) => setPickupAddress(e.target.value)}
          className="input sm:input-sm w-[100%]  bg-gray-300 mt-2 border"
        /> */}

            <div className="mb-6">
              <label
                for="hours"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Booking type
              </label>

              <select
                required
                value={bookingType}
                onChange={(e) => {
                  setBookingType(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled value="">
                  Booking Type
                </option>
                <option value="FreetownPeninsula">Freetown/Peninsula</option>
                <option
                  disabled={
                    selectedValue === "1 hour" || selectedValue === "1/2 Day"
                  }
                  value="Province"
                >
                  Province
                </option>
              </select>
            </div>

            {/* <select
          value={selectedCar}
          onChange={(e) => {
            setSelectedCar(e.target.value);
          }}
          className="select sm:select-sm w-[100%]  bg-gray-300 mt-2 text-gray-500"
        >
          <option disabled value="">
            Select a Car
          </option>
          <option value="CityCar">City Car</option>
          <option value="Small4x4">Small 4x4</option>
          <option value="Rugged4x4">Rugged 4x4</option>
          <option value="SevenSeater">7 Seater</option>
        </select> */}
            <div className="flex  mb-6">
              <div>
                <label
                  for="hours"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select a date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-gray-50 border w-full border-gray-300 text-gray-900 mr- text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="sm:ml-4">
                <label
                  for="hours"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select a date
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            {/* <div className="  w-[80%] mt-4">
              <button className="bg-[#27bf9e] text-white font-bold px-8 py-2 rounded-[8px] ml-8 w-full">
                Get Prices
              </button>

              {/* <p className="font-black text-[30px]">${price == null ? 0 : price}</p> */}
            {/* </div> */}

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
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
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="mb-6">
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
          </form>
        </div>
        <div className="rounded-xl w-full  mr-6 p-10  ">
          <h1 className="text-center font text-2xl -mt-10 pb-10  ">
            <span className="bg-black text-white px-2 mr-2 rounded">2</span>{" "}
            Select a car
          </h1>
          <Slider {...settings}>
            <div className="  ">
              <div className="w-64 mx-auto">
                <img className=" " src="/img/emojisky.com-8532015.png" alt="" />
              </div>

              <div className="pt-16">
                <h1 className="text-xl font-semibold tracking-widest">
                  CITY CAR
                </h1>
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

              <div
                onClick={() =>
                  handleSubmit(
                    "CityCar",

                    "/img/emojisky.com-8532015.png"
                  )
                }
                className="bg-black hover:bg-gray-600 font-semibold text-white w-full rounded-lg py-2 mt-4 flex justify-center items-center"
              >
                <button>BOOK THIS CAR</button>
                <BsFillArrowRightCircleFill className="ml-4" />
              </div>
            </div>

            <div className="mt-12 sm:mt-0 w-full px-4">
              <div className="w-48 mx-auto">
                <img
                  className=""
                  src="/img/2018-subaru-forester-2-5i-limited-sport-utility-vehicle-car-2017-subaru-forester-2-5i-limited-subaru-05a177cde83df2c1763a02c0c1582a19.png"
                  alt=""
                />
              </div>

              <div className="pt-16">
                <h1 className="text-xl font-semibold tracking-widest">
                  SMALL 4X4
                </h1>
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

              <div
                onClick={() =>
                  handleSubmit(
                    "Small4x4",
                    "/img/2018-subaru-forester-2-5i-limited-sport-utility-vehicle-car-2017-subaru-forester-2-5i-limited-subaru-05a177cde83df2c1763a02c0c1582a19.png"
                  )
                }
                className="bg-black hover:bg-gray-600 font-semibold text-white w-full rounded-lg py-2 mt-4 flex justify-center items-center"
              >
                <button>BOOK THIS CAR</button>
                <BsFillArrowRightCircleFill className="ml-4" />
              </div>
            </div>

            <div className="mt-12 sm:mt-0 w-full px-4">
              <div className=" mx-auto  w-64">
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

              <div
                onClick={() =>
                  handleSubmit(
                    "Rugged4x4",
                    "/img/toyota-land-cruiser-prado-toyota-fj-cruiser-car-2017-toyota-land-cruiser-toyota-1fd28e9e070159ea6ee6371b7e687838.png"
                  )
                }
                className="bg-black hover:bg-gray-600 font-semibold text-white w-lg rounded-lg py-2 mt-4 flex justify-center items-center"
              >
                <button>BOOK THIS CAR</button>
                <BsFillArrowRightCircleFill className="ml-4" />
              </div>
            </div>

            <div className=" mt-12 sm:-mt-[38px] w-full px-4">
              <div className=" mx-auto w-64">
                {" "}
                <img
                  className="w-64"
                  src="/img/Mercedes-V-Class-cutout-2021-581x450.webp"
                  alt=""
                />
              </div>
              <div className="pt-1">
                <h1 className="text-xl font-semibold tracking-widest">
                  7 SEATER
                </h1>
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

              <div
                onClick={() =>
                  handleSubmit(
                    "SevenSeater",
                    "/img/Mercedes-V-Class-cutout-2021-581x450.webp"
                  )
                }
                className="bg-black hover:bg-gray-600 font-semibold text-white w-full rounded-lg py-2 mt-4 flex justify-center items-center"
              >
                <button>BOOK THIS CAR</button>
                <BsFillArrowRightCircleFill className="ml-4" />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Book;
