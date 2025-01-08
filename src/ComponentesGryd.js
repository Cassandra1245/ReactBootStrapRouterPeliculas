import { Container, Row, Col } from 'react-bootstrap';

function MyGrid() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={6} xxl={6}>
                    <p>Primera Columna:</p>
                    <div
                        className="m-3"
                        style={{
                            backgroundImage: "url('./FondoAzul.jpeg')",
                            width: '300px',
                            height: '200px',
                        }}
                    />
                    <p className="m-3">AAAAAAA OOOOOOO AAAAAAA OOOOOOO AAAAAAA OOOOOOO</p>
                </Col>

                <Col xs={3} md={3} xxl={3}>
                    <div
                        className="m-3 d-flex align-items-center"
                        style={{
                            backgroundImage: "url('./FondoAzul.jpeg')",
                            width: '100%', // Ancho completo para todo el contenedor
                            height: '100px', // Alto del contenedor
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: "url('./FondoAzul.jpeg')",
                                backgroundSize: 'cover', // Ajusta la imagen para que ocupe todo el espacio del div
                                width: '50px', // Ancho fijo para la imagen
                                height: '50px', // Alto fijo para la imagen
                                marginRight: '10px', // Espacio entre la imagen y el texto
                            }}
                        />
                        <p>AYIYIYIYIYIYIYIYI</p>
                    </div>

                    <div
                        className="m-3 d-flex"
                        style={{
                            backgroundImage: "url('./FondoAzul.jpeg')",
                            width: '150px',
                            height: '100px',
                        }}
                    >
                        <p>AYIYIYIYIYIYIYIYI</p>
                    </div>

                    <div
                        className="m-3 d-flex"
                        style={{
                            backgroundImage: "url('./FondoAzul.jpeg')",
                            width: '150px',
                            height: '100px',
                        }}
                    >
                        <p>AYIYIYIYIYIYIYIYI</p>
                    </div>

                    <div
                        className="m-3 d-flex"
                        style={{
                            backgroundImage: "url('./FondoAzul.jpeg')",
                            width: '150px',
                            height: '100px',
                        }}
                    >
                        <p>AYIYIYIYIYIYIYIYI</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default MyGrid;
