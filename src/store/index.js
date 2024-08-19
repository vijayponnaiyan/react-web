import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./slices/card-slice"; // Make sure this path and import are correct

const store = configureStore({
  reducer: {
    card: CardReducer,
  },
});

export default store;
