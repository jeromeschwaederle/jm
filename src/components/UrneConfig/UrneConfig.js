import { useSelector } from "react-redux";

import styles from "./UrneConfig.module.css";
import Propositions from "./Propositions/Propositions";
import PasswordSetup from "./PasswordSetup/PasswordSetup";

import RebootModal from "../RebootModal/RebootModal";

export default function UrneConfig() {
  const title = useSelector(state => state.vote.title);
  const propositions = useSelector(state => state.vote.propositions);
  const showPropositions = !title && !propositions;
  const showPasswordSetup = title && propositions;

  return (
    <div className={styles.container}>
      <RebootModal />
      {showPropositions && <Propositions />}
      {showPasswordSetup && <PasswordSetup />}
    </div>
  );
}
