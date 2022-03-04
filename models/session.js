const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
	{
		title: {
			type: "String",
			trim: true,
			required: true,
			unique: true,
		},
		coach: {
			type: "String",
			trim: true,
			required: true,
			unique: true,
		},
		agenda: {
			type: "String",
			trim: true,
			required: true,
			unique: true,
		},
		startTime: {
			type: "Date",
			required: true,
		},
		endTime: {
			type: "Date",
			required: true,
		},
	},
	{ timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
