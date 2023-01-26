import React from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import ListItems from './components/Items/ListItems';
import CartProvider from './components/store/CardProvider';
const App = ()=> {
  return (
    <CartProvider>
      <NavBar />
      <ListItems />
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
