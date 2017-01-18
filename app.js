'use strict'

var bodyParser = require('body-parser');
var express = require('express');

//Esto carga el fichero favorito.js de routes
var api = require('./routes/favorito');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Para usar el api con expresss
app.use('/api', api);

//Exportamos el objeto actual para poder utilizarlo con require
module.exports = app;