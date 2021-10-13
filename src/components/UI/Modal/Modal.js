import styles from "./Modal.module.css";
import reactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlayWrapper = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const backdropPortal = document.querySelector("#backdrop-root");
const wrapperPortal = document.querySelector("#overlay-root");

const Modal = (props) => {
  return (
    <>
      {reactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        backdropPortal
      )}
      {reactDOM.createPortal(
        <ModalOverlayWrapper>{props.children}</ModalOverlayWrapper>,
        wrapperPortal
      )}
    </>
  );
};

export default Modal;
