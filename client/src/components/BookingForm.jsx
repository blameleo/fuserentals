import React, { useEffect, useState } from "react";
import "react-time-picker/dist/TimePicker.css"; // Import the styles like this
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";

const BookingForm = () => {
  const [selectedValue, setSelectedValue] = useState("FreetownPeninsula");
  const [pickupAddress, setPickupAddress] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [hours, setHours] = useState(null);
  const [duration, setDuration] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedValue,
      pickupAddress,
      bookingType: duration,
      date,
      time,
      price,
      hours,
      values,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);

    navigate("/booking");
  };

  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [values, setValues] = useState([today]);

  // console.log(values);

  return (
    <div className="bg-white sm:w-[350px] p-4 rounded-xl  ">
      <h1 className="text-center font-bold text-2xl pb-4">
        GET A PRICE & BOOK
      </h1>
      <form onSubmit={handleSubmit}>
        <ul className="flex px-2 font-roboto justify-evenly mb-4">
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="FreetownPeninsula"
              // name="hourly"
              id="FreetownPeninsula"
              checked={selectedValue === "FreetownPeninsula"}
              onChange={() => {
                setSelectedValue("FreetownPeninsula");
              }}
            />
            <label
              className={`flex py-2 px-4  text-gray-600 border border-zinc-500  text-[13px] hover:bg-gray-300 hover:text-black text-center ${
                selectedValue === "FreetownPeninsula"
                  ? "bg-black text-white font-bold active:bg-black active:text-white active:font-bold"
                  : ""
              }    rounded-lg cursor-pointer focus:outline-none  `}
              htmlFor="FreetownPeninsula"
            >
              Freetown/Peninsula
            </label>
          </li>

          <li className="relative border-r border-l px-4 border-gray-300">
            <input
              className="sr-only peer"
              type="radio"
              value="Province"
              id="Province"
              checked={selectedValue === "Province"}
              onChange={() => {
                setSelectedValue("Province");
                // console.log(selectedValue);
              }}
              required
            />
            <label
              className={`flex py-2  px-4  text-black border border-zinc-500  hover:bg-gray-300 hover:text-black text-[13px] font-roboto  ${
                selectedValue === "Province"
                  ? "bg-black text-white font-bold active:bg-black active:text-white active:font-bold"
                  : ""
              }  text-[13px] cursor-pointer focus:outline-none rounded-lg `}
              htmlFor="Province"
            >
              Province
            </label>
          </li>

          {/* <li className="relative">
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
          </li> */}
        </ul>
        <div>
          <label htmlFor="">Select booking duration type:</label>
          {selectedValue === "Province" ? (
            <div>
              <input
                type="radio"
                name="Day"
                id="Day"
                // value={hours}
                checked={duration === "Day"}
                onChange={() => {
                  setDuration("Day");
                }}
              />
              <label htmlFor="Hourly">full Day</label>
            </div>
          ) : (
            <div className="flex justify-between  px-20">
              <div>
                <input
                  type="radio"
                  name="Hourly"
                  id="Hourly"
                  // value={hours}
                  checked={duration === "Hourly"}
                  onChange={() => {
                    setDuration("Hourly");
                  }}
                />
                <label htmlFor="Hourly">Hourly</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="1/2 Day"
                  id="1/2 Day"
                  checked={duration === "1/2 Day"}
                  onChange={() => {
                    setDuration("1/2 Day");
                  }}
                />
                <label htmlFor="1/2 Day">1/2 Day</label>
              </div>
            </div>
          )}
        </div>

        {duration === "Hourly" && (
          <div>
            <label>Please select how many hours:</label>
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
              <option value={12}>12 hours</option>
              <option value={13}>13 hours</option>
              <option value={14}>14 hours</option>
              <option value={15}>15 hours</option>
              <option value={16}>16 hours</option>
              <option value={17}>17 hours</option>
              <option value={18}>18 hours</option>
              <option value={19}>19 hours</option>
              <option value={20}>20 hours</option>
              <option value={21}>21 hours</option>
              <option value={22}>22 hours</option>
              <option value={23}>23 hours</option>
              <option value={24}>24 hours</option>
            </select>
          </div>
        )}

        {duration === "1/2 Day" ||
          (duration === "Day" && (
            <div className="my-2 border  w-[100%] ">
              <p>please select dates:</p>
              <DatePicker
              style={{ padding: "1.2em", width: "310px"}}
                className="bg-red-500"
                multiple
                value={values}
                onChange={setValues}
                // render={<InputIcon />}
              />
            </div>
          ))}

        {/* <select
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
        </select> */}
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
        {duration === "Hourly" && (
          <div>
            <label htmlFor="date">please select a date:</label>
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
          </div>
        )}

        {/* <div className=" relative bg-gray-50  border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500"> */}
        {/* <p className="absolute top-3 left-3 sm:hidden">
            {time ? "" : "select a time"}
          </p>
          <BiTimeFive className="absolute right-3.5 top-3.5 sm:hidden" /> */}

        <div>
          <label htmlFor="name">please select pickup time </label>
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
        </div>

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
