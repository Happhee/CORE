const express = require('express');
// const UserModel = require('../models/User-model');
const TeacherCtrl = require('../controllers/Teacher-ctrl');
const router = express.Router();

router.put('/teacher/classroom', TeacherCtrl.updateClassroom);

module.exports = router;