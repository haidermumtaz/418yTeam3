const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for polls
const PollSchema = new Schema({
  question: {
    type: String,
    required: true
  },
    field1: {
    type: String,
    required: true
  },
    field2: {
    type: String,
    required: true
  },
    field3: {
    type: String,
    required: false
  },
    field4: {
    type: String,
    required: false
  },
    field5: {
    type: String,
    required: false
  },
    field6: {
    type: String,
    required: false
  },
    field7: {
    type: String,
    required: false
  },
    field8: {
    type: String,
    required: false
  },
    field9: {
    type: String,
    required: false
  }
});

// Exports the module to be used
module.exports = Poll = mongoose.model("polls", PollSchema);