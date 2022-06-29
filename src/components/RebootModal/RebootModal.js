import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { voteActions } from "../../store/voteSlice";
import IconClose from "../../UI/Icons/IconClose";
import Modal from "../../UI/Modal";
import { TEXT } from "../../UI/textConstants";
import styles from "./RebootModal.module.css";

export default function RebootModal() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);
  const dispatch = useDispatch();
  const resetHandler = () => dispatch(voteActions.resetVotingProcess());

  return (
    <Fragment>
      {showModal && (
        <Modal
          btnNumber={2}
          actionOne={hideModalHandler}
          actionTwo={resetHandler}
          textBtnOne={TEXT.overlay.no}
          textBtnTwo={TEXT.overlay.yes}
          text={TEXT.overlay.textLooseData}
        />
      )}
      <button onClick={showModalHandler} className={styles.iconClose}>
        <IconClose />
      </button>
    </Fragment>
  );
}
