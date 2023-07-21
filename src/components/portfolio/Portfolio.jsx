import React, { useState } from "react";
import "./portfolio.css";
import { ProjectsData as Menu } from "../data/Data";

const Portfolio = () => {
  const [items, setItems] = useState(Menu.projects);
  const [activeItem, setActiveItem] = useState("Everything");

  const filterItem = (categoryItem) => {
    setActiveItem(categoryItem);
    const updatedItems = Menu.projects.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">{Menu.title}</h2>

      <div className="work__filters">
        <span
          className={`work__item ${
            activeItem === "Everything" ? "active" : ""
          }`}
          onClick={() => {
            setItems(Menu.projects);
            setActiveItem("Everything");
          }}
        >
          Everything
        </span>

        <span
          className={`work__item ${activeItem === "Creative" ? "active" : ""}`}
          onClick={() => filterItem("Fullstack")}
        >
          Full-Stack
        </span>

        <span
          className={`work__item ${activeItem === "Art" ? "active" : ""}`}
          onClick={() => filterItem("Frontend")}
        >
          Front-End
        </span>

        <span
          className={`work__item ${activeItem === "Design" ? "active" : ""}`}
          onClick={() => filterItem("Backend")}
        >
          Back-End
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, tech, url, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p className="work__tech">{tech}</p>
              <a
                href={url}
                className="work__button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
