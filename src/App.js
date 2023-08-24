import AddNewPlayer from "./components/AddNewPlayer";
import Field from "./components/Field";
import List from "./components/List";
import playersList from "../src/players";
import Title from "./components/Title";
import { changePosToFitSquad } from "../src/helper functions/positionChanger";
import { useState, useEffect, useRef } from "react";

const KEY = "f7906f4c-3049-434c-9170-8761e414ed23";

const fetchOptions = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "X-AUTH-TOKEN": KEY,
  },

  pagination: {
    countCurrent: 0,
    countTotal: 0,
    pageCurrent: 0,
    pageTotal: 0,
    itemsPerPage: 0,
  },
  items: {},
};

function App() {
  const [players, setPlayers] = useState(playersList);
  const [filteredPosition, setFilteredPosition] = useState("all");
  const [filteredPlayersList, setFilteredPlayersList] = useState(players);
  const [posSelected, setPosSelected] = useState(null);
  const [positions, setPositions] = useState([
    "ST",
    "ST",
    "CM",
    "CB",
    "CB",
    "GK",
  ]);
  const listFocus = useRef(null);

  const handleListFocus = () => {
    listFocus.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await fetch(
        `https://futdb.app/api/players?page=2`,
        fetchOptions
      );

      const data = await res.json();
      const playerInfos = data.items.map((player) => ({
        name: player.commonName,
        position: changePosToFitSquad(player.position),
        overall: player.rating,
        id: player.id,
      }));
      setPlayers(playerInfos);
    };
    fetchPlayers();
  }, []);

  const handleAddPlayerInField = (name, overall, position) => {
    setPositions((positions) =>
      positions.map((pos, i) => {
        if (i + 1 === posSelected) {
          pos = {
            position: position,
            overall: overall,
            name: name,
          };
        }
        return pos;
      })
    );

    setFilteredPosition("all");
    setPosSelected(null);
  };

  const handleRemoveFieldPlayer = (id, position) => {
    setPositions((positions) =>
      positions.map((pos, index) => (index + 1 === id ? position : pos))
    );
  };

  const handleAddPlayerInList = (newPlayer) => {
    setPlayers((curPlayers) => [...curPlayers, newPlayer]);
  };

  const handleFilteredPosition = (e, pos) => {
    e.target.value && setPosSelected(0);
    pos ? setFilteredPosition(pos) : setFilteredPosition(e.target.value);
  };

  useEffect(() => {
    posSelected === null && setFilteredPosition("all");
    setFilteredPlayersList(
      filteredPosition === "all"
        ? players
        : players.filter((player) => player.position === filteredPosition)
    );
  }, [filteredPosition, players, posSelected]);

  return (
    <>
      <Title />
      <div className="app">
        <AddNewPlayer
          players={players}
          onAddPlayerInList={handleAddPlayerInList}
        />
        <List
          listFocus={listFocus}
          filteredPosition={filteredPosition}
          filteredPlayersList={filteredPlayersList}
          onFilterPosition={handleFilteredPosition}
          onAddPlayerInField={handleAddPlayerInField}
        />
        <Field
          posSelected={posSelected}
          onFilterPosition={handleFilteredPosition}
          handleSelectedPos={setPosSelected}
          positions={positions}
          onRemovePlayer={handleRemoveFieldPlayer}
          handleListFocus={handleListFocus}
        />
      </div>
    </>
  );
}

export default App;
