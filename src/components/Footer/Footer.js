import { React } from "react";
import { Badge, Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <Navbar bg="dark" fixed="end" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Nav  >
          <Link to="/www.youtube.com">
            <AiFillYoutube className="mx-2" size={40}  />
          </Link>
          <Link to="www.facebook.com">
            <BsFacebook className="mx-2" size={40} />
          </Link>
          <Link to="www.github.com">
            <AiFillGithub className="mx-2" size={40} />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
