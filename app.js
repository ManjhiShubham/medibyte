const express = require("express");

require("dotenv").config();

const cors = require("cors");

const db = require("./util/database");

const auth = require("./middleware/auth");

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.set("views", "views");

const botRoute = require("./routes/index");
const userRoutes = require("./routes/users");
const appointmentRoutes = require("./routes/appointment");

const salesOrderRoutes = require("./routes/sales_order");

const botRoutes = require("./routes/index");

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/appointment", appointmentRoutes);

app.use("/users", userRoutes);

app.use("/orders", salesOrderRoutes);

app.use("/", botRoutes);

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connection successfull");
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
