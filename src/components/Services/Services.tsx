import React from 'react';
import './Services.scss';

export const Services: React.FC = () => {
  return (
    <article id="services" className="services">
      <p className="services__title">
        Uns vertrauen namhafte Konzerne, zukunftsorientierte Startups,
        mittelständische Unternehmen und bekannte Marken – gehören sie dazu!
      </p>
      <div className="services__services">
        <img className="services__photo" src="./tilray.png" alt="tilray" />
        <img className="services__photo" src="./apple.png" alt="apple" />
        <img
          className="services__photo"
          src="./bauerfeind.png"
          alt="bauerfeind"
        />
        <img className="services__photo" src="./audi.png" alt="audi" />
        <img className="services__photo" src="./subaru.png" alt="subaru" />
        <img
          className="services__photo services__photo--bench"
          src="./bench.png"
          alt="bench"
        />
      </div>
    </article>
  );
};
