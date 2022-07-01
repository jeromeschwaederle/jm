import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

import { sortBallotBox, computeResults } from "./algo";

const initialState = {
  mentions: [
    "très bien",
    "bien",
    "plutôt bien",
    "plutôt mauvais⸱e",
    "mauvais⸱e",
    "très mauvais⸱e",
    "à rejeter",
  ],
  // mentions: [
  //   "excellent.e",
  //   "très bien",
  //   "bien",
  //   "assez bien",
  //   "passable",
  //   "insuffisant.e",
  //   "à rejeter",
  // ],
  votingProcesshasStarted: false,
  ballotHasStarted: false,
  title: undefined,
  propositions: undefined,
  password: undefined,
  standardBallot: undefined,
  ballotBox: [],
  ballotBoxSorted: [],
  results: undefined,
  demandAccesResults: false,
  accessResults: false,
  //##########################################
  ////////////// Pour tester
  //##########################################
  // votingProcesshasStarted: true,
  // ballotHasStarted: true,
  // title: "Choisir ce que l'on va manger ce soir",
  // propositions: ["Hamburger", "Pizza", "Döner"],
  // password: "a",
  // standardBallot: { 0: 6, 1: 6, 2: 6 },
  // ballotBox: [
  //   { 0: 1, 1: 0, 2: 3, 3: 0, 4: 2, 5: 1, 6: 2 },
  //   { 0: 2, 1: 1, 2: 0, 3: 0, 4: 3, 5: 3, 6: 3 },
  //   { 0: 3, 1: 1, 2: 2, 3: 1, 4: 1, 5: 4, 6: 1 },
  //   { 0: 2, 1: 1, 2: 1, 3: 0, 4: 2, 5: 3, 6: 2 },
  //   { 0: 2, 1: 2, 2: 1, 3: 0, 4: 2, 5: 3, 6: 2 },
  //   { 0: 2, 1: 1, 2: 0, 3: 0, 4: 2, 5: 2, 6: 2 },
  //   { 0: 2, 1: 1, 2: 1, 3: 0, 4: 2, 5: 2, 6: 2 },
  // ],
  // results: undefined,
  // demandAccesResults: true,
  // accessResults: true,
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
    makeResults(state) {
      state.ballotBoxSorted = sortBallotBox(state.ballotBox);
      state.results = computeResults(state.ballotBoxSorted);
    },
  },
});

export const voteActions = voteSlice.actions;
export const voteSliceReducer = voteSlice.reducer;
