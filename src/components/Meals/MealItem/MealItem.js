import styles from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {
  const cardCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const setAmountHandler = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    };
    cardCtx.setItem(item);
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onSetAmount={setAmountHandler}
          maxValue={cardCtx.maxAmountForEachItem}
        />
      </div>
    </li>
  );
};

export default MealItem;
