import styles from "./Button.module.css";

const Button = (props) => {
  const btnClasses = `${styles.button} ${
    props.alt ? styles["button--alt"] : ""
  }`;

  return (
    <button className={btnClasses} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
