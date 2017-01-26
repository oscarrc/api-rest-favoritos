'use strict'

//Requerimos el objeto favorito.
var Favorito = require('../models/favorito');


function getFavorito(req,res){
	//Obtenemos el id pasado como parámetro
	var favoritoId = req.params.id;
    
    //Buscamos el favorito
    Favorito.findById(favoritoId, (err,favorito) => {
        if(err){
            //Si hay error
            res.status(500).send({message: 'Error al recuperar el favorito solicitado'});
        }else if(!favorito){
            //Si no hay error pero no hay ningún favorito
            res.status(404).send({message: 'No se ha encontrado el favorito solicitado'});
        }else{
          //Devolvemos un status 200 y el favorito
	       res.status(200).send({data: favorito})  
        }
    });  
}

function getFavoritos(req,res){
    Favorito.find({}).sort('-title').exec((err, favoritos) => {
        if (err) {
            res.status(500).send({message: 'Error al recuperar los favoritos'});
        }else if (!favoritos){
            //Si no hay error pero no hay ningún favorito
            res.status(404).send({message: 'No se han encontrado favoritos'});
        }else{
            //Si todo está correcto devolvemos el array de favoritos
            res.status(200).send(favoritos);
        }
    });
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
    //Obtenemos el id del objeto a modificar
	var favoritoId = req.params.id;
    
    //En el body vendrán los datos modificados
    var update = req.body
    
    //Buscamos y actualizamos el objeto. Los parámetros son el ID de favorito, el objeto para actualizar y una función callback con error y el objeto actualizado
    Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
        if (err){
            res.status(500).send({message: 'Error al actualizar el favorito'});
        }else{
            res.status(200).send(favoritoUpdated);
        }
    });
}


function deleteFavorito(req,res){
	//Variable en que almacenamos parámetros POST
	var favoritoId = req.params.id;
    
    //Recuperamos el favorito por su ID
    Favorito.findById(favoritoId, (err,favorito) => {
        if(err){
            res.status(500).send({message: 'Error al recuperar el favorito'});
        }else if (!favorito){
            //Si no hay favorito.
            res.status(500).send({message: 'El favorito solicitado no existe'});
        }else{
            //Si existe devolvemos el objeto
            res.status(200).send(favorito);
        }
    });
}

module.exports = {
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}