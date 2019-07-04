var router = require('express').Router();
var controller = require('./userController');

router.route('/')
    .get(controller.get)
    .post(controller.post)

router.route('/:id')
    .get(controller.getOne)

module.exports = router;