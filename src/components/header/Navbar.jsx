import React, { useEffect, useState } from "react";
import { headerNavigationItems as links } from "../../utils/constants";
import { IoExitOutline } from "react-icons/io5";
import { logo, menuBarIcon } from "../../assets/images";

const Navbar = () => {
  const [isFixedNavbar, setIsFixedNavbar] = useState(false);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 5 ? setIsFixedNavbar(true) : setIsFixedNavbar(false);
    };
  }, []);

  return (
    <>
      <div id="header-placeholder"></div>

      <div
        className={
          isFixedNavbar ? "header__navbar fixed--navbar" : "header__navbar"
        }
      >
        <div className="container">
          <div className="header__navbar-inner">
            <a href="#home">
              <img className="header__logo" src={logo} alt="MockInt" />
            </a>

            <nav
              className={
                isMenuBarOpen ? "header__navigation open" : "header__navigation"
              }
            >
              <ul className="header__navigation-links">
                {links.map((link) => {
                  const { id, url, text } = link;

                  return (
                    <li
                      onClick={() => setIsMenuBarOpen(false)}
                      key={id}
                      className="header__navigation-item"
                    >
                      <a href={url} className="header__navigation-link">
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className="navbar__open-icon"
              onClick={() => setIsMenuBarOpen(true)}
            >
              <img src={menuBarIcon} alt="Menubar icon" />
            </div>
          </div>
        </div>

        <nav className={`header__navigation-mobile ${isMenuBarOpen && "open"}`}>
          <div
            onClick={() => setIsMenuBarOpen(false)}
            className="navbar__close-icon"
          >
            <IoExitOutline />
          </div>

          <ul className="header__navigation-links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li
                  onClick={() => setIsMenuBarOpen(false)}
                  key={id}
                  className="header__navigation-item"
                >
                  <a href={url} className="header__navigation-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
