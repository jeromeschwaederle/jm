import { useSelector } from "react-redux";

import styles from "./ResultsPresentation.module.css";

export default function ResultsPresentation() {
  const ballotBox = useSelector(state => state.vote.ballotBox);
  console.log("ballotBox:", ballotBox);

  // ############################################################

  const sortBallotBox = ballotBox => {
    const unsortedProfiles = Object.keys(ballotBox[0]).map(() => []);

    ballotBox.forEach(bulletin => {
      for (const [key, value] of Object.entries(bulletin)) {
        unsortedProfiles[key].push(value);
      }
    });

    const sortedProfiles = unsortedProfiles.map(profile => {
      const arrayToSort = [...profile];
      return arrayToSort.sort((a, b) => a - b);
    });

    return sortedProfiles;
  };

  // ############################################################

  const sortedProfiles = sortBallotBox(ballotBox);
  console.log("sortedProfiles:", sortedProfiles);

  return <div className={styles.container}>ResultsPresentation</div>;
}
