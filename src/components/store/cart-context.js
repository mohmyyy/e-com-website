import React, { createContext, useContext } from "react";

const CartContext =  React.createContext({
  items: [],
  totalAMount: 0,
  addToItems: (item) => {},
  removeItems: (id) => {},
  productDetails:'',
  token:'',
  email:'',
  isLoggedIn : false,
  login : (token) => {},
  logout : () => {},
});

export default CartContext