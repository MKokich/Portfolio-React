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
              <Button className="portButton" variant="primary">
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="stacked-card">
            <Card.Img
              variant="top"
              src="https://user-images.githubusercontent.com/75143471/126856104-e7f42eae-7aae-4c94-95ea-9caf811991f1.png"
            />
            <Card.Body>
              <Card.Title>Stacked</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="portButton" variant="primary">
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
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
              <Button className="portButton" variant="primary">
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="weather-card">
            <Card.Img
              variant="top"
              src="https://user-images.githubusercontent.com/75143471/120960811-75396800-c711-11eb-9199-41bc2f1fa78f.png"
            />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="portButton" variant="primary">
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="fitness-card">
            <Card.Img
              variant="top"
              src="https://user-images.githubusercontent.com/75143471/120960925-a74aca00-c711-11eb-9389-d647c9f6ba34.png"
            />
            <Card.Body>
              <Card.Title>Fitness Tracker</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="portButton" variant="primary">
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="note-card">
            <Card.Img
              variant="top"
              src="https://user-images.githubusercontent.com/75143471/107662497-5beb4800-6c58-11eb-99ca-b2af8f863291.png"
            />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="portButton" variant="primary">
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioPage;
