import { Fragment } from "react";
import { createPortal } from "react-dom";

import Backdrop from "./Backdrop/Backdrop";
import Overlay from "./Overlay/Overlay";

export default function Modal(props) {
  const { btnNumber, actionOne, actionTwo, textBtnOne, textBtnTwo, text } =
    props;
  const container = document.getElementById("message-root");
  return (
    <Fragment>
      {createPortal(<Backdrop blured />, container)}
      {createPortal(
        <Overlay
          text={text}
          btnNumber={btnNumber}
          actionOne={actionOne}
          actionTwo={actionTwo}
          textBtnOne={textBtnOne}
          textBtnTwo={textBtnTwo}
        />,
        container
      )}
    </Fragment>
  );
}
