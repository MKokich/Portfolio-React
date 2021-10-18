import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../../index.css";
import Resume from "../../images/Resume.pdf";

function Main() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card className="portHeader">
            <Card.Body>
              <Card.Title className="portFont">Mihaela Kokich</Card.Title>
              <Card.Text className="portText">
                Graduated from the Full Stack Web Development program through
                the University of Denver Bootcamps.
              </Card.Text>
              <Card.Text className="portText">
                Experience in JavaScript, REACT, HTML5/CSS3, Node.js and MySQL.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Image
          className="mainImg"
          src="https://user-images.githubusercontent.com/75143471/127091731-14694641-ec47-4314-819e-31c3710b807b.jpeg"
          fluid
        />
      </Row>
      <Row>
        <Col>
          <Card className="portHeader">
            <Card.Body>
              <Card.Title className="portFont">Projects</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="boozy-card">
            <Card.Img
              variant="top"
              src="https://user-images.githubusercontent.com/75143471/128934073-f2e6c3dd-a037-4c87-958b-ea2282d5c03c.png"
            />
            <Card.Body>
              <Card.Title>Boozy Plalists</Card.Title>
              <Card.Text>
                Application specifically made during the COVID quarantine that
                allowed users to search cocktail recipes and suggested unique
                playlists via spotify that played on the browser.
              </Card.Text>
              <Button
                className="portButton"
                variant="primary"
                href="https://github.com/paxton44/teamAwesome"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                className="portButton2"
                variant="primary"
                href="https://paxton44.github.io/teamAwesome/"
                target="_blank"
              >
                Live Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="weather-card">
            <Card.Img
              variant="top"
              src="https://user-images.githubusercontent.com/75143471/120960811-75396800-c711-11eb-9199-41bc2f1fa78f.png"
            />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Application that allows user to view the weather in various
                cities as well as a five-day forecast.
              </Card.Text>
              <Button
                className="portButton"
                variant="primary"
                href="https://github.com/MKokich/Weather-Dashboard"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                className="portButton2"
                variant="primary"
                href="https://mkokich.github.io/Weather-Dashboard/"
                target="_blank"
              >
                Live Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <Card className="fitness-card">
              <Card.Img
                variant="top"
                src="https://user-images.githubusercontent.com/75143471/120742088-238fa400-c4ab-11eb-895e-d6fc3bf38479.png"
              />
              <Card.Body>
                <Card.Title>Fitness Tracker</Card.Title>
                <Card.Text>
                  Application that allows a user to track their own fitness
                  routine and chart several workouts at once via the dashboard.
                </Card.Text>
                <Button
                  className="portButton"
                  variant="primary"
                  href="https://github.com/MKokich/Fitness-Tracker"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  className="portButton2"
                  variant="primary"
                  href="https://kokich-fitness-tracker.herokuapp.com/?id=610c7303c2019300155092ce"
                  target="_blank"
                >
                  Live Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
      <Row>
        <Image
          className="mainImg2"
          src="https://user-images.githubusercontent.com/75143471/128937205-abfe1e3f-0d98-447b-a44e-b92bb4e676ac.jpg"
          fluid
        />
      </Row>
      <Row>
        <Col>
          <Card className="portHeader">
            <Card.Body>
              <Card.Title className="portFont">Contact Me</Card.Title>
              <Card.Text className="portText">
                Email: mihaelak08@gmail.com
              </Card.Text>
              <Card.Text className="portText">Phone: 206-753-8423</Card.Text>
              <Button
                className="portButton"
                variant="primary"
                href="https://github.com/MKokich"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                className="portButton2"
                variant="primary"
                href="https://www.linkedin.com/in/mihaela-kokich-918375200/"
                target="_blank"
              >
                LinkedIn
              </Button>

              <Button
                className="portButton2"
                variant="primary"
                href={Resume}
                target="_blank"
              >
                Resume
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="portHeader">
            <Card.Body>
              <Card.Title></Card.Title>

              <Card.Text className="portText"></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
