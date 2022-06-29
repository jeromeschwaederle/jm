import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const initialState = {
  mentions: [
    "excellent.e",
    "très bien",
    "bien",
    "assez bien",
    "passable",
    "insuffisant.e",
    "à rejeter",
  ],
  votingProcesshasStarted: false,
  ballotHasStarted: false,
  title: undefined,
  propositions: undefined,
  password: undefined,
  standardBallot: undefined,
  ballotBox: [],
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

      const standardBallot = {};
      for (let i = 0; i < state.propositions.length; i++) {
        standardBallot[i] = state.mentions.length - 1;
      }

      state.standardBallot = standardBallot;
    },
    savePassword(state, action) {
      state.password = action.payload;
    },
    startBallot(state) {
      state.ballotHasStarted = true;
    },
    registerOneVote(state, action) {
      state.ballotBox.push(action.payload);
    },
    accessResults(state, action) {
      console.log(action.payload);
      if (action.payload === "REVOKE") {
        state.demandAccesResults = false;
      }
      if (state.demandAccesResults === false && action.payload !== "REVOKE") {
        state.demandAccesResults = true;
      }
    },
  },
});

export const voteActions = voteSlice.actions;
export const voteSliceReducer = voteSlice.reducer;
