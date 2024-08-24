// models/Course.js
const mongoose = require('mongoose');

// הגדרת הסכמה של הקורסים כולל הרצאות
const courseSchema = new mongoose.Schema({
  course_name: { type: String, required: true },
  description: String,
  lectures: [String] // רשימת שמות ההרצאות עבור כל קורס
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
