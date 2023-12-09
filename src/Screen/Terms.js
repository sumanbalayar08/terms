import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Terms = () => {
  const [text, setText] = useState(null);

  const handleClose = () => {
    //console.log('dfd')
    window.close();
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        console.log("dfdf")
        const res = await axios.get("http://127.0.0.1:8000/api/info/");
        setText(res.data.infos[0].content);
        console.log(res.data.infos[0].content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="bg-[url('./images/geiranger.jpg')] bg-cover bg-center bg-fixed min-h-screen">
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
        {text ? (
          <p className="flex items-center justify-center text-black bg-white rounded-2xl mx-[20%] px-8 py-6 font-serif">
            {text}
          </p>
        ) : (
          <p className="flex items-center justify-center text-black bg-white rounded-2xl mx-[20%] px-8 py-6 font-serif">
            Server Not Active
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
