import React from "react";
import color from "../color/main";
import "../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar(props) {
  return (
    <Navbar
      style={{ backgroundColor: "#1d3557", color: "#fff", display: "flex" }}
      class="navbar navbar-expand-lg"
    >
      <Container>
        <Navbar.Brand>
          <a class="navbar-brand" href="/">
            <img
              alt="CEG"
              style={{ height: 60, width: 60 }}
              src="https://ceg.annauniv.edu/assets/images/CEG_col.png"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Brand
          style={{
            color: `${props.current === "home" ? color.primary : "#fff"}`,
            textDecoration: `${props.current === "home" ? "underline" : null}`,
          }}
          href="/"
        >
          College of Engineering - Guindy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav className="me-auto">
            <Nav.Link
              style={{
                color: `${props.current === "dept" ? color.primary : "#fff"}`,
                textDecoration: `${
                  props.current === "dept" ? "underline" : null
                }`,
              }}
              href="/dept"
            >
              Departments
            </Nav.Link>
            <Nav.Link
              style={{
                color: `${props.current === "map" ? color.primary : "#fff"}`,
                textDecoration: `${
                  props.current === "map" ? "underline" : null
                }`,
              }}
              href="/map"
            >
              Map
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
