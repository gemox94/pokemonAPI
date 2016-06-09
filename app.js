'use strict';
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let routes = require('./routes/index');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.listen(3000,function(){
    console.log('On port 3000');
});

module.exports = app;
