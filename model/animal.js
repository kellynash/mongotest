var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	type: String,
	name: String//ANIMAL SHOULD HAVE TYPE AND NAME
});

mongoose.model('Animal', animalSchema);