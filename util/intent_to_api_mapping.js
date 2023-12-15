const mapping = {
  Order: {
    get_active_orders: {
      api: "/orders/sales_order"
    },
    get_last_n_orders: {
      api: "/orders/last_n_orders",
      key: 'past_days'
    },
    get_order_detail_by_id: {
      api: "/orders/sales_order",
      key: 'order_id'
    }
  }
};
module.exports= mapping