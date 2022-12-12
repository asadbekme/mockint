import React, { useEffect, useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { headerNavigationItems as links } from '../../utils/constants';
import siteLogo from '../../images/site-logo.svg';
import headerDownIcon from '../../images/header-down-icon.svg';
import menuBarIcon from '../../images/menu-bar-icon.png';

const Navbar = () => {
  const [isFixedNavbar, setIsFixedNavbar] = useState(false);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      (window.scrollY > 5) ? setIsFixedNavbar(true) : setIsFixedNavbar(false);
    }
  }, [])

  return (
    <>
      <div id='header-placeholder'></div>
      
      <div className={isFixedNavbar ? 'header__navbar fixed--navbar' : 'header__navbar'}>
        <div className="container">
          <div className="header__navbar-inner">
            <a href="#home">
              <img className='header__logo' src={siteLogo} alt="MockInt Logo" />
            </a>

            <nav className={isMenuBarOpen ? 'header__navigation open' : 'header__navigation'}>
              <div className='navbar__close-icon' onClick={() => setIsMenuBarOpen(false)}>
                <HiChevronRight />
              </div>
              <ul className='header__navigation-links'>
                {
                  links.map((link) => {
                    const { id, url, text } = link;
                    return (
                      <li
                        className='header__navigation-item'
                        key={id}
                        onClick={() => setIsMenuBarOpen(false)}
                      >
                        <a href={url} className='header__navigation-link'>
                          {text}
                        </a>
                      </li>
                    );
                  })
                }
              </ul>
              <div className='header__language'>
                <span>UZ</span>
                <img src={headerDownIcon} alt="header down icon" />
              </div>
            </nav>

            <div className='navbar__open-icon' onClick={() => setIsMenuBarOpen(true)}>
              <img src={menuBarIcon} alt="menubar icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );    
}

export default Navbar;