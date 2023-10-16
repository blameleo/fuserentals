import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0  w-full left-0 bg-white z-20 px-4">
      <div className="flex items-center justify-between pb-4 py-2 border-b font-roboto">
        <div className="hidden md:block">
          <div className="flex items-center">
            <img
              className="w-4 h-4 rounded-full"
              src="/img/slflag.webp"
              alt=""
            />
            <span className="text-[12px] font-semibold">+23230736367</span>
          </div>

          {/* <div className="flex items-center ">
            <img
              className="w-4 h-4 rounded-full"
              src="/public/img/ukflag.png"
              alt=""
            />
            <span className="text-[12px]">+447766055311</span>
          </div> */}
        </div>
        <NavLink to="/">
          <img className="w-40 sm:w-64" src="/img/logo.png" alt="" />
        </NavLink>

        <div className="sm:hidden">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn  drawer-button">
                <GiHamburgerMenu />
              </label>
            </div>
            <div className="drawer-side z-10">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>

              <ul className="menu p-4 w-48 min-h-full text-center  bg-black bg-opacity-90 backdrop-blur-[8px] text-white">
                {/* Sidebar content here */}

                <Link to="#hero" className>
                  <div className="text-[20px] font-bold">
                    {" "}
                    <span className="text-blue-500 tracking-wider ">Fuse</span>
                    Rentals{" "}
                  </div>
                </Link>

                <NavLink
                  to="/"
                  smooth={true}
                  duration={500}
                  className=" flex justify-center"
                >
                  <div className="flex items-center my-4  hover:text-blue-500">
                    <li className="">Home</li>
                    {/* <BsArrowDownShort /> */}
                  </div>
                </NavLink>

                <Link
                  to="#cars"
                  smooth={true}
                  duration={500}
                  className={` flex justify-center cursor-pointer ${
                    location.pathname === "/book" ||
                    location.pathname === "/booking" ||
                    location.pathname === "/details" ||
                    location.pathname === "/payment"
                      ? "hidden"
                      : ""
                  }`}
                >
                  <div className="flex items-center mb-4   hover:text-blue-500">
                    <li className="">Cars</li>
                    {/* <BsArrowDownShort /> */}
                  </div>
                </Link>

                <NavLink
                  to="/book"
                  className={` flex justify-center cursor-pointer ${
                    location.pathname === "/book" ||
                    location.pathname === "/booking" ||
                    location.pathname === "/details" ||
                    location.pathname === "/payment"
                      ? "hidden"
                      : ""
                  }`}
                >
                  <div className="flex items-center mb-4 hover:text-blue-500">
                    <li className="">Book</li>
                    {/* <BsArrowDownShort /> */}
                  </div>
                </NavLink>

                <Link
                  to="#about"
                  smooth={true}
                  duration={500}
                  className={` flex justify-center cursor-pointer ${
                    location.pathname === "/book" ||
                    location.pathname === "/booking" ||
                    location.pathname === "/details" ||
                    location.pathname === "/payment"
                      ? "hidden"
                      : ""
                  }`}
                >
                  <div className="flex items-center hover:text-blue-500">
                    <li>About Us</li>
                    {/* <BsArrowDownShort /> */}
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <NavLink to="/book" className="hidden sm:block">
          <button className="hidden md:block  p-2 rounded-[12px] px-6 bg-[#04080F] hover:bg-blue-500 text-white font-bold">
            Book
          </button>
        </NavLink>
      </div>
      <ul className="hidden sm:flex justify-center text-[13px] font-semibold  py-2 font-roboto">
        <Link to="#cars" smooth={true} duration={500}>
          <div className="flex items-center cursor-pointer ">
            <li className="hover:text-blue-500">Cars</li>
            <BsArrowDownShort />
          </div>
        </Link>
        <NavLink to="/book">
          <div className="flex items-center px-4  cursor-pointer">
            <li className="hover:text-blue-500">Booking</li>
            <BsArrowDownShort />
          </div>
        </NavLink>

        <Link to="#about" smooth={true} duration={500}>
          <div className="flex items-center cursor-pointer">
            <li className="hover:text-blue-500">About Us</li>
            <BsArrowDownShort />
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
