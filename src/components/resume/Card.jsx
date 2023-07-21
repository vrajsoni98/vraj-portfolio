import React from "react";

const Card = (props) => {
  return (
    <div className="timline__item">
      <i className={props.icon}></i>
      <span className="timline__date">{props.year}</span>
      <h3 className="timline__title">{props.title}</h3>
      <p className="timline__name">{props.name}</p>
      {props.desc.map((item, index) => (
        <p key={index} className="timline__text">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Card;
