const express = require("express");
const router = express.Router();
const todoModel = require("../models/todoSchema");

/**
 * Path: /todos/ -> GET
 */
router.get("/", async (request, response) => {
  const todos = await todoModel.find({});

  response.json({
    status: true,
    data: todos,
    message: "Todo Fetched Successfully",
  });
});

/**
 * Path: /todos/ -> POST
 */
router.post("/", async (request, response) => {
  const requestBody = request.body;
  console.log("Request Data: ", requestBody);

  const newTodo = new todoModel({
    title: requestBody.title,
    description: requestBody.description,
    isCompleted: requestBody.isCompleted || false,
  });

  // Save todo object
  await newTodo.save();

  response.json({
    status: true,
    message: "Todo Added Successfully",
  });
});

/**
 * Path: /todos/:id -> PUT
 */
router.put("/:id", async (request, response) => {
  const id = request.params.id;
  const requestBody = request.body;

  console.log(
    `ID: ${id} and data which we need to update: ${JSON.stringify(
      requestBody,
      null,
      2
    )}`
  );

  const updatedTodo = await todoModel.findByIdAndUpdate(id, {
    isCompleted: requestBody.isCompleted,
  });

  response.json({
    status: true,
    message: "Todo Update Successfully",
    data: updatedTodo,
  });
});

/**
 * Path: /todos/:id -> DELETE
 */
router.delete("/:id", async (request, response) => {
  const id = request.params.id;

  console.log(
    `ID: ${id} and data which we need to delete entry from resource(DB, File, etc.)`
  );

  const deletedTodo = await todoModel.findByIdAndDelete(id);

  response.json({
    status: true,
    message: "Todo Deleted Successfully",
    data: deletedTodo,
  });
});

module.exports = router;
