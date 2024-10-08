import React from 'react';
import { AnimatedCircle } from '../subcomponents/AnimatedCircle';

export function Skills() {
  return (
    <section className="skill-section" id="skill">
      <div className="row">
        <h2>WE GOT SKILLS!</h2>
        <p className="little-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="row">
        <div className="col span_1_of_4 box">
          <AnimatedCircle  type="web-design" percentage={90} />
          <h3>Web Design</h3>
        </div>
        <div className="col span_1_of_4 box">
          <AnimatedCircle type="html-css" percentage={85} />
          <h3>HTML / CSS</h3>
        </div>
        <div className="col span_1_of_4 box">
          <AnimatedCircle type="graphics-design" percentage={75} />
          <h3>Graphics Design</h3>
        </div>
        <div className="col span_1_of_4 box">
          <AnimatedCircle type="ui-ux" percentage={80} />
          <h3>UI / UX</h3>
        </div>
      </div>
    </section>
  );
}

