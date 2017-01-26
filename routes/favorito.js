'use strict'
//Cargamos express
var express = require('express');
//Cargamos nuestro controlador
var favoritoController = require('../controllers/favorito');
//Definimos el router de express
var api = express.Router();

//Definimos nuestras rutas y el mmétodo asignado a cada una de ellas
api.get('/favorito/:id', favoritoController.getFavorito);
api.get('/favoritos', favoritoController.getFavoritos);
api.post('/favorito', favoritoController.saveFavorito);
api.put('/favorito', favoritoController.updateFavorito);
api.delete('/favorito/:id', favoritoController.deleteFavorito);

//Exportamos el api
module.exports = api;