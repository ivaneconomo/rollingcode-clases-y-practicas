import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CustomCard = (props) => {
  const { id, name, species, image, type, gender, origin } = props.character;
  const navigate = useNavigate();

  return (
    <Card className="m-2 col-6 g-0 shadow" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Especie: {species}</ListGroup.Item>
            {type && <ListGroup.Item>Tipo: {type}</ListGroup.Item>}
            <ListGroup.Item>Genero: {gender}</ListGroup.Item>
            <ListGroup.Item>Origen: {origin.name}</ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/prod/${id}`);
          }}
        >
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
