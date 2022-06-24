import styles from "./Propositions.module.css";
import { TEXT } from "../../../UI/textConstants";
import Button from "../../../UI/Button/Button";
import useInput from "../../../hooks/use-input";
import IconCheck from "../../../UI/Icons/IconCheck";
import PropositionList from "./PropositionList/PropositionList";

export default function Propositions() {
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput();

  const submitHandler = e => {
    e.preventDefault();
    console.log("submitted !!!!");
    console.log("titleValue:", titleValue);
    resetTitle();
  };

  const titleInputClasses = titleHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Configuration</h2>

      <form onSubmit={submitHandler}>
        <div className={titleInputClasses}>
          <label className={styles.label} htmlFor="title">
            Titre
          </label>
          <input
            className={styles.input}
            type="text"
            id="title"
            value={titleValue}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            autoFocus={true}
          />
          {titleHasError && (
            <p className={styles.errorMessage}>You must enter a title</p>
          )}
        </div>

        <PropositionList />

        <div className="form-actions">
          <Button className={styles.btn} primary>
            <IconCheck className={styles.icon} />
          </Button>
        </div>
      </form>
    </div>
  );
}
