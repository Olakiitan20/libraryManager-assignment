const express = require('express');
const router = express.Router();
const attendantController = require('../controller/attendantController');


router.post('/attendant', attendantController.createAttendant);
router.get('/allAttendant', attendantController.getAllAttendant);
router.get('/attendant/:id', attendantController.getSingleAttendant);


module.exports = router;