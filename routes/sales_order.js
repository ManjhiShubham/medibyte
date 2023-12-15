const express = require("express");
const router = express.Router();
const salesOrderController = require("../controllers/salesOrderController");

router.get("/sales_orders", salesOrderController.getSalesOrders);

router.get("/last_n_orders", salesOrderController.lastNOrders);

module.exports = router;
