var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('homepage', {
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

module.exports = router;
