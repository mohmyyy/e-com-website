import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";

const ErrorPage = () => {
  return (
    <>
    <NavBar />
      <center className="mt-5">
        <h1>Could Not Find page</h1>
        <p>You funcking idiot</p>
      </center>
      <Footer/>
    </>
  );
};
export default ErrorPage;
