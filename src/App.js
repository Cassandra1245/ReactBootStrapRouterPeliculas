import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';

function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchPeliculas = async () => {
      const response = await fetch("./peliculas.json");
      const data = await response.json();
      setPeliculas(data);
    };
    fetchPeliculas();
  }, []);

  return (
    <Container className="App">
      {peliculas.map((dato) => (
        <Row key={dato.titulo} className="mb-4">
          <Col xs={12} md={8} className="d-flex justify-content-center mb-4">
            <img
              src={dato.foto}
              alt={dato.titulo}
              style={{ width: "500px"}}
            />
          </Col>
          <Col xs={12} md={4} >
            <h3>{dato.titulo}</h3>
            <p>Actores: {dato.actoresPrincipales}</p>
            <p>Director: {dato.director}</p>
            <p>Sinopsis: {dato.sinopsis}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default App;