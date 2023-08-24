import React from "react";

const Card = ({
  name,
  overall,
  position,
  onAddPlayerInField = () => {},
  onRemovePlayer,
  id,
}) => {
  return (
    <li
      className={`card ${overall > 74 ? "gold-card" : ""} 
    ${overall < 75 && overall > 64 ? "silver-card" : ""}
    ${overall < 65 && overall > 0 ? "bronze-card" : ""}`}
      onClick={() => onAddPlayerInField(name, overall, position)}
    >
      <span className="btn-x" onClick={() => onRemovePlayer(id, position)}>
        ✖
      </span>
      <h3>{position}</h3>
      <h4>{overall}</h4>
      <p>{name}</p>
    </li>
  );
};

export default Card;
