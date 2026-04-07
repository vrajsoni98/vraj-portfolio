import React from "react";
import { AboutData } from "../data/Data";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      {AboutData.highlights.map((highlight, index) => (
        <article key={index} className="about__box">
          <span className="about__box-value">{highlight.value}</span>
          <h3 className="about__box-label">{highlight.label}</h3>
          <p className="about__box-text">{highlight.text}</p>
        </article>
      ))}
    </div>
  );
};

export default AboutBox;
