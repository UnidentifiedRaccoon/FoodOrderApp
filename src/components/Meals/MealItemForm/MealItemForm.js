import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const amount = +inputRef.current.value;

    if (amount < 0 || amount > props.maxValue) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onSetAmount(amount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler} noValidate={true}>
      <Input
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: props.maxValue,
          step: "1",
        }}
        label="Amount"
        ref={inputRef}
      />
      <button>Apply</button>
      {!isValid && <p>{`Please enter a valid amount (0-${props.maxValue})`}</p>}
    </form>
  );
};

export default MealItemForm;
