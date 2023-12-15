const path = require("path");
const rootDir = path.dirname(require.main.filename);
const User = require("../models/user");
const SalesOrder = require("../models/salesOrder");
require("dotenv").config();

module.exports.getSalesOrders = async (req, res, next) => {
  try {
    // const buyer_party_id = parseInt(req.query.id);
    // if (isNaN(buyer_party_id)) {
    //   return res.status(400).send("Invalid order ID");
    // }
    const excludedStatuses = [
      "short_closed",
      "cancelled",
      "draft",
      "pre_draft",
    ];
    const specificBuyerPartyId = 91;
    const order = await SalesOrder.find({
      buyer_party_id: specificBuyerPartyId,
      status: { $nin: excludedStatuses },
    });
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

module.exports.lastNOrders = async (req, res, next) => {
  const specificBuyerPartyId = 91;
  const numberOfOrdersToRetrieve = JSON.parse(req.body.limit);
 

  SalesOrder.find({
    buyer_party_id: specificBuyerPartyId,
  })
    .sort({ order_date: -1 }) // Replace 'order_date' with your actual date field
    .limit(numberOfOrdersToRetrieve)
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.status(404).send("Order not found");
    });
};
