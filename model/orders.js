const mongoose = require("mongoose");

const Order = mongoose.model('Orders', {
  _id: { type: mongoose.Types.ObjectId, required: true },
  customer_id: { type: Number, required: true },
  order_id: { type: Number, required: true },
  order_status: { type: String, required: true },
  order_placed_at: { type: Number, required: true },
  delivered_at: { type: Number, required: true },
  ucode: { type: String, required: true },
}, 'Orders');

module.exports = Order;