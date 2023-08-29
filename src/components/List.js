import Card from "./Card";
import Pagination from "./Pagination";

const List = ({
  filteredPosition,
  onFilterPosition,
  filteredPlayersList,
  onAddPlayerInField,
  listFocus,
  pageTotal,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <section className="list" ref={listFocus}>
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
      {filteredPlayersList.length > 0 ? (
        <Pagination
          className={"pagination"}
          pageTotal={pageTotal}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <p style={{ color: "red", textAlign: "center" }}>
          There are no players in this position on the current page. Try to
          change the page or choose another position
        </p>
      )}
    </section>
  );
};

export default List;
