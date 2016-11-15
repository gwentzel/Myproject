'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./');

var app = express();

require('./database');
require('./models/seed');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/', router);

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
