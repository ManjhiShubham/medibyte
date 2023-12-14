var express = require('express');
var router = express.Router();

var Order = require("../model/orders")
const SalesOrder = require("../model/salesOrders")

var Assistant = require('../chatbot/index');
const assistant = new Assistant();
assistant.initializeChat();

/* GET home page. */
router.get('/', async function(req, res, next) {
    var query = req.query;
    const orderId = '657b35d61a8e852d14918718';
    // const order = await SalesOrder.find({id: parseInt(23727)});
    // console.log(order);

  const result = await assistant.sendMessage(query.msg);
  res.json(result);
});

module.exports = router;
