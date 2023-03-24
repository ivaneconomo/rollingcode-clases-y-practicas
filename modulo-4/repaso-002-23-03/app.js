// npm init: Se utiliza en la línea de comandos para inicializar un proyecto Node.js y crear un archivo "package.json". El archivo "package.json" es un archivo de configuración que se utiliza para definir las dependencias, scripts, versión, descripción y otros metadatos importantes de un proyecto de Node.js.

// npm install nodemon (-g: instalación global): Nodemon es una herramienta que ayuda a los desarrolladores a desarrollar aplicaciones Node.js reiniciando automáticamente la aplicación cuando se detectan cambios en el código fuente.

// npm install express: La librería Express es una librería de código abierto para Node.js que se utiliza para crear aplicaciones web y API de manera más sencilla y rápida. Express proporciona una serie de funcionalidades útiles para manejar solicitudes y respuestas HTTP, enrutamiento, middleware, manejo de errores y mucho más.

const express = require("express"); // Esta línea de código es una forma de importar la librería Express en una aplicación Node.js para utilizar sus funcionalidades y construir una aplicación web o API.
const app = express(); // Crea una instancia de la aplicación Express en una aplicación Node.js, lo que permite a los desarrolladores definir rutas, middleware y otras configuraciones de la aplicación.

// npm install dotenv (--save): Instala el paquete dotenv en una aplicación Node.js para facilitar la carga de variables de entorno desde un archivo .env.

require("dotenv").config(); // Importa el paquete dotenv en una aplicación Node.js. Después de instalar el paquete dotenv en la aplicación Node.js utilizando el comando "npm i dotenv", es necesario requerirlo para poder utilizar sus funcionalidades. Luego, .config() Carga las variables definidas en el archivo .env en el entorno de Node.js.

const port = process.env.PORT;

app.get("/obtener-saludo", (req, res) => {
  try {
    res.status(200).send("aquí GET 200");
  } catch (error) {
    res.status(500).send("aquí GET 500");
  }
});

app.listen(port, () => {
  console.log(`Estamos escuchando al puerto: ${port}`); // Inicia la aplicación Express y escucha conexiones entrantes en un puerto específico. Esto permite que la aplicación sea accesible a través de un navegador web o mediante solicitudes HTTP desde otros programas o servicios.
});
