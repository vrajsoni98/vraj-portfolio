import React, { useState } from "react";
import "./sidebar.css";
import { SideBarData } from "../data/Data";

const Sidebar = ({ isDark, toggleTheme }) => {
  const [toggle, showMenu] = useState(false);
  const closeNav = () => {
    toggle && showMenu(false);
  };

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href={SideBarData.logoUrl} className="nav__logo">
          <img className="logo" src={SideBarData.logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              {SideBarData.data.map((info, index) => (
                <li key={index} className="nav__list">
                  <a href={info.url} className="nav__link" onClick={closeNav} title={info.name}>
                    <i className={info.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <button
            className="nav__theme-toggle"
            onClick={toggleTheme}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle theme"
          >
            <i className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          </button>
          <span className="copyright">&copy; {SideBarData.copyright}</span>
        </div>
      </aside>
      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
