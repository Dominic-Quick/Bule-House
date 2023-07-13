import { useEffect, useRef, useState } from "react";

import "./App.css";
import { useInView } from "react-intersection-observer";
import TopBar from "./TopBar";



function App() {

  const {ref: myRef, inView: visEl} = useInView({threshold:.6})
  
  return (
    <>
      <TopBar visEl = {visEl}/>
      <div id="body-container">
        <div id="body">
          <section ref={myRef}  className="sec-cons" id="top-sec">
            <div className="sec-top-con" id="ts">
              <img src="./src/photos/animals-1851535.jpg" id="ts-img" />
              <div className="sec-bot-con" id="bs">
              <div id="crsl-con">
                <div id="crsl">
                  <div className="crsl-dots" id="dot1"></div>
                  <div className="crsl-dots" id="dot2"></div>
                  <div className="crsl-dots" id="dot3"></div>
                </div>
              </div>
              <div id="main-text">
                <h1 id="ts-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id diam placerat, maximus purus nec, ultrices nisl. Vestibulum sit amet placerat ante. Mauris ac rhoncus lorem, nec interdum lacus. Quisque in mollis felis. Maecenas id velit in tortor bibendum vestibulum a non velit. Nunc finibus venenatis urna, sed suscipit mauris iaculis ut. Integer bibendum, nisi in efficitur malesuada, odio arcu rhoncus lorem, at lacinia leo urna ac tortor. Aenean mollis eros erat, non interdum sem tincidunt sed. Quisque vel pretium est, vulputate aliquet ex.
                </h1>
              </div>
            </div>
            </div>
          </section>

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
