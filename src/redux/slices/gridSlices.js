import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rows: Number(sessionStorage.getItem('rows')),
  columns: Number(sessionStorage.getItem('columns')),
};

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    createGrid: (state, action) => {
      sessionStorage.setItem('rows', action.payload.rows);
      sessionStorage.setItem('columns', action.payload.columns);
      const gridState = state;
      gridState.rows = action.payload.rows;
      gridState.columns = action.payload.columns;
    },
    deleteGrid: (state) => {
      sessionStorage.clear();
      const gridState = state;
      gridState.rows = 0;
      gridState.columns = 0;
    },
  },
});

export const { createGrid, deleteGrid } = gridSlice.actions;

export default gridSlice.reducer;
