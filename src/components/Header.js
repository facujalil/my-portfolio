import React, { useEffect, useState } from "react";
import "../css/Header.css";
import useWindowWidth from "../hooks/useWindowWidth";
import logo from "../assets/img/logo.png";
import Nav from "./Nav";
import Dropdown from "./Dropdown";

function Header() {
  const { windowWidth } = useWindowWidth();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (windowWidth <= 700 && openMobileMenu) {
      document.body.parentElement.style.overflowY = "hidden";
    } else {
      document.body.parentElement.style.overflowY = "auto";
    }
  }, [windowWidth, openMobileMenu]);

  return (
    <header
      style={
        windowWidth <= 700 && openMobileMenu
          ? { position: "static" }
          : { position: "relative" }
      }
    >
      <div className="header-content">
        <img src={logo} alt="logo" id="logo" />
        <Nav
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />

        {windowWidth <= 700 && (
          <button
            className="hamburguer-menu-button"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            {openMobileMenu ? (
              <i className="material-symbols-outlined">close</i>
            ) : (
              <i className="material-symbols-outlined">menu</i>
            )}
          </button>
        )}
        {windowWidth <= 700 ? (
          <div
            className="dropdown-container"
            style={!openMobileMenu ? { display: "none" } : { display: "flex" }}
          >
            <Dropdown openMobileMenu={openMobileMenu} />
          </div>
        ) : (
          <Dropdown openMobileMenu={openMobileMenu} />
        )}
      </div>
    </header>
  );
}

export default Header;
