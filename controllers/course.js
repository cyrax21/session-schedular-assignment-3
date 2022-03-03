const Course = require('../models/course');

// add course 
exports.addCourse = async(req, res) => {
    const data = await Course.create(req.body);

    return res.status(200).json({
        sucess: true,
        message : "succesfully course added",
        data
    })
}

exports.updateCourse = async(req, res) => {
    let updatedCourse = await Course.findById(req.params.id);
    if(!updatedCourse){
        res.status(500).json({
            success: false,
            message : "course not found"
        })
    }

    updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body);

	return res.status(200).json({
        success: true,
        updatedCourse
    });
}

exports.getAllCourse = async(req, res) => {
    const courses = await Course.find();
    return res.status(200).json({
        success: true,
        courses
    });
}

exports.getCourseByName = async(req, res) => {
    const courses = await Course.find({
        name: req.params.name
    });
    return res.status(200).json({
        success: true,
        courses
    });
}