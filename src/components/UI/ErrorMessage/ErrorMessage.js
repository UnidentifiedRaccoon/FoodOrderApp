import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return <div className={styles.error}>{props.children}</div>;
};

export default ErrorMessage;
