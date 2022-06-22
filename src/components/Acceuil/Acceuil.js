import { useState } from "react";

import styles from "./Acceuil.module.css";
import Button from "../../UI/Button/Button";
import { TEXT } from "../../UI/textConstants";
import CommentCaMarche from "../CommentCaMarche/CommentCaMarche";

export default function Acceuil() {
  const [showExplanation, setShowExplanation] = useState(false);
  const btnSecondaryHandler = () => {
    console.log("showExplanation", showExplanation);
    setShowExplanation(true);
  };

  if (!showExplanation) {
    return (
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>{TEXT.acceuil.titre}</h2>
          <p className={styles.presentation}>{TEXT.acceuil.presentation}</p>
          <Button className={styles.btnPrimary}>
            {TEXT.acceuil.btnPrimary}
          </Button>
        </div>
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
