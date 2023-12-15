const mongoose = require("mongoose");

// Define the schema
const salesOrderItemSchema = new mongoose.Schema({
  _id: String,
  master_sku_name: String,
  id: Number,
  sales_order_id: Number,
  master_sku_id: Number,
  created_by_id: Number,
  last_updated_by_id: Number,
  product_name: String,
  quantity: Number,
  rate: Number,
  mrp: Number,
  gst_rate: Number,
  gst_amount: Number,
  cgst_rate: Number,
  cgst_amount: Number,
  igst_rate: Number,
  igst_amount: Number,
  net_amount: Number,
  total_amount: Number,
  total_tax_amount: Number,
  created_at: Date,
  updated_at: Date,
  unit_of_measurement: String,
  discount_rate: Number,
  free_quantity: Number,
});

// Create the model
const SalesOrderItem = mongoose.model("sales_order_items", salesOrderItemSchema, "sales_order_items");

// Export the model
module.exports = SalesOrderItem;
