const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    part: {
        type: Boolean,
    },
    class: {
        type: String,
    }
})

module.exports = mongoose.model('user', userSchema);
