const mongoose = require('mongoose');

const Cupcakes = mongoose.model('cupcakes', {
	key: String,
	title: String,
	price: Number,
	description: String,
	img: String,
	ingredients: Array,
	rating: Number,
	comments: Array,
});

module.exports = Cupcakes;