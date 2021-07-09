const listToCell = (currentItem, columnName, setItems) => {
  setItems((prevState) => prevState.map((elem) => ({
    ...elem,
    column: elem.id === currentItem.id ? columnName : elem.column,
  })));
};

export default listToCell;
