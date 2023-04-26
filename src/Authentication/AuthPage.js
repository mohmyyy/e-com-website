import { useContext, useRef, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CartContext from "../components/store/cart-context";
import classes from "./AuthPage.module.css";

const AuthPage = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  // const [loading,setIsLoading] = useState(false);
  const ctx = useContext(CartContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkkHzXjAuDlfiLDRytG7Olm2XWKhlykUg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkkHzXjAuDlfiLDRytG7Olm2XWKhlykUg";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // setIsLoading(false);
      const data = await response.json();
      console.log(response.ok);
      if (!response.ok) {
        // console.log(response.json());
        // return response;
        throw new Error(data.error.message);
      } else {
        console.log(data.email);
        ctx.login(data.idToken, data.email);
        history.replace("/store");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <Container className={classes.container}>
      <Card className="m-5">
        <Card.Header>
          <h2 className="text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        </Card.Header>
        <Card.Body>
          <Form
            onSubmit={loginFormSubmitHandler}
            className={classes.authentication}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter Your Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Enter Your Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isLogin ? "Login" : "Create Account"}
            </Button>
          </Form>
        </Card.Body>
        <Card.Header className="text-center">
          <Button
            variant="primary"
            type="submit"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </Card.Header>
      </Card>
    </Container>
  );
};
export default AuthPage;
