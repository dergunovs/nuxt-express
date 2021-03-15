const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true,
    required: true,
  },
  h1: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Page", pageSchema);
