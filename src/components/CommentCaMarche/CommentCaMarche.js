import styles from "./CommentCaMarche.module.css";
import { TEXT } from "../../UI/textConstants";
import IconClose from "../../UI/Icons/IconClose";
import Accordeon from "../../UI/Accordeon/Accordeon";

export default function CommentCaMarche({ setShowExplanation }) {
  const clickHandler = () => setShowExplanation(false);

  return (
    <div className={styles.container}>
      <IconClose className={styles.iconClose} onClick={clickHandler} />
      <Accordeon text={TEXT.commentCaMarche} />
    </div>
  );
}
