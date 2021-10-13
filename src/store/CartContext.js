import React, { useReducer } from "react";

const SET = "SET";

const CartContext = React.createContext({
  items: [],
  itemsAmount: 0,
  totalPrice: 0,
  maxAmountForEachItem: 10,
  setItem: (item) => {},
});

const defaultCardState = {
  items: [],
  itemsAmount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === SET) {
    const index = state.items.findIndex((item) => item.id === action.item.id);
    let itemsAmount;
    let totalPrice;
    let items;
    if (index === -1) {
      items = state.items.concat(action.item);

      itemsAmount = state.itemsAmount + action.item.amount;
      totalPrice = state.totalPrice + action.item.amount * action.item.price;
    } else {
      items = [...state.items];
      itemsAmount =
        state.itemsAmount + action.item.amount - items[index].amount;
      totalPrice =
        state.totalPrice +
        (action.item.amount - items[index].amount) * items[index].price;
      items[index] = action.item;
    }

    items = items.filter((item) => item.amount !== 0);

    return {
      items,
      itemsAmount,
      totalPrice: Math.abs(totalPrice),
    };
  }
  return state;
};

export const CartContextProvider = (props) => {
  const [cardState, dispatchCardState] = useReducer(
    cartReducer,
    defaultCardState
  );
  const setItem = (item) => {
    dispatchCardState({ type: "SET", item: item });
  };

  return (
    <CartContext.Provider
      value={{
        items: cardState.items,
        itemsAmount: cardState.itemsAmount,
        totalPrice: cardState.totalPrice,
        maxAmountForEachItem: 20,
        setItem: setItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
