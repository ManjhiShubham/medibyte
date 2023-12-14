const { default: mongoose } = require("mongoose");

require("dotenv").config();

require("dotenv").config();
const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;
