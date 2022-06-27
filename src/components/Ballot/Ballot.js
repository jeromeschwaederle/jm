import styles from "./Ballot.module.css";
import Bulletin from "./Bulletin/Bulletin";

export default function Ballot() {
  return (
    <div className={styles.container}>
      <Bulletin />
    </div>
  );
}
