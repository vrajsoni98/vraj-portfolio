import React from "react";
import { HomeData } from "../data/Data";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      {HomeData.socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className="home__social-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
