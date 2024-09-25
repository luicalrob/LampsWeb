// src/components/Team.jsx
import React from 'react';
import kate from '../assets/images/1.jpg';
import olivia from '../assets/images/2.jpg';
import ashley from '../assets/images/3.jpg';
import anne from '../assets/images/4.jpg';

export function Team() {
  return (
    <section className="team-section" id="team">
      <div className="row">
        <h2>MEET OUR BEAUTIFUL TEAM</h2>
        <p className="little-description">We are a small team of designers and developers, who help brands with big ideas.</p>
      </div>
      <div className="row">
        <div className="col span_1_of_4 box">
          <img src={kate} alt="Kate Upton" className="team-member" />
          <h3>Kate Upton</h3>
          <span className="role">Creative Director</span>
          <p>Duis aute irure dolor in voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
        </div>
        <div className="col span_1_of_4 box">
          <img src={olivia} alt="Olivia Wilde" className="team-member" />
          <h3>Olivia Wilde</h3>
          <span className="role">Lead Designer</span>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
        </div>
        <div className="col span_1_of_4 box">
          <img src={ashley} alt="Ashley Greene" className="team-member" />
          <h3>Ashley Greene</h3>
          <span className="role">SEO / Developer</span>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
        </div>
        <div className="col span_1_of_4 box">
          <img src={anne} alt="Anne Hathaway" className="team-member" />
          <h3>Anne Hathaway</h3>
          <span className="role">CEO / Marketing Guru</span>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
}
