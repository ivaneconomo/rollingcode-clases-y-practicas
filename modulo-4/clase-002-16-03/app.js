const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.get("/obtener-saludo", (req, res) => {
  try {
    // consulta a la db
    if (true) {
      res.status(200).json(`Estás pegando al back de Ale. Saludos!!`);
      return;
    }
    res.status(404).send("No se ha encontrado el recurso.");
  } catch (error) {
    res.status(500).send(`Ha ocurrido un error`);
  }
});

app.post("/crear-saludo", (req, res) => {
  const data = req.body;
  try {
    res
      .status(201)
      .json({ message: `El recurso se ha creado con éxito.`, data });
  } catch (error) {
    res.status(500).send(`Ha ocurrido un error`);
  }
});

app.get("/obtener-saludo-por-id/:id", (req, res) => {
  const { id } = req.params;
  try {
    if (true) {
      res
        .status(201)
        .json({ message: `El recurso se ha creado con éxito.`, data });
    }
  } catch (error) {}
});

app.listen(8080, () => {
  console.log(`Estamos escuchando al puerto: ${port}`);
});
