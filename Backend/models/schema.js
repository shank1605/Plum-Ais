var mongoose = require('mongoose');

var tableSchema = new mongoose.Schema({
	date: Date,
	description: String,
	debit:Number,
	credit:Number
});

module.exports = mongoose.model('Table',tableSchema);