'use strict'

//Requerimos el objeto favorito.
var Favorito = require('../models/favorito');

function prueba(req, res){
	res.status(200).send({
		message: 'Hello Worlf with Node',
		data: [1,2,3,4]
	});
};

function getFavorito(req,res){
	var favoritoId = req.params.id;
	res.status(200).send({data: favoritoId})
}

function getFavoritos(req,res){

}

function saveFavorito(req,res){
    //Creamos un nuevo favorito
    var favorito = new Favorito();
    
    //Al que asignaremos los valores de params
	var params = req.body;
    
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;
    
    //Guardamos en la vase de datos con el método Save de Moongose. Como parámetros lleva el posible error y el favorito guardado.
    favorito.save((err,favoritoStored) => {
        //Si exite error
        if(err){
            //Recuerda status 500 es error de servidor.
            res.status(500).send({message: 'Error al guardar el favorito'});
        }else{
            //si no se produce ningún error pasamos un status 200 y el favorito guardado.
            res.status(200).send({favorito: favoritoStored});
        }
    });
}

function updateFavorito(req,res){
	var params = req.body;
	res.status(200).send({update:true, favorito: params});
}

function deleteFavorito(req,res){
	var params = req.body;
	res.status(200).send({delete:true, favorito: params});
}

module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}