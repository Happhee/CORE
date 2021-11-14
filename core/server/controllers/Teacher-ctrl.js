const User = require('../models/User-model');


updateClassroom = async (req, res) => {
    const body = req.body

    User.findOne({ id: body.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                updateSuccess: err,
                message: '선생님을 찾을 수 없습니다',
            })
        }
        let preClassroom = user.classroom
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
    })
}

module.exports = {
    updateClassroom
}