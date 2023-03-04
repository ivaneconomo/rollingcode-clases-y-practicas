import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

const Main = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`)
      .then((resp) => resp.json())
      .then((resp) => setGifs(resp.data))
      .catch((error) => console.log(error));
  }, [search]);

  return (
    <Container>
      <h1 className="text-center">Gifs!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="inputForm">
          <Form.Control
            placeholder="Buscar Gif"
            onChange={(e) => {
              handleChange(e);
            }}
            value={search}
            type="search"
          ></Form.Control>
        </Form.Group>
      </Form>
      {search && <h2>Estamos buscando: {search}</h2>}
      <Row>
        <Col>
          {gifs.map((gif) => (
            <img key={gif.id} alt={gif.title} src={gif.images.original.url}/>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
