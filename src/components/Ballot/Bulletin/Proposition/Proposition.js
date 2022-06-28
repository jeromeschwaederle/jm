import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./Proposition.module.css";

export default function Proposition(props) {
  const { text, validated, propositionId, setBallot } = props;
  const mentions = useSelector(state => state.vote.mentions);
  const [indexOfSelected, setIndexOfSelected] = useState(mentions.length - 1);
  const clickHandler = e => {
    setIndexOfSelected(Number(e.target.closest(`.${styles.listItems}`).id));
  };

  useEffect(() => {
    setBallot(state => {
      return { ...state, [propositionId]: indexOfSelected };
    });
  }, [propositionId, indexOfSelected, setBallot]);

  return (
    <div
      className={
        validated
          ? `${styles.container} ${styles.borderDark}`
          : styles.container
      }
    >
      <header
        className={
          validated ? `${styles.header} ${styles.borderDark}` : styles.header
        }
      >
        {text}
      </header>
      <ul className={styles.mentionsList}>
        {!validated &&
          mentions.map((mention, i) => {
            const className = `${styles.listItems} ${styles[`mention_${i}`]} ${
              indexOfSelected === Number(i) ? styles.mentionSelected : ""
            }`;
            return (
              <li onClick={clickHandler} key={i} id={i} className={className}>
                <span>{mention}</span>
              </li>
            );
          })}
        {validated && (
          <li
            className={`${styles.listItems} ${
              styles[`mention_${indexOfSelected}`]
            } ${styles.mentionSelected}`}
          >
            <span>{mentions[indexOfSelected]}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
