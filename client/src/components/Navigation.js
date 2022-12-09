import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createSearchParams, useNavigate } from "react-router-dom";

function Navigation() {
  const nav = useNavigate();
  const params = { search: "name" };

  const handleSubmit = (e) => {
    params.search = e.target[0].value;
    nav({
      pathname: "/home",
      search: `?${createSearchParams(params)}`,
    });
    e.preventDefault();
  };

  return (
    <div>
      <Navbar className="NavBar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src="https://user-images.githubusercontent.com/111238515/206746681-59655baf-8190-493e-8180-d5ab856a9509.png"
              width="180"
              height="180"
              className="d-inline-block align-center"
              alt="Train logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/add_member">Add Member</Nav.Link>
              <Nav.Link href="/add_certification">
                Add Certification/Training
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Group className="d-flex" controlId="formSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control type="search" placeholder="Search" />
              </Form.Group>
              <Button variant="outline-secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
