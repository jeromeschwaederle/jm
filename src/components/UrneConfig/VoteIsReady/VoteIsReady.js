import { useDispatch } from "react-redux";

import { voteActions } from "../../../store/voteSlice";
import styles from "./VoteIsReady.module.css";
import IconCheck from "../../../UI/Icons/IconCheck";
import { TEXT } from "../../../UI/textConstants";
import Button from "../../../UI/Button/Button";

export default function VoteIsReady() {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(voteActions.startBallot());

  return (
    <div className={styles.container}>
      <span className={styles.iconCheck}>
        <IconCheck />
      </span>
      <h1 className={styles.pageTitle}>
        {TEXT.configurationUrne.voteIsReady.title}
      </h1>
      <p className={styles.text}>{TEXT.configurationUrne.voteIsReady.text}</p>
      <Button onClick={clickHandler} primary>
        {TEXT.configurationUrne.voteIsReady.button}
      </Button>
    </div>
  );
}
