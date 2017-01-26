'use strict'

//Cargamos mongoose
var mongoose = require('mongoose');
//Cargamos nuestra aplicación
var app = require('./app');
//Configuramos el puerto como variable de entorno PORT ó 3000 en su defecto
var port = process.env.PORT || 3000;

//El promise por defecto de Mongoose está deprecado por lo que:
mongoose.Promise = global.Promise;

//Y lo configuramos pasando como parámetros la uri de la DB y una función callback en la que iniciaremos el servidor
mongoose.connect('mongodb://localhost:27017/api_rest_favoritos', (err,res) =>{
	//Si existe un error lo capturamos, si no, lanzamos el servidor
	if(err){
		//Lanzamos excepción
		throw err;
	}else{
		console.log('Conexión a MongoDB realizada con éxito.');
		//Ejecutamos el servidor
        app.listen(port, () => {
			console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
		});
	}
});