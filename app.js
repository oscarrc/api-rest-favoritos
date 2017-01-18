'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/prueba', function(req, res){
	res.status(200).send({
		message: 'Hello Worlf with Node',
		data: [1,2,3,4]
	});
});

app.get('/param/:name?',function(req,res){
	if(req.params.name){
		var nombre = req.params.name;
	}else{
		var nombre = "noname";
	}

	res.status(200).send({
		message: 'Hello World with Node, ' + nombre
	});
})

//Exportamos el objeto actual para poder utilizarlo con require
module.exports = app;