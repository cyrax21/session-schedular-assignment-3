const express = require("express");
const {addCourse, updateCourse, getAllCourse, getCourseByName} = require("../controllers/course");
const router = express.Router();

// add course
router.post('/course', addCourse);

// update the course
router.patch('/course/:id', updateCourse);

// Get all the course
router.get('/course', getAllCourse);

// Get a course by name 
router.get('/course/:name', getCourseByName);

module.exports = router;