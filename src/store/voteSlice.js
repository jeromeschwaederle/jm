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
  // votingProcesshasStarted: false,
  // ballotHasStarted: false,
  // title: undefined,
  // propositions: undefined,
  // password: undefined,
  // standardBallot: undefined,
  // ballotBox: [],
  // results: undefined,
  // demandAccesResults: false,
  // accessResults: false,
  //#####################
  ////////////// Pour tester
  //####################
  votingProcesshasStarted: true,
  ballotHasStarted: true,
  title: "a",
  propositions: ["a", "aa", "aaa"],
  password: "a",
  standardBallot: { 0: 6, 1: 6, 2: 6 },
  ballotBox: [
    { 0: 1, 1: 4, 2: 5 },
    { 0: 4, 1: 1, 2: 0 },
    { 0: 4, 1: 6, 2: 2 },
    { 0: 6, 1: 6, 2: 6 },
  ],
  results: undefined,
  demandAccesResults: true,
  accessResults: true,
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
      if (
        state.demandAccesResults === false &&
        action.payload === "ACCES_RESULTS"
      ) {
        state.demandAccesResults = true;
      }
      if (
        state.demandAccesResults === true &&
        action.payload === "ACCES_GRANTED"
      ) {
        state.accessResults = true;
      }
      if (action.payload === "REVOKE") {
        state.demandAccesResults = false;
      }
    },
  },
});

export const voteActions = voteSlice.actions;
export const voteSliceReducer = voteSlice.reducer;
