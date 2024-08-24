// models/Lecture.js
const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  lecture_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  lecture_title: { type: String, required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }]
});

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
