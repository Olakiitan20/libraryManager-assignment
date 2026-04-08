const express = require('express');
const router = express.Router();
const studentsController = require('../controller/studentsController');


router.post('/student', studentsController.createStudent);
router.get('/student', studentsController.getAllStudents);
router.get('/student/:id', studentsController.getStudentById);
/*router.put('/student/:id', studentsController.updateStudent);
router.delete('/student/:id', studentsController.deleteStudent);*/


module.exports = router;