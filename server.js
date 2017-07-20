// ========================
// get the packages we need
// ========================
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var connection = require('./config/database.js');

var sassMiddleware = require('node-sass-middleware');

var index = require('./routes/index');
var apiRoutes = require('./routes/apiRoutes');

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080;
var srcPath = __dirname + '/.tmp';
var destPath = __dirname + '/public/stylesheets';

app.use('/stylesheets', sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'expanded'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// use morgan to log requests to the console
app.use(morgan('dev'));


// =======================
// routes ================
// =======================
// basic route
app.use('/', index);

// API ROUTES -------------------
// we'll get to these in a second
// API ROUTES -------------------
app.use('/api', apiRoutes);


// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
