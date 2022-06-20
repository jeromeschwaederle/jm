import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  hasStarted: false,
  title: undefined,
  propositions: undefined,
  password: undefined,
  ballotsNumber: undefined,
  results: undefined,
  demandAccesResults: false,
  accessResults: false,
  test: "c'est un test !!!",
};

export const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    test(state) {
      console.log(current(state));
    },
  },
});

export const voteActions = voteSlice.actions;
export const voteSliceReducer = voteSlice.reducer;
