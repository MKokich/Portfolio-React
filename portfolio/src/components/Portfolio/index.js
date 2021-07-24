import React from "react";
import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function PortfolioPage() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>MIHAELA'S PORTFOLIO</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="boozy-card">
            <Card.Img
              variant="top"
              src="https://user-images.githubusercontent.com/74884495/120251549-e8456900-c24f-11eb-915b-6399edcf7b42.png"
            />
            <Card.Body>
              <Card.Title>Boozy Plalists</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="garden-card">
            <Card.Img
              variant="top"
              src="https://user-images.githubusercontent.com/75143471/120960708-428f6f80-c711-11eb-8343-c8f4d9048b5a.png"
            />
            <Card.Body>
              <Card.Title>Community Garden</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default PortfolioPage;
