const express = require('express');
const user = require('./User');

const router = express.Router();
router.use('/login', user);

module.exports = router;
