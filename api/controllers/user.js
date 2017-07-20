'use strict';
// Include our "db"
var Service = require('../services/user');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../../config');
var tokenMap = new Map();
tokenMap.set('superSecret', config.secret); // secret variable

// Exports all the functions to perform on the Service
module.exports = {
    checkToken(req, res, next) {
        // check header or url parameters or post parameters for token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, tokenMap.get('superSecret'), (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
    },
    getAll(req, res) {
        Service.find()
        .then(data => {
            res.json({
                data,
            });
        });
    },
    save(req, res) {
        const {
            phone,
            password,
            pin,
        } = req.body;

        console.log(pin);

        Service.find({
            phone
        }).then(data => {
            if (data.length === 0) {
                Service.save({
                    phone,
                    password,
                }).then(data => {
                    if (data) {
                        res.redirect('/');
                    } else {
                        res.send('数据库存储异常');
                    }
                });
            } else {
                res.redirect('/#signup');
                // if (data[0].phone === phone) {
                //     res.send('该用户已注册');
                // } else {
                //     res.send('手机号不能为空');
                // }
            }
        });
    },
    getOne(req, res) {
        const {
            phone,
            password,
            autologin,
        } = req.body;

        console.log(autologin);

        Service.find({
            phone,
            password
        }).then(data => {
            if (data.length === 1 && data[0].phone === phone) {
                const token = jwt.sign(data[0], tokenMap.get('superSecret'), {
                    expiresIn: '24h' // expires in 24 hours
                });
                res.json({
                    success: true,
                    token,
                });
            } else {
                res.json({
                    success: false,
                    message: '用户名或者密码错误',
                });
            }
        });
    },
    // update(req, res) {},
    // delMovie(req, res) {},
};
