import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Form, Button, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">MoviesApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/account">Account</Nav.Link>
          </Nav>

          <Form className="d-flex me-3" role="search">
            <Form.Control type="search" placeholder="Quick search" className="me-2" />
            <Button variant="danger" size="sm">Search</Button>
          </Form>

          <Nav>
            <NavDropdown title={<span><i className="bi bi-person-circle"></i> Account</span>} id="account-dd" align="end">
              <NavDropdown.Item as={Link} to="/account">Build your Account</NavDropdown.Item>
              <NavDropdown.Item>Manage Your Profiles</NavDropdown.Item>
              <NavDropdown.Item>Change Password</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
