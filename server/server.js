var express = require('express');
var server = express();
var config = require('./config');
var api = require('./api/api');

require('mongoose').connect(config.db.url).then(function () {
    console.log('connected to db');
}).catch(function (err) {
    console.log('Error in connecting the database ', err);
});

require('./middleware')(server);

server.use('/api', api);
module.exports = server;