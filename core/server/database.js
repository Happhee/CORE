const mongoose = require('mongoose'); //mongoDB 연결 위함

// const api = require('./routes/index');
const uri = process.env.ATLAS_URI; // mongoDB uri를 .env에서 불러온다. (보안상의 이유로 .env에 저장)


mongoose
    .connect("mongodb+srv://core:0112@cluster0.ciwqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(res => console.log("Connected to DB")) // mongoDB 연결 확인
    .catch(err => console.log(err)); // 에러 처리 (안해주면 Warning)



const connection = mongoose.connection; // mongoDB 연결 확인
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

module.exports = connection;

