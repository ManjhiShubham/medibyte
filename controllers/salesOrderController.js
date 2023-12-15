const path = require("path");
const rootDir = path.dirname(require.main.filename);
const User = require("../models/user");
const SalesOrder = require("../models/salesOrder");
const SalesOrderItem = require("../models/salesOrderItem");
require("dotenv").config();

module.exports.getSalesOrder = async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.id);
    console.log("orderId", orderId);
    if (isNaN(orderId)) {
      return res.status(400).send("Invalid order ID");
    }

    const order = await SalesOrder.findOne({ id: orderId });
    const orderItems = await SalesOrderItem.find({sales_order_id: orderId});
    if (order && orderItems) {
      res.json({order: order, orderItems: orderItems});
    } else {
      res.status(404).send("Order not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
