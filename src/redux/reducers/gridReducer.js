const initialState = {
  rows: Number(sessionStorage.getItem('rows')),
  columns: Number(sessionStorage.getItem('columns')),
  error: null,
};

const getPageDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_GRID':
      sessionStorage.setItem('rows', action.payload.rows);
      sessionStorage.setItem('columns', action.payload.columns);
      return {
        rows: action.payload.rows,
        columns: action.payload.columns,
      };
    case 'DELETE_GRID':
      sessionStorage.clear();
      return {
        rows: 0,
        columns: 0,
      };
    default:
      return state;
  }
};

export default getPageDataReducer;
