'use strict';
let express = require('express');
let request = require('request');
let router = express.Router();

router.get('/',function(req, res, next){
    res.render('layout');
});

router.post('/pokemon',function(req, res, next){

    return new Promise(function(resolve, reject){
        let url = `http://pokeapi.co/api/v2/pokemon/${req.body.pokeId}/`;
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(response);
                resolve(response);
            }
            else{
                console.log('Error');
                reject(new Error('An error has ocurred'));
            }
        })

    });
});

module.exports = router;