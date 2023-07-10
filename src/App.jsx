import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <section id="top-bar-con">
        <div id="l-con">
          <div id="logo">
            <img
              src="src/photos/Screenshot 2023-07-06 at 10.21.34 PM.jpeg"
              id="logo"
            />
          </div>
        </div>

        <div id="m-con">
          <ul id="tb-menu">
            <li className="menu-i">home</li>
            <li className="menu-i">about</li>
            <li className="menu-i">photos</li>
          </ul>
        </div>

        <div id="r-con"></div>
      </section>
      <div id="body-container">
        <div id="body">
                  <section className="sec-cons" id="top-sec">
          <div className="sec-top-con" id="ts">
            <img src="./src/photos/animals-1851535.jpg" id="ts-img"/>
          </div>
          <div className="sec-bot-con" id="bs">
            <div id="crsl-con">
              <div id="crsl">
                <div className="crsl-dots" id="dot1"></div>
                <div className="crsl-dots" id="dot2"></div>
                <div className="crsl-dots" id="dot3"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec-cons">
          <div className="sec-top-con"></div>
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
