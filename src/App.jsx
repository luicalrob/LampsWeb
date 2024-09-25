import React from 'react';
import { Header } from './components/sections/Header';
import { Services } from './components/sections/Services';
import { Team } from './components/sections/Team';
import { Skills } from './components/sections/Skills';

import './styles/style.css';
import './styles/resources/responsive.css';
import './styles/vendors/normalize.css';
import './styles/vendors/grid.css';
import './styles/vendors/animated-circle.css';

export function App() {
  return (
    <>
      <Header />
      <Services />
      <Team />
      <Skills />
    </>
  );
}
