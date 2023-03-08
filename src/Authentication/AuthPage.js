import { useContext, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CartContext from "../components/store/cart-context";

const AuthPage = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [loading,setIsLoading] = useState(false);
  const ctx = useContext(CartContext)

  const loginFormSubmitHandler = async (event) => {
    event.preventDefault()
    console.log(emailRef.current.value,passwordRef.current.value)
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    try {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2RroineHJOuXSx4UjaorLmlxt6T9yyuQ", { 
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
      console.log(response.ok)
      if (!response.ok) {
        // console.log(response.json());
        // return response;
        throw new Error(data.error.message);
      }
      else{
        ctx.login(data.idToken);
        history.replace('/store')
      }
      
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  return (
    <Container>
      <Form className="m-5 p-4" onSubmit={loginFormSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="Enter Your Password" />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  );
};
export default AuthPage;
