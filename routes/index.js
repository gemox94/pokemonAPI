'use strict';
let express = require('express');
let request = require('request');
let router = express.Router();

router.get('/',function(req, res, next){
    res.render('layout');
});

router.post('/pokemon',function(req, res, next){
    let url = `http://pokeapi.co/api/v2/pokemon/${req.body.pokeId}/`;
    request(url).pipe(res);
    /*console.log(req.body.pokeId);
    let cadena =  `Recibi el ID: ${req.body.pokeId}`;
    res.send(cadena);*/
});

module.exports = router;