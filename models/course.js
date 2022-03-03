const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: 'String',
        trim: true,
        required: true,
    },
    coach: {
        type: 'String',
        trim: true,
        required: true,
    },
    desc: {
        type: 'String',
        trim: true,
        required: true,
    }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;