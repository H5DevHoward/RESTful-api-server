/**
 * [mongoose description]
 * 一个额外的模块只是用来配置数据库，可能看起来有点笨重，但是它还是会带来明显的好处。
 * 首先，这段脚本会包含一些可以应用在各种开发场景的更复杂的配置
 * （例如：开发环境与生产环境，复制集——译者注：这个应该是指的mongodb的replica sets）。
 * 第二，它避免了我们启动Express的主应用模块app.js的混乱——一个模块可能会很快的变得难以维护。
 * 第三，它让那些同样需要使用数据库连接的模块不需要任何专用于数据库连接的代码。
 * 最后，它可以减少对数据库连接的关联度，模型可以用一个容易理解的约定方式使用数据库连接，就像下面的代码。
 *
 * @type {[type]}
 */
const mongoose = require('mongoose');
const config = require('./index.js');
const connection = mongoose.createConnection(
    config.database, {
        server: {
            poolSize: 10 // 默认是5个连接的连接池
        }
    }
);

mongoose.Promise = global.Promise;

connection.on('error', err => {
    console.log(err);
});

exports.connection = connection;
