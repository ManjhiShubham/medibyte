const path = require("path");
const rootDir = path.dirname(require.main.filename);
const User = require("../models/user");
const SalesOrder = require("../models/salesOrder");
require("dotenv").config();

module.exports.getSalesOrder = async (req, res, next) => {
  try {
    const orderId = parseInt(req.query.id);
    console.log(orderId);
    if (isNaN(orderId)) {
      return res.status(400).send("Invalid order ID");
    }

    const order = await SalesOrder.findOne({ id: orderId });
    console.log(order);
    if (order) {
      res.json(order);
    } else {
      res.status(404).send("Order not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
