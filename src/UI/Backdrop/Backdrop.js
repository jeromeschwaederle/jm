import styles from "./Backdrop.module.css";

export default function Backdrop({ blured }) {
  return (
    <div
      className={`${styles.backdrop} ${
        blured ? styles.backdrop__blur : styles.backdrop__full
      }`}
    ></div>
  );
}
