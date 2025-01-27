import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container, Col, Row, Card, CardBody, ListGroup, CardFooter, Button } from "react-bootstrap";
import './App.css';

function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [Boton, setBoton] = useState({});
  

  useEffect(() => {
    const fetchPeliculas = async () => {
      const response = await fetch("./peliculas.json");
      const data = await response.json();
      setPeliculas(data);
    };
    fetchPeliculas();
  }, []);

  const mostrar = (titulo) => {
    setBoton((prevState) => ({
      ...prevState,
      [titulo]: !prevState[titulo],
    }));
  };

  const generos = () =>{

  }
  
  const seleccionar = (titulo) => {
    setBoton((prevState) => ({
      ...prevState,
      [titulo]: !prevState[titulo],
    }));
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="./FondoAzul.jpeg"><img src="./FondoAzul.jpeg" width={35} height={35}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Directores" id="basic-nav-dropdown">
                {peliculas.map((dato) => (
                  <div key={dato.titulo}>
                    <NavDropdown.Item href="#action/3.1">{dato.director}</NavDropdown.Item>
                  </div>
                ))}
              </NavDropdown>
              <NavDropdown title="Generos" id="basic-nav-dropdown">
                {peliculas.map((dato) => (
                  <div key={dato.titulo}>
                    <NavDropdown.Item href="#action/3.1">{dato.categoria}</NavDropdown.Item>
                  </div>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Row>
        {peliculas.map((dato) => (
          <Col xs={12} md={3} xl={3}>
            <Card key={dato.titulo} className="m-3">
              <Card.Img variant="top" src={dato.foto} style={{ width: "100%" }} />
              <Card.Header>
                <Card.Title>{dato.titulo}</Card.Title>
              </Card.Header>
              <CardBody>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item> Actores: {dato.actoresPrincipales}</ListGroup.Item>
                  <ListGroup.Item>Director: {dato.director}</ListGroup.Item>
                  <ListGroup.Item>Actores Principales: {dato.actoresPrincipales}</ListGroup.Item>
                </ListGroup>
              </CardBody>
              <Button variant="primary" onClick={() => mostrar(dato.titulo)}>
                {Boton[dato.titulo] ? "Menos" : "Mas"}
              </Button>
              <Button variant="secondary" onClick={() => seleccionar(dato.titulo)}>
                Seleccionar
              </Button>
              {Boton[dato.titulo] && (
                <CardFooter>
                  <Card.Text> {dato.sinopsis}</Card.Text>
                </CardFooter>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;