'use strict'

function prueba(req, res){
	res.status(200).send({
		message: 'Hello Worlf with Node',
		data: [1,2,3,4]
	});
};

function getFavorito(req,res){
	//Obtenemos el id pasado como parámetro
	var favoritoId = req.params.id;

	//Devolvemos un status 200 y el Id
	res.status(200).send({data: favoritoId})
}

function getFavoritos(req,res){
	
}

function saveFavorito(req,res){
	//Variable en que almacenamos parámetros POST
	var params = req.body;
	res.status(200).send({favorito: params});
}

function updateFavorito(req,res){
	//Variable en que almacenamos parámetros POST
	var params = req.body;
	res.status(200).send({update:true, favorito: params});
}

function deleteFavorito(req,res){
	//Variable en que almacenamos parámetros POST
	var params = req.body;
	res.status(200).send({delete:true, favorito: params});
}

//Exportamos nuestras funciones
module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}