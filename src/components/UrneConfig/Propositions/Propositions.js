import { useState, useRef } from "react";

import styles from "./Propositions.module.css";
import IconClose from "../../../UI/Icons/IconClose";
import IconCheck from "../../../UI/Icons/IconCheck";
import Button from "../../../UI/Button/Button";

export default function Propositions() {
  // ########################################
  // Title
  // ########################################
  const [title, setTitle] = useState("");
  const [titleSaved, setTitleSaved] = useState(false);
  const titleRef = useRef();

  let newTitleIsValid = false;
  if (title.trim() !== "") newTitleIsValid = true;

  const newTitleHandler = e => setTitle(e.target.value.toLowerCase());

  const saveTitle = () => {
    if (newTitleIsValid) setTitleSaved(true);
  };

  const titleStyles = titleSaved
    ? `${styles.listItem} ${styles.listItem__saved}`
    : `${styles.listItem} ${styles.listItem__proposition}`;

  const changeTitleHandler = () => {
    setTitle("");
    setTitleSaved(false);
    titleRef.current.focus();
  };

  const titleinputStyles = titleSaved ? styles.input : styles.input__new;

  // ########################################
  // LIST
  // ########################################

  const [list, setList] = useState([]);

  const [newProposition, setNewProposition] = useState("");
  const newPropositionHandler = e =>
    setNewProposition(e.target.value.toLowerCase());

  let newPropositionIsValid = false;
  if (
    newProposition.trim() !== "" &&
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

  // ########################################
  // SUBMIT LOGIC
  // ########################################

  const listIsValid = list.length > 0;
  const formIsValid = listIsValid && titleSaved;

  const [formIsChecked, setFormIsChecked] = useState(false);

  const submitHandler = () => {
    if (!formIsChecked) setFormIsChecked(true);
    if (formIsChecked) console.log("LE VOTE COMMENCE");
  };

  //TO DO modifier la logique de l'id des propositions

  const modifyInputHandler = () => setFormIsChecked(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>
        {formIsChecked ? "Tout est OK ?" : "Configuration"}
      </h1>
      <section className={styles.sectionTitle}>
        <h2 className={styles.sectionTitle}>Titre</h2>
        <ul>
          <li className={titleStyles}>
            <input
              ref={titleRef}
              className={titleinputStyles}
              type={"text"}
              placeholder="titre"
              onChange={newTitleHandler}
              value={title}
              autoFocus={true}
            />
            {!formIsChecked && !titleSaved && (
              <Button
                disabled={!newTitleIsValid}
                secondary
                className={styles.btn}
                onClick={saveTitle}
              >
                <IconCheck />
              </Button>
            )}
            {!formIsChecked && titleSaved && (
              <Button
                onClick={changeTitleHandler}
                className={`${styles.btn} ${styles.btn__remove}`}
              >
                <IconClose className={styles.iconClose} />
              </Button>
            )}
          </li>
        </ul>
      </section>
      <section className={styles.sectionList}>
        <h2 className={styles.sectionTitle}>Propositions</h2>
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

              {!formIsChecked && (
                <Button
                  onClick={removeHandler}
                  className={`${styles.btn} ${styles.btn__remove}`}
                >
                  <IconClose className={styles.iconClose} />
                </Button>
              )}
            </li>
          ))}
          {!formIsChecked && (
            <li
              className={`${styles.listItem} ${styles.listItem__proposition}`}
            >
              <input
                className={styles.input__new}
                type={"text"}
                placeholder="proposition"
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
          )}
        </ul>
      </section>
      <div className={styles.formControl}>
        <Button
          className={styles.btnSubmit}
          onClick={submitHandler}
          primary
          disabled={!formIsValid}
        >
          {formIsChecked ? "Confirmer" : <IconCheck />}
        </Button>
        {formIsChecked && (
          <Button
            onClick={modifyInputHandler}
            secondary
            className={styles.btnSubmit}
          >
            Modifier
          </Button>
        )}
      </div>
    </div>
  );
}
