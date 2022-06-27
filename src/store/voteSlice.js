import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const initialState = {
  votingProcesshasStarted: false,
  ballotHasStarted: false,
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
      state.votingProcesshasStarted = true;
    },
    resetVotingProcess() {
      return initialState;
    },
    saveVoteSubject(state, action) {
      state.title = action.payload.title;
      state.propositions = action.payload.propositions;
    },
    savePassword(state, action) {
      state.password = action.payload;
    },
    startBallot(state) {
      state.ballotHasStarted = true;
    },
  },
});

export const voteActions = voteSlice.actions;
export const voteSliceReducer = voteSlice.reducer;
