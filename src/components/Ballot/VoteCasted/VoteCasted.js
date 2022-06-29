import { useSelector, useDispatch } from "react-redux";

import Button from "../../../UI/Button/Button";
import styles from "./VoteCasted.module.css";
import { TEXT } from "../../../UI/textConstants";
import { voteActions } from "../../../store/voteSlice";

export default function VoteCasted({ setOneBallotHasBeenCasted }) {
  const dispatch = useDispatch();
  const ballotBox = useSelector(state => state.vote.ballotBox);
  const numberOfBallots = ballotBox.length;

  const primaryClickHandler = () => setOneBallotHasBeenCasted(false);

  const secondaryClickHandler = () => {
    dispatch(voteActions.accessResults("ACCES_RESULTS"));
  };

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <span> {numberOfBallots}</span>
        {`${
          numberOfBallots > 1
            ? TEXT.Ballot.voteCasted.info.plural
            : TEXT.Ballot.voteCasted.info.singular
        }`}
      </aside>
      <header className={styles.header}>
        <h1 className={styles.title}>{TEXT.Ballot.voteCasted.title}</h1>
        <p className={styles.text}>{TEXT.Ballot.voteCasted.text}</p>
      </header>
      <div className={styles.controls}>
        <Button onClick={primaryClickHandler} primary className={styles.btn}>
          {TEXT.Ballot.voteCasted.btn_continue}
        </Button>
        <Button
          onClick={secondaryClickHandler}
          secondary
          className={styles.btn}
        >
          {TEXT.Ballot.voteCasted.btn_results}
        </Button>
      </div>
    </div>
  );
}
