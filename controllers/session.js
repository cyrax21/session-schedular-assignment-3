const Session = require("../models/session");

// add a session
exports.addSession = async (req, res) => {

    // store the startTime and endTime
    const [st, et] = [req.body.startTime, req.body.endTime];
	
    // try to map the data in Session collection and if collide return false, else true
    const output = await Session.find().map(
        function(session){
            for(let obj of session){
                    //st and et are current session time 
                    if((obj.startTime<=st&&obj.endTime>=et)||(obj.startTime<=st&&obj.endTime>=st)||(obj.startTime>=st&&obj.startTime<=et)){
                        return false;
                    }
            }
            return true;
        }
    );
    if(!output){
        return res.status(500).json({
            success: false,
            message: 'session is coliding!'
        }) 
    }
	const data = await Session.create(req.body);

	return res.status(200).json({
		success: true,
		message: "succesfully course added",
		data
	});
};

// update the session
exports.updateSessions = async (req, res) => {
	let session = await Session.findById(req.params.id);
    let [st, et] = [session.startTime, session.endTime];

    if(req.body.startTime){
        st = req.body.startTime; 
    }
    if(req.body.endTime){
        et = req.body.endTime; 
    }

    const output = await Session.find().map(
        function(session){
            for(let obj of session){
                    //st and et are current session time 
                    if((obj.startTime<=st&&obj.endTime>=et)||(obj.startTime<=st&&obj.endTime>=st)||(obj.startTime>=st&&obj.startTime<=et)){
                        return false;
                    }
            }
            return true;
        }
    );
    if(!output){
        return res.status(500).json({
            success: false,
            message: 'session is coliding!'
        })
    }

	if (!session) {
		res.status(500).json({
			success: false,
			message: "session not found",
		});
	}

	session = await Session.findByIdAndUpdate(req.params.id, req.body);

	return res.status(200).json({
		success: true,
		message: "succesfully updated",
		session
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
		session
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
