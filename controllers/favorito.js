'use strict'

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
	var params = req.body;
	res.status(200).send({favorito: params});
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