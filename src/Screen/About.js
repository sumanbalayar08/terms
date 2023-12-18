import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import image2 from '../images/geiranger.jpg'


const About = () => {
  const [text, setText] = useState(null);

  const handleClose = () => {
    window.close();
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("https://test.sajhaghar.com/api/info/");
        setText(res.data.infos[1].content);
        console.log(res.data.infos[1].content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="flex h-screen">
<div className="bg-[url('./images/geiranger.jpg')] overflow-y-scroll bg-cover w-screen bg-fixed">
  
      <Navbar/>
      <div className="flex-1 py-[4%] space-y-6 overflow-y-auto">
        <h1 className="flex items-center justify-center text-white font-bold text-2xl">
          About Us
        </h1>
        <div className="flex items-center justify-center font-bold text-lg">
          <button
            className="text-white bg-green-600 rounded-full px-8 py-3"
            onClick={handleClose}
          >
            Close and Go Back
          </button>
        </div>
        <div className="flex whitespace-pre-line items-center justify-center text-black bg-white rounded-2xl px-10 mx-5 sm:mx-14 md:mx-28 xl:mx-60 py-8 font-serif text-center">
          {text ? <p>{text}</p> : <p>Server Not Active</p>}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default About;
