const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        maxlength: 100
    },
    pw: {
        type: String,
        minlength: 10
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
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//회원가입 시 저장전에 디비에 저장될 비밀번호 암호화
userSchema.pre('save', function (next) {
    let user = this;

    if (user.isModified('pw')) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                return next(err)
            }
            bcrypt.hash(user.pw, salt, function (err, hash) {
                if (err) {
                    return next(err)
                }
                user.pw = hash
                next();
            })
        })
    } else {
        next()
    }
})

// 모델 생성, 스키마 이름, 스키마 객체 
module.exports = mongoose.model('User', userSchema);
