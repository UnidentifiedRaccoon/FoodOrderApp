import styles from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  console.log("input render");
  const classes = `${styles.control} ${props.classes} ${
    props.invalid ? styles.invalid : ""
  }`;

  return (
    <div className={classes}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
      {props.invalid && <p>{props.errorMessage}</p>}
    </div>
  );
});

export default Input;
