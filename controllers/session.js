const Session = require("../models/session");

// add a session
exports.addSession = async (req, res) => {
	const data = await Session.create(req.body);

	return res.status(200).json({
		success: true,
		message: "succesfully course added",
		data,
	});
};

// update the session
exports.updateSessions = async (req, res) => {
	const session = await Session.findById(req.params.id);

	if (!session) {
		res.status(500).json({
			success: false,
			message: "session not found",
		});
	}

	session = await Session.findByIdAndUpdate(req.params.id, req.body, req.body, {
		new: true,
		useFindAndModify: true,
		runValidators: true,
	});

	return res.status(200).json({
		success: true,
		message: "succesfully updated",
		session,
	});
};

// Get all the session for a course (paginated)
exports.getSessionsByCourse = async (req, res) => {
	const { page = 1, limit = 5 } = req.query;
	const session = await Session.find({
		course: req.params.course,
	})
		.limit(limit * 1)
		.skip((page - 1) * limit);

        // [postman use query param to get the pagination api done : page -> 1, limit -> 3]
	return res.status(200).json({
		success: true,
		message: "succesfully course added",
		session,
	});
};

// delete sessions
exports.removeSession = async (req, res) => {
	const session = await Session.findById(req.params.id);

	if (!session) {
		res.status(500).json({
			success: false,
			message: "session not found",
		});
	}

	await session.remove();

	return res.status(200).json({
		success: true,
		message: "session removed",
	});
};
