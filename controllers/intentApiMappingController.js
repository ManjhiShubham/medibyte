const path = require("path");
require("dotenv").config();


var getInentApiMapping = async (req, res, next) => {
  intent = req.intent
  res.send(intent)
};
module.exports = getInentApiMapping