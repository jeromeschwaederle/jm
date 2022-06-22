import styles from "./Accordeon.module.css";
import IconChevronDown from "../../UI/Icons/IconChevronDown";
import IconChevronUp from "../../UI/Icons/IconChevronUp";

export default function Accordeon({ text }) {
  const clickHandler = event => {
    const item = event.target.closest(`.${styles.item}`);
    item.classList.toggle(`${styles.open}`);
  };

  const accordeon = text.map((element, i) => {
    return (
      <div onClick={clickHandler} className={`${styles.item}`} key={i}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{element.title}</h2>
          <span className={`${styles.icon} ${styles.icon__down}`}>
            <IconChevronDown />
          </span>
          <span className={`${styles.icon} ${styles.icon__up}`}>
            <IconChevronUp />
          </span>
        </div>
        <p className={styles.text}>{element.text}</p>
      </div>
    );
  });

  return <div className={styles.container}>{accordeon}</div>;
}
