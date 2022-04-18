import React from "react";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Liink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Sports-Photography
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/CheckOut">
                CheckOut
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About{" "}
              </Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/logIn">
                LogIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
