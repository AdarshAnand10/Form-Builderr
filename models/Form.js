const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: String,
  questions: Array,
});

module.exports = mongoose.model('Form', formSchema);
