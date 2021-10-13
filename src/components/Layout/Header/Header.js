import styles from "./Header.module.css";
import pizzaPicture from "../../../assets/Pizza.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>MealFull</h1>
        <HeaderCartButton onClick={props.onCartShow} l />
      </header>

      <div className={styles["main-image"]}>
        <img src={pizzaPicture} alt="Delicious chicken thin crust pizza" />
      </div>
    </>
  );
};

export default Header;
