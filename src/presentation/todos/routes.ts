import { Router } from "express";
import { TodosController } from "./controller";

export class TodoRoutes {
    static get routes(): Router {

        const router = Router();
        const todoController = new TodosController();

        // router.get('/api/todos', (req, res) => todoController.getTodos(req, res)); Es lo mismo de la siguiente linea
        router.get('/', todoController.getTodos);
        router.get('/:id', todoController.getTodoById);
        router.post('/', todoController.createTodo);
        router.put('/:id', todoController.updateTodo);
        router.delete('/:id', todoController.deleteTodo);

        return router;
    }
}