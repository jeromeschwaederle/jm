import { useSelector } from "react-redux";

import ProfileDisplay from "./ProfileDisplay/ProfileDisplay";
import styles from "./ResultsPresentation.module.css";
import { TEXT } from "../../../UI/textConstants";

export default function ResultsPresentation() {
  const propositions = useSelector(state => state.vote.propositions);
  const results = useSelector(state => state.vote.results);
  const ballotTitle = useSelector(state => state.vote.title);

  const resultsList = Object.keys(results.ranking).map((key, i) => {
    if (results.ranking[key].includes(" - ")) {
      const exAequoProfilesIndexes = results.ranking[key].split(" - ");
      const exAequoListItemToDisplay = exAequoProfilesIndexes.map(
        (profileIndex, i) => {
          const proposition = propositions[profileIndex];
          const mention = results.mentions[profileIndex];
          const profile = results.profiles[profileIndex];
          return (
            <li key={proposition} className={styles.listItem}>
              <div className={styles.header}>
                <div className={styles.infos}>
                  <p className={styles.classementNumber}>{key}</p>
                  <p className={styles.proposition}>
                    <span className={styles.ex_aequo}>(ex aequo)</span>
                    {proposition}
                  </p>
                </div>
                <div className={styles.mention}>{mention}</div>
              </div>
              <ProfileDisplay profile={profile} />
            </li>
          );
        }
      );
      return exAequoListItemToDisplay;
    } else {
      const proposition = propositions[results.ranking[key]];
      const mention = results.mentions[results.ranking[key]];
      const profile = results.profiles[results.ranking[key]];
      return (
        <li key={proposition} className={styles.listItem}>
          <div className={styles.header}>
            <div className={styles.infos}>
              <p className={styles.classementNumber}>{key}</p>
              <p className={styles.proposition}>{proposition}</p>
            </div>
            <div className={styles.mention}>{mention}</div>
          </div>
          <ProfileDisplay profile={profile} />
        </li>
      );
    }
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>{TEXT.results.finalResults.title}</h2>
      <h3 className={styles.ballotTitle}>{ballotTitle}</h3>
      <ul className={styles.list}>{resultsList}</ul>
    </div>
  );
}
