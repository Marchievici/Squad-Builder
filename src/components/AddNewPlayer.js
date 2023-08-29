import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const AddNewPlayer = ({ onAddPlayerInList }) => {
  const [name, setName] = useState("");
  const [overall, setOverall] = useState("");
  const [position, setPosition] = useState("");
  const [isFormVissible, setIsFormVissible] = useState(false);

  const newPlayer = { name, overall, position, id: uuidv4() };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddPlayerInList(newPlayer);
    handleFormVissibility();
  };

  function handleFormVissibility() {
    setIsFormVissible((curr) => !curr);
    setName("");
    setOverall("");
    setPosition("");
  }

  return isFormVissible ? (
    <div className="add-player">
      <form className="add-player-form" onSubmit={onSubmit}>
        <label>Position:</label>
        <select
          required
          style={{ marginLeft: "16rem" }}
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="">-</option>
          <option value="ST">ST</option>
          <option value="CM">CM</option>
          <option value="CB">CB</option>
          <option value="GK">GK</option>
        </select>

        <label>Overall:</label>
        <input
          max={99}
          required
          type="number"
          value={overall}
          onChange={(e) => setOverall(e.target.value)}
        />

        <label>Name:</label>
        <input
          maxLength={15}
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button className={"add-player-btn"}>Add Player in list</Button>
      </form>
      <Card name={name} overall={overall} position={position} />
      <span style={{ cursor: "pointer" }} onClick={handleFormVissibility}>
        ❌
      </span>
    </div>
  ) : (
    <Button className={"add-custom-player-btn"} onClick={handleFormVissibility}>
      Create custom player
    </Button>
  );
};

export default AddNewPlayer;
