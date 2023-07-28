import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import'./TopBar.css'

export default function TopBar({ visEl }) {
  const [toggleBtn,setToggleBtn] = useState();
  return (
    <>
      <section id={`${visEl ? "colorbar" : "top-bar-con"}`}>
        <div id="l-con">
          <div id="logo-con">
            <img
              src="src/photos/Logo-Photo.png"
              id={`${visEl ? "logo-small" : "logo"}`}
            />
          </div>
        </div>

        <div id="m-con">
          <ul className={toggleBtn ? "tb-menu-active" : "tb-menu"}>
            <CustomeLink to={"/"}>Home</CustomeLink>
            <CustomeLink to={"/Service"}>Services</CustomeLink>
            <CustomeLink to={"/LogIn"}>LogIn</CustomeLink>
            <li id="social-opener-container">
              <div class="social-btns">
                <a href="https://www.facebook.com/thebluehouse314">
                  <img
                    className="scl-btn-img"
                    src="./src/photos/facebook.png"
                    alt="Facebook"
                  />
                </a>
              </div>
              <div class="social-btns">
                <a href="mailto:dominic101500@gmail.com">
                  <img className="scl-btn-img" src="./src/photos/gmail.png" alt="Email" />
                </a>
              </div>
              <div class="social-btns">
                <a href="">
                  <img className="scl-btn-img" id="phone-scl" src="./src/photos/phone.png" alt="Phone" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div id="r-con">
          <button
            id="menu-btn"
            onClick={() => {
              if (toggleBtn) {
                setToggleBtn(false);
                console.log(toggleBtn);
              } else {
                setToggleBtn(true);
                console.log(toggleBtn);
              }
            }}
          >
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </button>
        </div>
      </section>
    </>
  );
}

function CustomeLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    
      <Link id="link" to={to}>
          <li className={isActive ? "active" : "menu-i"}>{children}</li>
      </Link>

  );
}
