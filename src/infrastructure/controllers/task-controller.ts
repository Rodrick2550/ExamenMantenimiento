import {CreateTaskUseCase} from "../../application/create-task-use-case";
import {GetTaskUseCase} from "../../application/get-task-use-case";
import {UpdateTaskUseCase} from "../../application/update-task-use-case";
import {DeleteTaskUseCase} from "../../application/delete-task-use-case";
import {Request, Response} from "express";
import {ListTaskUseCase} from "../../application/list-task-use-case";
import {TaskInterface} from "../../domain/entities/interfaces/task-interface";

export class TaskController {
    constructor(readonly createTaskUseCase: CreateTaskUseCase, 
        readonly getTaskUseCase: GetTaskUseCase, readonly listTaskUseCase: ListTaskUseCase, 
        readonly updateTaskUseCase: UpdateTaskUseCase, readonly deleteTaskUseCase: DeleteTaskUseCase) {
    }

    async create(req: Request, res: Response) {
        const {content} = req.body;
        const task = await this.createTaskUseCase.execute(content, 'false');
        res.status(201).json(task);
    }

    async get(req: Request, res: Response) {
        const {id} = req.params;
        const task = await this.getTaskUseCase.execute(id);
        task ? res.status(200).json(task) : res.status(404).json({message: "Task not found"});
    }

    async list(req: Request, res: Response) {
        const tasks = await this.listTaskUseCase.execute('body');
        res.status(200).json(tasks);
    }

    async update(req: Request, res: Response) {
        const {id} = req.params;
        const {content, isDone} = req.body;
        const requestBody: TaskInterface = {
            id: "",
            title: content,
            description: "",
            status: isDone
        }
        const task = await this.updateTaskUseCase.execute(id, requestBody);
        task ? res.status(200).json(task) : res.status(404).json({message: "Task not found"});
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params;
        await this.deleteTaskUseCase.execute(id);
        res.status(204).json({message: "Task deleted"});
    }

}