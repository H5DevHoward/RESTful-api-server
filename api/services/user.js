const User = require('../models/user'); // get our mongoose model

module.exports = {
    async save(user) {
        // create a sample user
        return new User({
            phone: user.phone,
            password: user.password,
        }).save(err => {
            if(err) throw err;
        });
    },
    /*
     * Retrieve a user with a given id or return all the users if the id is undefined.
     */
    async find(user) {
        return User.find(user && user.phone ? user : {}, (err, users) => {
            if(err) return Promise.reject(err);
        });
    },
    /*
     * Delete a user with the given id.
     */
    remove(id) {},
    /*
     * Update a user with the given id
     */
    update(id, user) {}
}
