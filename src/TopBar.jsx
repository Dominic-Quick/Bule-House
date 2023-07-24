import { Link , useMatch, useResolvedPath } from "react-router-dom";

export default function TopBar({visEl}) {
  return (
    <>
      <section id={`${visEl ? "top-bar-con" : "colorbar"}`}>
        <div id="l-con">
          <div id="logo-con">
            <img
              src="src/photos/Logo-Photo.png"
              id={`${visEl ? "logo" : "logo-small"}`}
            />
          </div>
        </div>

        <div id="m-con">
          <ul id="tb-menu">
            <CustomeLink to={"/"}>Home</CustomeLink>
            <CustomeLink to={"/Service"}>Services</CustomeLink>
            <CustomeLink to={"/LogIn"}>LogIn</CustomeLink>
          </ul>
        </div>

        <div id="r-con">
          <button id="menu-btn">
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </button>
        </div>
      </section>
    </>
  );
}

function CustomeLink({ to, children}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : "menu-i"}>
      <Link to={to} >{children}</Link>
    </li>
  )
}