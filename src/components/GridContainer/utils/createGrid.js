const createGrid = (columns, rows) => {
  const gridRows = [];
  const grid = [];
  for (let i = 1; i <= columns * rows; i += 1) {
    gridRows.push(i);
    if (gridRows.length === columns) {
      const row = gridRows.splice(0, columns);
      grid.push(row);
    }
  }
  return grid;
};

export default createGrid;
