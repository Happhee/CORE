const User = require('../models/User-model');

createUser = (req, res) => {

    console.log(req);
    const user = new User({
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        phone: req.body.phone,
        part: req.body.part,
        classs: req.body.classs
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

module.exports = {
    createUser,
    getUsers
}