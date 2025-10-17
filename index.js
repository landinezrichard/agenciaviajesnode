const express = require('express');

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

app.listen( () => {
	console.log(`Servidor funcionando en el puerto ${port}`);
});