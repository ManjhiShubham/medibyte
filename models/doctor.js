const mongoose = require("mongoose");

const Doctor = mongoose.model(
  "doctors",
  {
    doctor_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    department: { type: String, required: true },
    availability: {
      Monday: String,
      Tuesday: String,
      Wednesday: String,
      Thursday: String,
      Friday: String,
      Saturday: String,
      Sunday: String,
    },
  },
  "doctors"
);
module.exports = {Doctor};
