const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  // Описываем модель Page. То есть из чего состоит динамическая страница сайта.

  url: {
    // Адрес страницы является строкой. Он обязателен и должен быть уникальным.
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
    // У каждой страницы автоматически создаётся дата создания.
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Page", pageSchema);
