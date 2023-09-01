import React from "react";

const FilterPlayers = ({ filteredPosition, onFilterPosition }) => {
  return (
    <div className="filter">
      <label>Filter Players by position: </label>
      <select value={filteredPosition} onChange={onFilterPosition}>
        <option value="all">all</option>
        <option value="CB">CB</option>
        <option value="CM">CM</option>
        <option value="ST">ST</option>
        <option value="GK">GK</option>
      </select>
    </div>
  );
};

export default FilterPlayers;
