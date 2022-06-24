import { useState } from "react";

import styles from "./PropositionList.module.css";
import IconClose from "../../../../UI/Icons/IconClose";
import IconCheck from "../../../../UI/Icons/IconCheck";
import Button from "../../../../UI/Button/Button";

export default function PropositionList() {
  // LIST OF PROPOSITIONS
  const [list, setList] = useState([]);

  // NEW PROPOSITION
  const [newProposition, setNewProposition] = useState("");
  // updates the new proposition
  const newPropositionHandler = e =>
    setNewProposition(e.target.value.toLowerCase());
  // Test if it is valid
  let newPropositionIsValid = false;
  if (
    newProposition?.trim() !== "" &&
    !list.find(element => element.value === newProposition.trim())
  ) {
    newPropositionIsValid = true;
  }

  const addHandler = () => {
    if (newPropositionIsValid) {
      setList(oldState => [
        ...oldState,
        { id: oldState.length + 1, value: newProposition.trim().toLowerCase() },
      ]);
      setNewProposition("");
    }
  };

  const removeHandler = e => {
    const itemClickedId = Number(e.target.closest(`.${styles.listItem}`).id);
    const updatedList = list.filter(item => item.id !== itemClickedId);
    setList(() => updatedList);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.list_title}>Propositions</h2>
      <ul className={styles.list}>
        {list.map(item => (
          <li
            className={`${styles.listItem} ${styles.listItem__saved}`}
            key={item.id}
            id={item.id}
          >
            <input
              className={styles.input}
              type={"text"}
              id={item.id}
              value={item.value}
              readOnly
            />
            <Button
              onClick={removeHandler}
              className={`${styles.btn} ${styles.btn__remove}`}
            >
              <IconClose className={styles.iconClose} />
            </Button>
          </li>
        ))}
        <li className={`${styles.listItem} ${styles.listItem__proposition}`}>
          <input
            className={styles.input__new}
            type={"text"}
            placeholder="nouvelle proposition"
            onChange={newPropositionHandler}
            value={newProposition}
          />
          <Button
            disabled={!newPropositionIsValid}
            secondary
            className={styles.btn}
            onClick={addHandler}
          >
            <IconCheck />
          </Button>
        </li>
      </ul>
    </div>
  );
}
