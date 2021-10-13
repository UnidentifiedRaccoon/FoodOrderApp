import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../UI/InlineSVG/CartIcon";
import CartContext from "../../../store/CartContext";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isBtnBump, setIsBtnBump] = useState(false);
  let btnClasses = `${styles.button} ${isBtnBump ? styles.bump : ""}`;
  useEffect(() => {
    if (cartCtx.itemsAmount < 1) {
      return;
    }
    setIsBtnBump(true);
    const timerId = setTimeout(() => {
      setIsBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [cartCtx.itemsAmount]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your card</span>
      <span className={styles.badge}>{cartCtx.itemsAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
