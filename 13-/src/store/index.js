import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-slice';
// import uiSlice from './mycart-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer
  }
})

export default store;