'use strict'

//Cargamos expresss
var express = require('express');

//Cargamos el controlador
var favoritoController = require('../controllers/favorito');

//Cargamos el router de Express, nos permite definir rutas y recogerlas en nuestra:
var api = express.Router();

//Definimos nuestras rutas llamando a las funciones en el controlador favorito
api.get('/prueba', favoritoController.prueba);

api.get('/param/:name?', favoritoController.param);

//Exportamos el api
module.exports = api;
