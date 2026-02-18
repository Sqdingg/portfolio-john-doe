import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="fw-semibold text-uppercase">
          John Doe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/mentions-legales">Mentions légales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header