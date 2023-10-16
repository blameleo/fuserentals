import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { GiPadlock } from "react-icons/gi";
import emailjs from "emailjs-com";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";
import axios from "axios";

const key = import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(key);

const Payment = () => {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [stripeLoading, setStripeLoading] = useState(false);

  const navigate = useNavigate();
  const payWithCashBtn = () => {
    sendEmail();
  };

  const sendEmail = () => {
    setLoading(true);
    const templateParams = {
      name: formData?.personInfo?.name,
      email: formData?.personInfo?.email,
      subject: "Booking Details",
      message: `
      vehicleType: ${
        formData?.carDetails?.type === "SevenSeater"
          ? "7 seater"
          : formData?.carDetails?.type
      }
      bookingType: ${formData?.bookingType},
      passengerName: ${formData?.personInfo?.name},
      mobileNumber: ${formData?.personInfo?.telephone},
 pickupLocation: ${formData?.personInfo?.pickupLocation},
   hireDuration: ${formData?.hours ? formData?.hours : formData?.selectedValue},
   bookingDate: ${formData?.date},
   pickupTime: ${formData?.time}
      `,
    };

    emailjs
      .send("gmail", "template_u5uivni", templateParams, "ePcL8rothmCjOVMu5")
      .then((response) => {
        setLoading(false);
        alert("You have booked successfully");
        localStorage.clear();
        navigate("/");
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
      });
  };

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData")) || {};
    console.log(formData);
    setFormData(formData);
  }, []);

  const [clientSecret, setClientSecret] = useState("");

  const price = formData?.carDetails?.price;

  const loadStripe = () => {
    setStripeLoading(true);
    // if (price) {
    fetch("https://fuserentalbackend.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStripeLoading(false);
        setClientSecret(data.clientSecret);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    // }
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <Navbar />
      <div className="bg-sky-50 h-[20vh] sm:py-[150px] mt-20 b flex justify-center items-center">
        <div>
          <h1 className="md:text-[50px] sm:font-normal sm:tracking-wider uppercase px-8 sm:px-0">
            make your payment
          </h1>
          <div className=" hidden sm:flex items-center justify-center  w-full text-[12px] sm:text-base pt-4 sm:pt-0   ">
            <div className="border border-blue-500 text-gray-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
              <p>1</p>
            </div>
            <p className="sm:px-2 text-gray-300 px-1">Locations</p>
            <span className="border w-6 border-black sm:mr-2"></span>
            <div className="border border-blue-500 text-gray-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
              <p>2</p>
            </div>
            <p className="sm:px-2 text-gray-300 px-1">Cars</p>
            <div className="border border-blue-500 text-gray-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
              <p className="border border-blue-500 text-gray-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
                3
              </p>
            </div>
            <p className="sm:px-2 text-gray-300 px-1">Details</p>
            <div className="border bg-blue-500 text-white border-blue-500 rounded-full w-6 h-6 sm:mr-2 sm:w-8 sm:h-8 flex justify-center items-center mx-1">
              <p className="text-gray-300">4</p>
            </div>
            <p className="text-gray-300">Payment</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 place-items-center py-10 mx-8">
        <div className=" checkoutForm ">
          <h1 className="font-bold">Your Journey Summary</h1>
          <img
            src={formData?.carDetails?.carImage}
            alt=""
            className="w-64 mx-auto py-4"
          />
          <p className="text-black py-2">
            <span className="mr-2 font-bold">Vehicle:</span>
            {formData?.carDetails?.type === "SevenSeater"
              ? "7 seater"
              : formData?.carDetails?.type}
          </p>
          <p className="text-black">
            <span className="mr-2 font-bold">Booking Type:</span>
            {formData?.bookingType}
          </p>

          <p className="text-black py-2">
            <span className="mr-2 font-bold">Passenger:</span>
            {formData?.personInfo?.name}
          </p>

          <p className="text-black">
            <span className="mr-2 font-bold">Mobile:</span>
            {formData?.personInfo?.telephone}
          </p>

          <p className="text-black py-2">
            <span className="mr-2 font-bold">pick Up Location:</span>
            {formData?.personInfo?.pickupLocation}
          </p>

          <p className="text-black">
            <span className="mr-2 font-bold">Hire Duration:</span>
            {formData?.hours ? formData?.hours : formData?.selectedValue}
          </p>

          <p className="text-black py-2">
            <span className="mr-2 font-bold">Date:</span>
            {formData?.date}
          </p>

          <p className="text-black">
            <span className="mr-2 font-bold">Pick Up Time:</span>
            {formData?.time}
          </p>
          <div className="flex items-center">
            <p className="font-bold">Total</p>
            <p className="text-[50px] font-bold text-green-500  ml-4">
              ${formData?.carDetails?.price}
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-0 grid">
          <div className="App">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm sendEmail={sendEmail} />
              </Elements>
            )}
          </div>

          {
            <button
              onClick={loadStripe}
              className={`bg-black  text-white text-center  w-[300px] mx-auto  cursor-pointer border border-black hover:bg-gray-600 hover:text-white ${
                clientSecret ? "hidden" : ""
              } px-20 py-2 rounded-xl font-bold mt-4`}
            >
              {stripeLoading ? "loading" : "pay with card"}
            </button>
          }

          <button
            onClick={() => payWithCashBtn()}
            className="bg-white text-center  w-[300px] mx-auto  cursor-pointer border border-black hover:bg-gray-600 hover:text-white text-black px-20 py-2 rounded-xl font-bold mt-4"
          >
            {loading ? "loading...." : "pay with cash"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
