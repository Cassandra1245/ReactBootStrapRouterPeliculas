import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, CardBody, ListGroup, CardFooter, Button } from "react-bootstrap";
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

  return (
    <div className="App">
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