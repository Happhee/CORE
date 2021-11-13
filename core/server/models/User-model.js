const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        maxlength: 100,
        unique: 1
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
    affiliation: {
        type: String,
    },
    classroom: {
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
//로그인 시 비밀번호를 암호화해서 디비에 저장된 비밀번호와 비교
userSchema.methods.comparePw = function (plainPw, cb) {
    bcrypt.compare(plainPw, this.pw, function (err, isMatch) {
        if (err)
            return cb(err);

        cb(null, isMatch);
    })
}
//로그인 시 토큰 생성
userSchema.methods.generateToken = function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    user.token = token
    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    })
}
//인증 시 토큰과 디비의 토큰을 복호화하여 비교
userSchema.statics.findByToken = function (token, cb) {
    var user = this;
    jwt.verify(token, 'secretToken', function (err, decoded) {
        user.findOne({ "_id": decoded, "token": token }, function (err, user) {
            if (err) return cb(err)
            cb(null, user)
        })
    })
}
// 모델 생성, 스키마 이름, 스키마 객체 
module.exports = mongoose.model('User', userSchema);
