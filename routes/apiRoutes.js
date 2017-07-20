const express = require('express');
const router = express.Router();
const Controller = require('../api/controllers/user');

router.post('/signin', (req, res, next) => {
    Controller.getOne(req, res, next);
});

// route middleware to verify a token
router.use((req, res, next) => {
    Controller.checkToken(req, res, next);
});

// route to show a random message (GET http://localhost:8080/api/)
router.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome to the here!'
    });
});

// route to return all users (GET http://localhost:8080/api/users)
router.get('/users', (req, res, next) => {
    Controller.getAll(req, res, next);
});

module.exports = router;
