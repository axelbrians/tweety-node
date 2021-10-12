import TodoController from '../controllers/TodoController';
import express from 'express';

const TodoRoutes = express.Router();
const todoController = new TodoController()

TodoRoutes
    .route('/')
    .get(todoController.getAllTodos)
    .post(todoController.insertTodo);

export default TodoRoutes;