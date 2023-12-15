const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

router.get(
  "/check_availability",
  appointmentController.checkDoctorAvailability
);

module.exports = router;
