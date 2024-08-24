// models/Exercise.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  exercise_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  exercise_title: { type: String, required: true },
  lecture_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture', required: true },
  description: { type: String }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
