const Student = require("../models/students");

// CREATE STUDENT
exports.createStudent = async (req, res) => {
  try {
    const { name, email, studentId } = req.body;

    // Validation
    if (!name || !email || !studentId) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Check duplicate email or studentId
    const existingStudent = await Student.findOne({
      $or: [{ email }, { studentId }]
    });

    if (existingStudent) {
      return res.status(400).json({
        message: "Student already exists"
      });
    }

    const student = await Student.create({
      name,
      email,
      studentId
    });

    res.status(201).json({
      message: "Student created successfully", 
      data: student
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



// GET ALL STUDENTS
exports.getAllStudents = async (req, res) => {
  try {const students = await Student.find();

    res.status(200).json({
      count: students.length,
      data: students
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



// GET SINGLE STUDENT
exports.getStudentById = async (req, res) => {
  try { const id = req.params
    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      data: student
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};