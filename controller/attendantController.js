const Attendant = require ('../models/attendant');

//createAttendant
exports.createAttendant = async (req, res) => {
 try {
    const { name, staffId } = req.body;

    // Validation
    if (!name || !staffId) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Check duplicate email or studentId
    const existingAttendant = await Attendant.findOne({
      $or: [{ name }, { staffId }]
    });

    if (existingAttendant) {
      return res.status(400).json({
        message: "Attendant already exists"
      });
    }

    const attendant = await Attendant.create({
      name,
      staffId
    });

    res.status(201).json({
      message: "Attendant created successfully", 
      data: attendant
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


//Get all Attendant
exports.getAllAttendant = async (req, res) => {
    const attendants = await Attendants.find() (req.body);
    res.json(attendants)
};

//Get one attendant

exports.getSingleAttendant = async (req, res) => {
    const attendant = await 
    Attendant.findById(req.params.id);
    if(!attendant) return res.status(405).send("Attendant not found");
    res.json(attendant)
};

