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

  return (
    <div className={styles.App}>
      {!voteHasStarted && !ballotHasStarted && <Acceuil />}
      {voteHasStarted && !ballotHasStarted && <UrneConfig />}
      {voteHasStarted && ballotHasStarted && <Ballot />}
    </div>
  );
}
