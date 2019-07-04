var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(function(req, res, next){
        console.log('req' + req);
        next();
    });
}