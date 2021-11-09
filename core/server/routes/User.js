//CREATE
module.exports = function (app, User) {
    app.post('/login', (req, res) => {

        const user = new User();
        user.id = req.body.id;
        user.pw = req.body.pw;
        user.name = req.body.name;
        user.phone = req.body.phone;
        user.part = req.body.part;
        user.class = req.body.class;
        user.save(err => {
            if (err) {
                console.log(err);
                res.json({ message: '생성실패' });
                return;

            }

            res.json({ message: '생성완료' });

        });
    });
}