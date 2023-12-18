import React, { useEffect, useState } from "react";
import image2 from "../images/geiranger.jpg";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Demo = () => {
  const [text, setText] = useState(null);

  const handleClose = () => {
    //console.log('dfd')
    window.close();
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        console.log("dfdf");
        const res = await axios.get("https://test.sajhaghar.com/api/info/");
        setText(res.data.infos[0].content);
        console.log(res.data.infos[0].content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="relative h-screen xl:h-min">
      <img
        src={image2}
        className="absolute z-0 h-full w-full object-fill"
        alt="h"
      />
      <div className="z-10 relative">
        <Navbar />
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
          <div className="flex items-center whitespace-pre-line justify-center text-black bg-white rounded-2xl px-10 mx-5 sm:mx-14 md:mx-28 xl:mx-60 py-8 text-center font-serif">
            {text ? <p>{text}</p> : <p>Server Not Active</p>}
          </div>
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
    </div>
  );
};

export default Demo;
