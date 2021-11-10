require('dotenv').config();

const db = require('./database');
const userRouter = require('./routes/User-router');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000; // .env파일에서 포트 가져오거나 5000번을 사용


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get("/", (req, res) => {
    res.json({ message: "Welcome o bezkoder application." });
});

app.use('/server', userRouter);


app.listen(port, () => {
    console.log('Express is listening on port', port);
});






