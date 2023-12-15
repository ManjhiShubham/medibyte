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
  console.log(typeof req.intent);
  if (!req.intent[0].intent in ["abstract", "generic"]) {
  } else {
    console.log("hello");
    await intentApiController(req, res);

    res.send(jsonResponse.response);
  }
});

module.exports = router;
