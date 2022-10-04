import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

import { sortBallotBox, computeResults, computeMention } from "./algo";

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
  // votingProcesshasStarted: false,
  // ballotHasStarted: false,
  // title: undefined,
  // propositions: undefined,
  // password: undefined,
  // standardBallot: undefined,
  // ballotBox: [],
  // results: { profiles: [], ranking: [], mentions: [] },
  // demandAccesResults: false,
  // accessResults: false,
  //##########################################
  ////////////// Pour tester
  //##########################################
  votingProcesshasStarted: true,
  ballotHasStarted: true,
  title: "Choisir ce que l'on va manger ce soir",
  propositions: [
    "Hamburger",
    "Pizza",
    "Döner avec beaucoup de piment",
    "Sushi",
    "Italien",
    "Libanais",
    "Végé",
  ],
  password: "a",
  standardBallot: { 0: 6, 1: 6, 2: 6 },
  ballotBox: [
    { 0: 1, 1: 0, 2: 0, 3: 0, 4: 2, 5: 1, 6: 0 },
    { 0: 2, 1: 1, 2: 0, 3: 0, 4: 3, 5: 3, 6: 2 },
    { 0: 3, 1: 1, 2: 0, 3: 1, 4: 1, 5: 4, 6: 0 },
    { 0: 4, 1: 1, 2: 0, 3: 0, 4: 2, 5: 3, 6: 0 },
    { 0: 6, 1: 2, 2: 6, 3: 0, 4: 2, 5: 4, 6: 2 },
    { 0: 5, 1: 4, 2: 6, 3: 0, 4: 2, 5: 2, 6: 2 },
    { 0: 4, 1: 4, 2: 0, 3: 0, 4: 4, 5: 4, 6: 4 },
    { 0: 6, 1: 6, 2: 6, 3: 6, 4: 0, 5: 6, 6: 2 },
    { 0: 5, 1: 3, 2: 5, 3: 5, 4: 0, 5: 3, 6: 5 },
    { 0: 3, 1: 3, 2: 1, 3: 3, 4: 0, 5: 3, 6: 3 },
    { 0: 2, 1: 4, 2: 0, 3: 6, 4: 2, 5: 3, 6: 2 },
    { 0: 2, 1: 4, 2: 3, 3: 6, 4: 2, 5: 2, 6: 0 },
  ],
  results: { profiles: [], ranking: [], mentions: [] },

  demandAccesResults: true,
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
      if (state.demandAccesResults === false && action.payload === "ACCES_RESULTS") {
        state.demandAccesResults = true;
      }
      if (state.demandAccesResults === true && action.payload === "ACCES_GRANTED") {
        state.accessResults = true;
      }
      if (action.payload === "REVOKE") {
        state.demandAccesResults = false;
      }
    },
    makeResults(state) {
      state.results.profiles = sortBallotBox(state.ballotBox);
      state.results.ranking = computeResults(state.results.profiles);
      state.results.mentions = computeMention(state.results.profiles, state.mentions);
    },
  },
});

export const voteActions = voteSlice.actions;
export const voteSliceReducer = voteSlice.reducer;
