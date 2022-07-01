export function sortBallotBox(ballotBox) {
  const unsortedProfiles = Object.keys(ballotBox[0]).map(() => []);

  ballotBox.forEach(bulletin => {
    for (const [key, value] of Object.entries(bulletin)) {
      unsortedProfiles[key].push(value);
    }
  });

  const profilesSorted = unsortedProfiles.map(profile => {
    const arrayToSort = [...profile];
    return arrayToSort.sort((a, b) => a - b);
  });

  return profilesSorted;
}

export function computeResults(profiles) {
  const nbOfProfiles = profiles.length;
  const profileLength = profiles[0].length;
  const electorNumberIsEven = profileLength % 2 === 0;

  const profileDefeats = {};
  for (let i = 0; i < nbOfProfiles; i++) {
    profileDefeats[i] = 0;
  }

  for (
    let profileCursor_A = 0;
    profileCursor_A < nbOfProfiles - 1;
    profileCursor_A++
  ) {
    for (
      let profileCursor_B = profileCursor_A + 1;
      profileCursor_B < nbOfProfiles;
      profileCursor_B++
    ) {
      if (
        profiles[profileCursor_A].join("") ===
        profiles[profileCursor_B].join("")
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
        profiles[profileCursor_A][cursorA__profile];
      let mentionMedianeBasse__profilB =
        profiles[profileCursor_B][cursorA__profile];
      let mentionMedianeHaute__profilA =
        profiles[profileCursor_A][cursorB__profile];
      let mentionMedianeHaute__profilB =
        profiles[profileCursor_B][cursorB__profile];

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
            profiles[profileCursor_A][cursorA__profile];
          mentionMedianeBasse__profilB =
            profiles[profileCursor_B][cursorA__profile];
          mentionMedianeHaute__profilA =
            profiles[profileCursor_A][cursorB__profile];
          mentionMedianeHaute__profilB =
            profiles[profileCursor_B][cursorB__profile];
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
    if (ranking[value + 1]) {
      ranking[value + 1] = `${ranking[value + 1]} - ${key}`;
    } else {
      ranking[value + 1] = key;
    }
  }

  return ranking;
}
