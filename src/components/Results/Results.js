import styles from "./Results.module.css";
import PasswordCheck from "./PasswordCheck/PasswordCheck";
import RebootModal from "../RebootModal/RebootModal";

export default function Results() {
  return (
    <div className={styles.container}>
      <RebootModal />
      <PasswordCheck />
    </div>
  );
}
