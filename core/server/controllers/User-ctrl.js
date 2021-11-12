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
            return res.status(200).json({ success: true })
        })
        .catch((err) => {
            return res.json({ success: false, err });
        });


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
        if (!user || err) {
            return res.json({
                loginSuccess: false,
                message: "요청된 아이디에 해당하는 유저가 없습니다."
            })
        }

        user
            .comparePw(req.body.pw)
            .then((isMatch) => {
                if (!isMatch) {
                    return res.json({
                        loginSuccess: false,
                        message: "비밀번호가 틀렸습니다"
                    })
                }
                user
                    .generateToken()
                    .then((user) => {
                        res.cookie("x_auth", user.token)
                            .status(200)
                            .json({
                                loginSuccess: true,
                                useId: user._id
                            })
                    })
                    .catch((err) => {
                        res.status(400).send(err)
                    });
            })
            .catch((err) => res.json({
                loginSuccess: false, err
            }))
    })
}

auth = (req, res) => {
    res.status(200).json({
        _id: req._id,
        isAdmin: req.user.role === 09 ? false : true,
        isAuth: true,
        id: req.user.id,
        name: req.user.name,
        phone: req.user.phone,
        part: req.user.part,
        affiliation: req.user.affiliation,
        classroom: req.user.classroom,
    });
}

module.exports = {
    createUser,
    getUsers,
    loginUser,
    auth
}
