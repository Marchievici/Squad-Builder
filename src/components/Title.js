import { useState } from "react";

const Title = () => {
  const [isInfoHovered, setIsInfoHovered] = useState(false);
  return (
    <h1 className="title">
      Squad builder
      <span
        className="info-icon"
        onMouseEnter={() => setIsInfoHovered(true)}
        onMouseLeave={() => setIsInfoHovered(false)}
      >
        ℹ
        {isInfoHovered && (
          <div className="info">
            Create a 5 + 1 squad of players from fifa 23 or create your custom
            players to add to the squad.
          </div>
        )}
      </span>
    </h1>
  );
};

export default Title;
