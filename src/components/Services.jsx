// src/components/Services.jsx
import React from 'react';
import flagIcon from '../assets/images/flag.png';
import crayonIcon from '../assets/images/crayon.png';
import gearsIcon from '../assets/images/gears.png';
import rocketIcon from '../assets/images/rocket.png';

export function Services() {
  return (
    <section className="service-section js-sticky-section" id="service">
      <div className="row">
        <h2>SERVICES WE PROVIDE</h2>
        <p className="little-description">We are working with both individuals and businesses from all over the globe to create awesome websites and applications.</p>
      </div>
      <div className="row">
        <div className="col span_1_of_4 box">
          <img src={flagIcon} alt="flag" className="services-icon" />
          <h3>Branding</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className="col span_1_of_4 box">
          <img src={crayonIcon} alt="crayon" className="services-icon" />
          <h3>Design</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </div>
        <div className="col span_1_of_4 box">
          <img src={gearsIcon} alt="gears" className="services-icon" />
          <h3>Development</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos.</p>
        </div>
        <div className="col span_1_of_4 box">
          <img src={rocketIcon} alt="rocket" className="services-icon" />
          <h3>Rocket Science</h3>
          <p>LEt harum quidem rerum est et expedita distinctio.</p>
        </div>
      </div>
    </section>
  );
}
