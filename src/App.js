import { useSelector } from "react-redux";

import styles from "./App.module.css";
import Acceuil from "./components/Acceuil/Acceuil";
import UrneConfig from "./components/UrneConfig/UrneConfig";

export default function App() {
  const voteHasStarted = useSelector(state => state.vote.hasStarted);

  return (
    <div className={styles.App}>
      {!voteHasStarted && <Acceuil />}
      {voteHasStarted && <UrneConfig />}
    </div>
  );
}
