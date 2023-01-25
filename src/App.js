import React from 'react';
import './App.css';
import {Button} from "react-bootstrap"
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import ListItems from './components/Items/ListItems';
const App = ()=> {
  return (
    <div> 
      <NavBar />
      <ListItems />
      <Footer></Footer>
    </div>
  );
}

export default App;
