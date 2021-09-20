import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./sass/style.scss";
import Home from "./components/home/Home"
import News from "./components/news/News"
import Contact from "./components/contact/Contact"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <header>
        <Navbar className="fixed-top" expand="md">
          <Container fluid="md">
            <Navbar.Brand className="ps-2 ps-md-0" id="logo" href="/">The YAY Company</Navbar.Brand>
            <Navbar.Toggle className="border-0 shadow-none me-1 me-md-0" aria-controls="navbarScroll" />
            <Navbar.Collapse className="mx-n3" id="navbarScroll">
              <Nav className="my-2 my-lg-0" style={{ maxHeight: '180px' }}>
                <NavLink className="nav-link rounded text-dark py-3 px-5 py-md-0 px-md-3 me-md-2" exact to="/">Home</NavLink>
                <NavLink className="nav-link rounded text-dark py-3 px-5 py-md-0 px-md-3 me-md-2" to="news">News</NavLink>
                <NavLink className="nav-link rounded text-dark py-3 px-5 py-md-0 px-md-3" to="/contact">Contact</NavLink>
              </Nav>
              <Form className="d-flex ms-auto px-4 mb-5 mt-4 px-md-0 mb-md-0 mt-md-0">
                <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
                <Button className="text-white" variant="outline-success">Go</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router >
  );
}

export default App;
