import { useSelector } from "react-redux";

import styles from "./App.module.css";
import Acceuil from "./components/Acceuil/Acceuil";
import UrneConfig from "./components/UrneConfig/UrneConfig";
import Ballot from "./components/Ballot/Ballot";

export default function App() {
  const voteHasStarted = useSelector(
    state => state.vote.votingProcesshasStarted
  );
  const ballotHasStarted = useSelector(state => state.vote.ballotHasStarted);

  const showAcceuil = !voteHasStarted && !ballotHasStarted;
  const showUrneConfig = voteHasStarted && !ballotHasStarted;
  const showBallot = voteHasStarted && ballotHasStarted;

  return (
    <div className={styles.App}>
      {showAcceuil && <Acceuil />}
      {showUrneConfig && <UrneConfig />}
      {showBallot && <Ballot />}
    </div>
  );
}
