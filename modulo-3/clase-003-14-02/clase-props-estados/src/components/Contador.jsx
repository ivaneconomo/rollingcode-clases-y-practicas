import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export const Contador = (props) => {

  const [edad, setEdad] = useState(25)

  function aumentarEdad() {
    setEdad( edad + 1 )
  }

  function restarEdad() {
    setEdad( edad - 1 )
  }

  return (
    <div>
      <h2>Contador</h2>
      <Button variant='danger' onClick={restarEdad}>
        -
        {edad}
      </Button>
      <Button variant='success' onClick={aumentarEdad}>
        +
        {edad}
      </Button>
    </div>
  );
};
