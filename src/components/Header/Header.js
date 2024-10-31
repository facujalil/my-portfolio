import { useEffect, useState } from "react";
import style from "./Header.module.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import logo from "../../assets/img/logo.png";
import Nav from "./Nav/Nav";
import Dropdown from "./Dropdown/Dropdown";

function Header() {
  const { windowWidth } = useWindowWidth();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (windowWidth <= 700 && openMobileMenu) {
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.scrollTop = 0;
      document.body.style.overflowY = "hidden";
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.style.overflowY = "auto";
    }
  }, [windowWidth, openMobileMenu]);

  return (
    <header
      className={style.header}
      style={{
        position: windowWidth <= 700 && openMobileMenu ? "static" : "relative",
      }}
    >
      <div className={style.headerContent}>
        <img src={logo} alt="Logo" className={style.logo} />
        <Nav
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />

        {windowWidth <= 700 ? (
          <>
            <button
              className={style.hamburgerMenuButton}
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              <i className="material-symbols-outlined">
                {openMobileMenu ? "close" : "menu"}
              </i>
            </button>
            <div
              className={style.dropdownContainer}
              style={{ display: !openMobileMenu ? "none" : "flex" }}
            >
              <Dropdown openMobileMenu={openMobileMenu} />
            </div>
          </>
        ) : (
          <Dropdown openMobileMenu={openMobileMenu} />
        )}
      </div>
    </header>
  );
}

export default Header;
