import styles from "./Acceuil.module.css";
import Button from "../../UI/Button";
import { TEXT } from "../../UI/textConstants";

export default function Acceuil() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>{TEXT.acceuil.titre}</h2>
        <p className={styles.presentation}>{TEXT.acceuil.presentation}</p>
        <Button className={styles.btnPrimary}>{TEXT.acceuil.btnPrimary}</Button>
      </div>
      <Button className={styles.btnSecondary}>
        {TEXT.acceuil.btnSecondary}
      </Button>
    </div>
  );
}
