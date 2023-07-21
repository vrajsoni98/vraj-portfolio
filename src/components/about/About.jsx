import React from "react";
import "./about.css";
import AboutBox from "./AboutBox";
import { AboutData } from "../data/Data";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">{AboutData.title}</h2>

      <div className="about__container grid">
        <img src={AboutData.aboutImg} alt="" className="about__img" />
        <div className="about__data">
          <div className="about__info">
            {AboutData.desc.map((text, index) => (
              <p key={index} className="about__description">
                {text}
              </p>
            ))}
            <a
              href="../../assets/VrajSoni_Resume.pdf"
              download="VrajSoni_Resume.pdf"
              className="btn"
            >
              {AboutData.button} &nbsp;
              <i className={` ${AboutData.resumeIcon}`}></i>
            </a>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
