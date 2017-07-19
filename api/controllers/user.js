'use strict';
// Include our "db"
// var express = require('express');
// var app = express();
var Service = require('../services/user');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

// Exports all the functions to perform on the db
module.exports = {
    //GET /user operationId
    getAll(req, res, next) {
        res.json({
            users: db.find()
        });
    },
    //POST /user operationId
    save(req, res, next) {
        const {
            phone,
            password,
            pin,
        } = req.body;

        Service.find({phone}).then(data => {
            if(data.length === 0) {
                Service.save({
                    phone,
                    password,
                }).then(data => {
                    if(data) {
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
    //GET /user/{id} operationId
    getOne(req, res, next) {
        const {
            phone,
            password,
            autologin,
        } = req.body;

        Service.find({phone, password}).then(data => {
            if(data.length === 1 && data[0].phone === phone) {
                const token = jwt.sign(data[0], 'superSecret', {
                    expiresIn: "24h" // expires in 24 hours
                });
                res.json({
                    success: true,
                    token,
                });
            } else {
                res.redirect('/');
            }
        });
    },
    //PUT /user/{id} operationId
    update(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        var user = req.body;
        if (db.update(id, user)) {
            res.json({
                success: 1,
                description: "Movie updated!"
            });
        } else {
            res.status(204).send();
        }
    },
    //DELETE /user/{id} operationId
    delMovie(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        if (db.remove(id)) {
            res.json({
                success: 1,
                description: "Movie deleted!"
            });
        } else {
            res.status(204).send();
        }
    },
};
// module.exports = {getAll, save, getOne, update, delMovie};

// //GET /user operationId
// function getAll(req, res, next) {
//   res.json({ users: db.find()});
// }
// //POST /user operationId
// function save(req, res, next) {
//     res.json({success: db.save(req.body), description: "Movie added to the list!"});
// }
// //GET /user/{id} operationId
// function getOne(req, res, next) {
//     var id = req.swagger.params.id.value; //req.swagger contains the path parameters
//     var user = db.find(id);
//     if(user) {
//         res.json(user);
//     }else {
//         res.status(204).send();
//     }
// }
// //PUT /user/{id} operationId
// function update(req, res, next) {
//     var id = req.swagger.params.id.value; //req.swagger contains the path parameters
//     var user = req.body;
//     if(db.update(id, user)){
//         res.json({success: 1, description: "Movie updated!"});
//     }else{
//         res.status(204).send();
//     }
//
// }
// //DELETE /user/{id} operationId
// function delMovie(req, res, next) {
//     var id = req.swagger.params.id.value; //req.swagger contains the path parameters
//     if(db.remove(id)){
//         res.json({success: 1, description: "Movie deleted!"});
//     }else{
//         res.status(204).send();
//     }
//
// }
