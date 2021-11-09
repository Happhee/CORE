require('dotenv').config();
const mongoose = require('mongoose'); //mongoDB 연결 위함
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// const cors = require('cors');


// const api = require('./routes/index');

const port = process.env.PORT || 5000; // .env파일에서 포트를 가져오거나 5000번을 사용
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const User = require('./models/User');
const newUser = new User({
    id: 'seohee',
    pw: '000112',
    name: '서히',
    phone: '01012345678',
    part: true,
    class: []
})

newUser.save(function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log('Saved!')
    }
});
User.find(function (error, students) {
    console.log('--- Read all ---');
    if (error) {
        console.log(error);
    } else {
        console.log(students);
    }
})
const router = require('./routes/User')(app, User);


app.listen(port, () => {
    console.log('Express is listening on port', port);
});

// app.use(cors()); // cors 미들웨어 사용
// app.use(express.json());

// app.listen(port, () => { // 해당 포트로 서버가 실행되고 있을 때 실행됨
//     console.log(`Server is running on port: ${port}`);
// });

const uri = process.env.ATLAS_URI; // mongoDB uri를 .env에서 불러온다. (보안상의 이유로 .env에 저장)
mongoose
    .connect(uri)
    .then(res => console.log("Connected to DB")) // mongoDB 연결 확인
    .catch(err => console.log(err)); // 에러 처리 (안해주면 Warning)

const connection = mongoose.connection; // mongoDB 연결 확인
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})



