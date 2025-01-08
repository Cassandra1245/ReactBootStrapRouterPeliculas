import { Container, Row, Col } from 'react-bootstrap';

function MyGrid() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} xxl={4}>
                    <div>Mujeres:</div>
                </Col>
                <Col xs={12} md={6} xxl={4}>
                    <div>Hombres:</div>
                </Col>
                <Col xs={12} md={12} xxl={4}>
                    <div>Niños:</div>
                </Col>
            </Row>
        </Container>
    );

}

export default MyGrid;
