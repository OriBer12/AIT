var express = require('express');
var cors = require('cors');
var env = process.env.NODE_ENV || 'development';

var app = express();
app.use(cors());

var config = require('./src/config/config')[env];

require('./src/config/express')(app, config);
require('./src/config/mongoose')(config);
require('./src/config/passport')();
require('./src/config/routes')(app);
require('./src/config/graphql')(app);

app.listen(config.port);
console.log("Server running on port: " + config.port);
