const User = require('../models/User-model');

//회원가입
createUser = (req, res) => {

    console.log(req);
    const user = new User({
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        phone: req.body.phone,
        part: req.body.part,
        classroom: req.body.classroom
    });

    if (!user) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
    user.save()
        .then(() => {
            console.log('회원저장')
            return res.json({ success: true })
        })
        .catch((err) => console.log(err));


}


//모든 유저 정보 가져오기
getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.json({
                success: false,
                error: err
            })
        }

        if (!users.length) {
            return res.json({
                success: false,
                error: 'Not user'
            })
        }

        return res.status(200).json({
            success: true,
            data: users
        })
    }).catch(err => console.log(err))
}

//로그인
loginUser = (req, res) => {
    User.findOne({ id: req.body.id }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "요청된 아이디에 해당하는 유저가 없습니다."
            })
        }

        user.comparePw(req.body.pw, (err, isMatch) => {
            if (!isMatch) {
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다"
                })
            }
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true,
                        useId: user._id
                    })
            })
        })
    })
}
module.exports = {
    createUser,
    getUsers,
    loginUser
}
