import React from 'react';
import './Footer.scss';
import { headerNavigationItems as links, footerSocialLinks as socialLinks } from '../../utils/constants';
import { logo } from '../../assets/images';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__content-main">
            <div className="footer__info">
              <a href="#">
                <img src={logo} alt="MockInt.uz" />
              </a>
              <h2 className="footer__title">
                SUHBATLAR IJOBIY BO'LISHIGA YORDAM BERAMIZ!
              </h2>
            </div>

            <nav className="footer__navigation">
              <ul className="footer__navigation-links">
                {
                  links.map((link) => {
                    const { id, url, text } = link;

                    return (
                      <li key={id} className="footer__navigation-item">
                        <a href={url} className="footer__navigation-link">
                          {text}
                        </a>
                      </li>
                    );
                  })
                }
              </ul>

              <ul className="footer__navigation-links">
                {
                  socialLinks.map((link) => {
                    const { id, url, text } = link;

                    return (
                      <li key={id} className="footer__navigation-item">
                        <a href={url} className="footer__navigation-link">
                          {text}
                        </a>
                      </li>
                    );
                  })
                }
              </ul>
            </nav>
          </div>
        </div> 
      </div>

      <div className="footer__line"></div>

      <div className="footer__other">
        <div className="container">
          <h4 className="footer__text">MOCKINT.UZ</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;