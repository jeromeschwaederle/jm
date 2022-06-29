import { useSelector } from "react-redux";

import styles from "./Results.module.css";
import PasswordCheck from "./PasswordCheck/PasswordCheck";
import RebootModal from "../RebootModal/RebootModal";
import ResultsPresentation from "./ResultsPresentation/ResultsPresentation";

export default function Results() {
  const accessResultsGranted = useSelector(state => state.vote.accessResults);

  return (
    <div className={styles.container}>
      <RebootModal />
      {!accessResultsGranted && <PasswordCheck />}
      {accessResultsGranted && <ResultsPresentation />}
    </div>
  );
}
