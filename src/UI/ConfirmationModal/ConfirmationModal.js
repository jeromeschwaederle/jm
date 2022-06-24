import { Fragment } from "react";
import { createPortal } from "react-dom";

import styles from "./ConfirmationModal.module.css";
import Backdrop from "./Backdrop/Backdrop";
import Overlay from "./Overlay/Overlay";

export default function ConfirmationModal({ text, setShowOverlayQuit }) {
  const container = document.getElementById("message-root");
  return (
    <Fragment>
      {createPortal(<Backdrop blured />, container)}
      {createPortal(
        <Overlay text={text} setShowOverlayQuit={setShowOverlayQuit} />,
        container
      )}
    </Fragment>
  );
}
