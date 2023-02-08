import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [item, setItem] = useState([]);
  const [productObj, setProductObj] = useState({});

  const addItemToCartHandler = (item) => {
    const existingItem = cartContext.items.findIndex(
      (itm) => itm.title === item.title
    );
    console.log(item)
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

  const addtoproductObj = (item) => {
    console.log(item)
    setProductObj(()=>item)
  }
  
  const cartContext = {
    items: item,
    totalAMount: 0,
    addToItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
    productDetails: productObj,
    addproductObj : addtoproductObj
  };
  console.log(cartContext.productDetails)

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
