'use strict'

var express = require('express');
var favoritoController = require('../controllers/favorito');

var api = express.Router();

api.get('/favorito/:id', favoritoController.getFavorito);
api.get('/favoritos', favoritoController.getFavoritos);
api.post('/favorito', favoritoController.saveFavorito);
api.put('/favorito', favoritoController.updateFavorito);
api.delete('/favorito/:id', favoritoController.deleteFavorito);

module.exports = api;