import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Formulario = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

    const handleChange = (e) => {
      e.preventDefault();
      console.log({name, email});
    }

  return (
    <Container>
      <Form onSubmit={handleChange}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={name} name={name} onChange={e => setName(e.target.value)} placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} name={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
