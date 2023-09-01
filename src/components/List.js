const List = ({ listFocus, children }) => {
  return (
    <section className="list" ref={listFocus}>
      {children}
    </section>
  );
};

export default List;
