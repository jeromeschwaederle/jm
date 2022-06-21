import styles from "./Button.module.css";

export default function Button({ className, onClick, children, disabled }) {
  return (
    <button
      className={`${styles.btn} ${className ? className : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
