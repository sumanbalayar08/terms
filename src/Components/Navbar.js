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
      <div className="relative flex lg:justify-evenly justify-end py-6 items-center px-[8%]">
        <div className="hidden lg:block">
          <img src={image1} alt="Company Logo" className="w-10 h-8" />
        </div>

        <ul className="hidden lg:flex items-center justify-center space-x-6 font-bold">
          <Link to='/'>
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          </Link>
          <li className="cursor-pointer hover:text-gray-300">Order</li>
          <li className="cursor-pointer hover:text-gray-300">Our Customers</li>
          <Link to='/about'>
          <li className="cursor-pointer hover:text-gray-300">About Us</li>
          </Link>
          <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
          <button className="flex items-center justify-center space-x-4">
            <span>English</span>
            <img src={image2} alt="British Flag" className="w-6 h-6" />
          </button>
        </ul>

        <ul
          className={`absolute font-bold lg:hidden top-[72px] left-0 w-full items-center bg-white shadow-md rounded-sm text-black space-y-4 justify-center transform ${
            toggle ? "block" : "hidden"
          }`}
        >
          <hr className="border-black" />
<Link to='/' className="flex items-center justify-center">
<li>Home</li>
</Link>
          <hr className="border-black" />
          <li className="flex items-center justify-center">Order</li>
          <hr className="border-black" />

          <li className="flex items-center justify-center">Our Customers</li>
          <hr className="border-black" />

          <Link className="flex items-center justify-center" to='/about'>
          <li >About Us</li>
          </Link>
          <hr className="border-black" />
        </ul>

        <button className="flex lg:hidden items-center justify-center space-x-4">
          <span>English</span>
          <img src={image2} alt="British Flag" className="w-6 h-6" />
        </button>

        <GiHamburgerMenu
          className="absolute cursor-pointer block lg:hidden left-[8%] top-7 scale-150"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
