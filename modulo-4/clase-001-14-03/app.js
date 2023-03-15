const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const user = [];

app.get("/users", (req, res) => {
  res.send(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  user.push(newUser);
  res.send("OK");
});

app.patch("/users", (req, res) => {
  const test = req.body;
  if (false) {
    res.status(200).send(test);
  } else {
    res.status(500).send(test);
  }
});

app.put("/users", (req, res) => {
  const editData = req.body;
  res.status(200).send("Se ha editado correctamente.");
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Se ha eliminado con éxito el usuario ${id}.`)
});

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto: ${port}`);
});
