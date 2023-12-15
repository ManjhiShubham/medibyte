const express = require("express");
const router = express.Router();
const salesOrderController = require("../controllers/salesOrderController");

router.get("/last_n_orders/:days", salesOrderController.lastNOrders);
router.get("/sales_order/:id", salesOrderController.getSalesOrders);

module.exports = router;
