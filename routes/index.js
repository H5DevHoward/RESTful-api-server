const express = require('express');
const router = express.Router();
const Controller = require('../api/controllers/user');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('homepage', {
        title: 'Home',
        footMenu: ['公司简介', '常见问题', '联系我们', '诚聘英才', '帮助页面', '意见反馈'],
        illustrations: [
            [{
                    bg: '/images/placeholder.png',
                },
                {
                    bg: '/images/placeholder.png',
                    color: '#cce3ee',
                    icon: '/images/order.png',
                    text: '订单中心',
                },
                {
                    bg: '/images/placeholder.png',
                    color: '#ffffff',
                    icon: '/images/product.png',
                    text: '产品中心',
                },
                {
                    bg: '/images/illustration01.png',
                },
                {
                    bg: '/images/placeholder.png',
                    color: '#cce3ee',
                    icon: '/images/client.png',
                    text: '客户中心',
                },
            ],
            [{
                    bg: '/images/placeholder.png',
                },
                {
                    bg: '/images/placeholder.png',
                },
                {
                    bg: '/images/placeholder.png',
                    color: '#cce3ee',
                    icon: '/images/manage.png',
                    text: '管理中心',
                },
                {
                    bg: '/images/placeholder.png',
                    color: '#ffffff',
                    icon: '/images/finance.png',
                    text: '财务中心',
                },
                {
                    bg: '/images/illustration02.png',
                },
            ],
            [{
                    bg: '/images/placeholder.png',
                },
                {
                    bg: '/images/placeholder.png',
                },
                {
                    bg: '/images/placeholder.png',
                },
                {
                    bg: '/images/illustration03.png',
                },
                {
                    bg: '/images/placeholder.png',
                },
            ],
        ]
    });
});

router.post('/signup', function(req, res, next) {
    Controller.save(req, res, next);
});

module.exports = router;
