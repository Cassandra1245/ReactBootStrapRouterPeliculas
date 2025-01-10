import { Container, Row, Col } from 'react-bootstrap';

function MyGrid() {
    return (
        <Container>
            <Row>
                <Col className="m-3 align-items-center" xs={12} md={6} xxl={6}>
                    <p className="m-3">Primera Columna:</p>
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

                <Col className="m-3" xs={12} md={3} xxl={3}>
                    <div className="d-flex align-items-center" style={{ minWidth: '150px' }}>
                        <div
                            className="m-3"
                            style={{
                                backgroundImage: "url('./FondoAzul.jpeg')",
                                width: '100%',
                                height: '100px',
                                minWidth: '150px',
                            }}
                        />
                        <p>AYIYIYIYIYIYIYIYI</p>
                    </div>
                    <div className="d-flex align-items-center" style={{ minWidth: '150px' }}>
                        <div
                            className="m-3"
                            style={{
                                backgroundImage: "url('./FondoAzul.jpeg')",
                                width: '100%',
                                height: '100px',
                                minWidth: '150px', 
                            }}
                        />
                        <p>AYIYIYIYIYIYIYIYI</p>
                    </div>

                    <div className="d-flex align-items-center" style={{ minWidth: '150px' }}>
                        <div
                            className="m-3"
                            style={{
                                backgroundImage: "url('./FondoAzul.jpeg')",
                                width: '100%',
                                height: '100px',
                                minWidth: '150px',
                            }}
                        />
                        <p>AYIYIYIYIYIYIYIYI</p>
                    </div>

                    <div className="d-flex align-items-center" style={{ minWidth: '150px' }}>
                        <div
                            className="m-3"
                            style={{
                                backgroundImage: "url('./FondoAzul.jpeg')",
                                width: '100%',
                                height: '100px',
                                minWidth: '150px', 
                            }}
                        />
                        <p>AYIYIYIYIYIYIYIYI</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default MyGrid;
