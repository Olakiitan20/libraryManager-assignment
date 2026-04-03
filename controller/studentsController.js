const student = require ("../models/students");

//createStudent
exports.createStudent = async (req, res) => {
    try {
        const student = await student.create(req.body);
        res.status(202).json({message: "Student created succesfully"});
    }
    catch (err) {
        res.status(400).json({message: "error occur"});
    }
};

//Get all Student
exports.getAllStudents = async (req, res) => {
    try {const students = await students.find() (req.body);
    res.status(200).json;
    }
    catch{
         return res.status(500).json ({message: "Students not found"});
    }
};

//Get one student

exports.getSingleStudent = async (req, res) => {
    const student = await 
    student.findById(req.params.id);
    if(!student) return res.status(405).send("Student not found");
    res.json(student)
};

//Update student

exports.updateStudent = async (req, res) => {
    const student = await
    student.findByIdAndUpdate(req.params.id, req.body,
        {new: true});
        res.json({message:"Student updated successfully"});
};

//Delete student

exports.deleteStudent = async (req, res) => {
    await author.findByIdAndDelete(req.params.id);
    res.send({message:"Author deleted succesfully"});
};