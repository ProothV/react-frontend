import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import {  Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
    const [setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold"><Typography variant="h6" className="logo">
            ALLAN JOHNSON
          </Typography>
          <Typography variant="subtitle2" className="tagline">
            Personal Life Coach
          </Typography></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          className="mobile-menu-icon"
        >
          <MenuIcon />
        </IconButton>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
