// import { Outlet} from "react-router-dom";
import { Fragment } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";
import Logo from "../Items/Logo";
const RootLayout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <Logo />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
export default RootLayout;
