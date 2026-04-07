import React, { useState } from "react";
import "./resume.css";
import { WorkExperienceData as resumeData } from "../data/Data";
import Card from "./Card";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experience = resumeData.experience.filter(
    (v) => v.category === "experience"
  );
  const education = resumeData.experience.filter(
    (v) => v.category === "education"
  );
  const items = activeTab === "experience" ? experience : education;

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">{resumeData.title}</h2>

      <div className="resume__tabs">
        <button
          className={`resume__tab-btn ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          <i className="icon-briefcase"></i>
          <span>Work Experience</span>
        </button>
        <button
          className={`resume__tab-btn ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <i className="icon-graduation"></i>
          <span>Education</span>
        </button>
      </div>

      <div className="timeline grid">
        {items.map((val) => (
          <Card
            key={val.id}
            icon={val.icon}
            title={val.title}
            name={val.name}
            year={val.year}
            desc={val.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Resume;
