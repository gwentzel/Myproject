'use strict';
/* Pull in Backend modules needed for app */
var express     = require('express');
var parser      = require('body-parser');
var controllers = require('./controllers/show');

var app = express();
/* Point to javascript code sections used in backend portion of app */
require('./database');
require('./seed');
/* Connect the frontend and backend  */
app.use('/', express.static('frontend/public'));
app.use(parser.json());

app.use('/api', controllers);
/* start the server on port 3000 */
app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
