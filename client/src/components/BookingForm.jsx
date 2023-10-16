import React, { useEffect, useState } from "react";
import "react-time-picker/dist/TimePicker.css"; // Import the styles like this
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [selectedValue, setSelectedValue] = useState("1 hour");
  const [pickupAddress, setPickupAddress] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [hours, setHours] = useState(null);
  const [date, setDate] = useState("2023-01-01");
  const [time, setTime] = useState("00:00");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  // useEffect(() => {
  //   // Calculate the price based on selected options
  //   if (bookingType || selectedCar) {
  //     const newPrice = pricingData[selectedValue][bookingType][selectedCar];
  //     setPrice(newPrice);
  //   }
  // }, [selectedValue, bookingType, selectedCar]);

  const handleDatePickerChange = (selectedDate) => {
    setDate(selectedDate);
    console.log(selectedDate); // This will log the selected date to the console
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedValue,
      pickupAddress,
      bookingType,
      date,
      time,
      price,
      hours,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);

    navigate("/booking");
  };

  return (
    <div className="bg-white sm:w-[350px] p-4 rounded-xl  ">
      <h1 className="text-center font-bold text-2xl pb-4">
        GET A PRICE & BOOK
      </h1>
      <form onSubmit={handleSubmit}>
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
                  ? "bg-black text-white font-bold active:bg-black active:text-white active:font-bold "
                  : ""
              }  rounded-lg cursor-pointer focus:outline-none  `}
              htmlFor="day"
            >
              Day
            </label>
          </li>
        </ul>

        {selectedValue === "1 hour" && (
          <select
            required
            value={hours}
            onChange={(e) => {
              setHours(e.target.value);
            }}
            className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        )}
        {/* <input
          type="text"
          placeholder="Pick Up Address"
          value={pickupAddress}
          onChange={(e) => setPickupAddress(e.target.value)}
          className="input sm:input-sm w-[100%]  bg-gray-300 mt-2 border"
        /> */}
        <select
          required
          value={bookingType}
          onChange={(e) => {
            setBookingType(e.target.value);
          }}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value="">
            Booking Type
          </option>
          <option value="FreetownPeninsula">Freetown/Peninsula</option>
          <option
            disabled={selectedValue === "1 hour" || selectedValue === "1/2 Day"}
            value="Province"
          >
            Province
          </option>
        </select>
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
        <input
          type="date"
          name="date"
          required
          id="date"
          placeholder="Select a date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-50 border mb-4 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        {/* <div className=" relative bg-gray-50  border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500"> */}
        {/* <p className="absolute top-3 left-3 sm:hidden">
            {time ? "" : "select a time"}
          </p>
          <BiTimeFive className="absolute right-3.5 top-3.5 sm:hidden" /> */}
        <input
          type="time"
          name="time"
          required
          id="time"
          placeholder="Select a time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* </div> */}

        <div className="  w-[80%] mt-4">
          <button className="bg-[#27bf9e] hover:bg-gray-400 text-white font-bold px-8 py-2 rounded-[8px] ml-8 w-full">
            Get Prices
          </button>

          {/* <p className="font-black text-[30px]">${price == null ? 0 : price}</p> */}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
