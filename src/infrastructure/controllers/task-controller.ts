import { CreateTaskUseCase } from "../../application/create-task-use-case";
import { DeleteTaskUseCase } from "../../application/delete-task-use-case";
import { ListTaskUseCase } from "../../application/list-task-use-case";
import { UpdateTaskUseCase } from "../../application/update-task-use-case";
import { TaskRepository } from "../../domain/repository/task-repository";
import { Request, Response } from "express";
import { GetTaskUseCase } from "../../application/get-task-use-case";


export class TaskController{
    static create: any;
    static list: any;
    static get: any;
    static update: any;
    static delete: any;
    constructor(readonly createTakeUseCase: CreateTaskUseCase, readonly getTaskUseCase: GetTaskUseCase, 
        readonly listTaskUseCase: ListTaskUseCase, 
        readonly updateTaskUseCase: UpdateTaskUseCase, readonly deleteTaskUseCase: DeleteTaskUseCase){}

        async create(req: Request, res: Response) {
            const {content} = req.body;
            const task = await this.createTakeUseCase.execute(content.title, content.description); 
            res.status(201).json(task);
        }  
        
        async list(req: Request, res: Response) {
            const tasks = await this.listTaskUseCase; // Fix: Pass an empty parameter to the execute method
            res.status(200).json(tasks);
        }

        async update(req: Request, res: Response) {
            const {id} = req.params;
            const {content} = req.body;
            const task = await this.updateTaskUseCase.execute(id, content); 
            if(!task) return res.status(404).json({message: "Task not found"});
            res.status(200).json(task);
        }

        async delete(req: Request, res: Response) {
            const {id} = req.params;
            await this.deleteTaskUseCase.execute(id);
            res.status(204).json();
        }
        
}       