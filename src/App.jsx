import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./App.css";
import TopBar from "./TopBar";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import Service from "./pages/service/Service";

function App() {
  // Google Api Key: AIzaSyC3jRCRtzYCEVylTjDVX5EgeQjMMQ2WX5M
  const { ref: myRef, inView: visEl } = useInView({ threshold: 0.6 });
  return (
    <>
      <TopBar visEl={visEl} />
      <div id="body-container">
        <Routes>
          <Route path="/" element={<Home myRef={myRef}/>} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
