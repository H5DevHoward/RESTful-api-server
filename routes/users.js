const express = require('express');
const router = express.Router();
const Controller = require('../api/controllers/user');

router.post('/signup', function(req, res, next) {
    Controller.save(req, res, next);
});

router.post('/signin', function(req, res, next) {
    Controller.getOne(req, res, next);
});

module.exports = router;
