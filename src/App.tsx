import React from 'react';
import './App.scss';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';

export const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Services></Services>
        <Contacts></Contacts>
      </main>
      <Footer></Footer>
    </>
  );
};
