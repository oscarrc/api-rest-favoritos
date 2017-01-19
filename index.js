'use strict'

//Cargamos mongoose
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;

//Y lo configuramos pasando como parámetros la uri de la DB y una función callback en la que iniciaremos el servidor
mongoose.connect('mongodb://localhost:27017/api_rest_favoritos', (err,res) =>{
	//Si existe un error lo capturamos, si no, lanzamos el servidor
	if(err){
		//Lanzamos excepción
		throw err;
	}else{
		console.log('Conexión a MongoSB realizada con éxito.')
		app.listen(port, () => {
			console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
		});
	}
});


