// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
mongoose.model('User', new Schema({
    phone: String,
    password: String,
    pin: String
}));

// pass it using module.exports
module.exports = connection => (connection || mongoose).model('User');
