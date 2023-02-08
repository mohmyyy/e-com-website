import React from "react";
import ListItems from "./components/Items/ListItems";
import CartProvider from "./components/store/CardProvider";
// import { useNavigate } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import ContactUs from "./components/ContactUs/ContactUs";
import RootLayout from "./components/RootLayout/RootLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProductPage from "./components/Items/ProductPage";
import { Switch, Route, } from "react-router-dom";

const App = () => {
  // const navigate = useNavigate();
  return (
    <CartProvider>
      <RootLayout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/store" exact>
            <ListItems />
          </Route>
          <Route path="/store/:productId">
            <ProductPage/>
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
        </Switch>
      </RootLayout>
    </CartProvider>
  );
};

export default App;
