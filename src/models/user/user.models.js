const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = model('User', UserSchema);