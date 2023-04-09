import { React } from "react";
import { Badge, Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <Navbar bg="dark" fixed="end" expand="sm" variant="dark" className={classes.footer}>
      <Container>
        <Navbar.Brand>The Generics</Navbar.Brand>
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
  );
};

export default Footer;
