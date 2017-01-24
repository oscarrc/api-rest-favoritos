'use strict'

//Llamamos a mongoose para manipular la BD
var mongoose = require('mongoose');

//Llamamos al método Schema de moongoose para representar los tipos de documento de nuestra bd
var Schema = mongoose.Schema;

//Creamos el esquema de los documentos a llamar en la BD
var favoritoSchema = Schema({
    title: String,
    description: String,
    url: String
});

//Exportamos el modelo utilizando mongoose los parámatros son el nombre del modelo, el esquema y la colección (La colección es opcioinal, se creará en plural a partir del nombre del modelo)
module.exports = mongoose.model('Favorito', favoritoSchema, 'favoritos');