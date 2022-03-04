const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema( 
	{
		name: {
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
		desc: {
			type: "String",
			trim: true,
		},
	},
	{ timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
