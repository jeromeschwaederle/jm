import styles from "./Button.module.css";

export default function Button(props) {
  const { className, onClick, children, disabled, primary, secondary } = props;

  const appliedStyles = `${styles.btn} ${className ? className : ""} ${
    secondary ? styles.btn__secondary : ""
  } ${primary ? styles.btn__primary : ""}`;

  return (
    <button className={appliedStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
