import { useState } from "react";
import { Container, Nav, Navbar, Badge, Button } from "react-bootstrap";
import CartIcon from "../assets/CartIcon";
import Cart from "../Cart/Cart";
const NavBar = () => {
  const [show,setShow] = useState(true);
  const showCartHandler = () => {
    setShow(!show)
  }
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#"> Mikaelsons </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ color: "black" }}>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">STORE</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={showCartHandler} variant="primary">
              Cart <Badge bg="primary">0</Badge>
            </Button>
        </Navbar.Collapse>
      </Container>
      {!show && <Cart onClose={showCartHandler} />}
    </Navbar>
  );
};

export default NavBar;
