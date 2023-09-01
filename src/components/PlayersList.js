import React from "react";
import Card from "./Card";

const PlayersList = ({
  filteredPlayersList,
  onAddPlayerInField,
  isLoading,
}) => {
  return (
    <>
      <ul className="players-list">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          filteredPlayersList?.map((player) => (
            <Card
              onAddPlayerInField={onAddPlayerInField}
              name={player.name}
              position={player.position}
              overall={player.overall}
              key={player.id}
            />
          ))
        )}
      </ul>

      {filteredPlayersList?.length === 0 && (
        <p style={{ color: "red", textAlign: "center" }}>
          There are no players in this position on the current page. Try to
          change the page or choose another position
        </p>
      )}
    </>
  );
};

export default PlayersList;
