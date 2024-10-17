import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown, Offcanvas } from "react-bootstrap";
import "./Navigationbar.css";

export default function Navigationbar() {
  const [activeLink, setActiveLink] = useState("homePage");
  const [bicycleType, setBicycleType] = useState("BICYCLE");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    if (linkName !== 'bicycle') {
      setBicycleType("BICYCLE");
    }
  };

  const handleBicycleClick = (type) => {
    setBicycleType(type);
    setActiveLink("bicycle");
    
  };


  return (
    <Navbar expand="md" className="navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <strong>RBMS</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              <strong>RBMS</strong>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav.Link
                href="#homePage"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => handleLinkClick("home")}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="#tutorialPage"
                className={activeLink === "tutorial" ? "active" : ""}
                onClick={() => handleLinkClick("tutorial")}
              >
                TUTORIAL
              </Nav.Link>

              <Dropdown>
                <Dropdown.Toggle as={Nav.Link} className={activeLink === "bicycle" ? "active" : ""}>
                  {bicycleType}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#AdultbikePage" onClick={() => handleBicycleClick("AdultBike")}>Adult's</Dropdown.Item>
                  <Dropdown.Item href="#kidsbikePage" onClick={() => handleBicycleClick("KID'S")}>Kid's</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link
                href="#helpPage"
                className={activeLink === "help" ? "active" : ""}
                onClick={() => handleLinkClick("help")}
              >
                HELP
              </Nav.Link>
              <Nav.Link
                href="#aboutusPage"
                className={activeLink === "aboutus" ? "active" : ""}
                onClick={() => handleLinkClick("aboutus")}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                href="#contactusPage"
                className={activeLink === "contactus" ? "active" : ""}
                onClick={() => handleLinkClick("contactus")}
              >
                CONTACT US
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
