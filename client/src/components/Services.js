import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  return (
    <Container id="services" className="services-section">
      <h2>Our Services</h2>
      <Row>
        <Col md={4}>
          <Card className="service-card">
            <Card.Img variant="top" src="/path-to-service1.jpg" />
            <Card.Body>
              <Card.Title>Service 1</Card.Title>
              <Card.Text>
                Description of the service provided.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Img variant="top" src="/path-to-service2.jpg" />
            <Card.Body>
              <Card.Title>Service 2</Card.Title>
              <Card.Text>
                Description of the service provided.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Img variant="top" src="/path-to-service3.jpg" />
            <Card.Body>
              <Card.Title>Service 3</Card.Title>
              <Card.Text>
                Description of the service provided.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Img variant="top" src="/path-to-service4.jpg" />
            <Card.Body>
              <Card.Title>Service 4</Card.Title>
              <Card.Text>
                Description of the service provided.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Img variant="top" src="/path-to-service5.jpg" />
            <Card.Body>
              <Card.Title>Service 5</Card.Title>
              <Card.Text>
                Description of the service provided.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Img variant="top" src="/path-to-service6.jpg" />
            <Card.Body>
              <Card.Title>Service 6</Card.Title>
              <Card.Text>
                Description of the service provided.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
