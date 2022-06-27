import { useState } from "react";

import styles from "./Proposition.module.css";
import { TEXT } from "../../../../UI/textConstants";

export default function Proposition({ text, validated }) {
  const mentions = TEXT.Ballot.Bulletin.mentions;
  const [indexOfSelected, setIndexOfSelected] = useState(mentions.length - 1);
  const clickHandler = e => {
    setIndexOfSelected(Number(e.target.closest(`.${styles.listItems}`).id));
  };

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
