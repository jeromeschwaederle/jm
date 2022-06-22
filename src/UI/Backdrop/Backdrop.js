import styles from "./Backdrop.module.css";

export default function Backdrop({ blured }) {
  return <div className={blured ? styles.blur : styles.full}></div>;
}
