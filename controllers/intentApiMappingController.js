const path = require("path");
const mapping = require('../util/intent_to_api_mapping')
const axios = require('axios');
require("dotenv").config();


var getInentApiMapping = async (req, res, next) => {
  intent = JSON.parse(req.intent);
  url_suffix = mapping[intent.intent[0]][intent.subIntent[0]].api
  console.log(mapping[intent.intent[0]][intent.subIntent[0]].api)
  console.log("intent", intent)
  console.log("so id", intent.params.order_id)
  so_id = intent.params[mapping[intent.intent[0]][intent.subIntent[0]].key]
  const result = await axios.get('http://localhost:3000'+url_suffix+"/"+so_id)
  res.send(result.data);
};
module.exports = getInentApiMapping