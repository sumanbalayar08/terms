import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import image1 from "../images/diamond.png";
import image2 from "../images/GB.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const toggleMenu = () => {
    settoggle(!toggle);
  };

  return (
    <div className="text-white w-full ">
      <div className="flex lg:justify-evenly justify-between py-6 px-[8%]">
        <div className="hidden lg:block">
          <img src={image1} alt="Company Logo" className="w-10 h-8" />
        </div>

        <div className="block lg:hidden">
          <GiHamburgerMenu className="scale-150 cursor-pointer" onClick={toggleMenu}/>
        </div>

        <ul className="hidden lg:flex items-center justify-center space-x-6 font-bold">
          <Link to="/">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
          </Link>
          <li className="cursor-pointer hover:text-gray-300">Order</li>
          <li className="cursor-pointer hover:text-gray-300">Our Customers</li>
          <Link to="/about">
            <li className="cursor-pointer hover:text-gray-300">About Us</li>
          </Link>
          <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
          <button className="flex items-center justify-center space-x-4">
            <span>English</span>
            <img src={image2} alt="British Flag" className="w-6 h-6" />
          </button>
        </ul>

        <ul
          className={`absolute font-medium lg:hidden top-[72px] left-[5%] w-80 bg-white shadow-md rounded-sm text-black gap-y-12 py-6 px-8 space-y-8 transform transition ${
            toggle
              ? "duration-1000 ease-linear overflow-hidden max-h-[500px] translate-y-0 "
              : "transition duration-1000 ease-linear overflow-hidden max-h-0 -translate-y-10 hidden"
          }`}
        >
          <Link to="/" className="flex ">
            <li>Home</li>
          </Link>
          <li className="flex ">Order</li>

          <li className="flex">Our Customers</li>

          <Link className="flex" to="/about">
            <li>About Us</li>
          </Link>

          <Link className="flex" to="/about">
            <li>Contact Us</li>
          </Link>
        </ul>

        <div className="flex lg:hidden space-x-4">
          <span>English</span>
          <img src={image2} alt="British Flag" className="w-6 h-6" />
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
