import React from "react";
import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function PortfolioPage() {
  return (
    <body>
      <Container fluid>
        <Row>
          <Col>
            <Card className="links-card">
              <Card.Body>
                <h1>Personal Sites</h1>
                <Button
                  variant="outline-primary"
                  href="https://github.com/MKokich"
                  className="button"
                >
                  Github
                </Button>
                <Button
                  variant="outline-primary"
                  href="https://www.linkedin.com/in/mihaela-kokich-918375200/"
                  className="button"
                >
                  LinkedIn
                </Button>
                <h2>My Projects</h2>
                <Carousel className="carousel">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      id="boozy"
                      src="https://user-images.githubusercontent.com/74884495/120251549-e8456900-c24f-11eb-915b-6399edcf7b42.png"
                      alt="First slide"
                    />
                    <Carousel.Caption className="car-caption">
                      <Button
                        variant="dark"
                        href="https://github.com/paxton44/teamAwesome"
                        target="_blank"
                      >
                        Boozy Playlists Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/75143471/120960708-428f6f80-c711-11eb-8343-c8f4d9048b5a.png"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="dark"
                        href="https://github.com/MKokich/Community-Garden"
                        target="_blank"
                      >
                        Community Garden Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/75143471/120960811-75396800-c711-11eb-9199-41bc2f1fa78f.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="dark"
                        href="https://github.com/MKokich/Weather-Dashboard"
                        target="_blank"
                      >
                        Weather Dashboard Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/75143471/120960925-a74aca00-c711-11eb-9389-d647c9f6ba34.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="dark"
                        href="https://github.com/MKokich/Fitness-Tracker"
                        target="_blank"
                      >
                        Fitness Tracker Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/75143471/119236857-78680d80-baee-11eb-95d9-0fcada752978.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="dark"
                        href="https://github.com/MKokich/Note-Taker"
                        target="_blank"
                      >
                        Note Taker Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/75143471/107662497-5beb4800-6c58-11eb-99ca-b2af8f863291.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="dark"
                        href="https://github.com/MKokich/Code-Quiz"
                        target="_blank"
                      >
                        Code Quiz Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default PortfolioPage;
