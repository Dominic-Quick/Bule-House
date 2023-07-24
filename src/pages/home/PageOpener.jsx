export default function PageOpener({myRef}){
    return (
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
    )
}