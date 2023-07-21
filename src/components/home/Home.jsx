import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { HomeData } from "../data/Data";

const Home = () => {
  return (
    <>
      <Shapes />
      <section className="home container" id="home">
        <div className="intro">
          <img src={HomeData.avatar} alt="" className="home__image" />
          <h1 className="home__name">{HomeData.name}</h1>
          <span className="home__education">{HomeData.intro}</span>

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
