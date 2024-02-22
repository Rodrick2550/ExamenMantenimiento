import e from "express";
import { TaskEntity } from "../entities/task-entity";

export interface TaskRepository{
    createTask(task: TaskEntity): Promise<TaskEntity>;
    getTasks(id: string): Promise<TaskEntity>;
    updateTask(task: TaskEntity): Promise<TaskEntity>;
    deleteTask(id: string): Promise<TaskEntity>;
    listTasks(): Promise<TaskEntity[]>;
    
}