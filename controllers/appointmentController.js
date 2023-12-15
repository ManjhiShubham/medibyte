const path = require("path");
const rootDir = path.dirname(require.main.filename);
const { Doctor } = require("../models/doctor.js");
require("dotenv").config();

const checkDoctorAvailability = async (req, res) => {
  Doctor.find({
    department: req.query.department,
    [`availability.${req.query.day}`]: { $exists: true, $ne: null }, // checks if the doctor is available on the given day
  })
    .then((doctors) => {
      res.json(doctors);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

module.exports = { checkDoctorAvailability };
