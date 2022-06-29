import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import styles from "./PasswordCheck.module.css";
import { TEXT } from "../../../UI/textConstants";
import IconLock from "../../../UI/Icons/IconLock";
import Button from "../../../UI/Button/Button";
import IconCheck from "../../../UI/Icons/IconCheck";
import { voteActions } from "../../../store/voteSlice";
import Modal from "../../../UI/Modal";

const inputIsValid = input => input.trim() !== "";
const passwordMatch = (password, confirmation) => password === confirmation;

export default function PasswordCheck() {
  const dispatch = useDispatch();
  const password = useSelector(state => state.vote.password);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const updatePasswordHandler = e => setEnteredPassword(e.target.value);

  const closeModal = () => {
    setShowErrorMessage(false);
    setEnteredPassword("");
  };

  const goBackHandler = () => dispatch(voteActions.accessResults("REVOKE"));

  const passwordCheckHandler = () => {
    if (passwordMatch(password, enteredPassword)) {
      dispatch(voteActions.accessResults("ACCES_GRANTED"));
    }
    if (!passwordMatch(password, enteredPassword)) {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className={styles.container}>
      {showErrorMessage && (
        <Modal
          btnNumber={1}
          actionOne={closeModal}
          textBtnOne={TEXT.results.passwordCheck.error.errorBtnText}
          text={TEXT.results.passwordCheck.error.errorMessage}
        />
      )}
      <form className={styles.passwordContainer}>
        <header className={styles.header}>
          <span className={styles.icon}>
            <IconLock />
          </span>
          <h1 className={styles.passwordPageTitle}>
            {TEXT.results.passwordCheck.title}
          </h1>
          <p className={styles.pageText}>{TEXT.results.passwordCheck.text}</p>
        </header>
        <ul className={styles.inputList}>
          <li className={styles.inputItem}>
            <label className={styles.label} htmlFor="passwordConfirmation">
              {TEXT.results.passwordCheck.label}
            </label>
            <input
              value={enteredPassword}
              onChange={updatePasswordHandler}
              autoComplete={"off"}
              className={styles.input}
              type={"password"}
              id={"passwordConfirmation"}
            ></input>
          </li>
        </ul>
        <Button
          onClick={passwordCheckHandler}
          primary
          className={styles.btnConfirmPassword}
          disabled={!inputIsValid(enteredPassword)}
        >
          <IconCheck />
        </Button>
        <Button onClick={goBackHandler} secondary>
          {TEXT.results.passwordCheck.btn_backToVote}
        </Button>
      </form>
    </div>
  );
}
