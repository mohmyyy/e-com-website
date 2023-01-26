import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [item, setItem] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingItem = cartContext.items.findIndex(
      (itm) => itm.title === item.title
    );
    console.log(existingItem);
    if (existingItem === -1) {
      setItem((prevValue) => {
        return [...prevValue, item];
      });
    } else {
      setItem((prevValue) => {
        const updatingItem = [...prevValue];
        updatingItem[existingItem].quantity = +updatingItem[existingItem].quantity + +1
        console.log(updatingItem)
        return updatingItem
      });
    }
  };
  const removeItemFromCartHandler = (id) => {
    console.log(id);
  };
  const cartContext = {
    items: item,
    totalAMount: 0,
    addToItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
