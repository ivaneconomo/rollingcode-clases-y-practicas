// Requires
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Port
//const port = process.env.PORT
const port = 3000;

// Importar rutas
app.use("/usuarios", userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
