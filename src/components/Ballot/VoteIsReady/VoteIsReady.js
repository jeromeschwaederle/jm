import { useSelector, useDispatch } from "react-redux";

import { voteActions } from "../../../store/voteSlice";
import styles from "./VoteIsReady.module.css";
import IconCheck from "../../../UI/Icons/IconCheck";
import { TEXT } from "../../../UI/textConstants";
import Button from "../../../UI/Button/Button";

export default function VoteIsReady({ setLaunchBallot }) {
  const dispatch = useDispatch();
  const ballotBox = useSelector(state => state.vote.ballotBox);
  const atLeastOneVoteHappened = ballotBox.length > 0;
  const numberOfBallots = ballotBox.length;

  const clickHandler = () => setLaunchBallot(true);
  const goToResultsHandler = () => dispatch(voteActions.accessResults());

  return (
    <div className={styles.container}>
      {atLeastOneVoteHappened && (
        <aside className={styles.aside}>
          <span> {numberOfBallots}</span>
          {`${
            numberOfBallots > 1
              ? TEXT.Ballot.voteCasted.info.plural
              : TEXT.Ballot.voteCasted.info.singular
          }`}
        </aside>
      )}

      <span className={styles.iconCheck}>
        <IconCheck />
      </span>

      <h1 className={styles.pageTitle}>
        {TEXT.configurationUrne.voteIsReady.title}
      </h1>
      <p className={styles.text}>{TEXT.configurationUrne.voteIsReady.text}</p>
      <div className={styles.controls}>
        <Button onClick={clickHandler} primary>
          {atLeastOneVoteHappened
            ? TEXT.Ballot.voteCasted.btn_continue
            : TEXT.configurationUrne.voteIsReady.button}
        </Button>
        {atLeastOneVoteHappened && (
          <Button secondary onClick={goToResultsHandler}>
            {TEXT.Ballot.voteCasted.btn_results}
          </Button>
        )}
      </div>
    </div>
  );
}
