import { useDispatch } from "react-redux";

import styles from "./Overlay.module.css";
import Button from "../../Button/Button";
import { voteActions } from "../../../store/voteSlice";

export default function Overlay({ text, setShowOverlayQuit }) {
  const dispatch = useDispatch();
  const clickNoHandler = () => setShowOverlayQuit(false);
  const clickYesHandler = () => dispatch(voteActions.resetVotingProcess());

  return (
    <div className={styles.container}>
      <p>{text}</p>
      <Button onClick={clickNoHandler} className={styles.btn} secondary>
        NON
      </Button>
      <Button onClick={clickYesHandler} className={styles.btn} primary>
        OUI
      </Button>
    </div>
  );
}
