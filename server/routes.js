var controller = require('./controllers.js');
var router = require('express').Router();

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.get('/coordinates', controller.coordinates.get);

router.post('/controller', controller.coordinates.post);

router.get('/locations', controller.locations.get);

router.post('/locations', controller.locations.post);

module.exports = router;