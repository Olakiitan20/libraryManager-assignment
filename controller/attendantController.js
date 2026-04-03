const attendant = require ("../models/attendant");

//createAttendant
exports.createAttendant = async (req, res) => {
    try {
        const attendant = await attendant.create(req.body);
        res.status(202).json({message: "Attendant created succesfully"});
    }
    catch (err) {
        res.status(400).json({message: "error occur"});
    }
};

//Get all Attendant
exports.getAllAttendant = async (req, res) => {
    const attendants = await attendants.find() (req.body);
    res.json(attendants)
};

//Get one attendant

exports.getSingleAttendant = async (req, res) => {
    const attendant = await 
    attendant.findById(req.params.id);
    if(!attendant) return res.status(405).send("Attendant not found");
    res.json(attendant)
};

