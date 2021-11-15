const express = require('express');
// const UserModel = require('../models/User-model');
const TeacherCtrl = require('../controllers/Teacher-ctrl');
const ClassroomCtrl = require('../controllers/Classroom-ctrl')
const router = express.Router();

router.put('/teacher/classroom', TeacherCtrl.addClassroom);
router.post('/teacher/classroom', ClassroomCtrl.createClassroom);
module.exports = router;