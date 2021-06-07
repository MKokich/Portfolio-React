import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import "../../index.css";

function ContactMe() {
  return (
    <body>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            {/* <img
              src="https://user-images.githubusercontent.com/74884495/120242847-ec638d80-c233-11eb-8622-2b5eb709dc16.png"
              alt=""
              className="img-about"
            ></img> */}
            <Card className="contact-card">
              <Card.Body>
                <h1>Contact Me</h1>
                <p>Phone: (206) 753-8423</p>
                <p>Email: mihaelak08@gmail.com</p>
                {""}
                {""}
                <p>
                  View my resume{" "}
                  <a
                    href="https://docs.google.com/document/d/1hjpp5zV6AK2E_CAca9BIMOkPqEoS-1xpt60_0JE6Cag/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here{" "}
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <img
              src="https://user-images.githubusercontent.com/75143471/120941565-2e7b4c00-c6d8-11eb-87ba-0e409d843ce9.png"
              alt=""
              width="400"
              height="500"
              className="contact-img"
            ></img>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default ContactMe;
