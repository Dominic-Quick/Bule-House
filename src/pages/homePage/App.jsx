import { useEffect, useRef, useState } from "react";

import "./App.css";
import { useInView } from "react-intersection-observer";
import TopBar from "./TopBar";
import PageOpener from "../PageOpener";



function App() {

  const {ref: myRef, inView: visEl} = useInView({threshold:.6})
  
  return (
    <>
      <TopBar visEl = {visEl}/>
      <div id="body-container">
        <div id="body">
          <PageOpener myRef={myRef}/>

          <section className="sec-cons">
            <div className="sec-top-con" id="s-con">
              <img id="social" src="src/photos/hairdresser-6819532.png"/>
              <div id="s-list-con">
                <ul id="s-list">
                  <li className="s-list-item" id="facebook">awd</li>
                  <li className="s-list-item" id="email">awdw</li>
                  <li className="s-list-item" id="phone">awd</li>
                </ul>
              </div>
            </div>
            <div className="sec-bot-con"></div>
          </section>

          <section className="sec-cons">
            <div className="sec-top-con"></div>
            <div className="sec-bot-con"></div>
          </section>

          <section className="sec-cons">
            <div className="sec-top-con"></div>
            <div className="sec-bot-con"></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
