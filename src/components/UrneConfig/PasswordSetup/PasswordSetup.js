import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./PasswordSetup.module.css";
import { TEXT } from "../../../UI/textConstants";
import IconLock from "../../../UI/Icons/IconLock";
import Button from "../../../UI/Button/Button";
import IconCheck from "../../../UI/Icons/IconCheck";
import { voteActions } from "../../../store/voteSlice";

const inputIsValid = input => input.trim() !== "";
const passwordMatch = (password, confirmation) => password === confirmation;

export default function PasswordSetup() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const passwordConfigIsValid =
    inputIsValid(password) &&
    inputIsValid(confirmation) &&
    passwordMatch(password, confirmation);

  const passwordHandler = e => setPassword(e.target.value);
  const confirmationHandler = e => setConfirmation(e.target.value);

  const dispatch = useDispatch();
  const savePasswordHandler = () =>
    dispatch(voteActions.savePassword(password));

  console.log("password:", password);
  console.log("inputIsValid(password):", inputIsValid(password));
  console.log("confirmation:", confirmation);
  console.log("inputIsValid(confirmation):", inputIsValid(confirmation));
  console.log("passwordConfigIsValid:", passwordConfigIsValid);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.icon}>
          <IconLock />
        </span>
        <h1 className={styles.passwordPageTitle}>
          {TEXT.configurationUrne.password.pageTitle}
        </h1>
        <p className={styles.pageText}>
          {TEXT.configurationUrne.password.pageText}
        </p>
      </header>
      <form className={styles.passwordContainer}>
        <ul className={styles.inputList}>
          <li className={styles.inputItem}>
            <label className={styles.label} htmlFor="password">
              {TEXT.configurationUrne.password.label[1]}
            </label>
            <input
              value={password}
              onChange={passwordHandler}
              autoComplete={"off"}
              className={styles.input}
              type={"password"}
              id={"password"}
            ></input>
          </li>
          <li className={styles.inputItem}>
            <label className={styles.label} htmlFor="passwordConfirmation">
              {TEXT.configurationUrne.password.label[2]}
            </label>
            <input
              value={confirmation}
              onChange={confirmationHandler}
              autoComplete={"off"}
              className={styles.input}
              type={"password"}
              id={"passwordConfirmation"}
            ></input>
          </li>
        </ul>
        <Button
          onClick={savePasswordHandler}
          primary
          className={styles.btnConfirmPassword}
          disabled={!passwordConfigIsValid}
        >
          <IconCheck />
        </Button>
      </form>
    </div>
  );
}
