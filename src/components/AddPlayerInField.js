import React from "react";

const AddPlayerInField = ({
  onFilterPosition,
  posSelected,
  handleSelectedPos,
  id,
  pos,
  handleListFocus,
}) => {
  const isCurrSelected = id === posSelected;

  const handleAddPlayerInField = (e) => {
    onFilterPosition(e, pos);
    handleSelectedPos(isCurrSelected ? null : id);
    !posSelected && handleListFocus();
  };

  return (
    <li
      className={`in-field-player ${isCurrSelected ? "selected" : ""}`}
      onClick={handleAddPlayerInField}
    >
      <div>➕</div>
      <p>{pos}</p>
    </li>
  );
};

export default AddPlayerInField;
