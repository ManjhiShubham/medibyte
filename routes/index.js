var express = require('express');
var router = express.Router();

var Order = require("../model/orders")
const SalesOrder = require("../model/salesOrder")
const SalesorderItems = require("../model/salesOrderItem");

var Assistant = require('../chatbot/index');
const assistant = new Assistant();
assistant.initializeChat();

/* GET home page. */
router.get('/', async function(req, res, next) {
    var query = req.query;
    const orderId = '657b38a01a8e852d14928d89';
    const order = await SalesorderItems.find({id: parseInt(23727)});
    console.log(order);

  // const result = await assistant.sendMessage(query.msg);
  res.json(order);
});

module.exports = router;
