import { NextFunction, Request, Response } from "express";
import { getRepository, getTreeRepository, Repository } from "typeorm";
import { Todo } from "../entity/Todo";


class TodoController {

    // private todoRepository: Repository<Todo>;

    // constructor() {
    //     this.todoRepository = getRepository(Todo, 'todolist');
    // }

    async getAllTodos(req: Request, res: Response, next: NextFunction): Promise<void> {
        
        try {
            const todos = await getRepository(Todo, 'todolist').find();
            console.log('All todos from db', todos)
            res.status(201).json({
                status: 201,
                message: "Ok",
                data: todos
            });
        } catch(err: unknown) {
            res.status(500).json({
                status: 500,
                message: "Server error",
            });
        }
    }

    async insertTodo(req: Request, res: Response, next: NextFunction): Promise<void> {

        const todo = new Todo();
        const { title, content } = req.body;
        todo.title = title;
        todo.content = content;

        try {
            await getRepository(Todo, 'todolist').save(todo);
            res.status(201).json({
                status: 201,
                message: "Ok",
                data: "new todo inserted"
            });
        } catch (err: unknown) {
            res.status(500).json({
                status: 500,
                message: "Server error",
            });
        }
    }

}

export default TodoController;