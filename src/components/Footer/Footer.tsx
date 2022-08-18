import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer grid grid--desktop grid--tablet">
      <a className="footer__logo grid__item--1-1 grid__item--tablet-1-1 grid__item--desktop-1-1" href="/">
        {' '}
      </a>
      <p className="footer__guard grid__item--1-1 grid__item--tablet-4-5 grid__item--desktop-7-8">Impressum Datenschutz</p>
      <p className="footer__data-prodaction grid__item--1-1 grid__item--tablet-6-6 grid__item--desktop-12-12">© 2020 </p>
    </footer>
  );
};
