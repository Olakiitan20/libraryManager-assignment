const express = require("express");
const router = express.Router();
const studentsController = require("../controller/studentsController");


router.post("/", studentsController.createStudent);
router.get("/", studentsController.getAllStudents);
router.get("/:id", studentsController.getSingleStudent);
router.put("/:id", studentsController.updateStudent);
router.delete("/:id", studentsController.deleteStudent);


module.exports = router;