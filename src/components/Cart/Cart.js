import styles from "./Cart..module.css";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";
import useHttp from "../../hooks/use-http";
import LoadingCircle from "../UI/LoadingCircle/LoadingCircle";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

const URL =
  "https://foodorderapp-2a227-default-rtdb.firebaseio.com/orders.json";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { isLoading, error, fetchData: sendData } = useHttp();
  const [isLoaded, setIsLoaded] = useState(false);

  const submitHandler = (userData) => {
    const config = {
      url: URL,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        user: userData,
        order: cartCtx.items,
      },
    };
    sendData(config, null);
    setIsLoaded(true);
    cartCtx.clearOrder();
  };

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

  const confirmClickHandler = (event) => {
    setIsConfirmed(true);
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

  const actionButtons = (
    <div className={styles.actions}>
      <Button alt={true} type="button" onClick={props.onCartHide}>
        Close
      </Button>
      {hasItems && (
        <Button type="button" onClick={confirmClickHandler}>
          Order
        </Button>
      )}
    </div>
  );

  const orderAndForm = (
    <>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isConfirmed && (
        <Checkout onCartHide={props.onCartHide} onConfirm={submitHandler} />
      )}
      {!isConfirmed && actionButtons}
    </>
  );

  return (
    <Modal onClick={props.onCartHide}>
      {isLoading && !error && <LoadingCircle />}
      {!isLoading && isLoaded && !error && (
        <div>
          <p>Your order was successfully submitted</p>{" "}
          <div className={styles.actions}>
            <Button type="button" onClick={props.onCartHide}>
              Close
            </Button>
          </div>
        </div>
      )}
      {error && (
        <ErrorMessage>
          <h3>Заказ отклонен по техническим причинам</h3>
          <p>Повторите заказ позднее или обратитесь в службу поддержки</p>
        </ErrorMessage>
      )}
      {!isLoading && !isLoaded && !error && orderAndForm}
    </Modal>
  );
};

export default Cart;
