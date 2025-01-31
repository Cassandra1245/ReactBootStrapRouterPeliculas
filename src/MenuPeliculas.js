import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './ListadoPeliculas';
import { Link } from 'react-router';
import Home from './Home';
import Contact from './Contact';

function MenuPeliculas({categorias, directores}) {
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" as={Link} to="/categorias" id="basic-nav-dropdown">
              {categorias && categorias instanceof Array && categorias.map(category => <NavDropdown.Item href="#">{category}</NavDropdown.Item>)}              
            </NavDropdown>
            <NavDropdown title="Directores" as={Link} to="/directores" id="basic-nav-dropdown">
                {directores && directores instanceof Array && directores.map(director => <NavDropdown.Item href="#">{director}</NavDropdown.Item>)}            
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MenuPeliculas;


