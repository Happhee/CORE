const User = require('../models/User-model');


addClassroom = async (req, res) => {
    const body = req.body

    User.findOne({ id: body.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                updateSuccess: err,
                message: '선생님을 찾을 수 없습니다',
            })
        }
        let preClassroom = user.classroom
        if (preClassroom.includes(body.classroom)) {
            return res.status(200).json({
                updateSuccess: false,
                id: user._id,
                message: '이미 생성된 강의실입니다',
            })
        }
        preClassroom.push(body.classroom);
        console.log(preClassroom)
        user.classroom = preClassroom
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    updateSuccess: true,
                    id: user._id,
                    data: user,
                    message: '강의실이 추가되었습니다!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    updateSuccess: error,
                    message: '에러가 발생되었습니다!',
                })
            })
    }).clone().catch(err => { console.log(err) })
}

module.exports = {
    addClassroom
}