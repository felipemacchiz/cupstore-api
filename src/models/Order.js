const mongoose = require('mongoose');

const Orders = mongoose.model('orders', {
	totalPrice: Number,
	orderPrice: Number,
	shippingPrice: Number,
	items: Object,
	address: String,
	paid: Boolean,
	prepared: Boolean,
	sent: Boolean,
	delivered: Boolean,
	orderTime: String,
	paidTime: String,
	sentTime: String,
	deliveredTime: String,
	canceled: Boolean,
});

module.exports = Orders;