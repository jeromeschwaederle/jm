import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const initialState = {
  hasStarted: false,
  title: undefined,
  propositions: undefined,
  password: undefined,
  ballotsNumber: undefined,
  results: undefined,
  demandAccesResults: false,
  accessResults: false,
};

export const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    startVotingProcess(state) {
      state.hasStarted = true;
    },
    resetVotingProcess() {
      return initialState;
    },
  },
});

export const voteActions = voteSlice.actions;
export const voteSliceReducer = voteSlice.reducer;
