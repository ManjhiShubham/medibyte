var express = require("express");
var router = express.Router();

var Assistant = require("../chatbot/index");
const assistant = new Assistant();
assistant.initializeChat();

const intentApiController = require("../controllers/intentApiMappingController");
/* GET home page. */
router.get("/", async function (req, res, next) {
  var query = req.query;
  const result = await assistant.sendMessage(query.msg);
  const trimmedResult = result
    .replace(/`+/g, "")
    .replace(/^json/gi, "")
    .replace(/^js/gi, "")
    .trim();
  const jsonResponse = JSON.parse(trimmedResult);
  req.intent = trimmedResult;
  console.log(JSON.parse(req.intent).intent[0]);
  if (JSON.parse(req.intent).intent[0] === 'abstract') {
        res.send(jsonResponse.response);

  } else {
    console.log("hello");
    console.log(req.intent);
        await intentApiController(req, res);

  }
});

module.exports = router;
