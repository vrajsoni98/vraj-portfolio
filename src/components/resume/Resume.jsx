import React from "react";
import "./resume.css";
import { WorkExperienceData as resumeData } from "../data/Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section grid" id="resume">
      <h2 className="section__title">{resumeData.title}</h2>

      <div className="resume__container grid">
        <div className="timline grid">
          {resumeData.experience.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  name={val.name}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
        <div className="timline grid">
          {resumeData.experience.map((val, id) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  name={val.name}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
