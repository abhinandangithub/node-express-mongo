var router = require('express').Router();
var controller = require('./userController');

router.route('/')
    .get(controller.get)
    .post(controller.post);

module.exports = router;