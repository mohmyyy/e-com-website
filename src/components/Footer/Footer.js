import { React } from "react";
import { Badge, Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <Navbar bg="primary" expand="sm" variant="dark" className={classes.footer}>
      <Container>
        <Navbar.Brand>Mikaelson</Navbar.Brand>
        <Nav >
          <Link to="/www.youtube.com">
            <Image src="YoutubeLogo.png.png" style={{ width: "70px",marginRight:"10px" }} />
          </Link>
          <Link to="www.facebook.com">
            <Image src="download.png" style={{ width: "50px",marginRight:"23px" }} />
          </Link>
          <Link to="www.github.com">
            <Image src="git.png" style={{ width: "50px" }} />
          </Link>
        </Nav>
      </Container>
    </Navbar>
    //   <Navbar bg="primary" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
};

export default Footer;
