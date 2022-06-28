import Button from "../../../UI/Button/Button";
import styles from "./VoteCasted.module.css";
import { TEXT } from "../../../UI/textConstants";

export default function VoteCasted() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>{TEXT.Ballot.voteCasted.info}</aside>
      <header className={styles.header}>
        <h1 className={styles.title}>{TEXT.Ballot.voteCasted.title}</h1>
        <p className={styles.text}>{TEXT.Ballot.voteCasted.text}</p>
      </header>
      <div className={styles.controls}>
        <Button primary className={styles.btn}>
          {TEXT.Ballot.voteCasted.btn_continue}
        </Button>
        <Button secondary className={styles.btn}>
          {TEXT.Ballot.voteCasted.btn_results}
        </Button>
      </div>
    </div>
  );
}
