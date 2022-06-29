import styles from "./Overlay.module.css";
import Button from "../Button/Button";

export default function Overlay(props) {
  const { actionOne, actionTwo, btnNumber, textBtnOne, textBtnTwo, text } =
    props;

  const actionOneHandler = () => actionOne();
  const actionTwoHandler = () => actionTwo();

  if (btnNumber === 2) {
    return (
      <div className={styles.container}>
        <p>{text}</p>
        <Button onClick={actionOneHandler} className={styles.btn} secondary>
          {textBtnOne}
        </Button>
        <Button onClick={actionTwoHandler} className={styles.btn} primary>
          {textBtnTwo}
        </Button>
      </div>
    );
  }
  if (btnNumber === 1) {
    return (
      <div className={styles.container}>
        <p>{text}</p>
        <Button onClick={actionOneHandler} className={styles.btn} secondary>
          {textBtnOne}
        </Button>
      </div>
    );
  }
}
