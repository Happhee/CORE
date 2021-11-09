const express = require('express');
const User = require('../models/User');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/', (req, res) => {
    if (req.body.username === "") {
        return res.status(400).json({
            error: "EMPTY USERNAME",
            code: 2
        })
    }
    if (req.body.contents === "") {
        return res.status(400).json({
            error: "EMPTY CONTENTS",
            code: 2
        });
    }
    const user = new User({
        name: req.body.username,
        id: req.body.id
    });

    user.save(err => {
        if (err)
            throw err
        return res.json({
            success: true
        });
    });
});

module.exports = router;