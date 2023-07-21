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
            <li className="menu-i">home</li>
            <li className="menu-i">about</li>
            <li className="menu-i">services</li>
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
