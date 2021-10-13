import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  };

  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      <Header onCartShow={showCartHandler} />
      <main>
        <Meals />
      </main>
      {isCartVisible && <Cart onCartHide={hideCartHandler} />}
    </>
  );
}

export default App;
