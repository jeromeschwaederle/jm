import { useSelector } from "react-redux";

import styles from "./Results.module.css";
import PasswordCheck from "./PasswordCheck/PasswordCheck";
import RebootModal from "../RebootModal/RebootModal";
import ResultsPresentation from "./ResultsPresentation/ResultsPresentation";

export default function Results() {
  const demandAccesResults = useSelector(
    state => state.vote.demandAccesResults
  );
  const accessResultsGranted = useSelector(state => state.vote.accessResults);

  const showPasswordCheck = demandAccesResults && !accessResultsGranted;
  const showResultsPresentation = demandAccesResults && accessResultsGranted;

  return (
    <div className={styles.container}>
      <RebootModal />
      {showPasswordCheck && <PasswordCheck />}
      {showResultsPresentation && <ResultsPresentation />}
    </div>
  );
}
