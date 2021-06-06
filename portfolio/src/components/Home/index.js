import React from "react";
import "../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main() {
  return (
    <body>
      <Row>
        <Col></Col>
        <Col>
          <img
            src="https://user-images.githubusercontent.com/74884495/119378656-b8103000-bc7b-11eb-95d1-3b05c6fbbd72.jpg"
            alt=""
            width="600"
            height="900"
            className="img-main"
          ></img>{" "}
        </Col>
        <Col></Col>
      </Row>
    </body>
  );
}

export default Main;
