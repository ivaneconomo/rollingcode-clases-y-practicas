import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = (props) => {
  const { id, title, icon, price } = props.prod;
  const navigate = useNavigate();

  return (
    <Card className='m-2 col-6 g-0 shadow' style={{ width: "16rem" }}>
      <Card.Img variant='top' src={icon} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{title}</Card.Title>
        <Button
          variant='primary'
          onClick={() => {
            navigate(`/prod/${id}`);
          }}
        >
          Comprar ${price}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
