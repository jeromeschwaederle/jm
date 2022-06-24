import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Acceuil.module.css";
import Button from "../../UI/Button/Button";
import { TEXT } from "../../UI/textConstants";
import CommentCaMarche from "./CommentCaMarche/CommentCaMarche";
import { voteActions } from "../../store/voteSlice";

export default function Acceuil() {
  const dispatch = useDispatch();
  const btnPrimaryHandler = () => dispatch(voteActions.startVotingProcess());

  const [showExplanation, setShowExplanation] = useState(false);
  const btnSecondaryHandler = () => {
    setShowExplanation(true);
  };

  if (!showExplanation) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{TEXT.acceuil.titre}</h2>
        <p className={styles.presentation}>{TEXT.acceuil.presentation}</p>
        <Button onClick={btnPrimaryHandler} className={styles.btnPrimary}>
          {TEXT.acceuil.btnPrimary}
        </Button>

        <Button onClick={btnSecondaryHandler} className={styles.btnSecondary}>
          {TEXT.acceuil.btnSecondary}
        </Button>
      </div>
    );
  }

  if (showExplanation) {
    return <CommentCaMarche setShowExplanation={setShowExplanation} />;
  }
}
