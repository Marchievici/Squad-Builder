import Card from "./Card";

const List = ({
  filteredPosition,
  onFilterPosition,
  filteredPlayersList,
  onAddPlayerInField,
  listFocus,
}) => {
  return (
    <div className="list">
      <div className="list-elements" ref={listFocus}>
        <div style={{ textAlign: "center" }}>
          <label>Filter Players by position: </label>
          <select value={filteredPosition} onChange={onFilterPosition}>
            <option value="all">all</option>
            <option value="CB">CB</option>
            <option value="CM">CM</option>
            <option value="ST">ST</option>
            <option value="GK">GK</option>
          </select>
        </div>

        <ul className="players-list">
          {filteredPlayersList.map((player) => (
            <Card
              onAddPlayerInField={onAddPlayerInField}
              name={player.name}
              position={player.position}
              overall={player.overall}
              key={player.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
