import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigaton';
import './Header.scss';

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(menuActive);
  }, []);

  return (
    <>
      <header className="header grid grid--desktop grid--tablet">
        <div className="header__box grid__item--1-2 grid__item--tablet-1-6 grid__item--desktop-1-12">
          <a className="logo" href="/">
            {' '}
          </a>
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="#agentur">
                Agentur
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#services">
                Services
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#contacts">
                Kontakt
              </a>
            </li>
          </ul>
          <a className="header__lang" href="/lang">
            De / En
          </a>
          <button
            type="button"
            className="header__hamburger"
            onClick={() => setMenuActive(true)}
          >
            {' '}
          </button>
        </div>
        <div
          id="agentur"
          className="header__text_box grid__item--1-2 grid__item--tablet-1-6 grid__item--desktop-1-10"
        >
          {' '}
          <h1 className="header__title">
            Digitales Corporate Marketing für ihre Digital&shy;revolution:
            Partnerschaft&shy;lich. Agil. Data-Driven.
          </h1>
          <p className="header__subtitle">
            TWNTY ist Ihre digitale Full-Ser&shy;vice-Unit. Wir agieren
            ausschli&shy;eßlich mit Datenge&shy;stützten Maßnahmen – für den
            perfekten Return-Of-Invest.
          </p>
          <a href="#services" className="header__arrow grid__item--desktop-9-9">
            {' '}
          </a>
        </div>
      </header>
      <Navigation menuActive={menuActive} setMenuActive={setMenuActive} />
    </>
  );
};
