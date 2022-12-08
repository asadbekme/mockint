import React, { useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { headerNavigationItems as links } from '../../utils/constants';
import siteLogo from '../../images/site-logo.svg';
import headerDownIcon from '../../images/header-down-icon.svg';
import menuBarIcon from '../../images/menu-bar-icon.png';

const Navbar = () => {
  const [isFixedNavbar, setIsFixedNavbar] = useState(false);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  return (
    <>
      <div id='header-placeholder'></div>
      
      <div className={isFixedNavbar ? 'header__navbar fixed--navbar' : 'header__navbar'}>
        <div className="container">
          <div className="header__navbar-inner">
            <a href="#home">
              <img src={siteLogo} alt="MockInt Logo" className='header__logo' />
            </a>

            <nav className={isMenuBarOpen ? 'header__navigation open' : 'header__navigation'}>
              <div onClick={() => setIsMenuBarOpen(false)} className='navbar__close-icon'>
                <HiChevronRight />
              </div>
              <ul className='header__navigation-links'>
                {
                  links.map((link) => {
                    const { id, url, text } = link;
                    return (
                      <li
                        key={id}
                        className='header__navigation-item'
                        onClick={() => setIsMenuBarOpen(false)}
                      >
                        <a href={url} className='header__navigation-link'>
                          {text}
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
              <div className='header__language'>
                <span>UZ</span>
                <img src={headerDownIcon} alt="header down icon" />
              </div>
            </nav>

            <div onClick={() => setIsMenuBarOpen(true)} className='navbar__open-icon'>
              <img src={menuBarIcon} alt="menubar icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;