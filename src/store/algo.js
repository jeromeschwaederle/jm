export function sortBallotBox(ballotBox) {
  return transformBallotObjectInProfilesArray(ballotBox);
}

const transformBallotObjectInProfilesArray = ballotBox => {
  const arrayOfProfilesArrays = Object.keys(ballotBox[0]).map(() => []);

  ballotBox.forEach(bulletin => {
    for (const [candidat, mention] of Object.entries(bulletin))
      arrayOfProfilesArrays[candidat].push(mention);
  });

  return sortAllArrayProfiles(arrayOfProfilesArrays);
};

const sortAllArrayProfiles = arrayOfArrayProfiles =>
  arrayOfArrayProfiles.map(profile => [...profile].sort((a, b) => a - b));

export function computeResults(arrayOfSortedArrayProfiles) {
  const nbOfProfiles = arrayOfSortedArrayProfiles.length;
  const profileLength = arrayOfSortedArrayProfiles[0].length;
  const profileDefeats = returnsInitialisedDefeatsPerProfileObject(nbOfProfiles);

  for (let profileCursor_A = 0; profileCursor_A < nbOfProfiles - 1; profileCursor_A++) {
    for (
      let profileCursor_B = profileCursor_A + 1;
      profileCursor_B < nbOfProfiles;
      profileCursor_B++
    ) {
      if (profilesArePerfectlyEqual(arrayOfSortedArrayProfiles, profileCursor_A, profileCursor_B))
        continue;

      let [mentionCursor_A, mentionCursor_B] = asignMentionCursors(profileLength);

      let mentions = asignMentions();
      function asignMentions() {
        return {
          mentionLow__profilA: arrayOfSortedArrayProfiles[profileCursor_A][mentionCursor_B],
          mentionHigh__profilA: arrayOfSortedArrayProfiles[profileCursor_A][mentionCursor_A],
          mentionLow__profilB: arrayOfSortedArrayProfiles[profileCursor_B][mentionCursor_B],
          mentionHigh__profilB: arrayOfSortedArrayProfiles[profileCursor_B][mentionCursor_A],
        };
      }

      while (mentionsAreEqual(mentions)) {
        mentionCursor_A--;
        mentionCursor_B++;
        mentions = asignMentions();
      }

      if (profileBLooses(mentions)) profileDefeats[profileCursor_B]++;
      else profileDefeats[profileCursor_A]++;
    }
  }

  return makeRankingObject(profileDefeats);
}

const returnsInitialisedDefeatsPerProfileObject = nbOfProfiles => {
  const profileDefeats = {};
  for (let i = 0; i < nbOfProfiles; i++) profileDefeats[i] = 0;
  return profileDefeats;
};

const profilesArePerfectlyEqual = (arrayOfSortedArrayProfiles, profileCursor_A, profileCursor_B) =>
  arrayOfSortedArrayProfiles[profileCursor_A].join("") ===
  arrayOfSortedArrayProfiles[profileCursor_B].join("");

const asignMentionCursors = profileLength => {
  let mentionCursor_A, mentionCursor_B;
  if (profileLength % 2 === 0) {
    mentionCursor_A = profileLength / 2 - 1;
    mentionCursor_B = profileLength / 2;
  } else mentionCursor_A = mentionCursor_B = Math.floor(profileLength / 2);
  return [mentionCursor_A, mentionCursor_B];
};

const mentionsAreEqual = mentions =>
  mentions.mentionLow__profilA === mentions.mentionLow__profilB &&
  mentions.mentionHigh__profilA === mentions.mentionHigh__profilB;

const profileBLooses = mentions => {
  return (
    (mentions.mentionLow__profilA < mentions.mentionLow__profilB &&
      mentions.mentionHigh__profilA < mentions.mentionHigh__profilB) ||
    (mentions.mentionLow__profilA === mentions.mentionLow__profilB &&
      mentions.mentionHigh__profilA < mentions.mentionHigh__profilB) ||
    (mentions.mentionLow__profilA < mentions.mentionLow__profilB &&
      mentions.mentionHigh__profilA === mentions.mentionHigh__profilB) ||
    (mentions.mentionLow__profilA < mentions.mentionLow__profilB &&
      mentions.mentionLow__profilA >= mentions.mentionHigh__profilA &&
      mentions.mentionHigh__profilA > mentions.mentionHigh__profilB)
  );
};

const makeRankingObject = profileDefeats => {
  const ranking = {};
  for (const [profileIndex, numberOfDefeats] of Object.entries(profileDefeats)) {
    if (ranking[numberOfDefeats + 1]) ranking[numberOfDefeats + 1] += ` - ${profileIndex}`;
    else ranking[numberOfDefeats + 1] = profileIndex;
  }
  return ranking;
};

export function computeMention(profiles, mentions) {
  const numberOfVotes = profiles[0].length;
  const numberOfVoteIsEven = numberOfVotes % 2 === 0;

  let mentionsArray;
  if (numberOfVoteIsEven) {
    let cursorLeft = numberOfVotes / 2 - 1;
    let cursorRight = numberOfVotes / 2;
    mentionsArray = profiles.map(profile => {
      if (mentions[profile[cursorLeft]] === mentions[profile[cursorRight]])
        return `${mentions[profile[cursorLeft]]}`;
      else return `${mentions[profile[cursorLeft]]} --- ${mentions[profile[cursorRight]]}`;
    });
  } else {
    const voteInTheMiddle = Math.floor(numberOfVotes / 2);
    mentionsArray = profiles.map(profile => `${mentions[profile[voteInTheMiddle]]}`);
  }
  return mentionsArray;
}
