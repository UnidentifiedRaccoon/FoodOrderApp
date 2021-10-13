import styles from "./Cart..module.css";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addHandler = (item) => {
    let newAmount = item.amount + 1;
    if (newAmount <= cartCtx.maxAmountForEachItem) {
      const newItem = {
        ...item,
        amount: newAmount,
      };
      cartCtx.setItem(newItem);
    }
  };
  const removeHandler = (item) => {
    const newItem = {
      ...item,
      amount: item.amount - 1,
    };
    cartCtx.setItem(newItem);
  };
  const deleteHandler = (item) => {
    const newItem = {
      ...item,
      amount: 0,
    };
    cartCtx.setItem(newItem);
  };

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        price={item.price}
        amount={item.amount}
        name={item.name}
        onAdd={addHandler.bind(this, item)}
        onRemove={removeHandler.bind(this, item)}
        onDelete={deleteHandler.bind(this, item)}
      />
    );
  });

  return (
    <Modal onClick={props.onCartHide}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <Button alt={true} onClick={props.onCartHide}>
          Close
        </Button>
        {hasItems && <Button>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
