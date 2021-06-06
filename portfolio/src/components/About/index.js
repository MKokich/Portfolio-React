import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "../../index.css";

function AboutMe() {
  return (
    <body>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            {" "}
            <Card className="about-card">
              <Card.Body>
                My name is Mihaela Kokich and I live in Seattle, WA. I have a
                dog named Corona and a sweet one eyed cat, whom I like to call
                "cat". Currently, I work in healthcare benefits management and
                am enrolled in the DU Coding Bootcamp part time. I look forward
                to completing this education and moving on to a web development
                career, and hopefully the opportunity to live overseas. I was
                born in Romania and adopted by a family from Seattle, WA so
                that's where I was raised. I played softball from a young age
                throughout high school as well as on a select team. Playing
                sports was a passion of mine and I believe it taught me a lot
                about being a team player and striving to always do my best. I
                love to travel and have lived in many different states. I am
                hoping this new career will allow me to explore more of this
                beautiful planet and the different cultures within it. My
                favorite places I've visited so far are South Africa, Budapest
                and Thailand. I have a passion for photography, so when I travel
                I tend to take many photos and one day I hope to sell them and
                share my adventures with others.
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </body>
  );
}

export default AboutMe;
