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
        <section className="sec-cons" id="top-sec">
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

        <section className="sec-cons">
          <div className="sec-top-con"></div>
          <div className="sec-bot-con"></div>
        </section>
      </div>
    </>
  );
}

export default App;
