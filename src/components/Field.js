import React from "react";
import AddPlayerInField from "./AddPlayerInField";
import Card from "./Card";

const Field = ({
  onFilterPosition,
  posSelected,
  handleSelectedPos,
  positions,
  onRemovePlayer,
  handleListFocus,
}) => {
  return (
    <ul className="field">
      {positions.map((pos, i) =>
        typeof pos === "object" && !Array.isArray(pos) && pos !== null ? (
          <Card
            key={i + 1}
            id={i + 1}
            name={pos.name}
            position={pos.position}
            overall={pos.overall}
            onRemovePlayer={onRemovePlayer}
          />
        ) : (
          <AddPlayerInField
            key={i + 1}
            id={i + 1}
            onFilterPosition={onFilterPosition}
            posSelected={posSelected}
            handleSelectedPos={handleSelectedPos}
            pos={pos}
            handleListFocus={handleListFocus}
          />
        )
      )}
    </ul>
  );
};

export default Field;
