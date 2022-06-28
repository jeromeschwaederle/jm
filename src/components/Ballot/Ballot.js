import { useState } from "react";

import styles from "./Ballot.module.css";
import Bulletin from "./Bulletin/Bulletin";
import VoteIsReady from "./VoteIsReady/VoteIsReady";
import VoteCasted from "./VoteCasted/VoteCasted";

export default function Ballot() {
  const [launchBallot, setLaunchBallot] = useState(false);
  const [oneBallotHasBeenCasted, setOneBallotHasBeenCasted] = useState(false);

  const showVoteIsReady = !launchBallot && !oneBallotHasBeenCasted;
  const showBulletin = launchBallot && !oneBallotHasBeenCasted;
  const showVoteCasted = launchBallot && oneBallotHasBeenCasted;

  return (
    <div className={styles.container}>
      {showVoteIsReady && <VoteIsReady setLaunchBallot={setLaunchBallot} />}
      {showBulletin && (
        <Bulletin
          setLaunchBallot={setLaunchBallot}
          setOneBallotHasBeenCasted={setOneBallotHasBeenCasted}
        />
      )}
      {showVoteCasted && <VoteCasted />}
    </div>
  );
}
