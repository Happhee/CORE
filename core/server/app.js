require('dotenv').config();

const db = require('./database');
const userRouter = require('./routes/User-router');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();

const port = 9000; // .env파일에서 포트 가져오거나 5000번을 사용

app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get("/", (req, res) => {
    res.json({ message: "Welcome Core application." });
});

app.use('/api', userRouter);


app.listen(port, () => {
    console.log('Express is listening on port', port);
});






