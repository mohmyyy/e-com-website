import React, { createContext, useContext } from "react";

const CartContext =  React.createContext({
  items: [],
  totalAMount: 0,
  addToItems: (item) => {},
  removeItems: (id) => {},
});

export default CartContext