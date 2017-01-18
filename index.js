'use strict'

//Cargamos el modulo express, con require
var express = require('express');
//Cargamos BodyParser
var bodyParser = require('body-parser');
//Definimos el puerto desde la variable de entorno PRT
var port = process.env.PORT || 3000

//Llamamos al modulo expres
var app = express();

//Configuramos bodyParser, urlencode parsea datos codificados en la url
app.use(bodyParser.urlencoded({extended:false}));

//Además indicamos que devuelva un objeto json de JAvascript y lo trate como tal
app.use(bodyParser.json());

//Creamos una ruta, con una función de callback que tiene como parámetros el request y la respuesta
app.get('/prueba', function(req, res){
	//Devolvemos el valor, como json. También podemos pasar un estado, en este caso 200
	res.status(200).send({
		message: 'Hello Worlf with Node',
		data: [1,2,3,4]
	});
});

//Creamos una ruta para recibir parámetros, para hacer que el parámetro sea opcional utilizamos :nombre?
app.get('/param/:name?',function(req,res){
	//Recogemos el parámetro name, como es opcional necesitamos un if
	if(req.params.name){
		var nombre = req.params.name;
	}else{
		var nombre = "noname";
	}

	res.status(200).send({
		message: 'Hello World with Node, ' + nombre
	});
})

//Creamos el servidor y pasamos el puerto (Esto es una función flecha)
app.listen(port, () => {
	//Con ${} podemos utilizar variables dentro de cadenas contenidas entre comilla invertida ``
	console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
});
