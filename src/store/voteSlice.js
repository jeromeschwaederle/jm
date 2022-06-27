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
    saveVoteSubject(state, action) {
      state.title = action.payload.title;
      state.propositions = action.payload.propositions;
    },
  },
});

export const voteActions = voteSlice.actions;
export const voteSliceReducer = voteSlice.reducer;
