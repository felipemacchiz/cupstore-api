const mongoose = require('mongoose');

const Orders = mongoose.model('orders', {
	totalPrice: Number,
	orderPrice: Number,
	shippingPrice: Number,
	items: Object,
	address: String,
	distance: Number,
	duration: Number,
	paid: Boolean,
	canceled: Boolean,
	concluded: Boolean,
	orderTime: String,
	paidTime: String,
	canceledTime: String,
});

module.exports = Orders;