import React from "react";
import { AboutData } from "../data/Data";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      {AboutData.skillIcons.map((icon, index) => (
        <div key={index} className="about__box">
          <i className={`about__icon ${icon}`}></i>
        </div>
      ))}
    </div>
  );
};

export default AboutBox;
