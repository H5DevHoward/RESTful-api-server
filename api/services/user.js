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
        return User.find(user.phone ? user : {}, (err, users) => {
            if(err) return Promise.reject(err);
        });
    },
    /*
     * Delete a user with the given id.
     */
    remove(id) {
        var found = 0;
        this.userList = this.userList.filter(element => {
            if (element.id === id) {
                found = 1;
            } else {
                return element.id !== id;
            }
        });
        return found;
    },
    /*
     * Update a user with the given id
     */
    update(id, user) {
        var userIndex = this.userList.findIndex(element => {
            return element.id === id;
        });
        if (userIndex !== -1) {
            this.userList[userIndex].title = user.title;
            this.userList[userIndex].year = user.year;
            return 1;
        } else {
            return 0;
        }
    }
}
