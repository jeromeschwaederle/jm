import { configureStore } from "@reduxjs/toolkit";

import { voteSliceReducer } from "./voteSlice";

export const store = configureStore({
  reducer: { vote: voteSliceReducer },
});
