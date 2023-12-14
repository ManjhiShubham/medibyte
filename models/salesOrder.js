const mongoose = require("mongoose");

const salesOrderSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  buyer_party_type: {
    type: String,
    required: true,
  },
  buyer_party_id: {
    type: Number,
    required: true,
  },
  branch_id: {
    type: Number,
    required: true,
  },
  created_by_id: {
    type: Number,
    required: true,
  },
  last_updated_by_id: {
    type: Number,
    required: true,
  },
  so_number: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  items_count: {
    type: Number,
    required: true,
  },
  total_quantity: {
    type: Number,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  total_net_amount: {
    type: Number,
    required: true,
  },
  total_tax_amount: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
  logistic_paid_by: {
    type: String,
    required: true,
  },
  so_date: {
    type: Date,
    required: true,
  },
  status_so_placed_mailer: {
    type: Boolean,
    required: true,
  },
  expected_delivery_date: {
    type: Date,
    required: true,
  },
  tenant_id: {
    type: Number,
    required: true,
  },
  aknamed_total_quantity: {
    type: Number,
    required: true,
  },
  po_total_amount: {
    type: Number,
    required: true,
  },
  priority_tag: {
    type: String,
    required: true,
  },
  prescription_date: {
    type: Date,
    required: true,
  },
  payer_party_id: {
    type: Number,
    required: true,
  },
  payer_party_type: {
    type: String,
    required: true,
  },
  payment_mode: {
    type: String,
    required: true,
  },
  reference_person: {
    type: String,
    required: true,
  },
  order_type_id: {
    type: Number,
    required: true,
  },
  payment_term: {
    type: String,
    required: true,
  },
  is_medigate_order: {
    type: Boolean,
    required: true,
  },
  urgent_order: {
    type: Boolean,
    required: true,
  },
  source_type: {
    type: String,
    required: true,
  },
  vaxicart_amount: {
    type: Number,
    required: true,
  },
  allow_near_expiry: {
    type: Boolean,
    required: true,
  },
  po_details: {
    type: Object,
    required: true,
  },
});

const SalesOrder = mongoose.model("sales_orders", salesOrderSchema);

module.exports = SalesOrder;
