import { Container, Row, Col } from 'react-bootstrap';

function MyGrid() {
  return (
    <Container>
      <Row>
        <Col>
          <div>Columna 1</div>
        </Col>
        <Col>
          <div>Columna 2</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyGrid;
