import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <Navbar expand="lg" className='sidebar-overlay'>
      <Navbar.Brand href="/" className="brand-text d-flex align-items-center">
        <img
          src="/logo-white.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <span className="brand-name ml-2">System8</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse-end" />
      <Navbar.Collapse id="navbar-collapse-end">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link className="mx-1 nav-link-custom">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="mx-1 nav-link-custom">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="mx-1 nav-link-custom">Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tests">
            <Nav.Link className="mx-1 nav-link-custom">Tests</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="ms-auto">
          <LinkContainer to="/login">
            <Button variant="outline-primary" className="login-button ml-3">
              Login
            </Button>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default Sidebar;