const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:ramanuj@cluster0.5awwtbg.mongodb.net/");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todoModel = mongoose.model("todos", todoSchema);

module.exports = {
  todoModel: todoModel,
};
