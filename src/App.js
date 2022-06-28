import { useSelector } from "react-redux";

import styles from "./App.module.css";
import Acceuil from "./components/Acceuil/Acceuil";
import UrneConfig from "./components/UrneConfig/UrneConfig";
import Ballot from "./components/Ballot/Ballot";
import Results from "./components/Results/Results";

export default function App() {
  const voteHasStarted = useSelector(
    state => state.vote.votingProcesshasStarted
  );
  const ballotHasStarted = useSelector(state => state.vote.ballotHasStarted);
  const demandAccesResults = useSelector(
    state => state.vote.demandAccesResults
  );

  const showAcceuil =
    !voteHasStarted && !ballotHasStarted && !demandAccesResults;
  const showUrneConfig =
    voteHasStarted && !ballotHasStarted && !demandAccesResults;
  const showBallot = voteHasStarted && ballotHasStarted && !demandAccesResults;
  const showResults = voteHasStarted && ballotHasStarted && demandAccesResults;

  return (
    <div className={styles.App}>
      {showAcceuil && <Acceuil />}
      {showUrneConfig && <UrneConfig />}
      {showBallot && <Ballot />}
      {showResults && <Results />}
    </div>
  );
}
