import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [item, setItem] = useState([]);
  const [productObj, setProductObj] = useState({});
  const userLoginDetails = localStorage.getItem('logIn')
  const [token, setToken] = useState(userLoginDetails);
  console.log(token);
  const addItemToCartHandler = (item) => {
    const existingItem = cartContext.items.findIndex(
      (itm) => itm.title === item.title
    );
    console.log(item);
    console.log(existingItem);
    if (existingItem === -1) {
      setItem((prevValue) => {
        return [...prevValue, item];
      });
    } else {
      setItem((prevValue) => {
        const updatingItem = [...prevValue];
        updatingItem[existingItem].quantity =
          +updatingItem[existingItem].quantity + +1;
        console.log(updatingItem);
        return updatingItem;
      });
    }
  };
  const removeItemFromCartHandler = (id) => {
    console.log(id);
  };

  const addtoproductObj = (item) => {
    console.log(item);
    setProductObj(() => item);
  };
  const userLoggedIndetails = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('logIn',token)
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('logIn')
  };

  const cartContext = {
    items: item,
    totalAMount: 0,
    addToItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
    productDetails: productObj,
    addproductObj: addtoproductObj,
    token: "",
    isLoggedIn: userLoggedIndetails,
    login: loginHandler,
    logout: logoutHandler,
  };
  console.log(cartContext.productDetails);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
