import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';

import './styles/main.css';
import './styles/resources/responsive.css';
import './styles/vendors/normalize.css';
import './styles/vendors/grid.css';

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Team />
    </>
  );
}
