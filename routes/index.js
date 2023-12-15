var express = require("express");
var router = express.Router();


var Assistant = require("../chatbot/index");
const assistant = new Assistant();
assistant.initializeChat();

/* GET home page. */
router.get("/", async function (req, res, next) {
  var query = req.query;
  const result = await assistant.sendMessage(query.msg);
  const trimmedResult = result.replace(/^json`+|`+/g, '').trim();
  const jsonResponse = JSON.parse(trimmedResult);
  console.log(jsonResponse);
  res.send(jsonResponse);
});


module.exports = router;
