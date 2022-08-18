import classNames from 'classnames';
import React, { Dispatch, SetStateAction } from 'react';
import './Navigation.scss';

interface Props {
  setMenuActive: Dispatch<SetStateAction<boolean>>;
  menuActive: boolean;
}

export const Navigation: React.FC<Props> = ({ setMenuActive, menuActive }) => {
  return (
    <nav
      className={classNames('nav grid grid--tablet', {
        'nav--active': menuActive === true,
      })}
    >
      <div className="nav__box grid__item--1-2 grid__item--tablet-1-6">
        <a className="logo" href="/">
          {' '}
        </a>
        <button
          type="button"
          className="nav__close"
          onClick={() => setMenuActive(false)}
        >
          {' '}
        </button>
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#agentur" onClick={() => setMenuActive(false)}>
            Agentur
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#services" onClick={() => setMenuActive(false)}>
            Services
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contacts" onClick={() => setMenuActive(false)}>
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};
