const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

//Lamar al body-parser
app.use(bodyParser.json());
//Importar rutas
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);
/*Crear rutas */
app.get('/', (req, res) => {
    res.send('Prueba 1 respuesta del servidor');
});
// Conexion a la base de datos
mongoose.connect('mongodb+srv://khemoanarko:<password>@cluster0.2h9g3dv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
{userNewUrlParser: true }, () => {
    console.log('Si hay conexion a la BD')
});
//Configuracion escucha del servidor
app.listen(10000);

