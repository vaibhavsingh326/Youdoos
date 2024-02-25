const TodoModel = require("../models/todos.model");
const auth = require("../middlewares/auth.middleware");
const todoRouter = require("express").Router()
const {getAllTodos,createTodo,updateTodo,deleteTodo} = require("../controller/todos.controller")


todoRouter.get("/all",auth,getAllTodos)
todoRouter.post("/create",auth,createTodo)
todoRouter.patch("/update/:id",auth,updateTodo)
todoRouter.delete("/delete/:id",auth,deleteTodo)


module.exports = todoRouter