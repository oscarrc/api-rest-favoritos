'use strict'

var bodyParser = require('body-parser');
var express = require('express');

var api = require('./routes/favorito');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Funcion middleware que se ejecutará antes de cada llamada al api. Recibe una petición, una respuesta y un parámetro next que nos permitirá controlar la salida de la función.
app.use((req, res, next) => {
    //Configurar cabeceras
    //Acceso de origen
    res.header('Access-Control-Allow-Origin', '*');
    //Configuramos los headers permitidos
    res.header('Access-Controll-Allow-Headers', 'X-API-KEY, origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    //Métdos HTTP permitidos
    res.header('Acces-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    
    //Indicamos la salida de la función
    next();
});

app.use('/api', api);

module.exports = app;