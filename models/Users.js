const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        min: 4,
        max: 255
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 1024
    },
    role: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true,
        min: 6,
        max: 1024
    },
    isBlocked: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('Users', usersSchema);
