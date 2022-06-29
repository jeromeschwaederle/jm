import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import styles from "./Bulletin.module.css";
import { TEXT } from "../../../UI/textConstants";
import Proposition from "./Proposition/Proposition";
import Button from "../../../UI/Button/Button";
import IconCheck from "../../../UI/Icons/IconCheck";
import { voteActions } from "../../../store/voteSlice";

const toTheTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

export default function Bulletin({
  setLaunchBallot,
  setOneBallotHasBeenCasted,
}) {
  const propositions = useSelector(state => state.vote.propositions);

  const ballotPurpose = useSelector(state => state.vote.title);
  const standardBallot = useSelector(state => state.vote.standardBallot);
  // console.log("standardBallot:", standardBallot);

  const [ballot, setBallot] = useState(standardBallot);
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const primaryClickHandler = () => {
    if (!validated) {
      setValidated(true);
      toTheTop();
    }
    if (validated) {
      dispatch(voteActions.registerOneVote(ballot));
      setOneBallotHasBeenCasted(true);
    }
  };

  const secondaryClickHandler = () => {
    if (validated) {
      setValidated(false);
      toTheTop();
    }
    if (!validated) {
      setLaunchBallot(false);
    }
  };

  const tertiaryClickHandler = () => {
    setLaunchBallot(false);
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
          <Proposition
            key={i}
            propositionId={i}
            text={proposition}
            validated={validated}
            setBallot={setBallot}
          />
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
        {validated && (
          <Button
            secondary
            onClick={tertiaryClickHandler}
            className={`${styles.btn} ${styles.btnSupprimer}`}
          >
            {TEXT.Ballot.Bulletin.btn_delete}
          </Button>
        )}
      </div>
    </div>
  );
}
