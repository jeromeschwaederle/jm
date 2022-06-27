import { useState } from "react";

import styles from "./Ballot.module.css";
import Bulletin from "./Bulletin/Bulletin";
import VoteIsReady from "./Bulletin/VoteIsReady/VoteIsReady";

export default function Ballot() {
  const [launchBallot, setLaunchBallot] = useState(false);

  return (
    <div className={styles.container}>
      {launchBallot ? (
        <Bulletin />
      ) : (
        <VoteIsReady setLaunchBallot={setLaunchBallot} />
      )}
    </div>
  );
}
