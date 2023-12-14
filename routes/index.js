var express = require('express');
var router = express.Router();

var Order = require("../model/orders")

var Assistant = require('../chatbot/index');
const assistant = new Assistant();
assistant.initializeChat();

/* GET home page. */
router.get('/', async function(req, res, next) {
  var query = req.query;
  const orderId = '657b20fb8f1d88f9d3647b58';
    const order = await Order.findById(orderId);
    console.log(order);

  const result = await assistant.sendMessage(query.msg);
  res.send(result);
});

module.exports = router;
