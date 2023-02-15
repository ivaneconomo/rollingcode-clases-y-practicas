import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Perfil({edad, perfil}) {

  

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={perfil.avatar} />
      <Card.Body>
        <Card.Title>Nombre: {perfil.nombre}</Card.Title>
        <Card.Text>Apellido: {perfil.apellido}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <hr />
        EDAD: {edad}
      </Card.Body>
    </Card>
  );
};

export default Perfil;