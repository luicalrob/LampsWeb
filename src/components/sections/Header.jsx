// src/components/Header.jsx
import React from 'react';
import logo from '../../assets/images/logo.png';
import { Hero } from './Hero';

export function Header() {
  return (
    <header id="home">
      <nav>
        <div className="row">
          <a href="#home">
            <img className="logo" src={logo} alt="cuda" />
          </a>
          <ul className="main-nav">
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <Hero />
    </header>
  );
}
