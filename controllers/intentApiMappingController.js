const path = require("path");
const mapping = require('../util/intent_to_api_mapping')
const axios = require('axios');
require("dotenv").config();


var getInentApiMapping = async (req, res, next) => {
  intent = JSON.parse(req.intent);
  url_suffix = mapping[intent.intent][intent.subIntent].api
  console.log(mapping[intent.intent][intent.subIntent].api)
  console.log("intent", intent)
  console.log("so id", intent.params.order_id)
  so_id = intent.params.order_id
  axios.get('http://localhost:3000'+url_suffix+"/"+so_id)
  .then(response => {
    console.log(response.data)
    res.send(response.data)
  })
  .catch(error => console.log(error))
};
module.exports = getInentApiMapping