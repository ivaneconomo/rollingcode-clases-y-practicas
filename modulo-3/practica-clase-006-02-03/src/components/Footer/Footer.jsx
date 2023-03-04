import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Row>
      <Col md={4} lg={3} className="bg-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        distinctio explicabo, facilis natus aliquid ratione repellat inventore
        accusantium reprehenderit sint earum illum minus. Ratione, sequi
        veritatis error vitae mollitia expedita.
      </Col>
      <Col md={2} lg={3} className="bg-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, natus!
      </Col>
      <Col md={4} lg={3} className="bg-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        distinctio explicabo, facilis natus aliquid ratione repellat inventore
        accusantium reprehenderit sint earum illum minus. Ratione, sequi
        veritatis error vitae mollitia expedita.
      </Col>
    </Row>
  );
};

export default Footer;
