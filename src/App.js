import React from "react";
import Terms from "./Screen/Terms";
import About from "./Screen/About";
import Demo from "./Screen/Demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
