import React from "react";
import "../css/SkillItem.css";

function SkillItem({ image, name }) {
  return (
    <div className="skill-item">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default SkillItem;
