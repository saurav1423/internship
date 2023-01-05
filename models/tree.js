const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	left: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	friends: [
		{
			fname: String,
			fgender: String,
			fdob: String,
		},
	],
});

mongoose.model('Tree', userSchema);


{
	"_id": ObjectId,  // unique ID for the node
	"left": ObjectId,  // reference to the left child node
	"right": ObjectId,  // reference to the right child node
	"data": any  // data stored in the node
  }