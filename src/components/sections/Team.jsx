// src/components/Team.jsx
import React from 'react';
import kate from '../../assets/images/1.jpg';
import olivia from '../../assets/images/2.jpg';
import ashley from '../../assets/images/3.jpg';
import anne from '../../assets/images/4.jpg';

export function Team() {
  return (
    <section className="team-section" id= "team">
      <div className="row">
          <h2>MEET OUR BEAUTIFUL TEAM</h2>
          <p className= "little-description">We are a small team of designers and developers, who help brands with big ideas.</p>
      </div>
      <div className="row">
          <div className="col span_1_of_4 box">
              <img src={kate} alt="Kate Upton" className="team-member" />
              <h3>Kate Upton</h3>
              <span className="role">Creative Director</span>
              <p>Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.</p>
              <div className="social-link">
                  <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fas fa-envelope"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="col span_1_of_4 box">
              <img src={olivia} alt="OLIVIA WILDE" className="team-member"/>
              <h3>OLIVIA WILDE</h3>
              <span className="role">Lead Designer</span>
              <p>Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciun</p>
              <div className="social-link">
                  <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fas fa-envelope"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="col span_1_of_4 box">
              <img src={ashley} alt="Ashley Greene" className="team-member"/>
              <h3>Ashley Greene</h3>
              <span className="role">SEO / Developer</span>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              <div className="social-link">
                  <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fas fa-envelope"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="col span_1_of_4 box">
              <img src={anne} alt="ANNE HATHAWAY" className="team-member"/>
              <h3>ANNE HATHAWAY</h3>
              <span className="role">CEO / Marketing Guru</span>
              <p>Lorem ipsum dolor sit amet, 
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
              <div className="social-link">
                  <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fas fa-envelope"></i></a></li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
  );
}
