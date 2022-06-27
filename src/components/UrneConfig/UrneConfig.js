import { useSelector } from "react-redux";
import { useState } from "react";

import styles from "./UrneConfig.module.css";
import Propositions from "./Propositions/Propositions";
import IconClose from "../../UI/Icons/IconClose";
import ConfirmationModal from "../../UI/ConfirmationModal/ConfirmationModal";
import { TEXT } from "../../UI/textConstants";
import PasswordSetup from "./PasswordSetup/PasswordSetup";
import VoteIsReady from "./VoteIsReady/VoteIsReady";

export default function UrneConfig() {
  const [showOverlayQuit, setShowOverlayQuit] = useState(false);

  const closeHandler = () => setShowOverlayQuit(true);
  const title = useSelector(state => state.vote.title);
  const propositions = useSelector(state => state.vote.propositions);
  const password = useSelector(state => state.vote.password);

  const showPropositions = !title && !propositions && !password;
  const showPasswordSetup = title && propositions && !password;
  const showVoteIsReady = title && propositions && password;

  return (
    <div className={styles.container}>
      {showOverlayQuit && (
        <ConfirmationModal
          setShowOverlayQuit={setShowOverlayQuit}
          text={TEXT.Overlay.textLooseData}
        />
      )}
      <button onClick={closeHandler} className={styles.iconClose}>
        <IconClose />
      </button>
      {showPropositions && <Propositions />}
      {showPasswordSetup && <PasswordSetup />}
      {showVoteIsReady && <VoteIsReady />}
    </div>
  );
}
