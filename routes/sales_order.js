const express = require("express");
const router = express.Router();
const salesOrderController = require("../controllers/salesOrderController");

router.get("/sales_order/:id", salesOrderController.getSalesOrder);

module.exports = router;
