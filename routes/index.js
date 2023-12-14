var express = require("express");
var router = express.Router();

const SalesOrder = require("../model/salesOrder");
const SalesorderItems = require("../model/salesOrderItem");

var Assistant = require("../chatbot/index");
const assistant = new Assistant();
assistant.initializeChat();

/* GET home page. */
router.get("/", async function (req, res, next) {
  var query = req.query;
  const result = await assistant.sendMessage(query.msg);
  res.json(result);
});

module.exports = router;
