import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import { HomeData } from "../data/Data";

const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img
            src={HomeData.avatar}
            alt="Vraj Soni avatar"
            className="home__image"
          />
          <h1 className="home__name">{HomeData.name}</h1>
          <span className="home__education">{HomeData.intro}</span>
          <p className="home__summary">{HomeData.summary}</p>

          <div className="home__badges">
            {HomeData.badges.map((badge) => (
              <span key={badge} className="home__badge">
                {badge}
              </span>
            ))}
          </div>

          <HeaderSocials />

          <a href="#contact" className="btn">
            {HomeData.button}
          </a>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Home;
