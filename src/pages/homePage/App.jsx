import { useEffect, useRef, useState } from "react";

import "./App.css";
import { useInView } from "react-intersection-observer";
import TopBar from "./TopBar";
import PageOpener from "./PageOpener";



function App() {

  const {ref: myRef, inView: visEl} = useInView({threshold:.6})
  
  return (
    <>
      <TopBar visEl={visEl} />
      <div id="body-container">
        <div id="body">
          <PageOpener myRef={myRef} />
          <section className="sec-cons" id="media-mobile">
            <div className="sec-top-con" id="media-con">
              <img id="social-img" src="src/photos/hairdresser-6819532.png" />
              <div id="s-list-con">
                <ul id="s-list">
                  <li className="s-list-item" id="facebook">
                    <a className="img-con" href="https://www.facebook.com/thebluehouse314">
                      <img id="facebook-img" src="src/photos/facebook.png" />
                    </a>
                  </li>
                  <li className="s-list-item" id="email">
                    <a className="img-con" href="mailto:dominic101500@gmail.com">
                      <img id="email-img" src="src/photos/gmail.png" />
                    </a>
                  </li>
                  <li className="s-list-item" id="phone">
                    <div className="img-con">
                      <img id="phone-img" src="src/photos/phone.png"  />
                    </div>
                  </li>
                </ul>
                <h1 className="sec-head">Contact And Connect</h1>
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
