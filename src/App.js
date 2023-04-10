import React, { useContext } from "react";
import RootLayout from "./components/RootLayout/RootLayout";
import { Switch, Route, Redirect } from "react-router-dom";
// import ErrorPage from "./components/ErrorPage/ErrorPage";
// import ProductPage from "./components/Items/ProductPage";
// import ListItems from "./components/Items/ListItems";
// import CartProvider from "./components/store/CardProvider";
// import AboutPage from "./components/AboutPage/AboutPage";
// import HomePage from "./components/HomePage/HomePage";
// import ContactUs from "./components/ContactUs/ContactUs";
// import AuthPage from "./Authentication/AuthPage";
import CartContext from "./components/store/cart-context";
import Loader from "./components/Loader";

const ListItems = React.lazy(() => import("./components/Items/ListItems"));
const AboutPage = React.lazy(() => import("./components/AboutPage/AboutPage"));
const HomePage = React.lazy(() => import("./components/HomePage/HomePage"));
const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage/ErrorPage"));
const ProductPage = React.lazy(() => import("./components/Items/ProductPage"));
const AuthPage = React.lazy(() => import("./Authentication/AuthPage"));

const App = () => {
  console.log("hello");
  const ctx = useContext(CartContext);
  console.log(ctx);
  console.log(ctx.isLoggedIn);
  return (
    <RootLayout>
      <React.Suspense
        fallback={
          <center>
            <Loader />
          </center>
        }
      >
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
      </React.Suspense>
    </RootLayout>
  );
};

export default App;
