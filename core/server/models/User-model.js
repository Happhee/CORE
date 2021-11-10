const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    pw: {
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
    classs: {
        type: Array,
    }
})

// 모델 생성, 스키마 이름, 스키마 객체 
module.exports = mongoose.model('User', userSchema);
