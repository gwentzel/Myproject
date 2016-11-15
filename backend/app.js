'use strict';

var express = require('express');
var parser = require('body-parser');
var routes = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('frontend/public'));
app.use(parser.json());

app.use('/api', routes);

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
