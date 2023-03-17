const express = require("express");
const app = express();
const port = 8081;

app.get("/pelicula", (req, res) => {
  try {
    res.status(200).send("Star Wars");
  } catch (error) {
    res.status(404).send("No existe mi loco");
  }
});

app.listen(8081, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
