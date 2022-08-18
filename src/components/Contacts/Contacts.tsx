import React, { useState } from 'react';
import './Contacts.scss';

export const Contacts: React.FC = () => {
  const [sendForm, setSendForm] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendForm(true);
  };

  return (
    <article id="contacts" className="contacts grid grid--desktop grid--tablet">
      <div className="contacts__box  grid__item--1-1  grid__item--tablet-1-2">
        <h2 className="contacts__title grid__item--1-1">
          Kontakt – let‘s talk
        </h2>
        <ul className="contacts__list grid__item--tablet-1-2">
          <li className="contacts__item">
            <address className="contacts__address">
              TWNTY Digital GmbH Pfaffendorfer Straße 26 04105 Leipzig/Germany
            </address>
          </li>
          <li className="contacts__item">
            <a className="contacts__link" href="tel:+49 (0)341 221 796 00">
              +49 (0)341 221 796 00
            </a>
            <a className="contacts__link" href="mailto:info@twnty.de">
              info@twnty.de
            </a>
          </li>
          <ul className="contacts__list__social grid__item--tablet-1-3">
            <li className="contacts__item">
              <a
                className="contacts__link"
                href="https://www.linkedin.com/"
                target="_blanck"
              >
                LinkedIn
              </a>
            </li>
            <li className="contacts__item">
              <a
                className="contacts__link"
                href="https://www.xing.com/en"
                target="_blanck"
              >
                Xing
              </a>
            </li>
            <li className="contacts__item">
              <a
                className="contacts__link"
                href="https://www.instagram.com/"
                target="_blanck"
              >
                Instagram
              </a>
            </li>
          </ul>
        </ul>
      </div>
      {sendForm === false ? (
        <form
          action="form"
          onSubmit={(event) => onSubmit(event)}
          className="contacts__form grid__item--1-2 grid__item--tablet-4-6 grid__item--desktop-7-12 grid--desktop"
        >
          <div className="contacts__form__box">
            {' '}
            <input
              className="contacts__name"
              type="text"
              required
              placeholder="Name"
            />
            <input
              className="contacts__email"
              type="email"
              name=""
              id=""
              required
              placeholder="E-Mail"
            />
          </div>
          <input
            className="contacts__topic"
            type="text"
            placeholder="Betreff"
          />
          <textarea
            className="contacts__mess"
            required
            placeholder="Nachricht"
          />

          <div className="contacts__buttons__box">
            <label className="contacts__privacy" htmlFor="privacy">
              <input
                className="contacts__privacy__checkbox"
                type="checkbox"
                name="privacy"
                id="privacy"
                required
              />
              <p className="contacts__privacy__title">
                {' '}
                Ich habe die
                {' '}
                <a
                  target="_blanck"
                  className="contacts__privacy__link"
                  href="/"
                >
                  Datenschutzbestimmungen
                </a>
                {' '}
                zur Kenntnis genommen.
              </p>
            </label>
            <button type="submit" className="contacts__submit">
              Senden
            </button>
          </div>
        </form>
      ) : (
        <div className="contacts__form__send grid__item--1-2 grid__item--tablet-4-6 grid__item--desktop-7-12 grid--desktop">
          <img className="contacts__form__send__image" src="./done.png" alt="done" />
          <p className="contacts__form__send__text">Thanks for you time!</p>
        </div>
      )}
    </article>
  );
};
