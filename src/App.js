import React, { useContext } from "react";
import ListItems from "./components/Items/ListItems";
import CartProvider from "./components/store/CardProvider";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import ContactUs from "./components/ContactUs/ContactUs";
import RootLayout from "./components/RootLayout/RootLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProductPage from "./components/Items/ProductPage";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./Authentication/AuthPage";
import CartContext from "./components/store/cart-context";

const App = () => {
  console.log("hello");
  const ctx = useContext(CartContext);
  console.log(ctx.isLoggedIn);
  return (
    <RootLayout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/store" exact>
          {ctx.isLoggedIn && <ListItems />}
          {!ctx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/store/:productId">
          <ProductPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </RootLayout>
  );
};

export default App;
