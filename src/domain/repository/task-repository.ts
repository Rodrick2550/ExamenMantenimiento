import e from "express";
import { TaskEntity } from "../entities/task-entitie";

export interface TaskRepository{
    createTask(task: TaskEntity): Promise<TaskEntity>;
    getTaskById(id: string): Promise<TaskEntity>;
    getTasks(): Promise<TaskEntity[]>;
    updateTask(task: TaskEntity): Promise<TaskEntity>;
    deleteTask(id: string): Promise<TaskEntity>;
    
}