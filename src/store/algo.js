export function sortBallotBox(ballotBox) {
  return transformBallotObjectInProfilesArrays(ballotBox);
}

const transformBallotObjectInProfilesArrays = ballotBox => {
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
  const electorNumberIsEven = profileLength % 2 === 0;

  const profileDefeats = returnsInitialisedDefeatsPerProfileObject(nbOfProfiles);

  function returnsInitialisedDefeatsPerProfileObject(nbOfProfiles) {
    const profileDefeats = {};
    for (let i = 0; i < nbOfProfiles; i++) profileDefeats[i] = 0;
    return profileDefeats;
  }

  for (let profileCursor_A = 0; profileCursor_A < nbOfProfiles - 1; profileCursor_A++) {
    for (
      let profileCursor_B = profileCursor_A + 1;
      profileCursor_B < nbOfProfiles;
      profileCursor_B++
    ) {
      if (
        arrayOfSortedArrayProfiles[profileCursor_A].join("") ===
        arrayOfSortedArrayProfiles[profileCursor_B].join("")
      )
        continue;

      let cursorA__profile;
      let cursorB__profile;
      if (electorNumberIsEven) {
        cursorA__profile = profileLength / 2 - 1;
        cursorB__profile = profileLength / 2;
      } else {
        cursorA__profile = cursorB__profile = Math.floor(profileLength / 2);
      }

      let mentionMedianeBasse__profilA =
        arrayOfSortedArrayProfiles[profileCursor_A][cursorA__profile];
      let mentionMedianeBasse__profilB =
        arrayOfSortedArrayProfiles[profileCursor_B][cursorA__profile];
      let mentionMedianeHaute__profilA =
        arrayOfSortedArrayProfiles[profileCursor_A][cursorB__profile];
      let mentionMedianeHaute__profilB =
        arrayOfSortedArrayProfiles[profileCursor_B][cursorB__profile];

      if (
        mentionMedianeBasse__profilA === mentionMedianeBasse__profilB &&
        mentionMedianeHaute__profilA === mentionMedianeHaute__profilB
      ) {
        while (
          mentionMedianeBasse__profilA === mentionMedianeBasse__profilB &&
          mentionMedianeHaute__profilA === mentionMedianeHaute__profilB
        ) {
          cursorA__profile--;
          cursorB__profile++;

          mentionMedianeBasse__profilA =
            arrayOfSortedArrayProfiles[profileCursor_A][cursorA__profile];
          mentionMedianeBasse__profilB =
            arrayOfSortedArrayProfiles[profileCursor_B][cursorA__profile];
          mentionMedianeHaute__profilA =
            arrayOfSortedArrayProfiles[profileCursor_A][cursorB__profile];
          mentionMedianeHaute__profilB =
            arrayOfSortedArrayProfiles[profileCursor_B][cursorB__profile];
        }
      }
      if (
        (mentionMedianeBasse__profilA < mentionMedianeBasse__profilB &&
          mentionMedianeHaute__profilA < mentionMedianeHaute__profilB) ||
        (mentionMedianeBasse__profilA === mentionMedianeBasse__profilB &&
          mentionMedianeHaute__profilA < mentionMedianeHaute__profilB) ||
        (mentionMedianeBasse__profilA < mentionMedianeBasse__profilB &&
          mentionMedianeHaute__profilA === mentionMedianeHaute__profilB) ||
        (mentionMedianeBasse__profilA > mentionMedianeBasse__profilB &&
          mentionMedianeBasse__profilA <= mentionMedianeHaute__profilA &&
          mentionMedianeHaute__profilA < mentionMedianeHaute__profilB)
      ) {
        profileDefeats[profileCursor_B]++;
      } else {
        profileDefeats[profileCursor_A]++;
      }
    }
  }

  const ranking = {};
  for (const [key, value] of Object.entries(profileDefeats)) {
    if (ranking[value + 1]) ranking[value + 1] = `${ranking[value + 1]} - ${key}`;
    else ranking[value + 1] = key;
  }

  return ranking;
}

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
