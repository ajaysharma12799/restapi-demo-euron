const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    isCompleted: Boolean,
    // createdAt: Date,
    // updatedAt: Date,
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.model("todos", todoSchema);
module.exports = todoModel;
