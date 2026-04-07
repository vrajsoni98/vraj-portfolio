import React, { useState } from "react";
import "./portfolio.css";
import { ProjectsData as Menu } from "../data/Data";

const GRADIENTS = {
  AI: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0c4a6e 100%)",
  Fullstack: "linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #1e3a8a 100%)",
  Backend: "linear-gradient(135deg, #0c2340 0%, #1e3a8a 60%, #1e40af 100%)",
  Frontend: "linear-gradient(135deg, #064e3b 0%, #0f766e 60%, #0369a1 100%)",
};

const ICONS = {
  AI: "fa-solid fa-brain",
  Fullstack: "fa-solid fa-layer-group",
  Backend: "fa-solid fa-server",
  Frontend: "fa-solid fa-desktop",
};

const FILTERS = ["Everything", "AI", "Fullstack", "Backend", "Frontend"];

const Portfolio = () => {
  const [items, setItems] = useState(Menu.projects);
  const [activeItem, setActiveItem] = useState("Everything");

  const filterItem = (categoryItem) => {
    setActiveItem(categoryItem);
    if (categoryItem === "Everything") {
      setItems(Menu.projects);
    } else {
      setItems(Menu.projects.filter((p) => p.category === categoryItem));
    }
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">{Menu.title}</h2>

      <div className="work__filters">
        {FILTERS.map((f) => (
          <span
            key={f}
            className={`work__item ${activeItem === f ? "active" : ""}`}
            onClick={() => filterItem(f)}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, title, summary, tech, url, category } = elem;
          const gradient = GRADIENTS[category] || GRADIENTS.Fullstack;
          const icon = ICONS[category] || "fa-solid fa-code";
          return (
            <article className="work__card" key={id}>
              <div className="work__header" style={{ background: gradient }}>
                <i className={`${icon} work__header-icon`}></i>
                <span className="work__category-badge">{category}</span>
              </div>
              <div className="work__content">
                <h3 className="work__title">{title}</h3>
                <p className="work__summary">{summary}</p>
                <div className="work__tech-chips">
                  {tech.split(", ").map((t) => (
                    <span key={t} className="work__tech-chip">{t}</span>
                  ))}
                </div>
                {url ? (
                  <a
                    href={url}
                    className="work__button"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${title}`}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    View Project
                  </a>
                ) : (
                  <span className="work__button work__button--disabled">
                    <i className="fa-solid fa-lock"></i>
                    Private Build
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
