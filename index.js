import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

// Crear la app
const app = express();

// Habilitar lectura de datos de formularios
app.use(express.urlencoded({ extended: true }));

// Conectar a la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log("Error al conectar la base de datos: ", error));

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set("view engine", "pug");

// Obtener el año actual
app.use( (req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
});

// Definir la carpeta publica
app.use(express.static("public"));

// Routing
app.use("/", router);

// Arrancar la app
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
