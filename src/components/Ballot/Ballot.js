import { useState } from "react";

import Bulletin from "./Bulletin/Bulletin";
import VoteIsReady from "./VoteIsReady/VoteIsReady";
import VoteCasted from "./VoteCasted/VoteCasted";

import RebootModal from "../RebootModal/RebootModal";

export default function Ballot() {
  const [launchBallot, setLaunchBallot] = useState(false);
  const [oneBallotHasBeenCasted, setOneBallotHasBeenCasted] = useState(false);

  const showVoteIsReady = !launchBallot && !oneBallotHasBeenCasted;
  const showBulletin = launchBallot && !oneBallotHasBeenCasted;
  const showVoteCasted = launchBallot && oneBallotHasBeenCasted;

  return (
    <div>
      <RebootModal />
      {showVoteIsReady && <VoteIsReady setLaunchBallot={setLaunchBallot} />}
      {showBulletin && (
        <Bulletin
          setLaunchBallot={setLaunchBallot}
          setOneBallotHasBeenCasted={setOneBallotHasBeenCasted}
        />
      )}
      {showVoteCasted && (
        <VoteCasted setOneBallotHasBeenCasted={setOneBallotHasBeenCasted} />
      )}
    </div>
  );
}
