const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
	{
		title: {
			type: "String",
			trim: true,
			required: true,
		},
		course: {
			type: "String",
			trim: true,
			required: true,
		},
		agenda: {
			type: "String",
			trim: true,
			required: true,
		},
		startTime: {
			type: "String",
			required: true,
			trim: true,
		},
		endTime: {
			type: "String",
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
