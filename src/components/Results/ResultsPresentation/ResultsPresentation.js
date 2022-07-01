import { useSelector } from "react-redux";

import styles from "./ResultsPresentation.module.css";

export default function ResultsPresentation() {
  const mentions = useSelector(state => state.vote.mentions);
  const propositions = useSelector(state => state.vote.propositions);
  const ballotBoxSorted = useSelector(state => state.vote.ballotBoxSorted);
  const ranking = useSelector(state => state.vote.results);
  console.log("ranking:", ranking);

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Résultats</h2>
      <ul>
        {ballotBoxSorted.map((profile, index) => (
          <li key={index}>{profile}</li>
        ))}
      </ul>
    </div>
  );
}
