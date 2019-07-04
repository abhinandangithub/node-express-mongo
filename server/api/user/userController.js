var User = require('./userModel');

function get(req, res, next) {
    User.find({})
        .then(function (users) {
            res.json(users);
        })
}

function getOne(req, res, next, id) {
    User.findById(id)
        .then(function (user) {
            res.json(user);
        }).catch((err) => {
            next(err);
        })
}


function post(req, res, next) {
    var newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err) { return next(err) }
        res.json('user is saved');
    });
}

module.exports = {
    get: get,
    getOne:getOne,
    post: post
}