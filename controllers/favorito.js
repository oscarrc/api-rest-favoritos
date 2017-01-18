'use strict'

function prueba(req, res){
	res.status(200).send({
		message: 'Hello Worlf with Node',
		data: [1,2,3,4]
	});
};

function param(req,res){
	if(req.params.name){
		var nombre = req.params.name;
	}else{
		var nombre = "noname";
	}

	res.status(200).send({
		message: 'Hello World with Node, ' + nombre
	});
}

//Exportamos nuestras funciones
module.exports = {
	prueba,
	param
}