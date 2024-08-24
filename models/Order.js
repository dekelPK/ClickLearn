// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  total_price: { type: Number, required: true },
  order_date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
