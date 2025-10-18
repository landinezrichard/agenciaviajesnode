import express from "express";
import router from "./routes/index.js";

// Crear la app
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Routing
app.use("/", router);

// Arrancar la app
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
