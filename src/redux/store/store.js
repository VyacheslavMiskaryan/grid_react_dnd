import { configureStore } from '@reduxjs/toolkit';

import gridReducer from '../slices/gridSlices';

const store = configureStore({
  reducer: {
    grid: gridReducer,
  },
});

export default store;
