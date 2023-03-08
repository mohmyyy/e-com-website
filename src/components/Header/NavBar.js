import { useContext, useState } from "react";
import { Container, Nav, Navbar, Badge, Button, Card } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../store/cart-context";
const NavBar = () => {
  const [show, setShow] = useState(true);
  const ctx = useContext(CartContext);

  const showCartHandler = () => {
    setShow(!show);
  };
  let itemsInCart = 0;
  ctx.items.forEach((item) => {
    itemsInCart = +itemsInCart + +item.quantity;
  });
  return (
    <div className="mb-5">
      <Navbar
        collapseOnSelect
        bg="primary"
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">Mikaelsons</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="store">Store</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="auth">Login</Nav.Link>
              <Nav.Link href="contactus">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {ctx.isLoggedIn && <Button onClick={ctx.logout}>Logout</Button>}
            <Button
              onClick={showCartHandler}
              variant="primary"
              className="border"
            >
              Cart <Badge bg="primary">{itemsInCart}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card>
        {!show && <Cart onShow={showCartHandler} onClose={showCartHandler} />}
      </Card>
    </div>
  );
};

export default NavBar;
