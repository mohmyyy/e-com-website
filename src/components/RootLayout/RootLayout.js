// import { Outlet} from "react-router-dom";
import { Fragment } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";
const RootLayout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
export default RootLayout;
