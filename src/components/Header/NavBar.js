import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import CartIcon from "../assets/CartIcon";
const NavBar = () => {
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
          <Navbar.Text>
            <Nav.Link href="#home">
              Cart
              {/* {<CartIcon/>} */}
              <Badge bg="dark">0</Badge>
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
