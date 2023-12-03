import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import image1 from "../images/diamond.png";
import image2 from "../images/GB.png";

const Terms = () => {
  const [text, setText] = useState(null);

  const [toggle, settoggle] = useState(false);

  const toggleMenu = () => {
    settoggle(!toggle);
  };

  const handleClose = () => {
    // Close the current window or tab
    window.close();
  };

  const containerStyle = {
    backgroundImage: `url('/images/geiranger.jpg')`,
    height: "100%", // Adjust the path based on your project structure
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/teachers/");
        setText(res.data.teachers[0].content);
        console.log(res.data.teachers[0].content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="bg-[url('./images/geiranger.jpg')] bg-cover bg-center bg-fixed min-h-screen">
      <div className=" text-white w-full ">
        <div className="relative flex lg:justify-evenly justify-end py-6 items-center px-[8%]">
          <div className="hidden lg:block">
            <img src={image1} alt="Company Logo" className="w-10 h-8" />
          </div>

          <ul className="hidden lg:flex items-center justify-center space-x-6 font-bold">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li>Order</li>
            <li>Our Customers</li>
            <li>About Us</li>
            <li>Contact Us</li>
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

            <li className="flex items-center justify-center">Home</li>
            <hr className="border-black" />
            <li className="flex items-center justify-center">Order</li>
            <hr className="border-black" />

            <li className="flex items-center justify-center">Our Customers</li>
            <hr className="border-black" />

            <li className="flex items-center justify-center">About Us</li>
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
      <div className="flex-1 py-[4%] space-y-6">
        <h1 className="flex items-center justify-center text-white font-bold text-2xl">
          Terms
        </h1>
        <div className="flex items-center justify-center font-bold text-lg">
          <button
            className="text-white bg-green-700 rounded-full px-8 py-3"
            onClick={handleClose}
          >
            Close and Go Back
          </button>
        </div>
        {text ? (
          <p className="flex items-center justify-center text-black bg-white rounded-2xl mx-[20%] px-8 py-6 font-serif">
            {text}
          </p>
        ) : (
          <p className="flex items-center justify-center text-black bg-white rounded-2xl mx-[20%] px-8 py-6 font-serif">
            Database Not Active
          </p>
        )}

        <div className="flex items-center justify-center font-bold text-lg">
          <button
            className="text-white bg-green-700 rounded-full px-8 py-3"
            onClick={handleClose}
          >
            Close and Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
