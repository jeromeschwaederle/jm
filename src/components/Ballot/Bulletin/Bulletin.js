import { useSelector } from "react-redux";
import { useState } from "react";

import styles from "./Bulletin.module.css";
import { TEXT } from "../../../UI/textConstants";
import Proposition from "./Proposition/Proposition";
import Button from "../../../UI/Button/Button";
import IconCheck from "../../../UI/Icons/IconCheck";

const toTheTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

export default function Bulletin() {
  const [validated, setValidated] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const propositions = useSelector(state => state.vote.propositions);
  const ballotPurpose = useSelector(state => state.vote.title);

  const primaryClickHandler = () => {
    setValidated(true);
    toTheTop();
  };

  const secondaryClickHandler = () => {
    if (validated) {
      setValidated(false);
      toTheTop();
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>{ballotPurpose}</h1>
        <p className={styles.question}>
          {TEXT.Ballot.Bulletin.statement_part_1}
          <span>{ballotPurpose}</span>
          {TEXT.Ballot.Bulletin.statement_part_2}
        </p>
      </header>
      <div className={styles.propositions}>
        {propositions.map((proposition, i) => (
          <Proposition key={i} text={proposition} validated={validated} />
        ))}
      </div>
      <div className={styles.controls}>
        <Button
          onClick={primaryClickHandler}
          primary
          className={`${styles.btn} ${styles.btnCheck}`}
        >
          {validated ? TEXT.Ballot.Bulletin.btn_confirm : <IconCheck />}
        </Button>
        <Button
          secondary
          onClick={secondaryClickHandler}
          className={`${styles.btn} ${styles.btnSupprimer}`}
        >
          {validated
            ? TEXT.Ballot.Bulletin.btn_modify
            : TEXT.Ballot.Bulletin.btn_delete}
        </Button>
      </div>
    </div>
  );
}
